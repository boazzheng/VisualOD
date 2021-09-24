var iguPDFopcoes = {
    'pdfOpenParams': {
        'navpanes': 0x0,
        'toolbar': 0x0,
        'statusbar': 0x0,
        'view': 'FitV',
        'pagemode': 'thumbs',
        'page': 0x1
    },
    'forcePDFJS': true,
    'PDFJS_URL': '/IGU/_03o/_PDFjs/web/viewer.html'
};
$(document).ready(function () {
    $.getScript('/docs/Mapa/igu-MunicipioConfigurar.js');
    setTimeout(function () {
        function _0x1411da(_0x377ad1) {
            var _0x252ade = new RegExp(_0x377ad1 + '=([^&]*)', 'i').exec(window.location.search);
            return _0x252ade && unescape(_0x252ade[0x1]) || '';
        }
        cruz = _0x1411da('i');
        pasta = _0x1411da('g');
        nomeOriginal = _0x1411da('u');
        if (pasta == 'Contagens') {
            pasta = 'Intersecoes';
        };
        iguDocRaiz = '/docs/' + pasta + '/' + cruz + '/' + cruz;
        icone = 'fa-file-text-o';
        document.title = cruz.split('_').join(' ') + ' - Documentação | IGU';
        pdfCroqui = iguDocRaiz + '-S';
        pdfProgramacao = iguDocRaiz + '-P';
        pdfFluxos = iguDocRaiz + '-H';
        pdfRelatorioVS = iguDocRaiz + '-A';
        pdfRelatorioNS = iguDocRaiz + '-N';
        pdfContagemVeicular = iguDocRaiz + '-CV';
        pdfContagemPedestre = iguDocRaiz + '-CP';
        pdfDesempenho = iguDocRaiz + '-R';
        pdfDesempenhoAntes = iguDocRaiz + '-Ra';
        pdfDesempenhoDepois = iguDocRaiz + '-Rd';
        pdfProjetoSOL = iguDocRaiz + '-SOL';
        pdfProjetoGEO = iguDocRaiz + '-GEO';
        pdfProjetoACE = iguDocRaiz + '-ACE';
        pdfProjetoSEM = iguDocRaiz + '-SEM';
        pdfProjetoRTD = iguDocRaiz + '-RTD';
        pdfProjetoOBC = iguDocRaiz + '-OBC';
        pdfProjetoSVE = iguDocRaiz + '-SVE';
        pdfProjetoSHO = iguDocRaiz + '-SHO';
        pdfProjetoSVH = iguDocRaiz + '-SVH';
        pdfCroqui = iguDocRaiz + '-S';
        pdfProgramacao = iguDocRaiz + '-P';
        pdfFluxos = iguDocRaiz + '-H';
        pdfRelatorioVS = iguDocRaiz + '-A';
        pdfRelatorioNS = iguDocRaiz + '-N';
        pdfContagemVeicular = iguDocRaiz + '-CV';
        pdfContagemPedestre = iguDocRaiz + '-CP';
        pdfCoordenacao = '/docs/' + pasta + '/Banda_' + cruz + '/Banda_' + cruz;
        jpgFoto = iguDocRaiz + '-F';
        pdfObservacoes = iguDocRaiz + '-O';
        if (_0x1411da('g') == 'Coordenacao') {
            _0x5a2405(pdfCoordenacao, 'coordenacao', 'Banda de Coordenação', 'fa-area-chart');
        }
        if (_0x1411da('g') == 'Intersecoes') {
            _0x5a2405(pdfCroqui, 'croqui', 'Croqui da Interseção', 'fa-pencil-square-o');
            _0x5a2405(pdfProgramacao, 'programacao', 'Programação Semafórica', 'fa-tasks');
            _0x5a2405(pdfFluxos, 'fluxos', 'Fluxos dos Picos', 'fa-code-fork');
            _0x5a2405(pdfRelatorioVS, 'RelatorioVS', 'Relatório de Viabilidade Semafórica', 'fa-check-circle-o');
            _0x5a2405(pdfRelatorioNS, 'RelatorioNS', 'Relatório de Nível de Serviço', 'fa-certificate');
            _0x5a2405(pdfContagemVeicular, 'ContagemVeicular', 'Contagem Veicular Classificada', 'fa-car');
            _0x5a2405(pdfContagemPedestre, 'ContagemPedestre', 'Contagem de Pedestres', 'fa-street-view');
        }
        if (_0x1411da('g') == 'Projetos') {
            _0x5a2405(pdfProjetoSOL, 'ProjetoSOL', 'Projeto Conceitual', 'fa-lightbulb-o');
            _0x5a2405(pdfProjetoGEO, 'ProjetoGEO', 'Projeto de Geometria', 'fa-square-o');
            _0x5a2405(pdfProjetoACE, 'ProjetoACE', 'Projeto de Acessibilidade', 'fa-wheelchair');
            _0x5a2405(pdfProjetoSEM, 'ProjetoSEM', 'Projeto de Sinalização Semafórica', 'fa-ellipsis-v');
            _0x5a2405(pdfProjetoRTD, 'ProjetoRTD', 'Projeto de Rede de Transmissão de Dados', 'fa-wifi');
            _0x5a2405(pdfProjetoOBC, 'ProjetoOBC', 'Projeto de Obra Civil', 'fa-cube');
            _0x5a2405(pdfProjetoSVE, 'ProjetoSVE', 'Projeto de Sinalização Vertical', 'fa-map-signs');
            _0x5a2405(pdfProjetoSHO, 'ProjetoSHO', 'Projeto de Sinalização Horizontal', 'fa-road');
            _0x5a2405(pdfProjetoSVH, 'ProjetoSVH', 'Projeto de Sinalização Vertical e Horizontal', 'fa-road');
            _0x5a2405(pdfCroqui, 'croqui', 'Croqui da Interseção', 'fa-pencil-square-o');
            _0x5a2405(pdfProgramacao, 'programacao', 'Programação Semafórica', 'fa-tasks');
            _0x5a2405(pdfFluxos, 'fluxos', 'Fluxos dos Picos', 'fa-code-fork');
            _0x5a2405(pdfRelatorioVS, 'RelatorioVS', 'Relatório de Viabilidade Semafórica', 'fa-check-circle-o');
            _0x5a2405(pdfRelatorioNS, 'RelatorioNS', 'Relatório de Nível de Serviço', 'fa-certificate');
            _0x5a2405(pdfContagemVeicular, 'ContagemVeicular', 'Contagem Veicular Classificada', 'fa-car');
            _0x5a2405(pdfContagemPedestre, 'ContagemPedestre', 'Contagem de Pedestres', 'fa-street-view');
        }
        if (_0x1411da('g') == 'Desempenho') {
            _0x5a2405(pdfDesempenho, 'desempenho', 'Desempenho (Antes/Depois)', 'fa-line-chart');
            setTimeout(function () {
                _0x5a2405(pdfDesempenhoAntes, 'desempenhoAntes', 'Desempenho (Antes)', 'fa-line-chart">&nbsp;a</i><i class="fa');
            }, 0x32);
            setTimeout(function () {
                _0x5a2405(pdfDesempenhoDepois, 'desempenhoDepois', 'Desempenho (Depois)', 'fa-line-chart">&nbsp;d</i><i class="fa');
            }, 0x64);
        }
        if (_0x1411da('g') == 'Contagens') {
            _0x5a2405(pdfRelatorioVS, 'RelatorioVS', 'Relatório de Viabilidade Semafórica', 'fa-check-circle-o');
            _0x5a2405(pdfContagemVeicular, 'ContagemVeicular', 'Contagem Veicular Classificada', 'fa-car');
            _0x5a2405(pdfContagemPedestre, 'ContagemPedestre', 'Contagem de Pedestres', 'fa-street-view');
        }
        _0x5aef62(jpgFoto, 'fotos', 'Fotos do Local', 'fa-picture-o', 0x1);
        _0x5a2405(pdfObservacoes, 'observacoes', 'Observações', 'fa-exclamation');
        $.getJSON('/docs/Mapa/' + 'IGU-Intersecoes.geojson', function (_0x46ff26) {
            $.each(_0x46ff26.features, function (_0x5e596d, _0x5f05f0) {
                if (_0x5f05f0.properties.IGUNOME == cruz) {
                    content = '<br />' + '<div class="iguPopupTexto">' + '<i class="fa fa-fw fa-' + icone + '"></i>' + _0x5f05f0.properties.IGUNOME + '</div>' + '<div class=\"iguPopupTextoLgra\">Logradouro:</div>' + '<div class="iguPopupTextoLgr1">' + _0x5f05f0.properties.OENDLOCALP + '</div>' + '<b>&nbsp;&times;</b>' + '<div class="iguPopupTextoLgr2">' + _0x5f05f0.properties.OENDLOCALS + '</div>' + '<div class="iguPopupTextoArea">' + _0x5f05f0.properties.OENDBAIRRO + '</div>' + '<div class=\"iguPopupTextoIctr\">' + _0x5f05f0.properties.OCTRLID + '</div>' + '<div class=\"iguPopupTextoAnel\">' + _0x5f05f0.properties.OANELNUMERO + '</div>' + '<div class=\"iguPopupTextoRede\">' + _0x5f05f0.properties.OGRUPONUMERO + '</div>' + '<div class=\"iguPopupTextoCtrl\">' + _0x5f05f0.properties.OCTRL + '</div>' + '<div class="iguPopupTextoConj">' + _0x5f05f0.properties.OCONJUGADO + '</div>';
                    $(content).appendTo('#infoSobre');
                }
            });
        });

        function _0x5aef62(_0x7017d, _0x2b57ef, _0x1041cf, _0x555ea6, _0x27a8a3) {
            $.ajax({
                'url': _0x7017d + '_' + _0x27a8a3 + '.jpg',
                'type': 'HEAD',
                'success': function () {
                    if (_0x27a8a3 == 0x1) {
                        $('#barraLateral').append('<li class="igu-aba" title="' + _0x1041cf + '"><a href="#' + _0x2b57ef + '" data-toggle="tab" ><i class="fa fa-fw fa-lg ' + _0x555ea6 + '"></i><span class="hidden-md hidden-sm hidden-xs"><br /> ' + _0x1041cf + '</a></span></li>');
                        $('#abas').append('<div class="tab-pane" id="' + _0x2b57ef + '\">' + '<div class="modal-header bg-verdeIgu">' + '<h4 class="modal-title"><i class="fa fa-fw ' + _0x555ea6 + '"></i> ' + _0x1041cf + '</h4>' + '</div>' + '<div id="JPG' + _0x2b57ef + '" class="text-center text-lg-left"></div>' + '<hr />' + '</div>');
                    }
                    $('<div class="col-lg-3 col-md-4 col-xs-6">' + '<a href="#" class="d-block mb-4 h-100">' + '<img class="img-fluid img-thumbnail" src="' + _0x7017d + '_' + _0x27a8a3 + '.jpg" title="Foto: ' + cruz + '-' + _0x27a8a3 + '.jpg\">' + '</a>' + '</div>').appendTo('#JPG' + _0x2b57ef).on('click', function () {
                        $('.enlargeImageModalSource').attr('src', $(this).find('img').attr('src'));
                        $('#enlargeImageModal').modal('show');
                    });
                    _0x5aef62(_0x7017d, _0x2b57ef, _0x1041cf, _0x555ea6, _0x27a8a3 + 0x1);
                }
            });
        };

        function _0x5a2405(_0x252e4a, _0x1eb6f9, _0x2069b9, _0x5c4f0a) {
            $.ajax({
                'url': _0x252e4a + '.pdf',
                'type': 'HEAD',
                'success': function () {
                    $('#barraLateral').append('<li class="igu-aba" title="' + _0x2069b9 + '"><a href="#' + _0x1eb6f9 + '" data-toggle="tab" ><i class="fa fa-fw fa-lg ' + _0x5c4f0a + '"></i><span class="hidden-md hidden-sm hidden-xs"><br /> ' + _0x2069b9 + '</a></span></li>');
                    $('#abas').append('<div class=\"tab-pane\" id=\"' + _0x1eb6f9 + '\">' + '<div class=\"modal-header bg-verdeIgu\">' + '<h4 class="modal-title"><i class="fa fa-fw ' + _0x5c4f0a + '"></i> ' + _0x2069b9 + '</h4>' + '</div>' + '<div id="PDF' + _0x1eb6f9 + '\"></div>' + '<hr />' + '</div>');
                    PDFObject.embed(_0x252e4a + '.pdf', '#PDF' + _0x1eb6f9, iguPDFopcoes);
                },
                'error': function () {
                    _0x4ff443(_0x252e4a, _0x1eb6f9, _0x2069b9, _0x5c4f0a, 0x1);
                }
            });
        };

        function _0x4ff443(_0x35c75e, _0x3ddf25, _0x832d99, _0x5aa8e8, _0x394b67) {
            $.ajax({
                'url': _0x35c75e + '_' + _0x394b67 + '.pdf',
                'type': 'HEAD',
                'success': function () {
                    if (_0x394b67 == 0x1) {
                        $('#barraLateral').append('<li class="igu-aba" title="' + _0x832d99 + '\"><a href=\"#' + _0x3ddf25 + '\" data-toggle=\"tab\" ><i class=\"fa fa-fw fa-lg ' + _0x5aa8e8 + '"></i><span class="hidden-md hidden-sm hidden-xs"><br /> ' + _0x832d99 + '</a></span></li>');
                        $('#abas').append('<div class="tab-pane" id="' + _0x3ddf25 + '\">' + '<div class="modal-header bg-verdeIgu">' + '<h4 class=\"modal-title\"><i class=\"fa fa-fw ' + _0x5aa8e8 + '"></i> ' + _0x832d99 + '</h4>' + '</div>' + '<div id="PDF' + _0x3ddf25 + '"></div>' + '<hr />' + '</div>');
                    }
                    $('<div id="PDF' + _0x3ddf25 + '_' + _0x394b67 + '"></div>').appendTo('#PDF' + _0x3ddf25);
                    PDFObject.embed(_0x35c75e + '_' + _0x394b67 + '.pdf', '#PDF' + _0x3ddf25 + '_' + _0x394b67, iguPDFopcoes);
                    _0x4ff443(_0x35c75e, _0x3ddf25, _0x832d99, _0x5aa8e8, _0x394b67 + 0x1);
                }
            });
        };
        $('#sobre').find('i').removeClass('fa-spinner').removeClass('fa-pulse').addClass(icone);
        if (_0x1411da('g') == 'Coordenacao' || _0x1411da('g') == 'Projetos') {
            cruz = cruz.split('_').join(' ');
        }
        $('#sobre').find('h4').append(cruz);
        $('#barraLateral').find('i').removeClass('fa-spinner').removeClass('fa-pulse').addClass(icone);
        $('#barraLateral').html($('#barraLateral').html().replace(/000/g, cruz));
    }, 0xfa);
});
$(document).ready(function () {
    $('.tab-pane').height($(window).height());
});