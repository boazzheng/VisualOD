var iguDADOS;
var filtroControladores = [];
var filtroAreas = [];
var tags = [];
var tags2 = [];
var filtroRedes = [];
var filtroSubRedes = [];
var filtroProjetos = [];
var filtroContagens = [];
$(document).ready(function () {
    $.getJSON('/docs/Mapa/igu-Intersecoes.geojson', function (_0x9fb029) {
        var _0xba6650 = _0x9fb029.features;
        _0xba6650.sort(function (_0xada9ed, _0x55d89d) {
            if (_0xada9ed.properties.OINTERSECAONUMERO == _0x55d89d.properties.OINTERSECAONUMERO) return 0x0;
            if (_0xada9ed.properties.OINTERSECAONUMERO < _0x55d89d.properties.OINTERSECAONUMERO) return -0x1;
            if (_0xada9ed.properties.OINTERSECAONUMERO > _0x55d89d.properties.OINTERSECAONUMERO) return 0x1;
        });
        var _0x2a209f = _0xba6650;
        var _0x5e5080 = _0x2a209f.length;
        cabecalho = '<thead class=\"thead-inverse\">' + '  <tr>' + '     <th class="align-middle">&nbsp;' + icoInterSema + '&nbsp;</th>' + '     <th class="align-middle">Interseção&nbsp;(Logradouro)</th>' + '     <th class="align-middle">Modelo&nbsp;do<br />Controlador</th>' + '     <th class="align-middle">Principal / Conjugado</th>' + '     <th class="align-middle">' + icoSubRedeSemaf + '<br />Rede<br />Semafórica</th>' + '     <th class=\"align-middle\">' + icoRedeEntCruz + '<br />Projeto&nbsp;por<br />Interligação</th>' + '     <th class="align-middle">' + icoProjUrb + '<br />Projeto&nbsp;por<br />Subtrecho</th>' + '     <th class=\"align-middle\">' + icoContagem + '<br />Contagem</th>' + '  </tr>' + ' </thead>';
        $('#iguListagemIntersecoes').append(cabecalho);
        var _0x159f72 = '';
        var _0x257380 = 'Bug';
        for (i = 0x0; i < _0x2a209f.length; i++) {
            if (_0x2a209f[i].properties.ONUMMEDICAO > 0x0) {
                celulaContagem = ' ';
                celulaProjeto = ' ';
                celulaInterligacao = ' ';
                if (_0x2a209f[i].properties.OCONTAGEM != '') {
                    celulaContagem = '<a title=\"Clique para ver a Documentação...\" href=\"/IGU_Documentacao?g=Intersecoes&i=' + _0x2a209f[i].properties.OINTERSECAONUMERO + '&u=Contagens"    target="c"><small>Ver<br />Contagem&#8230;</small></a>';
                }
                if (_0x2a209f[i].properties.OCORREDORLOCAL != '') {
                    celulaProjeto = '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Projetos&i=' + _0x2a209f[i].properties.OINTERSECAONUMERO + '&u=Projetos\"     target=\"r\"><small>Ver<br />Projetos&#8230;</small></a>';
                }
                if (_0x2a209f[i].properties.OINTERLIGACAO != '') {
                    celulaInterligacao = '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Projetos&i=' + _0x2a209f[i].properties.OINTERLIGACAO + '&u=Interligação" target="l"><small>Ver<br />Projetos&#8230;</small></a>';
                }
                if (_0x2a209f[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemaforizada') {
                    _0x257380 = 'Semaforizada';
                    iguIconeIntersecao = iguIconeIntersecaoSemaforizada;
                }
                if (_0x2a209f[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemaforizadaNova') {
                    _0x257380 = 'Nova';
                    iguIconeIntersecao = iguIconeIntersecaoNova;
                }
                if (_0x2a209f[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemSemaforo') {
                    _0x257380 = 'sem Semáforo';
                    iguIconeIntersecao = iguIconeIntersecaoSemSemaforo;
                }
                if (_0x2a209f[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSituacaoAdversa') {
                    _0x257380 = 'Situação Adversa';
                    iguIconeIntersecao = iguIconeIntersecaoSituacaoAdversa;
                }
                switch (_0x2a209f[i].properties.OINTERSECAOSITUACAO) {
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
                case 'RotatoriaSemaforizada':
                    iguIconeEsq = icoRotatoria;
                    iguIconeCor = corRotatoria;
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
                var _0x1a7382 = iguIconeEsq;
                celulaDocumentacao = '' + '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Intersecoes&i=' + _0x2a209f[i].properties.OINTERSECAONUMERO + '\" target=\"' + _0x2a209f[i].properties.OINTERSECAONUMERO + '\">' + '<div class="' + iguIconeCor + ' rounded\">' + _0x2a209f[i].properties.OINTERSECAONUMERO + '<br>' + _0x1a7382 + '</div>' + '</a>';
                _0x159f72 += '<tr>' + '<td data-igu-iid="' + _0x2a209f[i].properties.OINTERSECAONUMERO + '" data-igu-lat="' + _0x2a209f[i].geometry.coordinates[0x0] + '" data-igu-lng="' + _0x2a209f[i].geometry.coordinates[0x1] + '\">' + celulaDocumentacao + '<span class=\"hidden\">' + _0x257380 + '</span>' + '</td>' + '<td>' + _0x2a209f[i].properties.OENDLOCALP + '<br>' + _0x2a209f[i].properties.OENDLOCALS + '</td>' + '<td>' + _0x2a209f[i].properties.OCTRL + '</td>' + '<td>' + _0x2a209f[i].properties.OCTRLINSTALCONTROLE + '</td>' + '<td>' + _0x2a209f[i].properties.OSUBREDE + '</td>' + '<td>' + celulaInterligacao + '</td>' + '<td>' + celulaProjeto + '</td>' + '<td>' + celulaContagem + '</td>' + '</tr>';
                filtroControladores.push(_0x2a209f[i].properties.OCTRL);
                filtroSubRedes.push(_0x2a209f[i].properties.OSUBREDE);
            }
        }
        $('#iguListagemIntersecoes tbody').append(_0x159f72);

        function _0x1fb282(_0x68efde, _0x3c79d0, _0x5d1e93) {
            if (_0x68efde !== 'N/D' && _0x68efde !== '-' && _0x68efde !== ' ' && _0x68efde !== '0') {
                return _0x5d1e93.indexOf(_0x68efde) === _0x3c79d0;
            }
        }
        tags = 'Contagem,Principal,Conjugado,' + filtroControladores.filter(_0x1fb282) + ',' + filtroSubRedes.filter(_0x1fb282);
        tags = tags.split(',');
        $('.igu-tabela tr').click(function () {
            n = $(this).find('td').attr('data-igu-iid');
            X = $(this).find('td').attr('data-igu-lng');
            Y = $(this).find('td').attr('data-igu-lat');
            map.setView([X, Y], iguZoom + 0x3);
        });
        setTimeout(function () {
            $('table#iguListagemIntersecoes').filterTable({
                'inputSelector': '#buscaFiltro',
                'ignoreColumns': [0x5, 0x6],
                'placeholder': 'Busca...',
                'highlightClass': 'bg-success',
                'quickListGroupTag': 'b',
                'quickListTag': 'span',
                'quickListClass': 'badge btn-escuro ml-1',
                'quickList': tags,
                'quickListClear': '[ <i class=\"fa fa-fw fa-times\" aria-hidden=\"true\"></i>Limpar&nbsp;Busca ]',
                'minChars': 0x2
            });
            $('#bsico').removeClass('fa-spinner fa-pulse');
            $('#bsico').addClass('fa-binoculars');
        }, 0xfa0);
    });
});