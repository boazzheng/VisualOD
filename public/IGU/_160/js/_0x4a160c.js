if (iguCidade == '') {
    var iguCidade = 'Fortaleza';
}
if (iguUF == '') {
    var iguUF = 'CE';
}
if (iguAcronimo == '') {
    var iguAcronimo = 'FOR';
}
if (iguBrasao == '') {
    var iguBrasao = '/docs/Mapa/igu-MunicipioBrasao.png';
}
if (iguLatitude == '') {
    var iguLatitude = -3.6937;
}
if (iguLongitude == '') {
    var iguLongitude = -38.586;
}
if (iguZoom == '') {
    var iguLongitude = 0x10;
}
if (iguFotografiasMax == '') {
    var iguFotografiasMax = 0xa;
}
if (iguDescricao == '') {
    var iguDescricao = 'Interface Gráfica elaborada por Tranzum Planejamento e Consultoria de Trânsito para fins de consulta e impressão da documentação gerada correspondente aos serviços contratados pela Prefeitura Municipal de ' + iguCidade + ' / ' + iguUF;
}
var OpenStreetMap_Mapnik = L.tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright" target="baseInfo">OpenStreetMap</a>',
    'id': 'osm.mapnik'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    'id': 'esri.wi'
});
var iguAtribuicao = '&copy <a target="Tranzum" href="http://www.Tranzum.com.br/IGU/">Tranzum</a> ';
map = L.map('IGU', {
    'fadeAnimation': true,
    'zoomControl': true,
    'keyboard': true,
    'closePopupOnClick': true,
    'minZoom': iguZoom - 0x3,
    'boxZoom': true,
    'scrollWheelZoom': true,
    'layers': [OpenStreetMap_Mapnik]
}).setView([iguLatitude, iguLongitude], iguZoom);
var iconeCidade = L.icon({
    'iconUrl': iguBrasao,
    'iconSize': [0x26, 0x26]
});
L.marker([iguLatitude, iguLongitude], {
    'icon': iconeCidade
}).addTo(map).bindPopup('<h3 class="popover-title iguPopupTitulo">' + '<img src=\"/IGU/_160/images/iguTxtEscIGU.svg\" height=\"48\" width=\"auto\" alt=\"IGU\">' + '</h3>' + '<div class=\"iguPopupTextoNome text-center\">' + iguCidade + ' / ' + iguUF + '</div>' + '<div class="iguPopupTextoNome">' + '<img src="' + iguBrasao + '" width="96" height="auto">' + '</div>').openPopup();
L.control.mousePosition({
    'position': 'topleft',
    'separator': ',',
    'numDigits': 0x4
}).addTo(map);
L.control.scale({
    'position': 'topleft',
    'metric': true,
    'imperial': true
}).addTo(map);
L.control.attribution({
    'position': 'topright',
    'prefix': iguAtribuicao
}).addTo(map);
L.control.zoom({
    'position': 'topright'
}).addTo(map);
$(document).ready(function () {
    $.getScript('/IGU/_160/js/_0x4a160d.js').done(function (_0x3ac245, _0x285660, _0xe77efd) {}).fail(function (_0x177330, _0x3e9f11, _0x5641e9) {});
});