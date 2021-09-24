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
    $.get('/docs/Mapa/igu-Intersecoes.geojson', function (_0x464fe7) {
        var _0x582ef9 = JSON.parse(_0x464fe7);
        var _0x2dbd25 = eval(_0x582ef9);
        var _0x5b3b34 = _0x2dbd25.features;
        _0x5b3b34.sort(function (_0x36e363, _0xf737d0) {
            if (_0x36e363.properties.OINTERSECAONUMERO == _0xf737d0.properties.OINTERSECAONUMERO) return 0x0;
            if (_0x36e363.properties.OINTERSECAONUMERO < _0xf737d0.properties.OINTERSECAONUMERO) return -0x1;
            if (_0x36e363.properties.OINTERSECAONUMERO > _0xf737d0.properties.OINTERSECAONUMERO) return 0x1;
        });
        var _0x3182db = _0x5b3b34;
        var _0x5a63ed = _0x3182db.length;
        cabecalho = '<thead class=\"thead-inverse\">' + '  <tr>' + '     <th class="align-middle">&nbsp;' + icoInterSema + '&nbsp;</th>' + '     <th class="align-middle">Interseção&nbsp;(Logradouro)</th>' + '     <th class="align-middle">Modelo&nbsp;do<br />Controlador</th>' + '     <th class="align-middle">Principal / Conjugado</th>' + '     <th class=\"align-middle\">' + icoSubRedeSemaf + '<br />Rede<br />Semafórica</th>' + '     <th class="align-middle">' + icoRedeEntCruz + '<br />Projeto&nbsp;por<br />Interligação</th>' + '     <th class="align-middle">' + icoProjUrb + '<br />Projeto&nbsp;por<br />Subtrecho</th>' + '     <th class=\"align-middle\">' + icoContagem + '<br />Contagem</th>' + '  </tr>' + ' </thead>';
        $('#iguListagemIntersecoes').append(cabecalho);
        var _0x638443 = '';
        var _0x387d97 = 'Bug';
        for (i = 0x0; i < _0x3182db.length; i++) {
            if (_0x3182db[i].properties.ONUMMEDICAO > 0x0) {
                celulaContagem = ' ';
                celulaProjeto = ' ';
                celulaInterligacao = ' ';
                if (_0x3182db[i].properties.OCONTAGEM != '') {
                    celulaContagem = '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Intersecoes&i=' + _0x3182db[i].properties.OINTERSECAONUMERO + '&u=Contagens"    target="c"><small>Ver<br />Contagem&#8230;</small></a>';
                }
                if (_0x3182db[i].properties.OCORREDORLOCAL != '') {
                    celulaProjeto = '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Projetos&i=' + _0x3182db[i].properties.OINTERSECAONUMERO + '&u=Projetos"     target="r"><small>Ver<br />Projetos&#8230;</small></a>';
                }
                if (_0x3182db[i].properties.OINTERLIGACAO != '') {
                    celulaInterligacao = '<a title=\"Clique para ver a Documentação...\" href=\"/IGU_Documentacao?g=Projetos&i=' + _0x3182db[i].properties.OINTERLIGACAO + '&u=Interligação" target="l"><small>Ver<br />Projetos&#8230;</small></a>';
                }
                if (_0x3182db[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemaforizada') {
                    _0x387d97 = 'Semaforizada';
                    iguIconeIntersecao = iguIconeIntersecaoSemaforizada;
                }
                if (_0x3182db[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemaforizadaNova') {
                    _0x387d97 = 'Nova';
                    iguIconeIntersecao = iguIconeIntersecaoNova;
                }
                if (_0x3182db[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSemSemaforo') {
                    _0x387d97 = 'sem Semáforo';
                    iguIconeIntersecao = iguIconeIntersecaoSemSemaforo;
                }
                if (_0x3182db[i].properties.OINTERSECAOSITUACAO == 'IntersecaoSituacaoAdversa') {
                    _0x387d97 = 'Situação Adversa';
                    iguIconeIntersecao = iguIconeIntersecaoSituacaoAdversa;
                }
                switch (_0x3182db[i].properties.OINTERSECAOSITUACAO) {
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
                var _0x2b9824 = iguIconeEsq;
                celulaDocumentacao = '' + '<a title="Clique para ver a Documentação..." href="/IGU_Documentacao?g=Intersecoes&i=' + _0x3182db[i].properties.OINTERSECAONUMERO + '\" target=\"' + _0x3182db[i].properties.OINTERSECAONUMERO + '\">' + '<div class=\"' + iguIconeCor + ' rounded">' + _0x3182db[i].properties.OINTERSECAONUMERO + '<br>' + _0x2b9824 + '</div>' + '</a>';
                _0x638443 += '<tr>' + '<td data-igu-iid="' + _0x3182db[i].properties.OINTERSECAONUMERO + '" data-igu-lat="' + _0x3182db[i].geometry.coordinates[0x0] + '\" data-igu-lng=\"' + _0x3182db[i].geometry.coordinates[0x1] + '\">' + celulaDocumentacao + '<span class="hidden">' + _0x387d97 + '</span>' + '</td>' + '<td>' + _0x3182db[i].properties.OENDLOCALP + '<br>' + _0x3182db[i].properties.OENDLOCALS + '</td>' + '<td>' + _0x3182db[i].properties.OCTRL + '</td>' + '<td>' + _0x3182db[i].properties.OCTRLINSTALCONTROLE + '</td>' + '<td>' + _0x3182db[i].properties.OSUBREDE + '</td>' + '<td>' + celulaInterligacao + '</td>' + '<td>' + celulaProjeto + '</td>' + '<td>' + celulaContagem + '</td>' + '</tr>';
                filtroControladores.push(_0x3182db[i].properties.OCTRL);
                filtroSubRedes.push(_0x3182db[i].properties.OSUBREDE);
            }
        }
        $('#iguListagemIntersecoes tbody').append(_0x638443);

        function _0x2d8620(_0x2954e8, _0x5636b1, _0x14ff6a) {
            if (_0x2954e8 !== 'N/D' && _0x2954e8 !== '-' && _0x2954e8 !== ' ' && _0x2954e8 !== '0') {
                return _0x14ff6a.indexOf(_0x2954e8) === _0x5636b1;
            }
        }
        tags = 'Contagem,Principal,Conjugado,' + filtroControladores.filter(_0x2d8620) + ',' + filtroSubRedes.filter(_0x2d8620);
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