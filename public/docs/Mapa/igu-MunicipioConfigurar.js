/*
  IGU 2018
*/
/* ------------------------------------------------------------------------------------ */
/* Aviso: VOCÊ PODE EDITAR ESTE ARQUIVO!!! */

/*
var iguID = 298156;
var iguUTMeste = 208220.00;
var iguUTMnorte = 7655591.00;
vat iguUTMzona = '23K';
*/

/* ------------------------------------------------------------------------------------ */
/* -- Nome do Estado da cidade do projeto     Exemplo:   var iguEstado = 'Ceará';       */
var iguEstado = 'São Paulo';

/* -- Sigla do Estado da cidade do projeto    Exemplo:   var iguUF = 'CE';              */
var iguUF = 'SP';

/* -- Nome da cidade do projeto               Exemplo:   var iguCidade = 'Fortaleza';   */
var iguCidade = 'Ribeirão Preto';

/* -- Acronimo da cidade                      Exemplo:   var iguAcronimo 'FOR';         */
var iguAcronimo = 'RBP';

/* -- Nome da Imagem do brasão da cidade       '/docs/Mapa/igu-MunicipioBrasao.svg';    */
var iguBrasao ='/docs/Mapa/igu-MunicipioBrasao.png';

/* -- Latitude do ponto central da cidade     Exemplo:   var iguLatitude = -23.1805;    */
var iguLatitude = -21.1776;

/* -- Longitude do ponto central da cidade    Exemplo:   var iguLongitude = -45.8872;   */           
var iguLongitude = -47.8101;

/* -- Zoom inicial do mapa                    Exemplo:   var iguZoom = 15;              */
var iguZoom = 16;

/* -- Descrição do Contrato                                                             */
var iguDescricaoTexto = 'conforme Contrato Administrativo nº152/2018, Concorrência Pública nº08/2018, Processo de Compras nº0697/2018. \nResponsável Técnico: Fábio de Campos Bittencourt, CREA ART nº28027230181238468.';

/* -- Descrição do projeto                                                              */
var iguDescricao = 'Interface Gráfica elaborada por <u>Tranzum Planejamento e Consultoria de Trânsito</u> para fins de consulta e impressão da documentação gerada correspondente aos serviços contratados pelo Município de ' + iguCidade + ' / ' + iguEstado + ', ' + iguDescricaoTexto;

/* ------------------------------------------------------------------------------------ */

if (semFolhaJS != 'Sim') {

	$(document).ready(function(){
	//console.log('02 > igu-MunicipioConfigurar.js')
	$.getScript( '/IGU/_160/js/_0x4a160c.js')
		.done(function( data, textStatus, jqxhr ) {
	//console.log( data );
	//console.log(jqxhr.status, textStatus, '_0x4a160c.js' );
		})
		.fail(function(jqxhr, settings, exception ) {
	//console.log(jqxhr.status, settings, exception, '_0x4a160c.js' );
		})
	}); /* ready */

}//if