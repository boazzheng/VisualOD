var semFolhaJS = 'Sim';
$(document).ready(function () {
    $.getScript('/docs/Mapa/igu-MunicipioConfigurar.js');

    function _0x28d825(_0x44143e) {
        var _0x32c4ce = new RegExp(_0x44143e + '=([^&]*)', 'i').exec(window.location.search);
        return _0x32c4ce && unescape(_0x32c4ce[0x1]) || '';
    }
    nomearq = _0x28d825('i');
    pasta = _0x28d825('g');
    nomeOriginal = _0x28d825('u');
    iguDocRaiz = '/Documentacao/' + pasta + '/' + nomearq + '/' + nomearq;
    if (nomeOriginal == 'Contagens') {
        pasta = 'Intersecoes';
        iguDocRaiz = '/Documentacao/' + pasta + '/' + nomearq + '/3J61-item17/' + nomearq;
    };
    if (nomeOriginal == 'ContagensOD') {
        pasta = 'Intersecoes';
        iguDocRaiz = '/Documentacao/' + pasta + '/' + nomearq + '/3J63-item17/' + nomearq;
    };
    document.title = nomearq.split('_').join(' ') + ' - ' + pasta + ', Documentação | IGU';
    $('#conteudo').html(pasta);
    var _0x423ef7;
    var _0x2a1f49 = {
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

    function _0x4452be(_0x457fff, _0x558940, _0xbed1ce, _0xfb4643) {
        $.ajax({
            'url': _0x457fff,
            'type': 'HEAD',
            'success': function () {
                PDFObject.embed(_0x457fff, '#visualizador3', _0x2a1f49);
            },
            'error': function () {
                console.log('PDFObject.visualizador3.erro');
            }
        });
    };

    function _0xeaf5ea(_0x44543d, _0x2041d3, _0x508752, _0x5c9ce2, _0x3631c1) {
        $.ajax({
            'url': _0x44543d + '_' + _0x3631c1 + '.pdf',
            'type': 'HEAD',
            'success': function () {
                if (_0x3631c1 == 0x1) {}
                $('<div id="PDF' + _0x2041d3 + '_' + _0x3631c1 + '\"></div>').appendTo('#PDF' + _0x2041d3);
                PDFObject.embed(_0x44543d + '_' + _0x3631c1 + '.pdf', '#PDF' + _0x2041d3 + '_' + _0x3631c1, _0x2a1f49);
                _0xeaf5ea(_0x44543d, _0x2041d3, _0x508752, _0x5c9ce2, _0x3631c1 + 0x1);
            }
        });
    };
    $(function () {
        $('#diretorio').on('changed.jstree', function (_0x33f6ab, _0x2e623d) {
            var _0xca3444 = _0x2e623d.instance.get_path(_0x2e623d.node, '/');
            var _0x4ce11e = 'http://localhost:8102' + '/docs/' + pasta + '/' + nomearq + '/';
            $.ajax({
                'url': _0x4ce11e + _0xca3444,
                'success': function (_0x2e623d) {
                    var _0x550c56 = '';
                    var _0x1cc428 = ['Croqui', 'Cadastro', 'Estudo Preliminar', 'Contagem', 'Funcional', 'Básico', 'Executivo', 'Serviços Complementares', 'Programação', '', '', 'Reconstituição'];
                    var _0x1d2667 = _0xca3444.slice(-0x3).toLowerCase();
                    var _0x16aa38 = [];
                    if (_0x1d2667 == 'pdf' || _0x1d2667 == 'dwg') {
                        if (_0xca3444.search('/') == -0x1) {
                            var _0x16aa38 = _0xca3444.split('-')[0x4];
                            if (!_0x16aa38) {
                                var _0x16aa38 = '*';
                            }
                        } else {
                            var _0x16aa38 = _0xca3444.split('/')[0x1].split('-')[0x4];
                        }
                        var _0x2f9598 = _0x16aa38.substring(0x0, 0x1);
                        var _0x43dbdb = _0x16aa38.substring(0x1, 0x4);
                        switch (_0x43dbdb) {
                        case 'BAND':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-bar-chart"></i>';
                            var _0x550c56 = '';
                            break;
                        case 'FOTO':
                            var _0x1be5d3 = '<i class=\"fa fa-fw fa-picture-o\"></i>';
                            var _0x550c56 = 'Fotografias do Local';
                            break;
                        case 'SIMU':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-youtube-play"></i>';
                            var _0x550c56 = 'Simulações';
                            break;
                        case 'A05':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Planta de Situação Geral';
                            break;
                        case 'C01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pontes e Viadutos';
                            break;
                        case 'C04':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Passarelas';
                            break;
                        case 'C06':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Estruturas de Concreto - Estruturas de Edificações';
                            break;
                        case 'E01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos - Redes de alimentação e distribuição, unifilares e polifilares';
                            break;
                        case 'E02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos - Infraestrutura para instalações (eletrodutos, caixas e outros)';
                            break;
                        case 'E04':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos – Instalações de BT, proteção e aterramento';
                            break;
                        case 'E21':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Instalação Elétrica p/ Sistemas Semafóricos';
                            break;
                        case 'E22':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-bolt"></i>';
                            var _0x550c56 = 'Instalação Elétrica dos Semáforos';
                            break;
                        case 'E23':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Rede de Comunicações p/ Sistemas Semafóricos';
                            break;
                        case 'E24':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos - Iluminação Pública e Interna com análise luminotécnica';
                            break;
                        case 'E25':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos - Iluminação Pública e Externa com análise luminotécnica';
                            break;
                        case 'E26':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistemas Elétricos - Sistemas de Proteção às Descargas Atmosféricas';
                            break;
                        case 'E27':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sinalização Semafórica e de Instalação Elétrica p/ Sistemas Semafóricos e de Câmera do Sistema de CFTV de Tráfego';
                            break;
                        case 'E28':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-podcast"></i>';
                            var _0x550c56 = 'Sistemas de Detecção';
                            break;
                        case 'E29':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Instalação Elétrica p/ Sistemas de Detecção Veicular com Laço Virtual (através de Câmeras';
                            break;
                        case 'E30':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-video-camera"></i>';
                            var _0x550c56 = 'Sistema de Monitoramento por Câmera - CFTV';
                            break;
                        case 'E31':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sistema de Informação ao Usuário - PMV-FIXO';
                            break;
                        case 'F02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Geometria Viária - Traçado em planta';
                            break;
                        case 'F03':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Geometria Viária - Traçado em perfil';
                            break;
                        case 'F21':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Geometria Viária (Traçado em planta) e Acessibilidade';
                            break;
                        case 'F22':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Geometria Viária (Traçado em planta) e Pavimentação (Planta de distribuição)';
                            break;
                        case 'F23':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Acessibilidade Universal';
                            break;
                        case 'F24':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Acessibilidade Universal e Mobiliário Urbano';
                            break;
                        case 'G01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Mapeamento Geológico e localização de sondagens';
                            break;
                        case 'H02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Hidráulica - Instalações Hidrosanitárias';
                            break;
                        case 'H04':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Drenagem de vias';
                            break;
                        case 'I01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Cadastro unificado de interferências';
                            break;
                        case 'J01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Tráfego Motorizado';
                            break;
                        case 'J19':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Classificação e Hierarquização do sistema viário';
                            break;
                        case 'J21':
                            var _0x1be5d3 = '<i class=\"fa fa-fw fa-car\"></i>';
                            var _0x550c56 = 'Contagem Volumétrica Classificada em Cruzamentos';
                            break;
                        case 'J22':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem de Pedestres [registro de movimentos em interseção viária ou travessia(s) de pedestre sinalizadas]';
                            break;
                        case 'J23':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Proposição (ou Proposta) de Circulação Viária';
                            break;
                        case 'J24':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Reconfiguração Viária de Tráfego, Circulação, Estacionamento, Sinalização e Geometria';
                            break;
                        case 'J25':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Avaliação (ou Auditoria) de Segurança Viária e Sinalização';
                            break;
                        case 'J26':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Animação Gráfica de Fluxo Veicular em Situação de Circulação Viária';
                            break;
                        case 'J27':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Animação Gráfica de Fluxo Pedestre em Situação de Circulação Viária';
                            break;
                        case 'J28':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Animação Gráfica de Fluxo Pedestre e Veicular em Situação de Circulação Viária';
                            break;
                        case 'J29':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Estimativa de Massa de Fluxo Veicular';
                            break;
                        case 'J30':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes”';
                            break;
                        case 'J31':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Depois”';
                            break;
                        case 'J32':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes/Depois”';
                            break;
                        case 'J33':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Interseção';
                            break;
                        case 'J34':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Rotatória';
                            break;
                        case 'J35':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Travessia de Pedestre';
                            break;
                        case 'J36':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Nível de Serviço em Interseção Semaforizada';
                            break;
                        case 'J37':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Nível de Serviço em Interseção não Semaforizada';
                            break;
                        case 'J38':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Estudo de Impacto de Vizinhança [E.I.V.]';
                            break;
                        case 'J39':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Relatório de Impacto no Trânsito [R.I.T.]';
                            break;
                        case 'J40':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada e Volume de Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J41':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Avaliação do Tempo de Viagem por passagem em interseção nas diferentes situações de circulação viária';
                            break;
                        case 'J42':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido único (Onda Verde)';
                            break;
                        case 'J43':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido duplo (Onda Verde prioridade no sentido)';
                            break;
                        case 'J44':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro de movimentos em interseção viária]';
                            break;
                        case 'J45':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada e Volume de Bicicletas e Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J46':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada [registro das passagens] em seção viária';
                            break;
                        case 'J47':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro das passagens] em seção viária';
                            break;
                        case 'J48':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular Classificada em tipo de veículo e número de eixos [registro das passagens] em seção viária';
                            break;
                        case 'J49':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem Veicular de tipo de veículo específico com registro de velocidade [registro das passagens] em seção viária';
                            break;
                        case 'J50':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Identificação de Linhas em Parada de Ônibus';
                            break;
                        case 'J51':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Embarque e Desembarque de passageiros em Parada de Ônibus com Identificação de Linhas';
                            break;
                        case 'J52':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pesquisa de Ocupação Visual de Passageiros das Linhas de Ônibus em ponto [/local] do Sistema Viário';
                            break;
                        case 'J53':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J54':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres em seção viária';
                            break;
                        case 'J55':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Relatório de viabilidade de Implantação de Transposição viária/Reconfiguração Viária';
                            break;
                        case 'J60':
                            var _0x1be5d3 = '<i class=\"fa fa-fw fa-map\"></i>';
                            var _0x550c56 = 'Planta do Sistema Semafórico';
                            break;
                        case 'J61':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-exchange"></i>';
                            var _0x550c56 = 'Contagem Volumétrica de Origem e Destino - OD';
                            break;
                        case 'J63':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-refresh"></i>';
                            var _0x550c56 = 'Contagem Origem/Destino Veicular &#8211; 17';
                            break;
                        case 'K01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Paisagismo';
                            break;
                        case 'K02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Plantas, Cortes e Vistas';
                            break;
                        case 'K04':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Comunicação Visual';
                            break;
                        case 'K05':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Mobiliário e leiaute';
                            break;
                        case 'K07':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura – (Planejamentos) Urbanístico';
                            break;
                        case 'K08':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Urbanização e Ajardinagem';
                            break;
                        case 'K17':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Demolição)';
                            break;
                        case 'K18':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Construção)';
                            break;
                        case 'K21':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura – Perspectivas Tridimensionais';
                            break;
                        case 'K22':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                            var _0x550c56 = 'Dutos RTD Comunicações';
                            break;
                        case 'K23':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                            var _0x550c56 = 'Dutos RTD Semáforos';
                            break;
                        case 'K24':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Arquitetura - Reavaliação de Paradas de Ônibus com proposição para melhorias';
                            break;
                        case 'L01':
                            var _0x1be5d3 = '<i class=\"fa fa-fw fa-road\"></i>';
                            var _0x550c56 = 'Sinalização Horizontal';
                            break;
                        case 'L02':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-map-pin"></i>';
                            var _0x550c56 = 'Sinalização Vertical';
                            break;
                        case 'L03':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Dispositivos de Segurança Viária';
                            break;
                        case 'L07':
                            var _0x1be5d3 = '<i class=\"fa fa-fw fa-map-pin\"></i><i class=\"fa fa-fw fa-road\"></i>';
                            var _0x550c56 = 'Sinalização Vertical e Horizontal';
                            break;
                        case 'L12':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-ellipsis-v"></i>';
                            var _0x550c56 = 'Sinalização Semafórica';
                            break;
                        case 'L13':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Projeto de Orientação de Tráfego';
                            break;
                        case 'L21':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Sinalização Vertical, Horizontal e Semafórica para veículos motorizados e não-motorizados (ou cicláveis) ';
                            break;
                        case 'M02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Estruturas metálicas de edificações';
                            break;
                        case 'O20':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-tasks"></i>';
                            var _0x550c56 = 'Programação Semafórica';
                            break;
                        case 'O21':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-edit"></i>';
                            var _0x550c56 = 'Croqui Semafórico';
                            break;
                        case 'O22':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Programação Semafórica em arquivo para transferência em equipamento Sice (Prado)';
                            break;
                        case 'P02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Pavimentação - Planta de distribuição de pavimento';
                            break;
                        case 'Q02':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Terraplenagem - Planta de distribuição de volumes';
                            break;
                        case 'T01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Levantamento Topográfico – Planialtimétrico (Sistema convencional)';
                            break;
                        case 'T21':
                            var _0x1be5d3 = '<i class="fa fa-fw fa-globe"></i>';
                            var _0x550c56 = 'Bases de Projeto';
                            break;
                        case 'T22':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Levantamento Topográfico – Planialtimétrico através sistema laser por nuvem de pontos';
                            break;
                        case 'X01':
                            var _0x1be5d3 = '';
                            var _0x550c56 = 'Detecção e Combate à Incêndio';
                            break;
                        default:
                            var _0x1be5d3 = '';
                            var _0x550c56 = ' ';
                        }
                        if (!_0x2f9598 == '*') {
                            var _0x45d237 = _0x1cc428[_0x2f9598] + ' / ' + _0x550c56;
                        } else {
                            var _0x45d237 = _0x550c56;
                        }
                    } else if (_0x1d2667 == 'jpg') {
                        var _0x45d237 = 'Fotografia';
                    } else if (_0x1d2667 == 'mp4') {
                        var _0x45d237 = 'Simulação';
                    }
                    $('#ver2').html('' + '<div class="title" id="nome2"><small>' + nomearq + ' / ' + _0x45d237 + ' / ' + _0xca3444 + '</small>' + '</div>' + '<iframe id="visualizador2" src="' + _0x4ce11e + _0xca3444 + '"></iframe>');
                    var _0x803878 = $('body').innerHeight() - 0x38;
                    var _0x2601e5 = $('body').innerWidth() - 0x14a;
                    $('#ver3').html('' + '<div class="title" id="nome3"><small>' + nomearq + ' / ' + _0x45d237 + ' / ' + _0xca3444 + '</small>' + '</div>' + '<div id="visualizador3" style="width:' + _0x2601e5 + 'px; height:' + _0x803878 + 'px;"></div>');
                    if (_0x1d2667 == 'pdf') {
                        _0x4452be(_0x4ce11e + _0xca3444, '#visualizador3', 'teste', 'ico');
                    }
                    if (_0x1d2667 == 'jpg') {
                        $('#visualizador3').append('<img src="' + _0x4ce11e + _0xca3444 + '" style="width:80%; height:auto" />');
                    }
                    if (_0x1d2667 == 'mp4') {
                        $('#visualizador3').append('<video controls style="width:80%; height:auto" width="80%" height="auto"><source src="' + _0x4ce11e + _0xca3444 + '" type="video/mp4" />Erro: Navegador sem suporte à vídeos.</video>');
                    }
                    if (_0x1d2667 == 'dwg') {
                        $('#visualizador3').append('<br/><br/>' + '<div class="card-deck mb-3 text-center">' + '<div class=\"card mb-4 shadow-sm\">' + '<div class="card-header">' + '<h4 class=\"my-0 font-weight-normal\">' + 'Arquivo de Projeto' + '</h4>' + '</div>' + '<div class="card-body">' + '<h1 class=\"card-title pricing-card-title\">' + _0x1be5d3 + ' <small class="text-muted">' + _0x550c56 + '</small></h1>' + '<ul class=\"list-unstyled mt-3 mb-4\">' + '<li>' + 'U:/Documentacao/' + pasta + '/' + nomearq + '/' + _0xca3444 + '</small></a>' + '</li>' + '</ul>' + '<div class="btn-group">' + '<a href="' + _0x4ce11e + '' + _0xca3444 + '" class="btn btn-primary active">' + '<i class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></i>' + '<i class="fa fa-download fa-2x"></i><br/>' + '<small>Baixar uma Cópia...</small>' + '</a>' + '</div>' + '</div>' + '</div>' + '</div>');
                    }
                    var _0x30a827 = document.querySelector('.thumbnail');
                    if (_0x30a827) {
                        _0x30a827.style.opacity = 0x1;
                    }
                    window.URL.revokeObjectURL(this.src);
                },
                'error': function (_0x2e623d) {}
            });
        }).jstree({
            'core': {
                'multiple': true,
                'themes': {
                    'dots': true,
                    'icons': true
                }
            },
            'plugins': ['search', 'changed', 'sort']
        });
        $('#s').submit(function (_0x4b3bab) {
            _0x4b3bab.preventDefault();
            $('#diretorio').jstree(true).search($('#q').val());
        });
        $('#diretorio').on('changed.jstree', function (_0x752a94, _0x1163ac) {});
    });
    $(window).resize(function () {
        var _0x50a648 = document.querySelector('.thumbnail');
        if (_0x50a648) {
            _0x50a648.style.opacity = 0x0;
        }
        window.URL.revokeObjectURL(this.src);
    });
    $('#diretorio').delay(0x2ee).queue(function () {
        var _0x23f8cb = ['Croqui', 'Cadastro', 'Estudo Preliminar', 'Contagem', 'Funcional', 'Básico', 'Executivo', 'Serviços Complementares', 'Programação', '', '', 'Reconstituição'];
        if (pasta != '@') {
            $('li a').each(function () {
                if ($(this).text().substring(0x0, 0x1) == 'L') {
                    var _0x43264b = '_';
                    var _0x4b2c27 = $(this).text().substring(0x0, 0x3);
                } else if ($(this).text().substring(0x0, 0x1) == 'F') {
                    var _0x43264b = '_';
                    var _0x4b2c27 = 'FOTO';
                } else if ($(this).text().substring(0x0, 0x1) == 'S') {
                    var _0x43264b = '_';
                    var _0x4b2c27 = 'SIMU';
                } else if ($(this).text().substring(0x0, 0x1) == 'B') {
                    var _0x43264b = '_';
                    var _0x4b2c27 = 'BAND';
                } else {
                    var _0x43264b = $(this).text().substring(0x0, 0x1);
                    var _0x4b2c27 = $(this).text().substring(0x1, 0x4);
                    if (_0x43264b == 0x1) {
                        if ($(this).text().substring(0x0, 0x2) == '1L') {
                            var _0x43264b = 0x1;
                        }
                        if ($(this).text().substring(0x0, 0x2) == '1T') {
                            var _0x43264b = 0xb;
                        }
                    }
                }
                switch (_0x4b2c27) {
                case 'BAND':
                    var _0x2a4594 = '<i class="fa fa-fw fa-bar-chart"></i>';
                    var _0x40f9ae = '';
                    break;
                case 'FOTO':
                    var _0x2a4594 = '<i class="fa fa-fw fa-picture-o"></i>';
                    var _0x40f9ae = 'Fotografias do Local';
                    break;
                case 'SIMU':
                    var _0x2a4594 = '<i class="fa fa-fw fa-youtube-play"></i>';
                    var _0x40f9ae = 'Simulações';
                    break;
                case 'A05':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Planta de Situação Geral';
                    break;
                case 'C01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pontes e Viadutos';
                    break;
                case 'C04':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Passarelas';
                    break;
                case 'C06':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Estruturas de Concreto - Estruturas de Edificações';
                    break;
                case 'E01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos - Redes de alimentação e distribuição, unifilares e polifilares';
                    break;
                case 'E02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos - Infraestrutura para instalações (eletrodutos, caixas e outros)';
                    break;
                case 'E04':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos – Instalações de BT, proteção e aterramento';
                    break;
                case 'E21':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Instalação Elétrica p/ Sistemas Semafóricos';
                    break;
                case 'E22':
                    var _0x2a4594 = '<i class="fa fa-fw fa-bolt"></i>';
                    var _0x40f9ae = 'Instalação Elétrica dos Semáforos';
                    break;
                case 'E23':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Rede de Comunicações p/ Sistemas Semafóricos';
                    break;
                case 'E24':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos - Iluminação Pública e Interna com análise luminotécnica';
                    break;
                case 'E25':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos - Iluminação Pública e Externa com análise luminotécnica';
                    break;
                case 'E26':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistemas Elétricos - Sistemas de Proteção às Descargas Atmosféricas';
                    break;
                case 'E27':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sinalização Semafórica e de Instalação Elétrica p/ Sistemas Semafóricos e de Câmera do Sistema de CFTV de Tráfego';
                    break;
                case 'E28':
                    var _0x2a4594 = '<i class="fa fa-fw fa-podcast"></i>';
                    var _0x40f9ae = 'Sistemas de Detecção';
                    break;
                case 'E29':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Instalação Elétrica p/ Sistemas de Detecção Veicular com Laço Virtual (através de Câmeras';
                    break;
                case 'E30':
                    var _0x2a4594 = '<i class="fa fa-fw fa-video-camera"></i>';
                    var _0x40f9ae = 'Sistema de Monitoramento por Câmera - CFTV';
                    break;
                case 'E31':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sistema de Informação ao Usuário - PMV-FIXO';
                    break;
                case 'F02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Geometria Viária - Traçado em planta';
                    break;
                case 'F03':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Geometria Viária - Traçado em perfil';
                    break;
                case 'F21':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Geometria Viária (Traçado em planta) e Acessibilidade';
                    break;
                case 'F22':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Geometria Viária (Traçado em planta) e Pavimentação (Planta de distribuição)';
                    break;
                case 'F23':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Acessibilidade Universal';
                    break;
                case 'F24':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Acessibilidade Universal e Mobiliário Urbano';
                    break;
                case 'G01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Mapeamento Geológico e localização de sondagens';
                    break;
                case 'H02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Hidráulica - Instalações Hidrosanitárias';
                    break;
                case 'H04':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Drenagem de vias';
                    break;
                case 'I01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Cadastro unificado de interferências';
                    break;
                case 'J01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Tráfego Motorizado';
                    break;
                case 'J19':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Classificação e Hierarquização do sistema viário';
                    break;
                case 'J21':
                    var _0x2a4594 = '<i class="fa fa-fw fa-car"></i>';
                    var _0x40f9ae = 'Contagem Volumétrica Classificada em Cruzamentos';
                    break;
                case 'J22':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem de Pedestres [registro de movimentos em interseção viária ou travessia(s) de pedestre sinalizadas]';
                    break;
                case 'J23':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Proposição (ou Proposta) de Circulação Viária';
                    break;
                case 'J24':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Reconfiguração Viária de Tráfego, Circulação, Estacionamento, Sinalização e Geometria';
                    break;
                case 'J25':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Avaliação (ou Auditoria) de Segurança Viária e Sinalização';
                    break;
                case 'J26':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Animação Gráfica de Fluxo Veicular em Situação de Circulação Viária';
                    break;
                case 'J27':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Animação Gráfica de Fluxo Pedestre em Situação de Circulação Viária';
                    break;
                case 'J28':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Animação Gráfica de Fluxo Pedestre e Veicular em Situação de Circulação Viária';
                    break;
                case 'J29':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Estimativa de Massa de Fluxo Veicular';
                    break;
                case 'J30':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes”';
                    break;
                case 'J31':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Depois”';
                    break;
                case 'J32':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes/Depois”';
                    break;
                case 'J33':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Interseção';
                    break;
                case 'J34':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Rotatória';
                    break;
                case 'J35':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Travessia de Pedestre';
                    break;
                case 'J36':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Nível de Serviço em Interseção Semaforizada';
                    break;
                case 'J37':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Nível de Serviço em Interseção não Semaforizada';
                    break;
                case 'J38':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Estudo de Impacto de Vizinhança [E.I.V.]';
                    break;
                case 'J39':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Relatório de Impacto no Trânsito [R.I.T.]';
                    break;
                case 'J40':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada e Volume de Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J41':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Avaliação do Tempo de Viagem por passagem em interseção nas diferentes situações de circulação viária';
                    break;
                case 'J42':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido único (Onda Verde)';
                    break;
                case 'J43':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido duplo (Onda Verde prioridade no sentido)';
                    break;
                case 'J44':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada e Volume de Bicicletas [registro de movimentos em interseção viária]';
                    break;
                case 'J45':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada e Volume de Bicicletas e Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J46':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada [registro das passagens] em seção viária';
                    break;
                case 'J47':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada e Volume de Bicicletas [registro das passagens] em seção viária';
                    break;
                case 'J48':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular Classificada em tipo de veículo e número de eixos [registro das passagens] em seção viária';
                    break;
                case 'J49':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem Veicular de tipo de veículo específico com registro de velocidade [registro das passagens] em seção viária';
                    break;
                case 'J50':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Identificação de Linhas em Parada de Ônibus';
                    break;
                case 'J51':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Embarque e Desembarque de passageiros em Parada de Ônibus com Identificação de Linhas';
                    break;
                case 'J52':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pesquisa de Ocupação Visual de Passageiros das Linhas de Ônibus em ponto [/local] do Sistema Viário';
                    break;
                case 'J53':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J54':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres em seção viária';
                    break;
                case 'J55':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Relatório de viabilidade de Implantação de Transposição viária/Reconfiguração Viária';
                    break;
                case 'J60':
                    var _0x2a4594 = '<i class="fa fa-fw fa-map"></i>';
                    var _0x40f9ae = 'Planta do Sistema Semafórico';
                    break;
                case 'J61':
                    var _0x2a4594 = '<i class="fa fa-fw fa-exchange"></i>';
                    var _0x40f9ae = 'Contagem Volumétrica de Origem e Destino - OD';
                    break;
                case 'K01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura - Paisagismo';
                    break;
                case 'K02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura - Plantas, Cortes e Vistas';
                    break;
                case 'K04':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura - Comunicação Visual';
                    break;
                case 'K05':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura - Mobiliário e leiaute';
                    break;
                case 'K07':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura – (Planejamentos) Urbanístico';
                    break;
                case 'K08':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura - Urbanização e Ajardinagem';
                    break;
                case 'K17':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Demolição)';
                    break;
                case 'K18':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Construção)';
                    break;
                case 'K21':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Arquitetura – Perspectivas Tridimensionais';
                    break;
                case 'K22':
                    var _0x2a4594 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                    var _0x40f9ae = 'Dutos RTD Comunicações';
                    break;
                case 'K23':
                    var _0x2a4594 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                    var _0x40f9ae = 'Dutos RTD Semáforos';
                    break;
                case 'J63':
                    var _0x2a4594 = '<i class="fa fa-fw fa-refresh"></i>';
                    var _0x40f9ae = 'Contagem Origem / Destino Veicular &#8211; 17';
                    break;
                case 'L01':
                    var _0x2a4594 = '<i class="fa fa-fw fa-road"></i>';
                    var _0x40f9ae = 'Sinalização Horizontal';
                    break;
                case 'L02':
                    var _0x2a4594 = '<i class="fa fa-fw fa-map-pin"></i>';
                    var _0x40f9ae = 'Sinalização Vertical';
                    break;
                case 'L03':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Dispositivos de Segurança Viária';
                    break;
                case 'L07':
                    var _0x2a4594 = '<i class="fa fa-fw fa-map-pin"></i><i class="fa fa-fw fa-road"></i>';
                    var _0x40f9ae = 'Sinalização Vertical e Horizontal';
                    break;
                case 'L12':
                    var _0x2a4594 = '<i class="fa fa-fw fa-ellipsis-v"></i>';
                    var _0x40f9ae = 'Sinalização Semafórica';
                    break;
                case 'L13':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Projeto de Orientação de Tráfego';
                    break;
                case 'L21':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Sinalização Vertical, Horizontal e Semafórica para veículos motorizados e não-motorizados (ou cicláveis) ';
                    break;
                case 'M02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Estruturas metálicas de edificações';
                    break;
                case 'O20':
                    var _0x2a4594 = '<i class="fa fa-fw fa-tasks"></i>';
                    var _0x40f9ae = 'Programação Semafórica';
                    break;
                case 'O21':
                    var _0x2a4594 = '<i class="fa fa-fw fa-edit"></i>';
                    var _0x40f9ae = 'Croqui Semafórico';
                    break;
                case 'O22':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Programação Semafórica em arquivo para transferência em equipamento Sice (Prado)';
                    break;
                case 'P02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Pavimentação - Planta de distribuição de pavimento';
                    break;
                case 'Q02':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Terraplenagem - Planta de distribuição de volumes';
                    break;
                case 'T01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Levantamento Topográfico – Planialtimétrico (Sistema convencional)';
                    break;
                case 'T21':
                    var _0x2a4594 = '<i class=\"fa fa-fw fa-globe\"></i>';
                    var _0x40f9ae = 'Bases de Projeto';
                    break;
                case 'T22':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Levantamento Topográfico – Planialtimétrico através sistema laser por nuvem de pontos';
                    break;
                case 'X01':
                    var _0x2a4594 = '';
                    var _0x40f9ae = 'Detecção e Combate à Incêndio';
                    break;
                default:
                    var _0x2a4594 = '';
                    var _0x40f9ae = ' ';
                }
                if (typeof _0x23f8cb[_0x43264b] != 'undefined' || _0x43264b == '_') {
                    if (_0x43264b == '_' || _0x23f8cb[_0x43264b] == _0x23f8cb[0x0] || _0x23f8cb[_0x43264b] == _0x23f8cb[0x3] || _0x23f8cb[_0x43264b] == _0x23f8cb[0x8]) {
                        $(this).prepend('<small title="' + _0x40f9ae + '\">' + _0x2a4594 + _0x40f9ae + ' </small> | &#x1f4c2; ');
                    } else {
                        $(this).prepend('<small title=\"' + _0x23f8cb[_0x43264b].toUpperCase() + ':' + _0x40f9ae + '\">' + _0x23f8cb[_0x43264b].toUpperCase() + ':' + _0x2a4594 + _0x40f9ae + ' </small> | &#x1f4c2; ');
                    }
                    if (nomeOriginal == 'Contagens') {
                        $(this).parent().addClass('d-none');
                        $('li a:contains(\"J21\")').parent().removeClass('d-none');
                    }
                    if (nomeOriginal == 'Rotatória') {
                        $(this).parent().addClass('d-none');
                        $('li a:contains(\"J63\")').parent().removeClass('d-none');
                    }
                }
            });
        }
    });
});