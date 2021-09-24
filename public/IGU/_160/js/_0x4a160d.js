var alfab = {
    ' ': '_',
    'â': 'a',
    'Â': 'A',
    'à': 'a',
    'À': 'A',
    'á': 'a',
    'Á': 'A',
    'ã': 'a',
    'Ã': 'A',
    'ê': 'e',
    'Ê': 'E',
    'è': 'e',
    'È': 'E',
    'é': 'e',
    'É': 'E',
    'î': 'i',
    'Î': 'I',
    'ì': 'i',
    'Ì': 'I',
    'í': 'i',
    'Í': 'I',
    'õ': 'o',
    'Õ': 'O',
    'ô': 'o',
    'Ô': 'O',
    'ò': 'o',
    'Ò': 'O',
    'ó': 'o',
    'Ó': 'O',
    'ü': 'u',
    'Ü': 'U',
    'û': 'u',
    'Û': 'U',
    'ú': 'u',
    'Ú': 'U',
    'ù': 'u',
    'Ù': 'U',
    'ç': 'c',
    'Ç': 'C'
};

function removerAcentos(_0x5d7071) {
    return _0x5d7071.replace(/[\W\[\] ]/g, function (_0x30ccdd) {
        return alfab[_0x30ccdd] || _0x30ccdd;
    });
};
var corBug = 'igu-Bug';
var corInterExis = 'igu-InterExis';
var corInterNova = 'igu-InterNova';
var corInterExisAdj = 'igu-InterExisAdj';
var corInterExisSIm = 'igu-InterExisSIm';
var corInterSitAdve = 'igu-InterSitAdve';
var corInterIFDE = 'igu-InterExisFDE';
var corSemaforo = 'igu-Semaforo';
var corProjUrb = 'igu-ProjUrb';
var corCorredor = 'igu-Corredor';
var corAdjacente = 'igu-Adjacente';
var corSemInfluencia = 'igu-SemInfluencia';
var corForaMedicao = 'igu-ForaMedicao';
var corContagem = 'igu-Contagem';
var corContagem2 = 'igu-Contagem2';
var corInterligacao = 'igu-Interligacao';
var corRotaCoord = 'igu-RotasCoordenacao';
var corRotatoria = 'igu-Rotatoria';
var icoBug = '<i class=\"fa fa-fw fa-times\"        title=\"?\"></i>';
var icoInterSema = '<i class="fa fa-fw fa-circle-o"     title="Interseção Semaforizada (Principal)"></i>';
var icoInterPrin = '<i class=\"fa fa-fw fa-dot-circle-o\" title=\"Interseção Semaforizada (Principal)\"></i>';
var icoInterConj = '<i class="fa fa-fw fa-toggle-off"   title="Interseção Semaforizada (Conjugada)"></i>';
var icoInterIFDE = '<i class=\"fa fa-fw fa-ban\"          title=\"Interseção Isolada\"></i>';
var icoInterSitAdve = '<i class=\"fa fa-fw fa-play fa-rotate-90\" title=\"Interseção Situação Adversa\"></i>';
var icoCorredor = '<i class="fa fa-fw fa-minus"></i>';
var icoProjUrb = '<i class="fa fa-fw fa-sticky-note"></i>';
var icoDocumento = '<i class="fa fa-fw fa-file-text-o"></i>';
var icoSemaforo = '<i class=\"fa fa-ellipsis-v fa-lg\"></i>';
var icoSemaforo2 = '' + '<span class=\"fa-stack fa-1x  estilo-PlantaSemaforica\">' + '<i class="fa fa-battery-4 fa-rotate-90 fa-stack-1x"></i>' + '<i class="fa fa-ellipsis-v fa-stack-1x fa-inverse"></i>' + '</span>';
var icoRedeSemaf = '<i class="fa fa-fw fa-share-alt"></i>';
var icoSubRedeSemaf = '<i class="fa fa-fw fa-share-alt-square"></i>';
var icoRedeEletric = '<i class=\"fa fa-fw fa-flash\"></i>';
var icoRedeEntCruz = '<i class=\"fa fa-fw fa-lemon-o\"></i>';
var icoContagem = '<i class="fa fa-fw fa-video-camera" title="Contagem Veicular"></i>';
var icoRotaCoord = '<i class="fa fa-fw fa-ellipsis-h"></i>';
var icoRotatoria = '<i class="fa fa-fw fa-refresh"></i>';
var iguTags = ['Bug'];
var iguIconeCor = corBug;
var iguIntersecaoNumero = '';
var iguIconeEsq = '';
var iguIconeDir = '';
var testeRede;

function iguEstiloLinhas(_0x5014ec) {
    return {
        'color': _0x5014ec.properties.stroke,
        'weight': _0x5014ec.properties.strokeWidth,
        'opacity': _0x5014ec.properties.strokeOpacity,
        'dashArray': _0x5014ec.properties.dashArray,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloPoligonos(_0x42e102) {
    return {
        'color': _0x42e102.properties.stroke,
        'weight': _0x42e102.properties.strokeWidth,
        'opacity': _0x42e102.properties.strokeOpacity,
        'dashArray': _0x42e102.properties.dashArray,
        'fillColor': _0x42e102.properties.fill,
        'fillOpacity': _0x42e102.properties.fillOpacity,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloPoligonosProjetos(_0x1a05cc) {
    return {
        'color': '#6F8F8F',
        'weight': _0x1a05cc.properties.strokeWidth,
        'opacity': _0x1a05cc.properties.strokeOpacity,
        'dashArray': _0x1a05cc.properties.dashArray,
        'fillColor': '#6F8F8F',
        'fillOpacity': _0x1a05cc.properties.fillOpacity,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloLimites(_0x3114f3) {
    return {
        'color': '#d6acd0',
        'weight': 0x3,
        'opacity': 0.8,
        'dashArray': '20,15,10,10',
        'fillColor': '#d6acd0',
        'fillOpacity': 0.1,
        'fill': true,
        'clickable': true
    };
}
var testaRede = 'xxx';
var iguCamadaIntersecoes = L.geoJson(null, {
    'onEachFeature': function (_0x1dfd8, _0x3b63d7) {
        var _0x32de6a = '';
        if (_0x1dfd8.properties.BLOCKNAME == 'UNI_Principal') {
            var _0x431443 = _0x1dfd8.properties.OINTERSECAOSITUACAO;
        } else {
            var _0x431443 = 'error';
        }
        switch (_0x431443) {
        case 'IntersecaoNoCorredorSemaforizadaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterExis;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoNocorredorSemaforizadaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterExis;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoSemaforizadaNovaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterNova;
            iguInterDesc = 'Interseção Semaforizada (Nova)';
            break;
        case 'IntersecaoSemaforizadaNovaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterNova;
            iguInterDesc = 'Interseção Semaforizada (Nova)';
            break;
        case 'IntersecaoAdjacenteSemaforizadaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterExisAdj;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoAdjacenteSemaforizadaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterExisAdj;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoIsoladasForaDeEscopoSoPlantaSemaforica':
            iguIconeEsq = icoInterIFDE;
            iguIconeCor = corInterIFDE;
            iguInterDesc = 'Interseção Semaforizada sem Influência';
            break;
        case 'IntersecaoSituacaoAdversa':
            iguIconeEsq = icoInterSitAdve;
            iguIconeCor = corInterSitAdve;
            iguInterDesc = 'Interseção Situação Adversa';
            break;
        default:
            iguIconeEsq = icoBug;
            iguIconeCor = corBug;
            iguInterDesc = 'Error';
        }
        if (_0x1dfd8.properties.OREDE) {
            var _0x215de5 = _0x1dfd8.properties.OREDE;
            switch (_0x215de5.substring(0x0, 0x1)) {
            case 'C':
                _0x1023c4 = 'Central';
                break;
            case 'N':
                _0x1023c4 = 'Norte';
                break;
            case 'S':
                _0x1023c4 = 'Sul';
                break;
            case 'E':
                _0x1023c4 = 'Leste';
                break;
            case 'W':
                _0x1023c4 = 'Oeste';
                break;
            default:
                _0x1023c4 = '';
            }
        } else {
            var _0x1023c4 = '';
        }
        var _0x433298 = iguIconeEsq;
        var _0x5f5448 = _0x1dfd8.properties.OINTERSECAONUMERO;
        var _0x300ddf = '' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope=\"row\">' + 'Logradouro' + '</th>' + '      <td>' + _0x1dfd8.properties.OENDLOCALP + ' <br />' + _0x1dfd8.properties.OENDLOCALS + ' <br />' + _0x1dfd8.properties.OENDLOCALT + '      </td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Bairro | Zona' + '</th>' + '      <td>' + _0x1023c4 + '</td>' + '    </tr>' + '  </tbody>' + '</table>';
        if (_0x1dfd8.properties.OINTERLIGACAO != '') {
            var _0x68b2f1 = '' + '<a title="Ver Documentação..."href="/IGU_Documentacao?g=Projetos&i=' + _0x1dfd8.properties.OINTERLIGACAO + '&u=' + 'Projeto por Interligação" rel="noopener noreferrer" target="IGU_l-' + _0x1dfd8.properties.OINTERLIGACAO + '\">' + _0x1dfd8.properties.OINTERLIGACAO + '</a>';
        } else {
            var _0x68b2f1 = '';
        }
        var _0x51ef4f = '' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope=\"row\">' + 'Rede' + '</th>' + '      <td>' + _0x1023c4 + ' ( ' + _0x1dfd8.properties.OSUBREDE + ' )</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Interligação' + '</th>' + '      <td>' + _0x68b2f1 + '      </td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Modelo do Controlador' + '</th>' + '      <td>' + _0x1dfd8.properties.OCTRL + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'ID' + '</th>' + '      <td>' + _0x1dfd8.properties.OCTRLID + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Anel' + '</th>' + '      <td>' + _0x1dfd8.properties.OANELNUMERO + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Grupo' + '</th>' + '      <td>' + _0x1dfd8.properties.OGRUPONUMERO + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Característica de<br /> Instalação / Controle' + '</th>' + '      <td>' + _0x1dfd8.properties.OCTRLINSTALCONTROLE + '</td>' + '    </tr>' + '  </tbody>' + '</table>';
        var _0x175084 = '';
        var _0x5d11b7 = _0x1dfd8.properties.OOBS;
        if (_0x5d11b7?.length > 0x2) {
            _0x175084 = '      <li class="nav-item">' + '        <a class="nav-link" id="observacao-tab" data-toggle="tab" href="#observacao" role="tab" aria-controls="observacao" aria-selected="false">Observações</a>' + '      </li>';
        } else {
            _0x175084 = '';
        }
        var _0x16c405 = '';
        if (_0x1dfd8.properties.OCONTAGEM == 'Sim') {
            var _0xae1e9e = '          <a class="dropdown-item" href=\"/IGU_Documentacao?g=Intersecoes&i=' + _0x5f5448 + '&u=' + 'Contagens" rel="noopener noreferrer" target="IGU_c' + _0x5f5448 + '">Contagens...</a>';
        } else {
            var _0xae1e9e = '';
        }
        if (_0x1dfd8.properties.OINTERLIGACAO != '') {
            var _0x1b9a5e = '          <a class="dropdown-item" href=\"/IGU_Documentacao?g=Projetos&i=' + _0x1dfd8.properties.OINTERLIGACAO + '&u=' + 'Projetos por Interligação\" rel=\"noopener noreferrer\" target=\"IGU_cp' + _0x1dfd8.properties.OINTERLIGACAO + '">Projetos...</a>';
        } else {
            var _0x1b9a5e = '';
        }
        _0x32de6a = '' + '<div class="card ' + iguIconeCor + ' igu-Font80\" style=\"width: 19rem;\">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-selected=\"true\">Interseção</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class="nav-link" id="controlador-tab" data-toggle="tab" href="#controlador" role="tab" aria-controls="controlador" aria-selected="false">Controlador</a>' + '      </li>' + '      <li class="nav-item dropdown">' + '        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Documentação</a>' + '        <div class="dropdown-menu">' + '          <a class=\"dropdown-item\" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x5f5448 + '&u=' + 'Interseção" rel="noopener noreferrer" target="i">Interseção...</a>' + _0xae1e9e + _0x1b9a5e + '        </div>' + '      </li>' + _0x175084 + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x5f5448 + ' ' + _0x433298 + '</h5>' + '    <div class=\"tab-content\" id=\"myTabContent\">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + _0x300ddf + '</p>' + '      </div>' + '      <div class=\"tab-pane fade\" id=\"controlador\" role=\"tabpanel\" aria-labelledby=\"controlador-tab\">' + '        <p class="card-text">' + _0x51ef4f + '</p>' + '      </div>' + '      <div class="tab-pane fade" id="observacao" role="tabpanel" aria-labelledby="observacao-tab">' + '        <p class="card-text">' + _0x5d11b7 + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0x3b63d7.bindPopup(_0x32de6a);
        _0x3b63d7.bindTooltip(_0x433298 + iguInterDesc, {
            'sticky': true,
            'offset': [-0xa, 0x0],
            'direction': 'left'
        });
    },
    'pointToLayer': function (_0x2f0904, _0x129569) {
        switch (_0x2f0904.properties.OINTERSECAOSITUACAO) {
        case 'IntersecaoNoCorredorSemaforizadaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterExis;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoNocorredorSemaforizadaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterExis;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoSemaforizadaNovaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterNova;
            iguInterDesc = 'Interseção Semaforizada (Nova)';
            break;
        case 'IntersecaoSemaforizadaNovaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterNova;
            iguInterDesc = 'Interseção Semaforizada (Nova)';
            break;
        case 'IntersecaoAdjacenteSemaforizadaPrincipal':
            iguIconeEsq = icoInterSema;
            iguIconeCor = corInterExisAdj;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoAdjacenteSemaforizadaConjugado':
            iguIconeEsq = icoInterConj;
            iguIconeCor = corInterExisAdj;
            iguInterDesc = 'Interseção Semaforizada';
            break;
        case 'IntersecaoIsoladasForaDeEscopo_SoPlantaSemaforica':
            iguIconeEsq = icoInterIFDE;
            iguIconeCor = corInterIFDE;
            iguInterDesc = 'Interseção Semaforizada sem Influência';
            break;
        case 'RotatoriaSemaforizada':
            iguIconeEsq = icoRotatoria;
            iguIconeCor = 'igu-Ocultar';
            iguInterDesc = 'Contagem Origem/Destino';
            break;
        case 'IntersecaoSituacaoAdversa':
            iguIconeEsq = icoInterSitAdve;
            iguIconeCor = corInterSitAdve;
            iguInterDesc = 'Interseção Situação Adversa';
            break;
        default:
            iguIconeEsq = icoBug;
            iguIconeCor = corBug;
            iguInterDesc = 'Error';
        }
        if (_0x2f0904.properties.ONUMMEDICAO == '' || _0x2f0904.properties.ONUMMEDICAO == '-1' || _0x2f0904.properties.ONUMMEDICAO == '0') {
            iguIconeCor = iguIconeCor + ' igu-Ocultar';
        }
        return L.marker(_0x129569, {
            'icon': L.divIcon({
                'className': 'igu-Marca ' + iguIconeCor + ' a-class',
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x16, 0x16],
                'html': '<div class="igu-InterNum"><b>' + _0x2f0904.properties.OINTERSECAONUMERO + '</b></div>' + '<div class="igu-InterInf">' + iguIconeEsq + ' ' + iguIconeDir + '</div>'
            }),
            'zIndexOffset': 0x7da
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-Intersecoes.geojson', null, iguCamadaIntersecoes);
iguCamadaIntersecoes.addTo(map);
var iguCamadaRotatorias = L.geoJson(null, {
    'onEachFeature': function (_0x5d673d, _0x3af783) {
        switch (_0x5d673d.properties.BLOCKNAME) {
        case 'IGU_Rotatoria':
            var _0x4b55b4 = 'Contagem Origem/Destino';
            _0x3af783.bindTooltip(icoRotatoria + _0x4b55b4 + ': ' + _0x5d673d.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x18, -0x2],
                'direction': 'left'
            });
            break;
        default:
        }
        var _0x3562fc = '' + '<div class=\"card ' + corRotatoria + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">' + '      <li class=\"nav-item\">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Contagem Origem/Destino</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class=\"nav-link\" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x5d673d.properties.OINTERSECAONUMERO + '&u=' + 'ContagensOD\" rel=\"noopener noreferrer\" target=\"IGU_r' + _0x5d673d.properties.OINTERSECAONUMERO + '\">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class=\"card-title\">' + _0x5d673d.properties.OINTERSECAONUMERO + ' ' + icoRotatoria + '</h5>' + '    <div class=\"tab-content\" id=\"myTabContent\">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope="row">' + 'Logradouro' + '</th>' + '      <td>' + _0x5d673d.properties.OENDLOCALP + ' <br />' + _0x5d673d.properties.OENDLOCALS + ' <br />' + _0x5d673d.properties.OENDLOCALT + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '        </p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0x3af783.bindPopup(_0x3562fc);
    },
    'pointToLayer': function (_0x469feb, _0x30982c) {
        switch (_0x469feb.properties.BLOCKNAME) {
        case 'IGU_Rotatoria':
            var _0x335c81 = corRotatoria;
            var _0x137264 = icoRotatoria;
            if (_0x469feb.properties.ONUMMEDICAO == '' || _0x469feb.properties.ONUMMEDICAO == '-1' || _0x469feb.properties.ONUMMEDICAO <= '0') {
                var _0x48a54e = 'igu-Ocultar';
            } else {
                var _0x48a54e = '';
            }
            break;
        case 'UNI_Principal':
            _0x48a54e = 'igu-Ocultar';
        default:
            _0x48a54e = 'igu-Ocultar';
        }
        return L.marker(_0x30982c, {
            'icon': L.divIcon({
                'className': 'igu-Marca ' + _0x335c81 + ' a-class ' + _0x48a54e,
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x16, 0x16],
                'html': '<span class="' + _0x335c81 + '\">' + '<div class="igu-InterNum"><b>' + _0x469feb.properties.OINTERSECAONUMERO + '</b></div>' + '<div class=\"igu-InterInf\">' + _0x137264 + '</div>' + '</span>'
            }),
            'zIndexOffset': 0x7d9
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-Intersecoes.geojson', null, iguCamadaRotatorias);
var iguCamadaPlantaSemaforica = L.geoJson(null, {
    'onEachFeature': function (_0x2536d0, _0x322613) {
        switch (_0x2536d0.properties.OINTERSECAOSITUACAO) {
        case 'IntersecaoIsoladasForaDeEscopo_SoPlantaSemaforica':
            _0x322613.bindTooltip(icoSemaforo2 + 'Interseção Mapeada', {
                'sticky': true,
                'offset': [-0x4, 0x0],
                'direction': 'left'
            });
            break;
        default:
            _0x322613.bindTooltip(icoSemaforo2 + 'Interseção: ' + _0x2536d0.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x4, 0x0],
                'direction': 'left'
            });
        }
    },
    'pointToLayer': function (_0x534a1a, _0x44baa0) {
        switch (_0x534a1a.properties.OINTERSECAOSITUACAO) {
        case 'IntersecaoSemaforizadaNovaPrincipal':
            icoOcultar = 'igu-Ocultar';
            break;
        case 'IntersecaoSemaforizadaNovaConjugado':
            icoOcultar = 'igu-Ocultar';
            break;
        case 'RotatoriaSemaforizada':
            icoOcultar = 'igu-Ocultar';
            break;
        default:
            icoOcultar = '';
        }
        return L.marker(_0x44baa0, {
            'icon': L.divIcon({
                'className': corSemaforo + ' a-class ' + icoOcultar,
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0xa, 0x12],
                'html': '<div class="igu-Semaforo">' + icoSemaforo + '</div>'
            }),
            'zIndexOffset': 0x7d1
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-Intersecoes.geojson', null, iguCamadaPlantaSemaforica);
iguCamadaPlantaSemaforica.addTo(map);
var iguCamadaContagens = L.geoJson(null, {
    'onEachFeature': function (_0x4c9ffc, _0x577e2d) {
        switch (_0x4c9ffc.properties.OCONTAGEM) {
        case 'Sim':
            _0x577e2d.bindTooltip(icoContagem + 'Contagem: ' + _0x4c9ffc.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x18, -0x2],
                'direction': 'left'
            });
            break;
        default:
        }
        var _0x555c09 = '' + '<div class="card ' + corContagem2 + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Contagem</a>' + '      </li>' + '      <li class=\"nav-item\">' + '        <a class="nav-link" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x4c9ffc.properties.OINTERSECAONUMERO + '&u=' + 'Contagens" rel="noopener noreferrer" target="IGU_c' + _0x4c9ffc.properties.OINTERSECAONUMERO + '">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x4c9ffc.properties.OINTERSECAONUMERO + ' ' + icoContagem + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope="row">' + 'Logradouro' + '</th>' + '      <td>' + _0x4c9ffc.properties.OENDLOCALP + ' <br />' + _0x4c9ffc.properties.OENDLOCALS + ' <br />' + _0x4c9ffc.properties.OENDLOCALT + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '        </p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0x577e2d.bindPopup(_0x555c09);
    },
    'pointToLayer': function (_0x26aafb, _0x5d4e96) {
        switch (_0x26aafb.properties.OCONTAGEM) {
        case 'Sim':
            icoOcultar = '';
            break;
        default:
            icoOcultar = 'igu-Ocultar';
        }
        return L.marker(_0x5d4e96, {
            'icon': L.divIcon({
                'className': corContagem + ' a-class ' + icoOcultar,
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x38, 0x16],
                'html': '<div class="igu-Contagem">' + icoContagem + '</div>'
            }),
            'zIndexOffset': 0x7d0
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-Intersecoes.geojson', null, iguCamadaContagens);
var iguCamadaProjetosUrbanosImplantados = L.geoJson(null, {
    'style': iguEstiloPoligonosProjetos
}).on('error', function () {}).bindPopup(function (_0x3355d4) {
    return '' + '<div class=\"card ' + corProjUrb + ' igu-Font80\" style=\"width: 19rem;\">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Projeto por Subtrecho:</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class=\"nav-link\" href="/IGU_Documentacao?g=Projetos&i=' + _0x3355d4.feature.properties.IGUNOME + '&u=' + 'Projeto por Subtrecho" rel="noopener noreferrer" target="IGU_r' + _0x3355d4.feature.properties.IGUNOME + '\">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x3355d4.feature.properties.IGUNOME + ' ' + icoProjUrb + '</h5>' + '    <div class=\"tab-content\" id=\"myTabContent\">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class=\"card-text\">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
}).bindTooltip(function (_0x387498) {
    return icoProjUrb + 'Projeto por Subtrecho:&nbsp;' + _0x387498.feature.properties.IGUNOME;
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).on('dblclick', function () {});
omnivore.geojson('/docs/Mapa/igu-ProjetosUrbanosImplantados.geojson', null, iguCamadaProjetosUrbanosImplantados);
iguCamadaProjetosUrbanosImplantados.addTo(map);
var iguCamadaRedeSemaforica = L.geoJson(null, {
    'style': iguEstiloPoligonos
}).on('error', function () {}).bindTooltip(function (_0x1e8acd) {
    return icoRedeSemaf + 'Rede Semafórica:&nbsp;' + _0x1e8acd.feature.properties.IGUNOME + '&nbsp;&nbsp;';
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
});
omnivore.geojson('/docs/Mapa/igu-RedeSemaforica.geojson', null, iguCamadaRedeSemaforica);
iguCamadaRedeSemaforica.addTo(map);
var iguCamadaSubRedeSemaforica = L.geoJson(null, {
    'style': iguEstiloPoligonos
}).on('error', function () {}).bindTooltip(function (_0x2eae2e) {
    return icoSubRedeSemaf + 'Sub-rede Semafórica:&nbsp;' + _0x2eae2e.feature.properties.IGUNOME + '&nbsp;&nbsp;';
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
});
omnivore.geojson('/docs/Mapa/igu-RedeSemaforicaSub.geojson', null, iguCamadaSubRedeSemaforica);
iguCamadaSubRedeSemaforica.addTo(map);
var desativado = '';
var iguCamadaRedeInterligacao = L.geoJson(null, {
    'style': iguEstiloPoligonos,
    'onEachFeature': function (_0x2d97fc, _0x10c600) {
        if (_0x10c600.feature.properties.IGUMEDICAO != '0') {
            var _0x11d717 = '';
        } else {
            var _0x11d717 = 'Disabled';
        }
    }
}).on('error', function () {}).bindTooltip(function (_0x45381c) {
    return icoRedeEntCruz + 'Projeto por Interligação:&nbsp;' + _0x45381c.feature.properties.IGUNOME + '&nbsp;&nbsp;';
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).bindPopup(function (_0x1b54fc) {
    if (_0x1b54fc.feature.properties.IGUMEDICAO != '0' || _0x1b54fc.feature.properties.IGUMEDICAO != '-1' || _0x1b54fc.feature.properties.IGUMEDICAO != '') {
        var _0x3a94cf = '      <li class="nav-item">' + '        <a class="nav-link ' + desativado + '\" href="/IGU_Documentacao?g=Projetos&i=' + _0x1b54fc.feature.properties.IGUNOME + '&u=' + 'Projeto por Interligação" rel="noopener noreferrer" target="IGU_r' + _0x1b54fc.feature.properties.IGUNOME + '">Documentação</a>' + '      </li>' + '';
    } else {
        var _0x3a94cf = '';
    }
    return '' + '<div class=\"card ' + corInterligacao + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-selected=\"true\">Projeto por Interligação</a>' + '      </li>' + _0x3a94cf + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x1b54fc.feature.properties.IGUNOME + ' ' + icoRedeEntCruz + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
});
omnivore.geojson('/docs/Mapa/igu-RedeInterligacao.geojson', null, iguCamadaRedeInterligacao);
iguCamadaRedeInterligacao.addTo(map);
var iguCamadaRotasCoordenacao = L.geoJson(null, {
    'style': iguEstiloLinhas
}).bindPopup(function (_0x5e7989) {
    var _0x31db61 = removerAcentos(_0x5e7989.feature.properties.IGUNOME);
    return '' + '<div class=\"card ' + corRotaCoord + ' igu-Font80" style="width: 19rem;">' + '  <div class=\"card-header\">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Banda de Coordenação</a>' + '      </li>' + '      <li class=\"nav-item\">' + '        <a class=\"nav-link\" href=\"/IGU_Documentacao?g=Coordenacao&i=' + _0x31db61.split('.').join('') + '&u=' + 'Banda de Coordenação\" rel=\"noopener noreferrer\" target=\"IGU_r' + _0x31db61.split('.').join('') + '">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class=\"card-title\">' + _0x5e7989.feature.properties.IGUNOME + ' ' + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class=\"card-text\">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
}).bindTooltip(function (_0x5cbf1e) {
    return icoRotaCoord + '' + _0x5cbf1e.feature.properties.IGUNOME;
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).on('dblclick', function () {});
omnivore.geojson('/docs/Mapa/igu-RotasCoordenacao.geojson', null, iguCamadaRotasCoordenacao);
iguCamadaRotasCoordenacao.addTo(map);
var iguCamadaCirculacaoExistente = L.geoJson(null, {
    'filter': function (_0x299333, _0x347d14) {
        return _0x299333.properties.IGUCAMADA == 'CirculacaoExistente';
    },
    'pointToLayer': function (_0x364e6d, _0x40a9a3) {
        return L.marker(_0x40a9a3, {
            'rotationAngle': _0x364e6d.properties.OROTACAO,
            'rotationOrigin': 'center center',
            'icon': L.divIcon({
                'className': 'e-CE',
                'html': '<i class="fa fa-long-arrow-down"></i>',
                'iconSize': [0x6, 0xf],
                'iconAnchor': [0x3, 0x7],
                'popupAnchor': [0x0, 0x0]
            })
        });
    }
}).on('error', function () {});
omnivore.geojson('/docs/Mapa/igu-' + 'Circulacao.geojson', null, iguCamadaCirculacaoExistente);
var iguCamadaCorredores = L.geoJson(null, {
    'style': iguEstiloLinhas
});
omnivore.geojson('/docs/Mapa/igu-RotasCorredores.geojson', null, iguCamadaCorredores).on('error', function () {}).bindTooltip(function (_0x539fb3) {
    return icoCorredor + 'Corredor:&nbsp;' + _0x539fb3.feature.properties.IGUNOME.substring(0xc).split('_').join(' ');
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
});
iguCamadaCorredores.addTo(map);
var iguCamadaMunicipioLimites = L.geoJson(null, {
    'style': iguEstiloLimites
});
omnivore.geojson('/docs/Mapa/igu-MunicipioLimites.geojson', null, iguCamadaMunicipioLimites).on('error', function () {});
iguCamadaMunicipioLimites.addTo(map);
var baseMaps = {
    'Base Padrão': OpenStreetMap_Mapnik,
    'Base com Aerofotos': Esri_WorldImagery
};
var overlayMaps = {
    'Planta Semafórica': iguCamadaPlantaSemaforica,
    'Interseções': iguCamadaIntersecoes,
    'Rotas de Coordenação': iguCamadaRotasCoordenacao,
    'Corredores': iguCamadaCorredores,
    'Contagens': iguCamadaContagens,
    'Rotatórias': iguCamadaRotatorias,
    'Redes Semafóricas': iguCamadaRedeSemaforica,
    'Sub-redes Semafóricas': iguCamadaSubRedeSemaforica,
    'Rede de Interligação': iguCamadaRedeInterligacao,
    'Projetos Urbanos': iguCamadaProjetosUrbanosImplantados,
    'Circulação Existente': iguCamadaCirculacaoExistente,
    'Limite Municipal': iguCamadaMunicipioLimites
};
$(document).ready(function () {
    $.getScript('/IGU/_160/js/_0x4a160e.js').done(function (_0x589fe5, _0x33a96c, _0x181946) {}).fail(function (_0x2e12a7, _0x517e03, _0x45d6c5) {});
});