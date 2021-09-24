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

function removerAcentos(_0x2497d4) {
    return _0x2497d4.replace(/[\W\[\] ]/g, function (_0xdfa5d7) {
        return alfab[_0xdfa5d7] || _0xdfa5d7;
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
var icoBug = '<i class="fa fa-fw fa-times"        title="?"></i>';
var icoInterSema = '<i class="fa fa-fw fa-circle-o"     title="Interseção Semaforizada (Principal)"></i>';
var icoInterPrin = '<i class=\"fa fa-fw fa-dot-circle-o\" title=\"Interseção Semaforizada (Principal)\"></i>';
var icoInterConj = '<i class="fa fa-fw fa-toggle-off"   title="Interseção Semaforizada (Conjugada)"></i>';
var icoInterIFDE = '<i class=\"fa fa-fw fa-ban\"          title=\"Interseção Isolada\"></i>';
var icoInterSitAdve = '<i class="fa fa-fw fa-play fa-rotate-90" title="Interseção Situação Adversa"></i>';
var icoCorredor = '<i class="fa fa-fw fa-minus"></i>';
var icoProjUrb = '<i class="fa fa-fw fa-sticky-note"></i>';
var icoDocumento = '<i class="fa fa-fw fa-file-text-o"></i>';
var icoSemaforo = '<i class="fa fa-ellipsis-v fa-lg"></i>';
var icoSemaforo2 = '' + '<span class="fa-stack fa-1x  estilo-PlantaSemaforica">' + '<i class="fa fa-battery-4 fa-rotate-90 fa-stack-1x"></i>' + '<i class="fa fa-ellipsis-v fa-stack-1x fa-inverse"></i>' + '</span>';
var icoRedeSemaf = '<i class="fa fa-fw fa-share-alt"></i>';
var icoSubRedeSemaf = '<i class="fa fa-fw fa-share-alt-square"></i>';
var icoRedeEletric = '<i class="fa fa-fw fa-flash"></i>';
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

function iguEstiloLinhas(_0x41e3f0) {
    return {
        'color': _0x41e3f0.properties.stroke,
        'weight': _0x41e3f0.properties.strokeWidth,
        'opacity': _0x41e3f0.properties.strokeOpacity,
        'dashArray': _0x41e3f0.properties.dashArray,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloPoligonos(_0x4fba91) {
    return {
        'color': _0x4fba91.properties.stroke,
        'weight': _0x4fba91.properties.strokeWidth,
        'opacity': _0x4fba91.properties.strokeOpacity,
        'dashArray': _0x4fba91.properties.dashArray,
        'fillColor': _0x4fba91.properties.fill,
        'fillOpacity': _0x4fba91.properties.fillOpacity,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloPoligonosProjetos(_0x23e8ef) {
    return {
        'color': '#6F8F8F',
        'weight': _0x23e8ef.properties.strokeWidth,
        'opacity': _0x23e8ef.properties.strokeOpacity,
        'dashArray': _0x23e8ef.properties.dashArray,
        'fillColor': '#6F8F8F',
        'fillOpacity': _0x23e8ef.properties.fillOpacity,
        'fill': true,
        'clickable': true
    };
}

function iguEstiloLimites(_0x408005) {
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
    'onEachFeature': function (_0xc6e915, _0x5b06bd) {
        var _0x22de68 = '';
        if (_0xc6e915.properties.BLOCKNAME == 'UNI_Principal') {
            var _0x502dc4 = _0xc6e915.properties.OINTERSECAOSITUACAO;
        } else {
            var _0x502dc4 = 'error';
        }
        switch (_0x502dc4) {
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
        if (_0xc6e915.properties.OREDE != 0x0) {
            var _0xbd756a = _0xc6e915.properties.OREDE;
            switch (_0xbd756a.substring(0x0, 0x1)) {
            case 'C':
                _0x355ad4 = 'Central';
                break;
            case 'N':
                _0x355ad4 = 'Norte';
                break;
            case 'S':
                _0x355ad4 = 'Sul';
                break;
            case 'E':
                _0x355ad4 = 'Leste';
                break;
            case 'W':
                _0x355ad4 = 'Oeste';
                break;
            default:
                _0x355ad4 = '';
            }
        } else {
            var _0x355ad4 = '';
        }
        var _0x319069 = iguIconeEsq;
        var _0x5e3526 = _0xc6e915.properties.OINTERSECAONUMERO;
        var _0x521629 = '' + '<table class=\"table table-sm\">' + '  <tbody>' + '    <tr>' + '      <th scope="row">' + 'Logradouro' + '</th>' + '      <td>' + _0xc6e915.properties.OENDLOCALP + ' <br />' + _0xc6e915.properties.OENDLOCALS + ' <br />' + _0xc6e915.properties.OENDLOCALT + '      </td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Bairro | Zona' + '</th>' + '      <td>' + _0x355ad4 + '</td>' + '    </tr>' + '  </tbody>' + '</table>';
        if (_0xc6e915.properties.OINTERLIGACAO != '') {
            var _0x56f575 = '' + '<a title=\"Ver Documentação...\"href="/IGU_Documentacao?g=Projetos&i=' + _0xc6e915.properties.OINTERLIGACAO + '&u=' + 'Projeto por Interligação" rel="noopener noreferrer" target="IGU_l-' + _0xc6e915.properties.OINTERLIGACAO + '\">' + _0xc6e915.properties.OINTERLIGACAO + '</a>';
        } else {
            var _0x56f575 = '';
        }
        var _0x5bc42c = '' + '<table class=\"table table-sm\">' + '  <tbody>' + '    <tr>' + '      <th scope="row">' + 'Rede' + '</th>' + '      <td>' + _0x355ad4 + ' ( ' + _0xc6e915.properties.OSUBREDE + ' )</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Interligação' + '</th>' + '      <td>' + _0x56f575 + '      </td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Modelo do Controlador' + '</th>' + '      <td>' + _0xc6e915.properties.OCTRL + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'ID' + '</th>' + '      <td>' + _0xc6e915.properties.OCTRLID + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Anel' + '</th>' + '      <td>' + _0xc6e915.properties.OANELNUMERO + '</td>' + '    </tr>' + '    <tr>' + '      <th scope="row">' + 'Grupo' + '</th>' + '      <td>' + _0xc6e915.properties.OGRUPONUMERO + '</td>' + '    </tr>' + '    <tr>' + '      <th scope=\"row\">' + 'Característica de<br /> Instalação / Controle' + '</th>' + '      <td>' + _0xc6e915.properties.OCTRLINSTALCONTROLE + '</td>' + '    </tr>' + '  </tbody>' + '</table>';
        var _0x355ddc = '';
        var _0x13b542 = _0xc6e915.properties.OOBS;
        if (_0x13b542.length > 0x2) {
            _0x355ddc = '      <li class="nav-item">' + '        <a class="nav-link" id="observacao-tab" data-toggle="tab" href="#observacao" role="tab" aria-controls="observacao" aria-selected="false">Observações</a>' + '      </li>';
        } else {
            _0x355ddc = '';
        }
        var _0x3ebae6 = '';
        if (_0xc6e915.properties.OCONTAGEM == 'Sim') {
            var _0x206bfd = '          <a class="dropdown-item" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x5e3526 + '&u=' + 'Contagens\" rel=\"noopener noreferrer\" target=\"IGU_c' + _0x5e3526 + '">Contagens...</a>';
        } else {
            var _0x206bfd = '';
        }
        if (_0xc6e915.properties.OINTERLIGACAO != '') {
            var _0x434364 = '          <a class=\"dropdown-item\" href="/IGU_Documentacao?g=Projetos&i=' + _0xc6e915.properties.OINTERLIGACAO + '&u=' + 'Projetos por Interligação" rel="noopener noreferrer" target="IGU_cp' + _0xc6e915.properties.OINTERLIGACAO + '">Projetos...</a>';
        } else {
            var _0x434364 = '';
        }
        _0x22de68 = '' + '<div class="card ' + iguIconeCor + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Interseção</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class="nav-link" id="controlador-tab" data-toggle="tab" href="#controlador" role="tab" aria-controls="controlador" aria-selected="false">Controlador</a>' + '      </li>' + '      <li class=\"nav-item dropdown\">' + '        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Documentação</a>' + '        <div class="dropdown-menu">' + '          <a class=\"dropdown-item\" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x5e3526 + '&u=' + 'Interseção\" rel=\"noopener noreferrer\" target=\"i">Interseção...</a>' + _0x206bfd + _0x434364 + '        </div>' + '      </li>' + _0x355ddc + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class=\"card-title\">' + _0x5e3526 + ' ' + _0x319069 + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + _0x521629 + '</p>' + '      </div>' + '      <div class="tab-pane fade" id="controlador" role="tabpanel" aria-labelledby="controlador-tab">' + '        <p class="card-text">' + _0x5bc42c + '</p>' + '      </div>' + '      <div class="tab-pane fade" id="observacao" role="tabpanel" aria-labelledby="observacao-tab">' + '        <p class="card-text">' + _0x13b542 + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0x5b06bd.bindPopup(_0x22de68);
        _0x5b06bd.bindTooltip(_0x319069 + iguInterDesc, {
            'sticky': true,
            'offset': [-0xa, 0x0],
            'direction': 'left'
        });
    },
    'pointToLayer': function (_0x487a99, _0x3f398a) {
        switch (_0x487a99.properties.OINTERSECAOSITUACAO) {
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
        if (_0x487a99.properties.ONUMMEDICAO == '' || _0x487a99.properties.ONUMMEDICAO == '-1' || _0x487a99.properties.ONUMMEDICAO == '0') {
            iguIconeCor = iguIconeCor + ' igu-Ocultar';
        }
        return L.marker(_0x3f398a, {
            'icon': L.divIcon({
                'className': 'igu-Marca ' + iguIconeCor + ' a-class',
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x16, 0x16],
                'html': '<div class="igu-InterNum"><b>' + _0x487a99.properties.OINTERSECAONUMERO + '</b></div>' + '<div class="igu-InterInf">' + iguIconeEsq + ' ' + iguIconeDir + '</div>'
            }),
            'zIndexOffset': 0x7da
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-' + 'Intersecoes.geojson', null, iguCamadaIntersecoes);
iguCamadaIntersecoes.addTo(map);
var iguCamadaRotatorias = L.geoJson(null, {
    'onEachFeature': function (_0x21de6d, _0x562737) {
        switch (_0x21de6d.properties.BLOCKNAME) {
        case 'IGU_Rotatoria':
            var _0x32d38a = 'Contagem Origem/Destino';
            _0x562737.bindTooltip(icoRotatoria + _0x32d38a + ': ' + _0x21de6d.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x18, -0x2],
                'direction': 'left'
            });
            break;
        default:
        }
        var _0x14d389 = '' + '<div class="card ' + corRotatoria + ' igu-Font80\" style=\"width: 19rem;\">' + '  <div class="card-header">' + '    <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Contagem Origem/Destino</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class="nav-link" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x21de6d.properties.OINTERSECAONUMERO + '&u=' + 'ContagensOD" rel="noopener noreferrer" target="IGU_r' + _0x21de6d.properties.OINTERSECAONUMERO + '\">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x21de6d.properties.OINTERSECAONUMERO + ' ' + icoRotatoria + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope="row">' + 'Logradouro' + '</th>' + '      <td>' + _0x21de6d.properties.OENDLOCALP + ' <br />' + _0x21de6d.properties.OENDLOCALS + ' <br />' + _0x21de6d.properties.OENDLOCALT + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '        </p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0x562737.bindPopup(_0x14d389);
    },
    'pointToLayer': function (_0x277501, _0x5316cf) {
        switch (_0x277501.properties.BLOCKNAME) {
        case 'IGU_Rotatoria':
            var _0x1ac723 = corRotatoria;
            var _0x1060af = icoRotatoria;
            if (_0x277501.properties.ONUMMEDICAO == '' || _0x277501.properties.ONUMMEDICAO == '-1' || _0x277501.properties.ONUMMEDICAO <= '0') {
                var _0x3e22db = 'igu-Ocultar';
            } else {
                var _0x3e22db = '';
            }
            break;
        case 'UNI_Principal':
            _0x3e22db = 'igu-Ocultar';
        default:
            _0x3e22db = 'igu-Ocultar';
        }
        return L.marker(_0x5316cf, {
            'icon': L.divIcon({
                'className': 'igu-Marca ' + _0x1ac723 + ' a-class ' + _0x3e22db,
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x16, 0x16],
                'html': '<span class=\"' + _0x1ac723 + '\">' + '<div class=\"igu-InterNum\"><b>' + _0x277501.properties.OINTERSECAONUMERO + '</b></div>' + '<div class="igu-InterInf">' + _0x1060af + '</div>' + '</span>'
            }),
            'zIndexOffset': 0x7d9
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-Intersecoes.geojson', null, iguCamadaRotatorias);
var iguCamadaPlantaSemaforica = L.geoJson(null, {
    'onEachFeature': function (_0x2d1e11, _0x84502e) {
        switch (_0x2d1e11.properties.OINTERSECAOSITUACAO) {
        case 'IntersecaoIsoladasForaDeEscopo_SoPlantaSemaforica':
            _0x84502e.bindTooltip(icoSemaforo2 + 'Interseção Mapeada', {
                'sticky': true,
                'offset': [-0x4, 0x0],
                'direction': 'left'
            });
            break;
        default:
            _0x84502e.bindTooltip(icoSemaforo2 + 'Interseção: ' + _0x2d1e11.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x4, 0x0],
                'direction': 'left'
            });
        }
    },
    'pointToLayer': function (_0x5935bf, _0x43d303) {
        switch (_0x5935bf.properties.OINTERSECAOSITUACAO) {
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
        return L.marker(_0x43d303, {
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
    'onEachFeature': function (_0x5e7049, _0xe562e3) {
        switch (_0x5e7049.properties.OCONTAGEM) {
        case 'Sim':
            _0xe562e3.bindTooltip(icoContagem + 'Contagem: ' + _0x5e7049.properties.OINTERSECAONUMERO, {
                'sticky': true,
                'offset': [-0x18, -0x2],
                'direction': 'left'
            });
            break;
        default:
        }
        var _0x47ba89 = '' + '<div class="card ' + corContagem2 + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-selected=\"true\">Contagem</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class="nav-link" href="/IGU_Documentacao?g=Intersecoes&i=' + _0x5e7049.properties.OINTERSECAONUMERO + '&u=' + 'Contagens" rel="noopener noreferrer" target="IGU_c' + _0x5e7049.properties.OINTERSECAONUMERO + '\">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class=\"card-body bg-white\">' + '    <h5 class=\"card-title\">' + _0x5e7049.properties.OINTERSECAONUMERO + ' ' + icoContagem + '</h5>' + '    <div class=\"tab-content\" id=\"myTabContent\">' + '      <div class=\"tab-pane fade show active\" id=\"info\" role=\"tabpanel\" aria-labelledby=\"info-tab\">' + '        <p class="card-text">' + '<table class="table table-sm">' + '  <tbody>' + '    <tr>' + '      <th scope=\"row\">' + 'Logradouro' + '</th>' + '      <td>' + _0x5e7049.properties.OENDLOCALP + ' <br />' + _0x5e7049.properties.OENDLOCALS + ' <br />' + _0x5e7049.properties.OENDLOCALT + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '        </p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
        _0xe562e3.bindPopup(_0x47ba89);
    },
    'pointToLayer': function (_0x191279, _0x1a3b73) {
        switch (_0x191279.properties.OCONTAGEM) {
        case 'Sim':
            icoOcultar = '';
            break;
        default:
            icoOcultar = 'igu-Ocultar';
        }
        return L.marker(_0x1a3b73, {
            'icon': L.divIcon({
                'className': corContagem + ' a-class ' + icoOcultar,
                'popupAnchor': [0x0, -0x8],
                'iconSize': [0x38, 0x16],
                'html': '<div class=\"igu-Contagem\">' + icoContagem + '</div>'
            }),
            'zIndexOffset': 0x7d0
        });
    }
});
omnivore.geojson('/docs/Mapa/igu-' + 'Intersecoes.geojson', null, iguCamadaContagens);
var iguCamadaProjetosUrbanosImplantados = L.geoJson(null, {
    'style': iguEstiloPoligonosProjetos
}).on('error', function () {}).bindPopup(function (_0x326e1d) {
    return '' + '<div class=\"card ' + corProjUrb + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Projeto por Subtrecho:</a>' + '      </li>' + '      <li class="nav-item">' + '        <a class="nav-link" href="/IGU_Documentacao?g=Projetos&i=' + _0x326e1d.feature.properties.IGUNOME + '&u=' + 'Projeto por Subtrecho" rel="noopener noreferrer" target="IGU_r' + _0x326e1d.feature.properties.IGUNOME + '">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class=\"card-body bg-white\">' + '    <h5 class=\"card-title\">' + _0x326e1d.feature.properties.IGUNOME + ' ' + icoProjUrb + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
}).bindTooltip(function (_0x590f7f) {
    return icoProjUrb + 'Projeto por Subtrecho:&nbsp;' + _0x590f7f.feature.properties.IGUNOME;
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).on('dblclick', function () {});
omnivore.geojson('/docs/Mapa/igu-' + 'ProjetosUrbanosImplantados.geojson', null, iguCamadaProjetosUrbanosImplantados);
iguCamadaProjetosUrbanosImplantados.addTo(map);
var iguCamadaRedeSemaforica = L.geoJson(null, {
    'style': iguEstiloPoligonos
}).on('error', function () {}).bindTooltip(function (_0x3234bf) {
    return icoRedeSemaf + 'Rede Semafórica:&nbsp;' + _0x3234bf.feature.properties.IGUNOME + '&nbsp;&nbsp;';
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
});
omnivore.geojson('/docs/Mapa/igu-' + 'RedeSemaforica.geojson', null, iguCamadaRedeSemaforica);
iguCamadaRedeSemaforica.addTo(map);
var iguCamadaSubRedeSemaforica = L.geoJson(null, {
    'style': iguEstiloPoligonos
}).on('error', function () {}).bindTooltip(function (_0x51c873) {
    return icoSubRedeSemaf + 'Sub-rede Semafórica:&nbsp;' + _0x51c873.feature.properties.IGUNOME + '&nbsp;&nbsp;';
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
    'onEachFeature': function (_0x34b14c, _0xcf27d7) {
        if (_0xcf27d7.feature.properties.IGUMEDICAO != '0') {
            var _0x1a975b = '';
        } else {
            var _0x1a975b = 'Disabled';
        }
    }
}).on('error', function () {}).bindTooltip(function (_0x40d8fd) {
    return icoRedeEntCruz + 'Projeto por Interligação:&nbsp;' + _0x40d8fd.feature.properties.IGUNOME + '&nbsp;&nbsp;';
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).bindPopup(function (_0x2cebc6) {
    if (_0x2cebc6.feature.properties.IGUMEDICAO != '0' || _0x2cebc6.feature.properties.IGUMEDICAO != '-1' || _0x2cebc6.feature.properties.IGUMEDICAO != '') {
        var _0x459306 = '      <li class="nav-item">' + '        <a class="nav-link ' + desativado + '\" href=\"/IGU_Documentacao?g=Projetos&i=' + _0x2cebc6.feature.properties.IGUNOME + '&u=' + 'Projeto por Interligação" rel="noopener noreferrer" target="IGU_r' + _0x2cebc6.feature.properties.IGUNOME + '">Documentação</a>' + '      </li>' + '';
    } else {
        var _0x459306 = '';
    }
    return '' + '<div class=\"card ' + corInterligacao + ' igu-Font80" style="width: 19rem;">' + '  <div class="card-header">' + '    <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">' + '      <li class="nav-item">' + '        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\" aria-selected=\"true\">Projeto por Interligação</a>' + '      </li>' + _0x459306 + '    </ul>' + '  </div>' + '  <div class="card-body bg-white">' + '    <h5 class="card-title">' + _0x2cebc6.feature.properties.IGUNOME + ' ' + icoRedeEntCruz + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
});
omnivore.geojson('/docs/Mapa/igu-RedeInterligacao.geojson', null, iguCamadaRedeInterligacao);
iguCamadaRedeInterligacao.addTo(map);
var iguCamadaRotasCoordenacao = L.geoJson(null, {
    'style': iguEstiloLinhas
}).bindPopup(function (_0x3787f3) {
    var _0x3bb7a2 = removerAcentos(_0x3787f3.feature.properties.IGUNOME);
    return '' + '<div class="card ' + corRotaCoord + ' igu-Font80" style="width: 19rem;">' + '  <div class=\"card-header\">' + '    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">' + '      <li class="nav-item">' + '        <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Banda de Coordenação</a>' + '      </li>' + '      <li class=\"nav-item\">' + '        <a class="nav-link" href=\"/IGU_Documentacao?g=Coordenacao&i=' + _0x3bb7a2.split('.').join('') + '&u=' + 'Banda de Coordenação\" rel=\"noopener noreferrer\" target=\"IGU_r' + _0x3bb7a2.split('.').join('') + '">Documentação</a>' + '      </li>' + '    </ul>' + '  </div>' + '  <div class=\"card-body bg-white\">' + '    <h5 class="card-title">' + _0x3787f3.feature.properties.IGUNOME + ' ' + '</h5>' + '    <div class="tab-content" id="myTabContent">' + '      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">' + '        <p class="card-text">' + ' ' + '</p>' + '      </div>' + '    </div>' + '  </div>' + '</div>';
}).bindTooltip(function (_0x451ecb) {
    return icoRotaCoord + '' + _0x451ecb.feature.properties.IGUNOME;
}, {
    'sticky': true,
    'offset': [-0xa, 0x0],
    'direction': 'left'
}).on('dblclick', function () {});
omnivore.geojson('/docs/Mapa/igu-RotasCoordenacao.geojson', null, iguCamadaRotasCoordenacao);
iguCamadaRotasCoordenacao.addTo(map);
var iguCamadaCirculacaoExistente = L.geoJson(null, {
    'filter': function (_0x1f72ea, _0x43026a) {
        return _0x1f72ea.properties.IGUCAMADA == 'CirculacaoExistente';
    },
    'pointToLayer': function (_0x228687, _0x1ae739) {
        return L.marker(_0x1ae739, {
            'rotationAngle': _0x228687.properties.OROTACAO,
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
omnivore.geojson('/docs/Mapa/igu-Circulacao.geojson', null, iguCamadaCirculacaoExistente);
var iguCamadaCorredores = L.geoJson(null, {
    'style': iguEstiloLinhas
});
omnivore.geojson('/docs/Mapa/igu-RotasCorredores.geojson', null, iguCamadaCorredores).on('error', function () {}).bindTooltip(function (_0x20dc70) {
    return icoCorredor + 'Corredor:&nbsp;' + _0x20dc70.feature.properties.IGUNOME.substring(0xc).split('_').join(' ');
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
    $.getScript('/IGU/_160/js/_0x4a160e.js').done(function (_0x2dc63e, _0x3832fd, _0x33d4c1) {}).fail(function (_0x1544ee, _0x50e547, _0x1810f9) {});
});