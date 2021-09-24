var iguIconeIntersecaoSemaforizada = 'fa-circle-o';
var iguIconeIntersecaoNova = 'fa-circle';
var iguIconeIntersecaoSemSemaforo = 'fa-times';
var iguIconeIntersecaoSituacaoAdversa = 'fa-play fa-rotate-90';
var iguIconeRotatorias = 'fa-refresh';
var iguIconePlantaSemaforica = 'fa-battery-4 fa-rotate-90';
var iguIconePlantaSemaforica2 = '' + '<span class="fa-stack estilo-PlantaSemaforica">' + '<i class=\"fa fa-battery-4 fa-rotate-90 fa-stack-1x\"></i>' + '<i class="fa fa-ellipsis-v fa-stack-1x fa-inverse"></i>' + '</span>';
var iguQtIntersecaoSemaforizada = 0x0;
var iguQtIntersecaoNova = 0x0;
var iguQtIntersecaoSemSemaforo = 0x0;
var iguQtIntersecaoSituacaoAdversa = 0x0;
var iguQtRotatorias = 0x0;
var iguQtContagens = 0x0;
var iguQtPlantaSemaforica = 0x0;
var iguQtCirculacaoExistente = 0x0;
var iguQtCirculacaoProposta = 0x0;
var iguQtProjetosUrbanosEmAnalise = 0x0;
var iguQtProjetosUrbanosImplantados = 0x0;
var iguQtRotasDesempenho = 0x0;
var iguQtRotasCoordenacao = 0x0;
var iguQtRotasCorredor = 0x0;
var iguQtRedeCoordenacao = 0x0;
var iguQtRedeComunicacao = 0x0;
var iguQtRedeSemaforica = 0x0;
var iguQtRedeSemaforicaSub = 0x0;
var iguQtRedeInterligacao = 0x0;
$(document).ready(function () {
    $.get('/docs/Mapa/igu-RedeSemaforicaSub.geojson', function (_0x31df43) {
        var _0x33f66b = JSON.parse(_0x31df43);
        var _0x1cc344 = eval(_0x33f66b);
        var _0x4263d6 = _0x1cc344.features;
        var _0x806f08 = _0x4263d6;
        var _0x423a19 = _0x806f08.length;
        for (i = 0x0; i < _0x806f08.length; i++) {
            if (_0x806f08[i].properties.IGUCAMADA == 'RedeSub') {
                iguQtRedeSemaforicaSub++;
            };
        }
    });
    $.get('/docs/Mapa/igu-RedeSemaforica.geojson', function (_0x12d9e6) {
        var _0x2f64bc = JSON.parse(_0x12d9e6);
        var _0x6f9ade = eval(_0x2f64bc);
        var _0x4eaf81 = _0x6f9ade.features;
        var _0x178170 = _0x4eaf81;
        var _0x1934e9 = _0x178170.length;
        for (i = 0x0; i < _0x178170.length; i++) {
            if (_0x178170[i].properties.IGUCAMADA == 'RedeSemaforica') {
                iguQtRedeSemaforica++;
            };
        }
    });
    $.get('/docs/Mapa/igu-RedeInterligacao.geojson', function (_0x230a6a) {
        var _0xd20ddf = JSON.parse(_0x230a6a);
        var _0x46e6d3 = eval(_0xd20ddf);
        var _0x150ddf = _0x46e6d3.features;
        var _0x5cd936 = _0x150ddf;
        var _0x1f502a = _0x5cd936.length;
        for (i = 0x0; i < _0x5cd936.length; i++) {
            if (_0x5cd936[i].properties.IGUCAMADA == 'RedeInterligacao') {
                iguQtRedeInterligacao++;
            };
        }
    });
    $.get('/docs/Mapa/igu-' + 'Intersecoes.geojson', function (_0xafd672) {
        var _0x209c83 = JSON.parse(_0xafd672);
        var _0x1f27f3 = eval(_0x209c83);
        var _0x1d623c = _0x1f27f3.features;
        var _0x43c430 = _0x1d623c;
        var _0x43a85c = _0x43c430.length;
        for (i = 0x0; i < _0x43c430.length; i++) {
            if (_0x43c430[i].properties.BLOCKNAME == 'UNI_Principal' && _0x43c430[i].properties.OINTERSECAONUMERO != '') {
                iguQtPlantaSemaforica++;
            };
            if (_0x43c430[i].properties.BLOCKNAME == 'UNI_Principal' && _0x43c430[i].properties.OCONTAGEM == 'Sim') {
                iguQtContagens++;
            };
            if (_0x43c430[i].properties.BLOCKNAME == 'UNI_Principal' && _0x43c430[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtIntersecaoSemaforizada++;
            };
            if (_0x43c430[i].properties.IGUCAMADA == 'IntersecaoSituacaoAdversa' && _0x43c430[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtIntersecaoSituacaoAdversa++;
            };
            if (_0x43c430[i].properties.BLOCKNAME == 'IGU_Rotatoria' && _0x43c430[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtRotatorias++;
            };
        }
    });
    $.get('/docs/Mapa/igu-' + 'Circulacao.geojson', function (_0x1176bd) {
        var _0x534a85 = JSON.parse(_0x1176bd);
        var _0x38f9fb = eval(_0x534a85);
        var _0x4e3b44 = _0x38f9fb.features;
        var _0x5c25fb = _0x4e3b44;
        var _0x1cf3da = _0x5c25fb.length;
        for (i = 0x0; i < _0x5c25fb.length; i++) {
            if (_0x5c25fb[i].properties.IGUCAMADA == 'CirculacaoExistente') {
                iguQtCirculacaoExistente++;
            };
            if (_0x5c25fb[i].properties.IGUCAMADA == 'CirculacaoProposta') {
                iguQtCirculacaoProposta++;
            };
        }
    });
    $.get('/docs/Mapa/igu-ProjetosUrbanosImplantados.geojson', function (_0x252c62) {
        var _0x374117 = JSON.parse(_0x252c62);
        var _0x23eb50 = eval(_0x374117);
        var _0x13b6d4 = _0x23eb50.features;
        var _0x5cec87 = _0x13b6d4;
        var _0x22b272 = _0x5cec87.length;
        for (i = 0x0; i < _0x5cec87.length; i++) {
            if (_0x5cec87[i].properties.IGUCAMADA == 'ProjetosUrbanosImplantados') {
                iguQtProjetosUrbanosImplantados++;
            };
        }
    });
    $.get('/docs/Mapa/igu-' + 'RotasCoordenacao.geojson', function (_0x1334c8) {
        var _0x224eb3 = JSON.parse(_0x1334c8);
        var _0x53a2e4 = eval(_0x224eb3);
        var _0x267999 = _0x53a2e4.features;
        var _0x951e52 = _0x267999;
        var _0x4e8d2e = _0x951e52.length;
        for (i = 0x0; i < _0x951e52.length; i++) {
            if (_0x951e52[i].properties.IGUCAMADA == 'RotasCoordenacao') {
                iguQtRotasCoordenacao++;
            };
        }
    });
    $.get('/docs/Mapa/igu-RotasCorredores.geojson', function (_0x5f4a0b) {
        var _0x42b759 = JSON.parse(_0x5f4a0b);
        var _0x5eae08 = eval(_0x42b759);
        var _0x4101ab = _0x5eae08.features;
        var _0x9243d9 = _0x4101ab;
        var _0x25f2df = _0x9243d9.length;
        for (i = 0x0; i < _0x9243d9.length; i++) {
            if (_0x9243d9[i].properties.IGUCAMADA == 'RotasCorredor') {
                iguQtRotasCorredor++;
            };
        }
    });
    $.get('/docs/Mapa/igu-' + 'Intersecoes.geojson').done(function () {
        var _0x398c35 = icoRotatoria + ' Contagem Origem / Destino';
        $('#mn-Contagens').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-Rotatorias\"><i class=\"fa fa-fw fa-eye-slash iCheck\" aria-hidden=\"true\"></i> | ' + _0x398c35 + ' <span class="badge badge-pill badge-secondary">' + iguQtRotatorias + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">20</u>' + _0x398c35 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-' + 'Intersecoes.geojson').done(function () {
        var _0x361370 = icoContagem + ' Contagem em Cruzamento';
        $('#mn-Contagens').prepend('<a class="dropdown-item" href="#" id="bt-contagens"><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x361370 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtContagens + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">19</u>' + _0x361370 + '</p>');
        if (iguQtIntersecaoSituacaoAdversa > 0x0) {
            var _0x361370 = '<i class="fa fa-fw ' + iguIconeIntersecaoSituacaoAdversa + ' estilo-intersecoesSituacaoAdversa" aria-hidden="true"></i> <small>Interseção com Situação Adversa</small>';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSituacaoAdversa"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x361370 + ' <span class="badge badge-pill badge-secondary">' + iguQtIntersecaoSituacaoAdversa + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">18</u>&nbsp;&nbsp;&nbsp;' + _0x361370 + '</p>');
        }
        if (iguQtIntersecaoSemSemaforo > 0x0) {
            var _0x361370 = '<i class=\"fa fa-fw ' + iguIconeIntersecaoSemSemaforo + ' estilo-IntersecaoSemSemaforo" aria-hidden="true"></i> <small>Interseção sem Semáforo</small>';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSemSemaforo">&nbsp;&nbsp;&nbsp;<i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x361370 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtIntersecaoSemSemaforo + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">13</u>&nbsp;&nbsp;&nbsp;' + _0x361370 + '</p>');
        }
        if (iguQtIntersecaoNova > 0x0) {
            var _0x361370 = '<i class="fa fa-fw ' + iguIconeIntersecaoNova + ' estilo-IntersecaoSemaforizadaNova" aria-hidden="true"></i> <small>Inter. Semafor. Nova</small>';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSemaforizadaNova">&nbsp;&nbsp;&nbsp;<i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x361370 + ' <span class="badge badge-pill badge-secondary">' + iguQtIntersecaoNova + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">12</u>&nbsp;&nbsp;&nbsp;' + _0x361370 + '</p>');
        }
        if (iguQtIntersecaoSemaforizada > 0x0) {
            var _0x361370 = icoInterSema + '/' + icoInterConj + ' Interseção Semaforizada';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSemaforizada"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x361370 + ' <span class="badge badge-pill badge-secondary">' + iguQtIntersecaoSemaforizada + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">16</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-genderless ' + corInterNova + '\" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Semaforizada (Nova)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">15</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-genderless ' + corInterExisAdj + '\" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Semaforizada (Adjacente)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">14</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-genderless ' + corInterExis + '\" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Semaforizada (no Corredor)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">13</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-toggle-off " aria-hidden="true"></i>' + '&nbsp;<small>Interseção Conjugada</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">12</u>&nbsp;&nbsp;&nbsp;' + '<i class=\"fa fa-fw fa-circle-o \" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Principal</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">11</u>' + _0x361370 + '</p>');
        }
    }).fail(function () {});
    $.get('/docs/Mapa/igu-Intersecoes.geojson').done(function () {
        var _0xc56018 = iguIconePlantaSemaforica2 + ' Planta Semafórica Mapeada';
        $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-plantaSemaforica"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0xc56018 + ' <span class="badge badge-pill badge-secondary">' + iguQtPlantaSemaforica + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">02</u>' + _0xc56018 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-ProjetosUrbanosImplantados.geojson').done(function () {
        var _0x540325 = icoProjUrb + ' Projeto por Subtrecho';
        $('#mn-Projetos').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-projetosImplantados\"><i class=\"fa fa-fw fa-eye iCheck\" aria-hidden=\"true\"></i> | ' + _0x540325 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtProjetosUrbanosImplantados + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">51</u>' + _0x540325 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RedeInterligacao.geojson').done(function () {
        var _0x2bf7f3 = icoRedeEntCruz + ' Projeto por Interligação';
        $('#mn-Projetos').prepend('<a class="dropdown-item" href="#" id="bt-redesInterligacao"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x2bf7f3 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRedeInterligacao + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">52</u>' + _0x2bf7f3 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-' + 'RedeSemaforicaSub.geojson').done(function () {
        var _0x33f5c2 = icoSubRedeSemaf + ' Sub-rede Semafórica';
        $('#mn-Redes').prepend('<a class="dropdown-item" href="#" id="bt-redesSemaforicaSub"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x33f5c2 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRedeSemaforicaSub + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">42</u>' + _0x33f5c2 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-' + 'RedeSemaforica.geojson').done(function () {
        var _0x19ec63 = icoRedeSemaf + ' Rede Semafórica';
        $('#mn-Redes').prepend('<a class="dropdown-item" href="#" id="bt-redesSemaforica"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x19ec63 + ' <span class="badge badge-pill badge-secondary">' + iguQtRedeSemaforica + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">43</u>' + _0x19ec63 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RotasCoordenacao.geojson').done(function () {
        var _0x194423 = icoRotaCoord + ' Banda de Coordenação';
        $('#mn-Redes').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-rotasCoordenacao\"><i class=\"fa fa-fw fa-eye iCheck\" aria-hidden=\"true\"></i> | ' + _0x194423 + ' <span class="badge badge-pill badge-secondary">' + iguQtRotasCoordenacao + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">41</u>' + _0x194423 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-' + 'RotasCorredores.geojson').done(function () {
        var _0x582d79 = '<i class="fa fa-window-minimize estilo-RotasCorredor"></i>' + ' Corredor de Ônibus';
        $('#mn-Rotas').prepend('<a class="dropdown-item" href="#" id="bt-rotasCorredor"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x582d79 + ' <span class="badge badge-pill badge-secondary">' + iguQtRotasCorredor + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">22</u>' + _0x582d79 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-Circulacao.geojson').done(function () {
        if (iguQtCirculacaoExistente > 0x0) {
            var _0x550b09 = '<i class="fa fa-fw fa-long-arrow-up estilo-CirculacaoExistente" aria-hidden="true"></i> Sentido de Circulação Existente';
            $('#mn-Direcoes').prepend('<a class="dropdown-item" href="#" id="bt-direcoesExistente"><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x550b09 + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">91</u>' + _0x550b09 + '</p>');
        }
        if (iguQtCirculacaoProposta > 0x0) {
            var _0x550b09 = '<i class="fa fa-fw fa-long-arrow-up estilo-CirculacaoProposto" aria-hidden="true"></i> Sentido de Circulação Proposto';
            $('#mn-Direcoes').prepend('<a class="dropdown-item" href="#" id="bt-direcoesProposta" ><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x550b09 + ' <span class="badge badge-pill badge-secondary">' + iguQtCirculacaoProposta + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">92</u>' + _0x550b09 + '</p>');
        }
    }).fail(function () {});
    $.get('/docs/Mapa/igu-MunicipioLimites.geojson').done(function () {
        var _0x34d0e4 = '<i class=\"fa fa-fw fa-ellipsis-h \" aria-hidden=\"true\"></i> Limite Municipal';
    }).fail(function () {});
});
$(document).ready(function () {
    setTimeout(function () {
        $.getScript('/IGU/_160/js/_0x4a160f.js').done(function (_0x5be2e7, _0x9741a8, _0x3e0044) {}).fail(function (_0x5e6c0b, _0x1ad3aa, _0x288b5c) {});
    }, 0x8b1);
    setTimeout(function () {
        $.getScript('/IGU/_160/js/_0x4a160g.js').done(function (_0x5ad057, _0x5f1e9e, _0x364d24) {}).fail(function (_0x5c9c26, _0x399fbd, _0x9e8ebb) {});
    }, 0x9c4);
    setTimeout(function () {
        $('#iguConteudoSobreIGU').load('/IGU/_160/dat/igu-sobreIGU.dat', function () {});
        $('#iguConteudoSobreProjeto').load('/IGU/_160/dat/igu-sobreProjeto.dat', function () {});
    }, 0xabe);
});