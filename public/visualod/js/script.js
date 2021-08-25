let EstadoOrigens
let EstadoDestinos

document.addEventListener("DOMContentLoaded", async function(event) {
    // inicio variaveis globais ---------------------------------------------------------------  
    const nome_cidade = window.location.pathname.split('/').pop()
    const zoneamentogeoJson = await (await fetch(`/OD/zoneamento/${nome_cidade}`)).json()
    let od = await (await fetch(`/OD/dados/${nome_cidade}`)).json()
    const coordViewJson = await (await fetch(`/OD/coord/${nome_cidade}`)).json()
    const coordView = [coordViewJson[0], coordViewJson[1]]
    const zonas = await (await fetch(`/OD/origensedestinos/${nome_cidade}`)).json()
     EstadoOrigens = [...new Set(zonas.map(e => e._id))]
        .sort((a,b)=>a-b)
        .map(e => ({ origem: e, isSelected: false }));
     EstadoDestinos = [...new Set(zonas.map(e => e._id))]
        .sort((a,b)=>a-b)
        .map(e => ({ destino: e, isSelected: false }));
    const EstadoTipoPagamentos = [...new Set(od.map(e => e._id.TIPO_CARTAO))]
        .map(e => ({tiposCartao: e, isSelected: true }));
    const EstadoDatas = [...new Set(od.map(e => e._id.DATA_ORIGEM))]
        .sort((a,b)=>a>b)
        .map(e => ({ data: e, isSelected: true }));
    const EstadoDiaTipo = [{diaTipo: "DU", isSelected: false}, {diaTipo: "FDS", isSelected: false}];
    const intervalo = ["00:00", "23:59"];
    const EstadoHoraPico = [
        {picoDU: ["06:00", "07:00"], isSelected: false},
        {epDU: ["06:00", "07:00"], isSelected: false},
        {picoFDS: ["07:00", "08:00"], isSelected: false},
        {epFDS: ["07:00", "08:00"], isSelected: false},
    ];

    var ODFlow = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates":[]
        },
        "properties": {
            "origin_id": -1,
            "origin_lon": 0,
            "origin_lat": 0,
            "destination_id": -1,
            "destination_lon": 0,
            "destination_lat": 0
        }
    };
    var flowGeoJson = {};
    var fluxos;
    var zoneamentoLayer;

    const cor1Fluxo = 'rgb(8,81,156)';  // maior faixa
    const cor2Fluxo = 'rgb(49,130,189)';
    const cor3Fluxo = 'rgb(107,174,214)';
    const cor4Fluxo = 'rgb(158,202,225)';
    const cor5Fluxo = 'rgb(198,219,239)'; // menor faixa
    const corOrig = 'rgb(148, 85, 7)'
    const corDest = 'rgb(255,255,0)'
    const corOrigDest = 'rgb(0,255,255)'
    const corDesSelecionado = 'rgb(231, 206, 121)'
    const faixasPassageirosDia = calcFaixasPassDia();
    // fim variaveis globais ------------------------------------------------------------------

    // inicio estratificacao dos dados --------------------------------------------------------
    function calcFaixasPassDia () {
        nFluxos = EstadoOrigens.length*EstadoDestinos.length;
        qtddPass = od.map(e => e.QUANTIDADE_PASSAGEIROS).reduce((a,b) => a+b,0);
        mediaDiaPass = Math.round(qtddPass/nFluxos);
        return [
            {   
                min: 0, 
                max: Math.round(mediaDiaPass*0.2),
                cor: cor5Fluxo,
                largura: 6
            },
            {
                min: Math.round(mediaDiaPass*0.2),
                max: Math.round(mediaDiaPass*0.4),
                cor: cor4Fluxo,
                largura: 8
            },
            {
                min: Math.round(mediaDiaPass*0.4),
                max: Math.round(mediaDiaPass*0.6),
                cor: cor3Fluxo,
                largura: 10
            },
            {
                min: Math.round(mediaDiaPass*0.6), 
                max: Math.round(mediaDiaPass*0.8),
                cor: cor2Fluxo,
                largura: 12
            },
            {
                min: Math.round(mediaDiaPass*0.8), 
                max: Infinity,
                cor: cor1Fluxo,
                largura: 14
            }
        ]
    };
    // fim estratificacao dos dados -----------------------------------------------------------

    // carregando botoes de zonas origens pela 1a vez
    var rowOrigens = document.getElementById("row-origens");
    EstadoOrigens.forEach(
        e => rowOrigens.innerHTML += (
            `<div class="col-md-2 botao-zonas-container">
                <span class="btn-zonas btn-origens btn-filtro" type="button">
                    ${e.origem.toLocaleString('en-US', {
                        minimumIntegerDigits: 3,
                        useGrouping: false
                    })}
                </span>
            </div>`
        )
    );
    // carregando botoes de zonas destinos pela 1a vez
    var rowOrigens = document.getElementById("row-destinos");
    EstadoDestinos.forEach(
        e => rowOrigens.innerHTML += (
            `<div class="col-md-2 botao-zonas-container">
                <span class="btn-zonas btn-destinos btn-filtro" type="button">
                    ${e.destino.toLocaleString('en-US', {
                        minimumIntegerDigits: 3,
                        useGrouping: false
                    })}
                </span>
            </div>`
        )
    );
    // carregando botoes de zonas tipos de pagamento pela 1a vez
    var rowOrigens = document.getElementById("row-tipos-pagamento");
    EstadoTipoPagamentos.forEach(
        e => rowOrigens.innerHTML += (
            `<div class="col-md-12">
                <span class="btn-pagamentos btn-filtro btn-tipo-selected" type="button">
                    ${e.tiposCartao}
                </span>
            </div>`
        )
    );
    // pre configurando o date picker
    document.querySelectorAll(".data-periodo").forEach(e => {
        if (e.id ==="data-inicio") {
            e.value = EstadoDatas[0]?.data;
        } else {
            e.value = EstadoDatas[EstadoDatas.length - 1]?.data;
        };
        e.min = EstadoDatas[0]?.data;
        e.max = EstadoDatas[EstadoDatas.length-1]?.data;
    });
    // pre configurando o time picker
    document.querySelectorAll(".hora-periodo").forEach(e => {
        if (e.id ==="hora-inicio") {
            e.value = intervalo[0];
        } else {
            e.value = intervalo[1];
        };
    });
    // carregando o mapa
    const mymap = L.map('mapa', {zoomControl: false}).setView(coordView, 12);
    // trasladar o mapa
    var centerPoint = mymap.getSize().divideBy(2);
    var targetPoint = centerPoint.subtract([300, 0]);
    var targetLatLng = mymap.containerPointToLatLng(targetPoint);
    mymap.panTo(targetLatLng);
    // osm
    const OSMattribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    // const tileOSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    mymap.attributionControl.setPrefix(OSMattribution)
    const tileOSMUrl = 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
    const tileOSM = L.tileLayer(tileOSMUrl,{OSMattribution});
    tileOSM.addTo(mymap);
    
    // zoneamento com label
    if (zoneamentogeoJson) {
        zoneamentoLayer = L.geoJSON(zoneamentogeoJson, {
            
            style: {
                color: corDesSelecionado,
                fillColor: corDesSelecionado,
                dashArray: '10 5 10',
                interactive: false,
            },
            onEachFeature: (feature, layer) => {
                // layer._leaflet_id = feature.properties.Zona;
                layer.bindTooltip(
                    String(feature.properties.Zona.toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    })), 
                    {permanent: true, direction: 'center', className: 'zonasLabels'}
                );
            }
        }).addTo(mymap)
    }
    // barra de escala
    var scale = L.control.scale({imperial:false});
    scale.addTo(mymap);
    // legenda
    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (mymap) {
        var div = L.DomUtil.create('div', 'info legend');
        // titulo da legenda
        div.innerHTML += 
            `<h4 class="titulo-legenda">
                <i class="bi-people-fill"></i> Passageiros
            </h4>`
        // loop through intervals and generate a label with a colored square for each interval
        faixasPassageirosDia.forEach(e => {
            div.innerHTML +=
                `<div><i class="bi-square-fill" style="color: ${e.cor}"></i>
                    ${e.max != Infinity ? `${e.min + 1} - ${e.max}` : `&ge; ${e.min + 1}`}
                </div>`;
        })                
        return div;
    };
    legend.addTo(mymap);

    var labelDU = document.querySelectorAll(".btn-dia-tipo")[0];
    var checkDU = document.querySelectorAll(".ck-dia-tipo")[0];
    var labelFDS = document.querySelectorAll(".btn-dia-tipo")[1];
    var checkFDS = document.querySelectorAll(".ck-dia-tipo")[1];
    var labelHP = document.querySelectorAll(".btn-hora-pico")[0];
    var checkHP = document.querySelectorAll(".ck-hora-pico")[0];
    var labelEP = document.querySelectorAll(".btn-hora-pico")[1];
    var checkEP = document.querySelectorAll(".ck-hora-pico")[1];

    // inicio evento clique de filtro (origens, destinos, tipos pagamentos, DU/FDS, Todas/Limpar) -------
    async function clicarBtnFiltro (target){
        // mudar o estado dos botoes de zona
        if (target.classList.contains ("btn-origens") || target.classList.contains ("btn-destinos")) {
            // mudar o visual dos botoes de zona no click
            target.classList.toggle ("btn-zona-selected");
            const estadoO = EstadoOrigens.filter(e => e.origem == target.innerText)[0];
            const estadoD = EstadoDestinos.filter(e => e.destino == target.innerText)[0];
            if (target.classList.contains ("btn-origens")) {
                estadoO.isSelected = !estadoO.isSelected;
            } else {
                estadoD.isSelected = !estadoD.isSelected;
            };
            zoneamentoLayer.eachLayer (function(layer) {
                if (EstadoOrigens.filter(e => e.isSelected===true).map(e => e.origem).includes(layer.feature.properties.Zona) &&
                    EstadoDestinos.filter(e => e.isSelected===true).map(e => e.destino).includes(layer.feature.properties.Zona)){
                    layer.setStyle({fillColor: corOrigDest})
                } else if (EstadoOrigens.filter(e => e.isSelected===true).map(e => e.origem).includes(layer.feature.properties.Zona)){
                    layer.setStyle({fillColor: corOrig})
                } else if (EstadoDestinos.filter(e => e.isSelected===true).map(e => e.destino).includes(layer.feature.properties.Zona)){
                    layer.setStyle({fillColor: corDest})
                } else {
                    layer.setStyle({fillColor: corDesSelecionado})
                };
            })
        } else if (target.classList.contains ("btn-pagamentos")) {
            // mudar o visual dos botoes de tipo de pagamento no click
            target.classList.toggle ("btn-tipo-selected");
            const estado = EstadoTipoPagamentos.filter(e => e.tiposCartao == target.innerText)[0];   
            estado.isSelected = !estado.isSelected;
        } else if (target.classList.contains ("btn-dia-tipo")) {
            // mudar o visual dos botoes de dia tipo no click (mesma cara dos botoes de zona)
            target.classList.toggle ("btn-zona-selected");
            const estadoDT = EstadoDiaTipo.filter(e => e.diaTipo == target.innerText)[0];
            estadoDT.isSelected = !estadoDT.isSelected;
            if (labelHP.classList.contains ("btn-zona-selected") || labelEP.classList.contains ("btn-zona-selected")) {
                if (labelDU.classList.contains ("btn-zona-selected") && target.innerText === "FDS") {
                    checkDU.checked = false;
                    labelDU.classList.remove("btn-zona-selected");
                    EstadoDiaTipo[0].isSelected = false;
                } else if (labelFDS.classList.contains ("btn-zona-selected") && target.innerText === "DU") {
                    checkFDS.checked = false;
                    labelFDS.classList.remove("btn-zona-selected");
                    EstadoDiaTipo[1].isSelected = false;
                };
                atualizarSeletorIntervalo();
            };
        } else if (target.classList.contains ("btn-selecao-orig")) {
            EstadoOrigens.forEach(e => e.isSelected = true);
            document.querySelectorAll(".btn-origens").forEach(
                e => {
                    if (!e.classList.contains("btn-zona-selected")) {
                        e.classList.add("btn-zona-selected")
                    }
                }
            );
        } else if (target.classList.contains ("btn-selecao-dest")) {
            EstadoDestinos.forEach(e => e.isSelected = true);
            document.querySelectorAll(".btn-destinos").forEach(
                e => {
                    if (!e.classList.contains("btn-zona-selected")) {
                        e.classList.add("btn-zona-selected")
                    }
                }
            );
        } else if (target.classList.contains ("btn-selecao-tipo")) {
            EstadoTipoPagamentos.forEach(e => e.isSelected = true);
            document.querySelectorAll(".btn-pagamentos").forEach(
                e => {
                    if (!e.classList.contains("btn-tipo-selected")) {
                        e.classList.add("btn-tipo-selected")
                    }
                }
            );
        } else if (target.classList.contains ("btn-limpar-orig")) {
            EstadoOrigens.forEach(e => e.isSelected = false);
            document.querySelectorAll(".btn-origens").forEach(
                e => {
                    if (e.classList.contains("btn-zona-selected")) {
                        e.classList.remove("btn-zona-selected")
                    }
                }
            );
        } else if (target.classList.contains ("btn-limpar-dest")) {
            EstadoDestinos.forEach(e => e.isSelected = false);
            document.querySelectorAll(".btn-destinos").forEach(
                e => {
                    if (e.classList.contains("btn-zona-selected")) {
                        e.classList.remove("btn-zona-selected")
                    }
                }
            );
        } else if (target.classList.contains ("btn-limpar-tipo")) {
            EstadoTipoPagamentos.forEach(e => e.isSelected = false);
            document.querySelectorAll(".btn-pagamentos").forEach(
                e => {
                    if (e.classList.contains("btn-tipo-selected")) {
                        e.classList.remove("btn-tipo-selected")
                    }
                }
            );
        
        
        } else if (target.classList.contains ("btn-hora-pico")) {
            if (target.innerText === "HP") {
                // se hp nao estava selecionado
                if (!labelHP.classList.contains("btn-zona-selected")) {
                    // se DU e FDS esta selecionado
                    if (labelDU.classList.contains("btn-zona-selected") && labelFDS.classList.contains("btn-zona-selected")) {
                        // desativa o btn fds
                        labelFDS.click();
                        // ativa so a hora pico DU
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[0].isSelected = true;
                    } else if (labelDU.classList.contains("btn-zona-selected")) {
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[0].isSelected = !EstadoHoraPico[0].isSelected;
                    } else if (labelFDS.classList.contains("btn-zona-selected")) {
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[2].isSelected = !EstadoHoraPico[2].isSelected;
                    // se nenhum esta selecionado
                    } else {
                        // ativa o btn DU
                        labelDU.click();
                        // ativa so a hora pico DU
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[0].isSelected = true;

                    };
                    // desativa EP se estiver ativo
                    if (labelEP.classList.contains("btn-zona-selected")) {
                        checkEP.checked = false;
                        labelEP.classList.remove("btn-zona-selected");
                        EstadoHoraPico[1].isSelected = false;
                        EstadoHoraPico[3].isSelected = false;
                    };
                // se HP estava selecionado
                } else {
                    EstadoHoraPico[0].isSelected = false;
                    EstadoHoraPico[2].isSelected = false;
                };
                
            } else if (target.innerText === "EP") {
                // se ep nao estava selecionado
                if (!labelEP.classList.contains("btn-zona-selected")) {
                    // se DU e FDS esta selecionado
                    if (labelDU.classList.contains("btn-zona-selected") && labelFDS.classList.contains("btn-zona-selected")) {
                        // desativa o btn fds
                        labelFDS.click();
                        // ativa so a hora pico DU
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[1].isSelected = true;
                        
                    } else if (labelDU.classList.contains("btn-zona-selected")) {
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[1].isSelected = !EstadoHoraPico[1].isSelected;
                        
                    } else if (labelFDS.classList.contains("btn-zona-selected")) {
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[3].isSelected = !EstadoHoraPico[3].isSelected;
                        
                    // se nenhum esta selecionado
                    } else {
                        // ativa o btn DU
                        labelDU.click();
                        // ativa so o entre pico DU
                        EstadoHoraPico.forEach(e => e.isSelected = false);
                        EstadoHoraPico[1].isSelected = true;
                    };
                // se EP estava selecionado
                } else {
                    EstadoHoraPico[1].isSelected = false;
                    EstadoHoraPico[3].isSelected = false;
                };
                // desativa HP se estiver ativo
                if (labelHP.classList.contains("btn-zona-selected")) {
                    checkHP.checked = false;
                    labelHP.classList.remove("btn-zona-selected");
                    EstadoHoraPico[0].isSelected = false;
                    EstadoHoraPico[2].isSelected = false;
                };
            };
            // mudar o visual dos botoes de dia tipo no click (mesma cara dos botoes de zona)
            target.classList.toggle ("btn-zona-selected");
        };
        // recalcula a OD
        await buscarDadosOD();
        // plotar fluxos
        plotarFluxos();
        atualizarSeletorIntervalo();
        descreverFluxos();
    };
    var btnsOrig = document.querySelectorAll (".btn-filtro");
    for(let i=0 ; i < btnsOrig.length ; i++){
        btnsOrig[i].addEventListener ("click", e => clicarBtnFiltro(e.target));
    };
    // fim evento clique de filtro (origens, destinos, tipos pagamentos, DU/FDS, Todas/Limpar) ----------

    // inicio evento selecao de periodo ---------------------------------------------------
    function selecionarPeriodo () {
        var inicioSelecionado;
        var fimSelecionado;
        document.querySelectorAll(".data-periodo").forEach(e => {
            if (e.id ==="data-inicio") {
                if (e.value) {
                    inicioSelecionado = e.value;
                } else {
                    inicioSelecionado = EstadoDatas[0].data;
                    e.value = EstadoDatas[0].data;
                };
            } else {
                if (e.value) {
                    fimSelecionado = e.value;
                } else {
                    fimSelecionado = EstadoDatas[EstadoDatas.length - 1].data;
                    e.value = EstadoDatas[EstadoDatas.length - 1].data
                };
            };
        });
        EstadoDatas.forEach(e => e.isSelected = false);  // seta tudo como false
        EstadoDatas.forEach( function(e) {
            if (e.data >= inicioSelecionado && e.data <= fimSelecionado) {
                e.isSelected = true;
            }
        })
        // recalcula a OD
        buscarDadosOD();
        // plotar fluxos
        plotarFluxos();
        descreverFluxos();
    };
    var inputDatas = document.querySelectorAll (".data-periodo");
    for(let i=0 ; i < inputDatas.length ; i++) {
        inputDatas[i].addEventListener ("change", () => selecionarPeriodo());
    };
    // fim evento selecao de periodo ------------------------------------------------------

    // inicio selecao de intervalo --------------------------------------------------------
    function selecionarIntervalo () {
        var inicioSelecionado;
        var fimSelecionado;
        document.querySelectorAll(".hora-periodo").forEach(e => {
            if (e.id ==="hora-inicio") {
                if (e.value) {
                    inicioSelecionado = e.value;
                    intervalo[0] = e.value;
                } else {
                    inicioSelecionado = intervalo[0];
                    e.value = intervalo[0];
                };
            } else {
                if (e.value) {
                    fimSelecionado = e.value;
                    intervalo[1] = e.value;
                } else {
                    fimSelecionado = intervalo[1];
                    e.value = intervalo[1];
                };
            };
        });
        
        if (labelHP.classList.contains("btn-zona-selected")) {
            labelHP.click();
        } else if (labelEP.classList.contains("btn-zona-selected")) {
            labelEP.click();
        };
        // recalcula a OD
        buscarDadosOD();
        // plotar fluxos
        plotarFluxos();
        atualizarSeletorIntervalo();
        descreverFluxos();
    };
    function atualizarSeletorIntervalo () {
        if (labelDU.classList.contains("btn-zona-selected") && labelHP.classList.contains("btn-zona-selected")) {
            document.getElementById("hora-inicio").value = EstadoHoraPico[0].picoDU[0];
            document.getElementById("hora-fim").value = EstadoHoraPico[0].picoDU[1];
        } else if (labelDU.classList.contains("btn-zona-selected") && labelEP.classList.contains("btn-zona-selected")) {
            document.getElementById("hora-inicio").value = EstadoHoraPico[1].epDU[0];
            document.getElementById("hora-fim").value = EstadoHoraPico[1].epDU[1];
        } else if (labelFDS.classList.contains("btn-zona-selected") && labelHP.classList.contains("btn-zona-selected")) {
            document.getElementById("hora-inicio").value = EstadoHoraPico[2].picoFDS[0];
            document.getElementById("hora-fim").value = EstadoHoraPico[2].picoFDS[1];
        } else if (labelFDS.classList.contains("btn-zona-selected") && labelEP.classList.contains("btn-zona-selected")) {
            document.getElementById("hora-inicio").value = EstadoHoraPico[3].epFDS[0];
            document.getElementById("hora-fim").value = EstadoHoraPico[3].epFDS[1];
        } else {
            document.getElementById("hora-inicio").value = intervalo[0];
            document.getElementById("hora-fim").value = intervalo[1];
        };
        
    };
    var inputHorario = document.querySelectorAll (".hora-periodo");
    for(let i=0 ; i < inputDatas.length ; i++) {
        inputHorario[i].addEventListener ("change", () => selecionarIntervalo());
    };
    // fim selecao de intervalo -----------------------------------------------------------

    // inicio atualizar a url de filtro --------------------------------------------------------
    async function buscarDadosOD (){
        
        var origensSelecionadas = 
            EstadoOrigens
            .filter(e => e.isSelected===true)
            .map(e => e.origem)
            .sort((a,b)=>a-b);
        var destinosSelecionados = 
            EstadoDestinos
            .filter(e => e.isSelected===true)
            .map(e => e.destino)
            .sort((a,b)=>a-b);
        var pagamentosSelecionados = 
            EstadoTipoPagamentos
            .filter(e => e.isSelected===true)
            .map(e => e.tiposCartao)
            .sort((a,b)=>a-b);
        var datasSelecionadas = 
            EstadoDatas
            .filter(e => e.isSelected===true)
            .map(e => e.data)
            .sort((a,b)=>a>b);
        var diasTiposSelecionados = 
            EstadoDiaTipo
            .filter(e => e.isSelected===true)
            .map(e => e.diaTipo)

        if (diasTiposSelecionados.length === 0){
            diasTiposSelecionados = EstadoDiaTipo.map(e => e.diaTipo)
        };

        const queryString = encodeURI(
            `?origens=${origensSelecionadas.join()}&destinos=${destinosSelecionados.join()}&pagamentos=${pagamentosSelecionados.join()}&datas=${datasSelecionadas.join()}&dt=${diasTiposSelecionados.join()}`
        )
        
        od = await (await fetch(`/OD/dados/${nome_cidade}${queryString}`)).json()
        
        function ehDaFaixaHoraria (horaOD) {
            // se for hora pico
            if (EstadoHoraPico[0].isSelected === true || EstadoHoraPico[2].isSelected === true) {
                var intervaloPico = EstadoHoraPico.filter(e => e.isSelected === true)[0];
                if (intervaloPico.hasOwnProperty('picoDU')) {
                    intervaloPico = intervaloPico.picoDU;
                } else {
                    intervaloPico = intervaloPico.picoFDS;
                };
                if (horaOD > intervaloPico[0] && horaOD < intervaloPico[1]) {
                    return true;
                } else {
                    return false;
                };
            // se for entre pico
            } else if (EstadoHoraPico[1].isSelected === true || EstadoHoraPico[3].isSelected === true) {
                var intervaloEP = EstadoHoraPico.filter(e => e.isSelected === true)[0];
                if (intervaloEP.hasOwnProperty('epDU')) {
                    intervaloEP = intervaloEP.epDU;
                } else {
                    intervaloEP = intervaloEP.epFDS;
                };
                if (horaOD < intervaloEP[0] || horaOD > intervaloEP[1]) {
                    return true;
                } else {
                    return false;
                };
            } else {
                if (horario>intervalo[0] && horario<intervalo[1]) {
                    return true;
                } else {
                    return false;
                };
            };
        };
    };
    // fim atualizar a url de filtro -----------------------------------------------------------

    // inicio plotar fluxos ---------------------------------------------------------------
    function plotarFluxos () {
        function getCoordZona (numZona) {
            var coord;
            zoneamentoLayer.eachLayer (function(layer) {
                if (layer.feature.properties.Zona == numZona) {
                    coord = [layer.getBounds().getCenter()['lng'], layer.getBounds().getCenter()['lat']];
                };
            })
            return coord
        };
        // objeto json para plotar no mapa
        flowGeoJson = {
            "type": "FeatureCollection",
            "name": "Fluxos_Censitário_Atibaia",
            "crs": {
                "type": "name",
                "properties": {
                    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
            },
            "features": od.map(
                e => {
                    var origem = getCoordZona(e._id.ORIGEM);
                    var destino = getCoordZona(e._id.DESTINO);

                    return {
                        "type": "Feature",
                        "geometry": {
                        "type": "Point",
                        "coordinates": origem
                        },
                        "properties": {
                            "origin_id": e._id.ORIGEM,
                            "origin_lon": origem[0],
                            "origin_lat": origem[1],
                            "destination_id": e._id.DESTINO,
                            "destination_lon": destino[0],
                            "destination_lat": destino[1],
                            "passageiros": Math.round(e.QUANTIDADE_PASSAGEIROS)
                        }
                    }
                }
            ), 
        };

        if (fluxos) { fluxos.remove(); };
        fluxos = L.canvasFlowmapLayer(flowGeoJson, {
            pane: 'shadowPane',
            canvasBezierStyle: {
                type: 'classBreaks',
                field: 'passageiros',
                classBreakInfos: faixasPassageirosDia.map(e =>
                    ({
                        classMinValue: e.min,
                        classMaxValue: e.max,
                        symbol: {
                            strokeStyle: e.cor,
                            lineWidth: e.largura,
                            lineCap: 'round',
                            shadowColor: e.cor,
                            shadowBlur: 3.5
                        }
                    })
                ),
                // the layer will use the defaultSymbol if a data value doesn't fit
                // in any of the defined classBreaks
                defaultSymbol: {
                    strokeStyle: 'red',
                    lineWidth: 10,
                    lineCap: 'round',
                    shadowColor: 'red',
                    shadowBlur: 1.5
                },
            },
            animatedCanvasBezierStyle: {
                type: 'simple',
                symbol: {
                    // use canvas styling options (compare to CircleMarker styling below)
                    strokeStyle: 'rgb(255, 255, 255)',
                    lineWidth: 1.25,
                    lineDashOffsetSize: 4, // custom property used with animation sprite sizes
                    lineCap: 'round',
                    shadowColor: 'rgb(255, 255, 255)',
                    shadowBlur: 2
                }
            },
            pathDisplayMode: 'all',
            animationStarted: true,
            animationEasingFamily: 'Quadratic',
            animationEasingType: 'In',
            animationDuration: 1500,

        }).addTo(mymap);
    }
    function descreverFluxos () {
        var rowFluxos = document.querySelector(".linha-tb-fluxos");
        rowFluxos.innerHTML = '';
        od
            .sort((a, b) => b.QUANTIDADE_PASSAGEIROS - a.QUANTIDADE_PASSAGEIROS)
            .forEach(
                e => {
                    var origem = parseInt(e._id.ORIGEM).toLocaleString('en-US', 
                            {
                                minimumIntegerDigits: 3,
                                useGrouping: false
                            }
                        );
                    var destino = parseInt(e._id.DESTINO).toLocaleString('en-US', 
                            {
                                minimumIntegerDigits: 3,
                                useGrouping: false
                            }
                        );
        
                    rowFluxos.innerHTML += (
                        `<tr>
                            <td>${origem}</td>
                            <td>${destino}</td>
                            <td>${Math.round(e.QUANTIDADE_PASSAGEIROS)}</td>
                        </tr>` 
                    )
                }          
        )
    };
    // fim plotar fluxos ------------------------------------------------------------------
    
});


