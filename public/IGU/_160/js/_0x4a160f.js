$(document).ready(function () {
    var _0x3ce1e2 = 0x1;
    $('#igu-TextoCarregando').html($('#igu-TextoCarregando').html().replace(/~IGU~/g, 'IGU'));
    $('#igu-NavBar').html($('#igu-NavBar').html().replace('<i class=\"fa fa-fw fa-pulse fa-spinner\"></i><span class=\"sr-only\">Carregando...</span>', iguCidade + ' / ' + iguUF));
    $('#iguNomeApp').attr('title', 'IGU ' + iguCidade + ' / ' + iguUF);
    setTimeout(function () {
        $('#igu-TextoCarregando').append('<div class=\"progress-bar bg-success progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"1000\" aria-valuemax=\"100\" style=\"width: 100%\"></div>');
        $('#igu-IdPlataforma').append(iguPlataforma);
        $('#igu-municipioNomeCidade').append('<small>' + iguCidade + ' / ' + iguUF + '</small>');
        $('#igu-municipioBrasao').find('img').attr('src', iguBrasao);
        $('#igu-municipioDescricao').append('<p>' + iguDescricao + '</p>');
    }, 0x3e8);
    $('#bt-zoomInicio').on('click', function (_0x35e22d) {
        _0x35e22d.preventDefault();
        map.setView([iguLatitude, iguLongitude], iguZoom);
    });
    $('#iguNomeApp').on('click', function (_0x4565e6) {
        _0x4565e6.preventDefault();
        map.setView([iguLatitude, iguLongitude], iguZoom);
    });
    $('#bt-zoomExtendido').on('click', function (_0x227099) {
        _0x227099.preventDefault();
        map.fitBounds(iguCamadaCorredores.getBounds());
    });
    $('#bt-trocarBase').on('click', function (_0x2f34ec) {
        _0x2f34ec.preventDefault();
        if (map.hasLayer(OpenStreetMap_Mapnik)) {
            $('#bt-trocarBase').find('i').removeClass('fa-map');
            map.removeLayer(OpenStreetMap_Mapnik);
            $('#bt-trocarBase').find('i').addClass('fa-map-o');
            map.addLayer(Esri_WorldImagery);
        } else {
            $('#bt-trocarBase').find('i').removeClass('fa-map-o');
            map.removeLayer(Esri_WorldImagery);
            $('#bt-trocarBase').find('i').addClass('fa-map');
            map.addLayer(OpenStreetMap_Mapnik);
        }
    });
    $('#bt-legenda').on('click', function (_0x2147e6) {
        _0x2147e6.preventDefault();
        if (_0x3ce1e2 == 0x1) {
            tinysort('div#iguConteudoLegenda>p');
            _0x3ce1e2 = 0x0;
        }
    });
});
$(function () {
    $('[data-toggle=popover]').each(function (_0x144acd, _0x451767) {
        $(this).popover({
            'container': 'body',
            'html': true,
            'placement': 'top',
            'content': function () {
                var _0x1112e8 = $(this).attr('id');
                return $('#popover-content-' + _0x1112e8).html();
            }
        });
    });
    $('[data-tipo="tooltip"]').tooltip({
        'delay': {
            'show': 0x1f4,
            'hide': 0x32
        }
    }).on('click', function () {
        $(this).tooltip('hide');
    });
    $('#iguModal').on('show.bs.modal', function (_0x3cd2c9) {
        var _0x31e053 = $(_0x3cd2c9.relatedTarget);
        var _0x192471 = _0x31e053.data('titulo');
        var _0x5e8898 = _0x31e053.attr('id');
        var _0x39981f = $(this);
        _0x39981f.find('.modal-title').text(_0x192471);
        if (_0x5e8898 != 'bt-ajuda') {
            $('#iguConteudoModal').empty();
            $('#modal-content-' + _0x5e8898).children().clone().appendTo('#iguConteudoModal');
        } else {
            $('#iguConteudoModal').load('/IGU/_160/dat/igu-' + _0x5e8898.substr(0x3) + '.dat');
        }
    }).focus();
    $('#iguModal2').on('show.bs.modal', function (_0x50b748) {
        var _0x41dae6 = $(_0x50b748.relatedTarget);
        var _0x5581b1 = _0x41dae6.data('titulo');
        var _0x3c3101 = _0x41dae6.attr('id');
        var _0x24b1fa = $(this);
        _0x24b1fa.find('.modal-title').text(_0x5581b1);
    }).focus();
});
$(document).ready(function () {
    $('.dropdown-item').on('click', function (_0x12b8b1) {
        _0x12b8b1.preventDefault();
        var _0x1d4f0a = $(this).attr('id');
        camadaOnOff = '';
        $(this).find('i.iCheck').toggleClass('fa-eye fa-eye-slash');
        if (_0x1d4f0a == 'bt-projetosImplantados') {
            camadaOnOff = iguCamadaProjetosUrbanosImplantados;
        }
        if (_0x1d4f0a == 'bt-projetosEmAnalise') {
            camadaOnOff = iguCamadaProjetosUrbanosEmAnalise;
        }
        if (_0x1d4f0a == 'bt-rotasDesempenho') {
            camadaOnOff = iguCamadaRotasDesempenho;
        }
        if (_0x1d4f0a == 'bt-rotasCalcadao') {
            camadaOnOff = iguCamadaCalcadao;
        }
        if (_0x1d4f0a == 'bt-redesComunicacao') {
            camadaOnOff = iguCamadaRedeComunicacao;
        }
        if (_0x1d4f0a == 'bt-Rotatorias') {
            camadaOnOff = iguCamadaRotatorias;
        }
        if (_0x1d4f0a == 'bt-contagens') {
            camadaOnOff = iguCamadaContagens;
        }
        if (_0x1d4f0a == 'bt-direcoesExistente') {
            camadaOnOff = iguCamadaCirculacaoExistente;
        }
        if (_0x1d4f0a == 'bt-direcoesProposta') {
            camadaOnOff = iguCamadaCirculacaoProposta;
        }
        if (_0x1d4f0a == 'bt-intersecoesSemaforizada') {
            camadaOnOff = iguCamadaIntersecoes;
        }
        if (_0x1d4f0a == 'bt-intersecoesSemaforizadaNova') {
            camadaOnOff = iguCamadaIntersecaoSemaforizadaNova;
            if (map.hasLayer(iguCamadaIntersecaoSemaforizadaNova)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-intersecoesSemSemaforo') {
            camadaOnOff = iguCamadaIntersecaoSemSemaforo;
            if (map.hasLayer(iguCamadaIntersecaoSemSemaforo)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-rotasCorredor') {
            if (map.hasLayer(iguCamadaCorredores)) {
                map.removeLayer(iguCamadaCorredores);
                $('#bt-rotasCorredor').find('i.iCheck').removeClass('fa-eye');
                $('#bt-rotasCorredor').find('i.iCheck').addClass('fa-eye-slash');
            } else {
                map.addLayer(iguCamadaCorredores);
                $('#bt-rotasCorredor').find('i.iCheck').removeClass('fa-eye-slash');
                $('#bt-rotasCorredor').find('i.iCheck').addClass('fa-eye');
            }
        }
        if (_0x1d4f0a == 'bt-redesInterligacao') {
            if (map.hasLayer(iguCamadaRedeInterligacao)) {
                map.removeLayer(iguCamadaRedeInterligacao);
                $('#bt-redesInterligacao').find('i.iCheck').removeClass('fa-eye');
                $('#bt-redesInterligacao').find('i.iCheck').addClass('fa-eye-slash');
            } else {
                map.addLayer(iguCamadaRedeInterligacao);
                $('#bt-redesInterligacao').find('i.iCheck').removeClass('fa-eye-slash');
                $('#bt-redesInterligacao').find('i.iCheck').addClass('fa-eye');
            }
        }
        if (_0x1d4f0a == 'bt-redesSemaforica') {
            if (map.hasLayer(iguCamadaRedeSemaforica)) {
                map.removeLayer(iguCamadaRedeSemaforica);
                $('#bt-redesSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-redesSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            } else {
                map.addLayer(iguCamadaRedeSemaforica);
                $('#bt-redesSemaforica').find('i.iCheck').removeClass('fa-eye-slash');
                $('#bt-redesSemaforica').find('i.iCheck').addClass('fa-eye');
            }
        }
        if (_0x1d4f0a == 'bt-redesSemaforicaSub') {
            if (map.hasLayer(iguCamadaSubRedeSemaforica)) {
                map.removeLayer(iguCamadaSubRedeSemaforica);
                $('#bt-redesSemaforicaSub').find('i.iCheck').removeClass('fa-eye');
                $('#bt-redesSemaforicaSub').find('i.iCheck').addClass('fa-eye-slash');
            } else {
                map.addLayer(iguCamadaSubRedeSemaforica);
                $('#bt-redesSemaforicaSub').find('i.iCheck').removeClass('fa-eye-slash');
                $('#bt-redesSemaforicaSub').find('i.iCheck').addClass('fa-eye');
            }
        }
        if (_0x1d4f0a == 'bt-intersecoesSituacaoAdversa') {
            camadaOnOff = iguCamadaIntersecaoSituacaoAdversa;
            if (map.hasLayer(iguCamadaIntersecaoSituacaoAdversa)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoAdjacenteSemaforizada') {
            camadaOnOff = iguCamadaIntersecaoAdjacenteSemaforizada;
            if (map.hasLayer(iguCamadaIntersecaoAdjacenteSemaforizada)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoAdjacenteSemaforizadaConjugado') {
            camadaOnOff = iguCamadaIntersecaoAdjacenteSemaforizadaConjugado;
            if (map.hasLayer(iguCamadaIntersecaoAdjacenteSemaforizadaConjugado)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoIsoladasForaDeEscopo') {
            camadaOnOff = iguCamadaIntersecaoIsoladasForaDeEscopo;
            if (map.hasLayer(iguCamadaIntersecaoIsoladasForaDeEscopo)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoSemaforizadaConjugado') {
            camadaOnOff = iguCamadaIntersecaoSemaforizadaConjugado;
            if (map.hasLayer(iguCamadaIntersecaoSemaforizadaConjugado)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoSemaforizadaNovaConjugado') {
            camadaOnOff = iguCamadaIntersecaoSemaforizadaNovaConjugado;
            if (map.hasLayer(iguCamadaIntersecaoSemaforizadaNovaConjugado)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoSemInfluenciaSemaforizadaConjugado') {
            camadaOnOff = iguCamadaIntersecaoSemInfluenciaSemaforizadaConjugado;
            if (map.hasLayer(iguCamadaIntersecaoSemInfluenciaSemaforizadaConjugado)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-IntersecaoSemInfluenciaSemaforizadaPrincipal') {
            camadaOnOff = iguCamadaIntersecaoSemInfluenciaSemaforizadaPrincipal;
            if (map.hasLayer(iguCamadaIntersecaoSemInfluenciaSemaforizadaPrincipal)) {} else {
                map.removeLayer(iguCamadaPlantaSemaforica);
                $('#bt-plantaSemaforica').find('i.iCheck').removeClass('fa-eye');
                $('#bt-plantaSemaforica').find('i.iCheck').addClass('fa-eye-slash');
            }
        }
        if (_0x1d4f0a == 'bt-rotasCoordenacao') {
            if (map.hasLayer(iguCamadaRotasCoordenacao)) {
                map.removeLayer(iguCamadaRotasCoordenacao);
                $('#bt-rotasCoordenacao').find('i.iCheck').removeClass('fa-eye');
                $('#bt-rotasCoordenacao').find('i.iCheck').addClass('fa-eye-slash');
            } else {
                map.addLayer(iguCamadaRotasCoordenacao);
                $('#bt-rotasCoordenacao').find('i.iCheck').removeClass('fa-eye-slash');
                $('#bt-rotasCoordenacao').find('i.iCheck').addClass('fa-eye');
            }
        }
        if (_0x1d4f0a == 'bt-plantaSemaforica') {
            camadaOnOff = iguCamadaPlantaSemaforica;
        }
        if (_0x1d4f0a != 'bt-plantaSemaforica' || _0x1d4f0a != 'bt-redesCoordenacao') {
            if (map.hasLayer(camadaOnOff)) {
                map.removeLayer(camadaOnOff);
            } else {
                map.addLayer(camadaOnOff);
            }
        }
    });
    $('#igu-TextoFixo').empty();
    setTimeout(function () {
        $('#igu-TextoFixo').append('<div class=\"marca-dagua text-center\"><h6>IGU<small> Interface Gráfica Urbana</small></h6></div>');
    }, 0xfa);
});