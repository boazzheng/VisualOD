var iguIconeIntersecaoSemaforizada = 'fa-circle-o';
var iguIconeIntersecaoNova = 'fa-circle';
var iguIconeIntersecaoSemSemaforo = 'fa-times';
var iguIconeIntersecaoSituacaoAdversa = 'fa-play fa-rotate-90';
var iguIconeRotatorias = 'fa-refresh';
var iguIconePlantaSemaforica = 'fa-battery-4 fa-rotate-90';
var iguIconePlantaSemaforica2 = '' + '<span class="fa-stack estilo-PlantaSemaforica">' + '<i class="fa fa-battery-4 fa-rotate-90 fa-stack-1x"></i>' + '<i class="fa fa-ellipsis-v fa-stack-1x fa-inverse"></i>' + '</span>';
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
    $.getJSON('/docs/Mapa/igu-RedeSemaforicaSub.geojson', function (_0xe4309d) {
        var _0xc08f10 = _0xe4309d.features;
        var _0x3ef65a = _0xc08f10;
        var _0x25a527 = _0x3ef65a.length;
        for (i = 0x0; i < _0x3ef65a.length; i++) {
            if (_0x3ef65a[i].properties.IGUCAMADA == 'RedeSub') {
                iguQtRedeSemaforicaSub++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-RedeSemaforica.geojson', function (_0x4f0430) {
        var _0x17222f = _0x4f0430.features;
        var _0x5077a5 = _0x17222f;
        var _0x1912d0 = _0x5077a5.length;
        for (i = 0x0; i < _0x5077a5.length; i++) {
            if (_0x5077a5[i].properties.IGUCAMADA == 'RedeSemaforica') {
                iguQtRedeSemaforica++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-RedeInterligacao.geojson', function (_0x4a42ce) {
        var _0x1f0b00 = _0x4a42ce.features;
        var _0x1ca6d2 = _0x1f0b00;
        var _0x155da7 = _0x1ca6d2.length;
        for (i = 0x0; i < _0x1ca6d2.length; i++) {
            if (_0x1ca6d2[i].properties.IGUCAMADA == 'RedeInterligacao') {
                iguQtRedeInterligacao++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-Intersecoes.geojson', function (_0x1dd8b0) {
        var _0x15ba89 = _0x1dd8b0.features;
        var _0x34a50b = _0x15ba89;
        var _0x4a2e30 = _0x34a50b.length;
        for (i = 0x0; i < _0x34a50b.length; i++) {
            if (_0x34a50b[i].properties.BLOCKNAME == 'UNI_Principal' && _0x34a50b[i].properties.OINTERSECAONUMERO != '') {
                iguQtPlantaSemaforica++;
            };
            if (_0x34a50b[i].properties.BLOCKNAME == 'UNI_Principal' && _0x34a50b[i].properties.OCONTAGEM == 'Sim') {
                iguQtContagens++;
            };
            if (_0x34a50b[i].properties.BLOCKNAME == 'UNI_Principal' && _0x34a50b[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtIntersecaoSemaforizada++;
            };
            if (_0x34a50b[i].properties.IGUCAMADA == 'IntersecaoSituacaoAdversa' && _0x34a50b[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtIntersecaoSituacaoAdversa++;
            };
            if (_0x34a50b[i].properties.BLOCKNAME == 'IGU_Rotatoria' && _0x34a50b[i].properties.ONUMMEDICAO >= 0x1) {
                iguQtRotatorias++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-Circulacao.geojson', function (_0x4212f3) {
        var _0x5d67b5 = _0x4212f3.features;
        var _0x82af86 = _0x5d67b5;
        var _0x2925c6 = _0x82af86.length;
        for (i = 0x0; i < _0x82af86.length; i++) {
            if (_0x82af86[i].properties.IGUCAMADA == 'CirculacaoExistente') {
                iguQtCirculacaoExistente++;
            };
            if (_0x82af86[i].properties.IGUCAMADA == 'CirculacaoProposta') {
                iguQtCirculacaoProposta++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-ProjetosUrbanosImplantados.geojson', function (_0x1c673b) {
        var _0x2fd7dc = _0x1c673b.features;
        var _0xe9f879 = _0x2fd7dc;
        var _0x5b9b26 = _0xe9f879.length;
        for (i = 0x0; i < _0xe9f879.length; i++) {
            if (_0xe9f879[i].properties.IGUCAMADA == 'ProjetosUrbanosImplantados') {
                iguQtProjetosUrbanosImplantados++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-RotasCoordenacao.geojson', function (_0x3d92e0) {
        var _0x47cabd = _0x3d92e0.features;
        var _0x1d7ad1 = _0x47cabd;
        var _0x2ce183 = _0x1d7ad1.length;
        for (i = 0x0; i < _0x1d7ad1.length; i++) {
            if (_0x1d7ad1[i].properties.IGUCAMADA == 'RotasCoordenacao') {
                iguQtRotasCoordenacao++;
            };
        }
    });
    $.getJSON('/docs/Mapa/igu-RotasCorredores.geojson', function (_0x48ab3c) {
        var _0x3d921c = _0x48ab3c.features;
        var _0x249853 = _0x3d921c;
        var _0x306b68 = _0x249853.length;
        for (i = 0x0; i < _0x249853.length; i++) {
            if (_0x249853[i].properties.IGUCAMADA == 'RotasCorredor') {
                iguQtRotasCorredor++;
            };
        }
    });
    $.get('/docs/Mapa/igu-' + 'Intersecoes.geojson').done(function () {
        var _0x57aa14 = icoRotatoria + ' Contagem Origem / Destino';
        $('#mn-Contagens').prepend('<a class="dropdown-item" href="#" id="bt-Rotatorias"><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x57aa14 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRotatorias + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">20</u>' + _0x57aa14 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-Intersecoes.geojson').done(function () {
        var _0x13673a = icoContagem + ' Contagem em Cruzamento';
        $('#mn-Contagens').prepend('<a class="dropdown-item" href="#" id="bt-contagens"><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x13673a + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtContagens + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">19</u>' + _0x13673a + '</p>');
        if (iguQtIntersecaoSituacaoAdversa > 0x0) {
            var _0x13673a = '<i class="fa fa-fw ' + iguIconeIntersecaoSituacaoAdversa + ' estilo-intersecoesSituacaoAdversa" aria-hidden="true"></i> <small>Interseção com Situação Adversa</small>';
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">18</u>&nbsp;&nbsp;&nbsp;' + _0x13673a + '</p>');
        }
        if (iguQtIntersecaoSemSemaforo > 0x0) {
            var _0x13673a = '<i class="fa fa-fw ' + iguIconeIntersecaoSemSemaforo + ' estilo-IntersecaoSemSemaforo" aria-hidden="true"></i> <small>Interseção sem Semáforo</small>';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSemSemaforo">&nbsp;&nbsp;&nbsp;<i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x13673a + ' <span class="badge badge-pill badge-secondary">' + iguQtIntersecaoSemSemaforo + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">13</u>&nbsp;&nbsp;&nbsp;' + _0x13673a + '</p>');
        }
        if (iguQtIntersecaoNova > 0x0) {
            var _0x13673a = '<i class=\"fa fa-fw ' + iguIconeIntersecaoNova + ' estilo-IntersecaoSemaforizadaNova" aria-hidden="true"></i> <small>Inter. Semafor. Nova</small>';
            $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-intersecoesSemaforizadaNova">&nbsp;&nbsp;&nbsp;<i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x13673a + ' <span class="badge badge-pill badge-secondary">' + iguQtIntersecaoNova + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">12</u>&nbsp;&nbsp;&nbsp;' + _0x13673a + '</p>');
        }
        if (iguQtIntersecaoSemaforizada > 0x0) {
            var _0x13673a = icoInterSema + '/' + icoInterConj + ' Interseção Semaforizada';
            $('#mn-Intersecoes').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-intersecoesSemaforizada\"><i class=\"fa fa-fw fa-eye iCheck\" aria-hidden=\"true\"></i> | ' + _0x13673a + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtIntersecaoSemaforizada + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">16</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-genderless ' + corInterNova + '\" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Semaforizada (Nova)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">15</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-genderless ' + corInterExisAdj + '" aria-hidden="true"></i>' + '&nbsp;<small>Interseção Semaforizada (Adjacente)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">14</u>&nbsp;&nbsp;&nbsp;' + '<i class=\"fa fa-fw fa-genderless ' + corInterExis + '" aria-hidden="true"></i>' + '&nbsp;<small>Interseção Semaforizada (no Corredor)</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">13</u>&nbsp;&nbsp;&nbsp;' + '<i class="fa fa-fw fa-toggle-off \" aria-hidden=\"true\"></i>' + '&nbsp;<small>Interseção Conjugada</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">12</u>&nbsp;&nbsp;&nbsp;' + '<i class=\"fa fa-fw fa-circle-o " aria-hidden="true"></i>' + '&nbsp;<small>Interseção Principal</small>' + '</p>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">11</u>' + _0x13673a + '</p>');
        }
    }).fail(function () {});
    $.get('/docs/Mapa/igu-Intersecoes.geojson').done(function () {
        var _0x5f3862 = iguIconePlantaSemaforica2 + ' Planta Semafórica Mapeada';
        $('#mn-Intersecoes').prepend('<a class="dropdown-item" href="#" id="bt-plantaSemaforica"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x5f3862 + ' <span class="badge badge-pill badge-secondary">' + iguQtPlantaSemaforica + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">02</u>' + _0x5f3862 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-ProjetosUrbanosImplantados.geojson').done(function () {
        var _0x4b19f9 = icoProjUrb + ' Projeto por Subtrecho';
        $('#mn-Projetos').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-projetosImplantados\"><i class=\"fa fa-fw fa-eye iCheck\" aria-hidden=\"true\"></i> | ' + _0x4b19f9 + ' <span class="badge badge-pill badge-secondary">' + iguQtProjetosUrbanosImplantados + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">51</u>' + _0x4b19f9 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RedeInterligacao.geojson').done(function () {
        var _0x26be67 = icoRedeEntCruz + ' Projeto por Interligação';
        $('#mn-Projetos').prepend('<a class="dropdown-item" href="#" id="bt-redesInterligacao"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x26be67 + ' <span class="badge badge-pill badge-secondary">' + iguQtRedeInterligacao + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">52</u>' + _0x26be67 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RedeSemaforicaSub.geojson').done(function () {
        var _0x1cea72 = icoSubRedeSemaf + ' Sub-rede Semafórica';
        $('#mn-Redes').prepend('<a class="dropdown-item" href="#" id="bt-redesSemaforicaSub"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x1cea72 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRedeSemaforicaSub + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">42</u>' + _0x1cea72 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RedeSemaforica.geojson').done(function () {
        var _0x121ceb = icoRedeSemaf + ' Rede Semafórica';
        $('#mn-Redes').prepend('<a class="dropdown-item" href="#" id="bt-redesSemaforica"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x121ceb + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRedeSemaforica + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class=\"numeroLegenda\">43</u>' + _0x121ceb + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RotasCoordenacao.geojson').done(function () {
        var _0x31a6de = icoRotaCoord + ' Banda de Coordenação';
        $('#mn-Redes').prepend('<a class="dropdown-item" href="#" id="bt-rotasCoordenacao"><i class="fa fa-fw fa-eye iCheck" aria-hidden="true"></i> | ' + _0x31a6de + ' <span class="badge badge-pill badge-secondary">' + iguQtRotasCoordenacao + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">41</u>' + _0x31a6de + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-RotasCorredores.geojson').done(function () {
        var _0x12a5b2 = '<i class="fa fa-window-minimize estilo-RotasCorredor"></i>' + ' Corredor de Ônibus';
        $('#mn-Rotas').prepend('<a class=\"dropdown-item\" href=\"#\" id=\"bt-rotasCorredor\"><i class=\"fa fa-fw fa-eye iCheck\" aria-hidden=\"true\"></i> | ' + _0x12a5b2 + ' <span class=\"badge badge-pill badge-secondary\">' + iguQtRotasCorredor + '</span>' + '</a>');
        $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">22</u>' + _0x12a5b2 + '</p>');
    }).fail(function () {});
    $.get('/docs/Mapa/igu-Circulacao.geojson').done(function () {
        if (iguQtCirculacaoExistente > 0x0) {
            var _0x581ad9 = '<i class="fa fa-fw fa-long-arrow-up estilo-CirculacaoExistente" aria-hidden="true"></i> Sentido de Circulação Existente';
            $('#mn-Direcoes').prepend('<a class="dropdown-item" href="#" id="bt-direcoesExistente"><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x581ad9 + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">91</u>' + _0x581ad9 + '</p>');
        }
        if (iguQtCirculacaoProposta > 0x0) {
            var _0x581ad9 = '<i class=\"fa fa-fw fa-long-arrow-up estilo-CirculacaoProposto\" aria-hidden=\"true\"></i> Sentido de Circulação Proposto';
            $('#mn-Direcoes').prepend('<a class="dropdown-item" href="#" id="bt-direcoesProposta" ><i class="fa fa-fw fa-eye-slash iCheck" aria-hidden="true"></i> | ' + _0x581ad9 + ' <span class="badge badge-pill badge-secondary">' + iguQtCirculacaoProposta + '</span>' + '</a>');
            $('#iguConteudoLegenda').append('<p><u class="numeroLegenda">92</u>' + _0x581ad9 + '</p>');
        }
    }).fail(function () {});
    $.get('/docs/Mapa/igu-' + 'MunicipioLimites.geojson').done(function () {
        var _0x31341f = '<i class="fa fa-fw fa-ellipsis-h " aria-hidden="true"></i> Limite Municipal';
    }).fail(function () {});
});
$(document).ready(function () {
    setTimeout(function () {
        $.getScript('/IGU/_160/js/_0x4a160f.js').done(function (_0x697219, _0x4276ef, _0xcf09cf) {}).fail(function (_0x5cbeec, _0x2c278f, _0x5083d6) {});
    }, 0x8b1);
    setTimeout(function () {
        $.getScript('/IGU/_160/js/_0x4a160g.js').done(function (_0x5a0a0a, _0x11c78e, _0x4483eb) {}).fail(function (_0x1be0ee, _0x45e23e, _0x12c399) {});
    }, 0x9c4);
    setTimeout(function () {
        $('#iguConteudoSobreIGU').load('/IGU/_160/dat/igu-sobreIGU.dat', function () {});
        $('#iguConteudoSobreProjeto').load('/IGU/_160/dat/igu-sobreProjeto.dat', function () {});
    }, 0xabe);
});