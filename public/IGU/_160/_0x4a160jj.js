var semFolhaJS = 'Sim';
$(document).ready(function () {
    $.getScript('/docs/Mapa/igu-MunicipioConfigurar.js');

    function _0x37dba1(_0x41db9e) {
        var _0x2160ff = new RegExp(_0x41db9e + '=([^&]*)', 'i').exec(window.location.search);
        return _0x2160ff && unescape(_0x2160ff[0x1]) || '';
    }
    nomearq = _0x37dba1('i');
    pasta = _0x37dba1('g');
    nomeOriginal = _0x37dba1('u');
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
    var _0x23b1ca;
    var _0x49a2d7 = {
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

    function _0x256493(_0x36e424, _0x52761b, _0x11ca33, _0x2a179d) {
        $.ajax({
            'url': _0x36e424,
            'type': 'HEAD',
            'success': function () {
                PDFObject.embed(_0x36e424, '#visualizador3', _0x49a2d7);
            },
            'error': function () {
                console.log('PDFObject.visualizador3.erro');
            }
        });
    };

    function _0x5d0f24(_0x280402, _0x2891b7, _0x323606, _0x58440b, _0x4fc0df) {
        $.ajax({
            'url': _0x280402 + '_' + _0x4fc0df + '.pdf',
            'type': 'HEAD',
            'success': function () {
                if (_0x4fc0df == 0x1) {}
                $('<div id=\"PDF' + _0x2891b7 + '_' + _0x4fc0df + '"></div>').appendTo('#PDF' + _0x2891b7);
                PDFObject.embed(_0x280402 + '_' + _0x4fc0df + '.pdf', '#PDF' + _0x2891b7 + '_' + _0x4fc0df, _0x49a2d7);
                _0x5d0f24(_0x280402, _0x2891b7, _0x323606, _0x58440b, _0x4fc0df + 0x1);
            }
        });
    };
    $(function () {
        $('#diretorio').on('changed.jstree', function (_0x4fb037, _0x4512d5) {
            var _0x14d150 = _0x4512d5.instance.get_path(_0x4512d5.node, '/');
            var _0x50c385 = 'http://localhost:8102' + '/docs/' + pasta + '/' + nomearq + '/';
            $.ajax({
                'url': _0x50c385 + _0x14d150,
                'success': function (_0x5806a5) {
                    var _0x439671 = '';
                    var _0x5b7bf7 = ['Croqui', 'Cadastro', 'Estudo Preliminar', 'Contagem', 'Funcional', 'Básico', 'Executivo', 'Serviços Complementares', 'Programação', '', '', 'Reconstituição'];
                    var _0x1c07cb = _0x14d150.slice(-0x3).toLowerCase();
                    var _0x5ba123 = [];
                    if (_0x1c07cb == 'pdf') {
                        if (_0x14d150.search('/') == -0x1) {
                            var _0x5ba123 = _0x14d150.split('-')[0x4];
                            if (!_0x5ba123) {
                                var _0x5ba123 = '*';
                            }
                        } else {
                            var _0x5ba123 = _0x14d150.split('/')[0x1].split('-')[0x4];
                        }
                        var _0x4bcbbd = _0x5ba123.substring(0x0, 0x1);
                        var _0xac0aca = _0x5ba123.substring(0x1, 0x4);
                        switch (_0xac0aca) {
                        case 'BAND':
                            var _0x3368b1 = '<i class="fa fa-fw fa-bar-chart"></i>';
                            var _0x439671 = '';
                            break;
                        case 'FOTO':
                            var _0x3368b1 = '<i class="fa fa-fw fa-picture-o"></i>';
                            var _0x439671 = 'Fotografias do Local';
                            break;
                        case 'SIMU':
                            var _0x3368b1 = '<i class="fa fa-fw fa-youtube-play"></i>';
                            var _0x439671 = 'Simulações';
                            break;
                        case 'A05':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Planta de Situação Geral';
                            break;
                        case 'C01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pontes e Viadutos';
                            break;
                        case 'C04':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Passarelas';
                            break;
                        case 'C06':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Estruturas de Concreto - Estruturas de Edificações';
                            break;
                        case 'E01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos - Redes de alimentação e distribuição, unifilares e polifilares';
                            break;
                        case 'E02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos - Infraestrutura para instalações (eletrodutos, caixas e outros)';
                            break;
                        case 'E04':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos – Instalações de BT, proteção e aterramento';
                            break;
                        case 'E21':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Instalação Elétrica p/ Sistemas Semafóricos';
                            break;
                        case 'E22':
                            var _0x3368b1 = '<i class=\"fa fa-fw fa-bolt\"></i>';
                            var _0x439671 = 'Instalação Elétrica dos Semáforos';
                            break;
                        case 'E23':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Rede de Comunicações p/ Sistemas Semafóricos';
                            break;
                        case 'E24':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos - Iluminação Pública e Interna com análise luminotécnica';
                            break;
                        case 'E25':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos - Iluminação Pública e Externa com análise luminotécnica';
                            break;
                        case 'E26':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistemas Elétricos - Sistemas de Proteção às Descargas Atmosféricas';
                            break;
                        case 'E27':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sinalização Semafórica e de Instalação Elétrica p/ Sistemas Semafóricos e de Câmera do Sistema de CFTV de Tráfego';
                            break;
                        case 'E28':
                            var _0x3368b1 = '<i class="fa fa-fw fa-podcast"></i>';
                            var _0x439671 = 'Sistemas de Detecção';
                            break;
                        case 'E29':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Instalação Elétrica p/ Sistemas de Detecção Veicular com Laço Virtual (através de Câmeras';
                            break;
                        case 'E30':
                            var _0x3368b1 = '<i class="fa fa-fw fa-video-camera"></i>';
                            var _0x439671 = 'Sistema de Monitoramento por Câmera - CFTV';
                            break;
                        case 'E31':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sistema de Informação ao Usuário - PMV-FIXO';
                            break;
                        case 'F02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Geometria Viária - Traçado em planta';
                            break;
                        case 'F03':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Geometria Viária - Traçado em perfil';
                            break;
                        case 'F21':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Geometria Viária (Traçado em planta) e Acessibilidade';
                            break;
                        case 'F22':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Geometria Viária (Traçado em planta) e Pavimentação (Planta de distribuição)';
                            break;
                        case 'F23':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Acessibilidade Universal';
                            break;
                        case 'F24':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Acessibilidade Universal e Mobiliário Urbano';
                            break;
                        case 'G01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Mapeamento Geológico e localização de sondagens';
                            break;
                        case 'H02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Hidráulica - Instalações Hidrosanitárias';
                            break;
                        case 'H04':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Drenagem de vias';
                            break;
                        case 'I01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Cadastro unificado de interferências';
                            break;
                        case 'J01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Tráfego Motorizado';
                            break;
                        case 'J19':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Classificação e Hierarquização do sistema viário';
                            break;
                        case 'J21':
                            var _0x3368b1 = '<i class="fa fa-fw fa-car"></i>';
                            var _0x439671 = 'Contagem Volumétrica Classificada em Cruzamentos';
                            break;
                        case 'J22':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem de Pedestres [registro de movimentos em interseção viária ou travessia(s) de pedestre sinalizadas]';
                            break;
                        case 'J23':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Proposição (ou Proposta) de Circulação Viária';
                            break;
                        case 'J24':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Reconfiguração Viária de Tráfego, Circulação, Estacionamento, Sinalização e Geometria';
                            break;
                        case 'J25':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Avaliação (ou Auditoria) de Segurança Viária e Sinalização';
                            break;
                        case 'J26':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Animação Gráfica de Fluxo Veicular em Situação de Circulação Viária';
                            break;
                        case 'J27':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Animação Gráfica de Fluxo Pedestre em Situação de Circulação Viária';
                            break;
                        case 'J28':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Animação Gráfica de Fluxo Pedestre e Veicular em Situação de Circulação Viária';
                            break;
                        case 'J29':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Estimativa de Massa de Fluxo Veicular';
                            break;
                        case 'J30':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes”';
                            break;
                        case 'J31':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Depois”';
                            break;
                        case 'J32':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes/Depois”';
                            break;
                        case 'J33':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Interseção';
                            break;
                        case 'J34':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Rotatória';
                            break;
                        case 'J35':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Travessia de Pedestre';
                            break;
                        case 'J36':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Nível de Serviço em Interseção Semaforizada';
                            break;
                        case 'J37':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Nível de Serviço em Interseção não Semaforizada';
                            break;
                        case 'J38':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Estudo de Impacto de Vizinhança [E.I.V.]';
                            break;
                        case 'J39':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Relatório de Impacto no Trânsito [R.I.T.]';
                            break;
                        case 'J40':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada e Volume de Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J41':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Avaliação do Tempo de Viagem por passagem em interseção nas diferentes situações de circulação viária';
                            break;
                        case 'J42':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido único (Onda Verde)';
                            break;
                        case 'J43':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido duplo (Onda Verde prioridade no sentido)';
                            break;
                        case 'J44':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro de movimentos em interseção viária]';
                            break;
                        case 'J45':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada e Volume de Bicicletas e Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J46':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada [registro das passagens] em seção viária';
                            break;
                        case 'J47':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro das passagens] em seção viária';
                            break;
                        case 'J48':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular Classificada em tipo de veículo e número de eixos [registro das passagens] em seção viária';
                            break;
                        case 'J49':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem Veicular de tipo de veículo específico com registro de velocidade [registro das passagens] em seção viária';
                            break;
                        case 'J50':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Identificação de Linhas em Parada de Ônibus';
                            break;
                        case 'J51':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Embarque e Desembarque de passageiros em Parada de Ônibus com Identificação de Linhas';
                            break;
                        case 'J52':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pesquisa de Ocupação Visual de Passageiros das Linhas de Ônibus em ponto [/local] do Sistema Viário';
                            break;
                        case 'J53':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres [registro de movimentos em interseção viária]';
                            break;
                        case 'J54':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres em seção viária';
                            break;
                        case 'J55':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Relatório de viabilidade de Implantação de Transposição viária/Reconfiguração Viária';
                            break;
                        case 'J60':
                            var _0x3368b1 = '<i class="fa fa-fw fa-map"></i>';
                            var _0x439671 = 'Planta do Sistema Semafórico';
                            break;
                        case 'J61':
                            var _0x3368b1 = '<i class="fa fa-fw fa-exchange"></i>';
                            var _0x439671 = 'Contagem Volumétrica de Origem e Destino - OD';
                            break;
                        case 'J63':
                            var _0x3368b1 = '<i class="fa fa-fw fa-refresh"></i>';
                            var _0x439671 = 'Contagem Origem/Destino Veicular &#8211; 17';
                            break;
                        case 'K01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Paisagismo';
                            break;
                        case 'K02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Plantas, Cortes e Vistas';
                            break;
                        case 'K04':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Comunicação Visual';
                            break;
                        case 'K05':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Mobiliário e leiaute';
                            break;
                        case 'K07':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura – (Planejamentos) Urbanístico';
                            break;
                        case 'K08':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Urbanização e Ajardinagem';
                            break;
                        case 'K17':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Demolição)';
                            break;
                        case 'K18':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Construção)';
                            break;
                        case 'K21':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura – Perspectivas Tridimensionais';
                            break;
                        case 'K22':
                            var _0x3368b1 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                            var _0x439671 = 'Dutos RTD Comunicações';
                            break;
                        case 'K23':
                            var _0x3368b1 = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                            var _0x439671 = 'Dutos RTD Semáforos';
                            break;
                        case 'K24':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Arquitetura - Reavaliação de Paradas de Ônibus com proposição para melhorias';
                            break;
                        case 'L01':
                            var _0x3368b1 = '<i class=\"fa fa-fw fa-road\"></i>';
                            var _0x439671 = 'Sinalização Horizontal';
                            break;
                        case 'L02':
                            var _0x3368b1 = '<i class="fa fa-fw fa-map-pin"></i>';
                            var _0x439671 = 'Sinalização Vertical';
                            break;
                        case 'L03':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Dispositivos de Segurança Viária';
                            break;
                        case 'L07':
                            var _0x3368b1 = '<i class="fa fa-fw fa-map-pin"></i><i class="fa fa-fw fa-road"></i>';
                            var _0x439671 = 'Sinalização Vertical e Horizontal';
                            break;
                        case 'L12':
                            var _0x3368b1 = '<i class="fa fa-fw fa-ellipsis-v"></i>';
                            var _0x439671 = 'Sinalização Semafórica';
                            break;
                        case 'L13':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Projeto de Orientação de Tráfego';
                            break;
                        case 'L21':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Sinalização Vertical, Horizontal e Semafórica para veículos motorizados e não-motorizados (ou cicláveis) ';
                            break;
                        case 'M02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Estruturas metálicas de edificações';
                            break;
                        case 'O20':
                            var _0x3368b1 = '<i class="fa fa-fw fa-tasks"></i>';
                            var _0x439671 = 'Programação Semafórica';
                            break;
                        case 'O21':
                            var _0x3368b1 = '<i class="fa fa-fw fa-edit"></i>';
                            var _0x439671 = 'Croqui Semafórico';
                            break;
                        case 'O22':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Programação Semafórica em arquivo para transferência em equipamento Sice (Prado)';
                            break;
                        case 'P02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Pavimentação - Planta de distribuição de pavimento';
                            break;
                        case 'Q02':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Terraplenagem - Planta de distribuição de volumes';
                            break;
                        case 'T01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Levantamento Topográfico – Planialtimétrico (Sistema convencional)';
                            break;
                        case 'T21':
                            var _0x3368b1 = '<i class="fa fa-fw fa-globe"></i>';
                            var _0x439671 = 'Bases de Projeto';
                            break;
                        case 'T22':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Levantamento Topográfico – Planialtimétrico através sistema laser por nuvem de pontos';
                            break;
                        case 'X01':
                            var _0x3368b1 = '';
                            var _0x439671 = 'Detecção e Combate à Incêndio';
                            break;
                        default:
                            var _0x3368b1 = '';
                            var _0x439671 = ' ';
                        }
                        if (!_0x4bcbbd == '*') {
                            var _0x47fd02 = _0x5b7bf7[_0x4bcbbd] + ' / ' + _0x439671;
                        } else {
                            var _0x47fd02 = _0x439671;
                        }
                    } else if (_0x1c07cb == 'jpg') {
                        var _0x47fd02 = 'Fotografia';
                    } else if (_0x1c07cb == 'mp4') {
                        var _0x47fd02 = 'Simulação';
                    }
                    $('#ver2').html('' + '<div class=\"title\" id=\"nome2\"><small>' + nomearq + ' / ' + _0x47fd02 + ' / ' + _0x14d150 + '</small>' + '</div>' + '<iframe id="visualizador2" src="' + _0x50c385 + _0x14d150 + '"></iframe>');
                    var _0x591b28 = $('body').innerHeight() - 0x38;
                    var _0x18336f = $('body').innerWidth() - 0x14a;
                    $('#ver3').html('' + '<div class="title" id="nome3"><small>' + nomearq + ' / ' + _0x47fd02 + ' / ' + _0x14d150 + '</small>' + '</div>' + '<div id="visualizador3" style="width:' + _0x18336f + 'px; height:' + _0x591b28 + 'px;"></div>');
                    if (_0x1c07cb == 'pdf') {
                        _0x256493(_0x50c385 + _0x14d150, '#visualizador3', 'teste', 'ico');
                    }
                    if (_0x1c07cb == 'jpg') {
                        $('#visualizador3').append('<img src="' + _0x50c385 + _0x14d150 + '\" style=\"width:80%; height:auto\" />');
                    }
                    if (_0x1c07cb == 'mp4') {
                        $('#visualizador3').append('<video controls style="width:80%; height:auto" width="80%" height="auto"><source src="' + _0x50c385 + _0x14d150 + '" type="video/mp4" />Erro: Navegador sem suporte à vídeos.</video>');
                    }
                    var _0x529f53 = document.querySelector('.thumbnail');
                    if (_0x529f53) {
                        _0x529f53.style.opacity = 0x1;
                    }
                    window.URL.revokeObjectURL(this.src);
                },
                'error': function (_0x393401) {}
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
        $('#s').submit(function (_0x5e4b13) {
            _0x5e4b13.preventDefault();
            $('#diretorio').jstree(true).search($('#q').val());
        });
        $('#diretorio').on('changed.jstree', function (_0x4f7d5, _0x198dcb) {});
    });
    $(window).resize(function () {
        var _0x2471e7 = document.querySelector('.thumbnail');
        if (_0x2471e7) {
            _0x2471e7.style.opacity = 0x0;
        }
        window.URL.revokeObjectURL(this.src);
    });
    $('#diretorio').delay(0x2ee).queue(function () {
        var _0x55d415 = ['Croqui', 'Cadastro', 'Estudo Preliminar', 'Contagem', 'Funcional', 'Básico', 'Executivo', 'Serviços Complementares', 'Programação', '', '', 'Reconstituição'];
        if (pasta != '@') {
            $('li a').each(function () {
                if ($(this).text().substring(0x0, 0x1) == 'L') {
                    var _0x32c92f = '_';
                    var _0x2ddcd3 = $(this).text().substring(0x0, 0x3);
                } else if ($(this).text().substring(0x0, 0x1) == 'F') {
                    var _0x32c92f = '_';
                    var _0x2ddcd3 = 'FOTO';
                } else if ($(this).text().substring(0x0, 0x1) == 'S') {
                    var _0x32c92f = '_';
                    var _0x2ddcd3 = 'SIMU';
                } else if ($(this).text().substring(0x0, 0x1) == 'B') {
                    var _0x32c92f = '_';
                    var _0x2ddcd3 = 'BAND';
                } else {
                    var _0x32c92f = $(this).text().substring(0x0, 0x1);
                    var _0x2ddcd3 = $(this).text().substring(0x1, 0x4);
                    if (_0x32c92f == 0x1) {
                        if ($(this).text().substring(0x0, 0x2) == '1L') {
                            var _0x32c92f = 0x1;
                        }
                        if ($(this).text().substring(0x0, 0x2) == '1T') {
                            var _0x32c92f = 0xb;
                        }
                    }
                }
                switch (_0x2ddcd3) {
                case 'BAND':
                    var _0x2722ae = '<i class="fa fa-fw fa-bar-chart"></i>';
                    var _0x174f72 = '';
                    break;
                case 'FOTO':
                    var _0x2722ae = '<i class="fa fa-fw fa-picture-o"></i>';
                    var _0x174f72 = 'Fotografias do Local';
                    break;
                case 'SIMU':
                    var _0x2722ae = '<i class=\"fa fa-fw fa-youtube-play\"></i>';
                    var _0x174f72 = 'Simulações';
                    break;
                case 'A05':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Planta de Situação Geral';
                    break;
                case 'C01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pontes e Viadutos';
                    break;
                case 'C04':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Passarelas';
                    break;
                case 'C06':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Estruturas de Concreto - Estruturas de Edificações';
                    break;
                case 'E01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos - Redes de alimentação e distribuição, unifilares e polifilares';
                    break;
                case 'E02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos - Infraestrutura para instalações (eletrodutos, caixas e outros)';
                    break;
                case 'E04':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos – Instalações de BT, proteção e aterramento';
                    break;
                case 'E21':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Instalação Elétrica p/ Sistemas Semafóricos';
                    break;
                case 'E22':
                    var _0x2722ae = '<i class="fa fa-fw fa-bolt"></i>';
                    var _0x174f72 = 'Instalação Elétrica dos Semáforos';
                    break;
                case 'E23':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Rede de Comunicações p/ Sistemas Semafóricos';
                    break;
                case 'E24':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos - Iluminação Pública e Interna com análise luminotécnica';
                    break;
                case 'E25':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos - Iluminação Pública e Externa com análise luminotécnica';
                    break;
                case 'E26':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistemas Elétricos - Sistemas de Proteção às Descargas Atmosféricas';
                    break;
                case 'E27':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sinalização Semafórica e de Instalação Elétrica p/ Sistemas Semafóricos e de Câmera do Sistema de CFTV de Tráfego';
                    break;
                case 'E28':
                    var _0x2722ae = '<i class=\"fa fa-fw fa-podcast\"></i>';
                    var _0x174f72 = 'Sistemas de Detecção';
                    break;
                case 'E29':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Instalação Elétrica p/ Sistemas de Detecção Veicular com Laço Virtual (através de Câmeras';
                    break;
                case 'E30':
                    var _0x2722ae = '<i class="fa fa-fw fa-video-camera"></i>';
                    var _0x174f72 = 'Sistema de Monitoramento por Câmera - CFTV';
                    break;
                case 'E31':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sistema de Informação ao Usuário - PMV-FIXO';
                    break;
                case 'F02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Geometria Viária - Traçado em planta';
                    break;
                case 'F03':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Geometria Viária - Traçado em perfil';
                    break;
                case 'F21':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Geometria Viária (Traçado em planta) e Acessibilidade';
                    break;
                case 'F22':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Geometria Viária (Traçado em planta) e Pavimentação (Planta de distribuição)';
                    break;
                case 'F23':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Acessibilidade Universal';
                    break;
                case 'F24':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Acessibilidade Universal e Mobiliário Urbano';
                    break;
                case 'G01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Mapeamento Geológico e localização de sondagens';
                    break;
                case 'H02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Hidráulica - Instalações Hidrosanitárias';
                    break;
                case 'H04':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Drenagem de vias';
                    break;
                case 'I01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Cadastro unificado de interferências';
                    break;
                case 'J01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Tráfego Motorizado';
                    break;
                case 'J19':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Classificação e Hierarquização do sistema viário';
                    break;
                case 'J21':
                    var _0x2722ae = '<i class=\"fa fa-fw fa-car\"></i>';
                    var _0x174f72 = 'Contagem Volumétrica Classificada em Cruzamentos';
                    break;
                case 'J22':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem de Pedestres [registro de movimentos em interseção viária ou travessia(s) de pedestre sinalizadas]';
                    break;
                case 'J23':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Proposição (ou Proposta) de Circulação Viária';
                    break;
                case 'J24':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Reconfiguração Viária de Tráfego, Circulação, Estacionamento, Sinalização e Geometria';
                    break;
                case 'J25':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Avaliação (ou Auditoria) de Segurança Viária e Sinalização';
                    break;
                case 'J26':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Animação Gráfica de Fluxo Veicular em Situação de Circulação Viária';
                    break;
                case 'J27':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Animação Gráfica de Fluxo Pedestre em Situação de Circulação Viária';
                    break;
                case 'J28':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Animação Gráfica de Fluxo Pedestre e Veicular em Situação de Circulação Viária';
                    break;
                case 'J29':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Estimativa de Massa de Fluxo Veicular';
                    break;
                case 'J30':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes”';
                    break;
                case 'J31':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Depois”';
                    break;
                case 'J32':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Velocidade e Retardamento em Rotas de Circulação – “Antes/Depois”';
                    break;
                case 'J33':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Interseção';
                    break;
                case 'J34':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Rotatória';
                    break;
                case 'J35':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Relatório de Viabilidade de Implantação de Sinalização Semafórica em Travessia de Pedestre';
                    break;
                case 'J36':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Nível de Serviço em Interseção Semaforizada';
                    break;
                case 'J37':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Nível de Serviço em Interseção não Semaforizada';
                    break;
                case 'J38':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Estudo de Impacto de Vizinhança [E.I.V.]';
                    break;
                case 'J39':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Relatório de Impacto no Trânsito [R.I.T.]';
                    break;
                case 'J40':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada e Volume de Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J41':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Avaliação do Tempo de Viagem por passagem em interseção nas diferentes situações de circulação viária';
                    break;
                case 'J42':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido único (Onda Verde)';
                    break;
                case 'J43':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Diagrama das Bandas de Coordenação em rota de circulação em via de sentido duplo (Onda Verde prioridade no sentido)';
                    break;
                case 'J44':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro de movimentos em interseção viária]';
                    break;
                case 'J45':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada e Volume de Bicicletas e Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J46':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada [registro das passagens] em seção viária';
                    break;
                case 'J47':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada e Volume de Bicicletas [registro das passagens] em seção viária';
                    break;
                case 'J48':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular Classificada em tipo de veículo e número de eixos [registro das passagens] em seção viária';
                    break;
                case 'J49':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem Veicular de tipo de veículo específico com registro de velocidade [registro das passagens] em seção viária';
                    break;
                case 'J50':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Identificação de Linhas em Parada de Ônibus';
                    break;
                case 'J51':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Embarque e Desembarque de passageiros em Parada de Ônibus com Identificação de Linhas';
                    break;
                case 'J52':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pesquisa de Ocupação Visual de Passageiros das Linhas de Ônibus em ponto [/local] do Sistema Viário';
                    break;
                case 'J53':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres [registro de movimentos em interseção viária]';
                    break;
                case 'J54':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Contagem de Veiculo tipo bicicleta e Volume de Pedestres em seção viária';
                    break;
                case 'J55':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Relatório de viabilidade de Implantação de Transposição viária/Reconfiguração Viária';
                    break;
                case 'J60':
                    var _0x2722ae = '<i class="fa fa-fw fa-map"></i>';
                    var _0x174f72 = 'Planta do Sistema Semafórico';
                    break;
                case 'J61':
                    var _0x2722ae = '<i class="fa fa-fw fa-exchange"></i>';
                    var _0x174f72 = 'Contagem Volumétrica de Origem e Destino - OD';
                    break;
                case 'K01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura - Paisagismo';
                    break;
                case 'K02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura - Plantas, Cortes e Vistas';
                    break;
                case 'K04':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura - Comunicação Visual';
                    break;
                case 'K05':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura - Mobiliário e leiaute';
                    break;
                case 'K07':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura – (Planejamentos) Urbanístico';
                    break;
                case 'K08':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura - Urbanização e Ajardinagem';
                    break;
                case 'K17':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Demolição)';
                    break;
                case 'K18':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Urbanístico para Infraestrutura de Apoio à Acessibilidade (Construção)';
                    break;
                case 'K21':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Arquitetura – Perspectivas Tridimensionais';
                    break;
                case 'K22':
                    var _0x2722ae = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                    var _0x174f72 = 'Dutos RTD Comunicações';
                    break;
                case 'K23':
                    var _0x2722ae = '<i class="fa fa-fw fa-bars fa-rotate-90"></i>';
                    var _0x174f72 = 'Dutos RTD Semáforos';
                    break;
                case 'J63':
                    var _0x2722ae = '<i class="fa fa-fw fa-refresh"></i>';
                    var _0x174f72 = 'Contagem Origem / Destino Veicular &#8211; 17';
                    break;
                case 'L01':
                    var _0x2722ae = '<i class="fa fa-fw fa-road"></i>';
                    var _0x174f72 = 'Sinalização Horizontal';
                    break;
                case 'L02':
                    var _0x2722ae = '<i class="fa fa-fw fa-map-pin"></i>';
                    var _0x174f72 = 'Sinalização Vertical';
                    break;
                case 'L03':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Dispositivos de Segurança Viária';
                    break;
                case 'L07':
                    var _0x2722ae = '<i class=\"fa fa-fw fa-map-pin\"></i><i class=\"fa fa-fw fa-road\"></i>';
                    var _0x174f72 = 'Sinalização Vertical e Horizontal';
                    break;
                case 'L12':
                    var _0x2722ae = '<i class="fa fa-fw fa-ellipsis-v"></i>';
                    var _0x174f72 = 'Sinalização Semafórica';
                    break;
                case 'L13':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Projeto de Orientação de Tráfego';
                    break;
                case 'L21':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Sinalização Vertical, Horizontal e Semafórica para veículos motorizados e não-motorizados (ou cicláveis) ';
                    break;
                case 'M02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Estruturas metálicas de edificações';
                    break;
                case 'O20':
                    var _0x2722ae = '<i class="fa fa-fw fa-tasks"></i>';
                    var _0x174f72 = 'Programação Semafórica';
                    break;
                case 'O21':
                    var _0x2722ae = '<i class="fa fa-fw fa-edit"></i>';
                    var _0x174f72 = 'Croqui Semafórico';
                    break;
                case 'O22':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Programação Semafórica em arquivo para transferência em equipamento Sice (Prado)';
                    break;
                case 'P02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Pavimentação - Planta de distribuição de pavimento';
                    break;
                case 'Q02':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Terraplenagem - Planta de distribuição de volumes';
                    break;
                case 'T01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Levantamento Topográfico – Planialtimétrico (Sistema convencional)';
                    break;
                case 'T21':
                    var _0x2722ae = '<i class="fa fa-fw fa-globe"></i>';
                    var _0x174f72 = 'Bases de Projeto';
                    break;
                case 'T22':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Levantamento Topográfico – Planialtimétrico através sistema laser por nuvem de pontos';
                    break;
                case 'X01':
                    var _0x2722ae = '';
                    var _0x174f72 = 'Detecção e Combate à Incêndio';
                    break;
                default:
                    var _0x2722ae = '';
                    var _0x174f72 = ' ';
                }
                if (typeof _0x55d415[_0x32c92f] != 'undefined' || _0x32c92f == '_') {
                    if (_0x32c92f == '_' || _0x55d415[_0x32c92f] == _0x55d415[0x0] || _0x55d415[_0x32c92f] == _0x55d415[0x3] || _0x55d415[_0x32c92f] == _0x55d415[0x8]) {
                        $(this).prepend('<small title=\"' + _0x174f72 + '\">' + _0x2722ae + _0x174f72 + ' </small> | &#x1f4c2; ');
                    } else {
                        $(this).prepend('<small title="' + _0x55d415[_0x32c92f].toUpperCase() + ':' + _0x174f72 + '\">' + _0x55d415[_0x32c92f].toUpperCase() + ':' + _0x2722ae + _0x174f72 + ' </small> | &#x1f4c2; ');
                    }
                    if (nomeOriginal == 'Contagens') {
                        $(this).parent().addClass('d-none');
                        $('li a:contains("J21")').parent().removeClass('d-none');
                    }
                    if (nomeOriginal == 'Rotatória') {
                        $(this).parent().addClass('d-none');
                        $('li a:contains("J63")').parent().removeClass('d-none');
                    }
                }
            });
        }
    });
});