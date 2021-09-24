var iguVersao = '4.0.23 (2k191201-1201)';
var iguPlataforma = '';
var iguSO = 'SO desconhecido';
if (navigator.appVersion.indexOf('Win') != -0x1) iguSO = 'Windows';
if (navigator.appVersion.indexOf('Mac') != -0x1) iguSO = 'MacOS';
if (navigator.appVersion.indexOf('X11') != -0x1) iguSO = 'UNIX';
if (navigator.appVersion.indexOf('Linux') != -0x1) iguSO = 'Linux';
iguPlataforma += '<li><b>Sistema operacional:</b> ' + iguSO + '</li>';
iguPlataforma += '<li><b>Plataforma:</b> ' + navigator.platform + '</li>';
iguPlataforma += '<li><b>On-line:</b> ' + navigator.onLine + '</li>';
iguPlataforma += '<li><b>Cookies ativados:</b> ' + navigator.cookieEnabled + '</li>';
iguPlataforma += '<li><b>Nome código do navegador:</b> ' + navigator.appCodeName + '</li>';
iguPlataforma += '<li><b>Nome do navegador:</b> ' + navigator.appName + '</li>';
iguPlataforma += '<li><b>Versão do navegador:</b> ' + navigator.appVersion + '</li>';
iguPlataforma += '<li><b>Cabeçalho do usuário-agente:</b> ' + navigator.userAgent + '</li>';
var semFolhaJS;
$(document).ready(function () {
    $.getScript('/docs/Mapa/igu-MunicipioConfigurar.js').done(function (_0x2cd140, _0x67c933, _0x32f9c5) {}).fail(function (_0x5a4fed, _0x75847c, _0x40f920) {});
});