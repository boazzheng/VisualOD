<?php
//https://github.com/vakata/jstree#include-all-neccessary-files
// PHP File Tree Demo
// For documentation and updates, visit http://abeautifulsite.net/notebook.php?article=21
// Main function file
include("php_file_tree.php");
?><!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta content="IE=egde" http-equiv=X-UA-Compatible><meta content="width=device-width, initial-scale=1" name=viewport><meta http-equiv=cache-control content="private, no-cache, no-store, must-revalidate, s-max-age=60"><meta http-equiv=pragma content=no-cache><meta name=robots content=none><meta name=robots content=NoArchive><meta name=googlebot content=NoIndex><meta name=googlebot content=NoArchive><title>IGU - Interface Gráfica Urbana</title><base href="/IGU/"><meta name=description content="Interface Gráfica Urbana"><meta name=author content="© 2002-2019 Tranzum Planejamento e Consultoria de Trânsito Ltda"><meta name=copyright content="© 2002-2019 Tranzum Planejamento e Consultoria de Trânsito Ltda"><link rel="shortcut icon" href=/IGU/_160/images/favicon.ico><meta name=DC.title content="IGU - Interface Gráfica Urbana"><meta name="DC.creator " content="© 2002-2019 Tranzum Planejamento e Consultoria de Trânsito Ltda"><meta name=DC.creator.address content=tranzum.com.br><meta name=DC.subject content="projeto, trânsito, mapa, documentação"><meta name=DC.description content="Interface Gráfica Urbana"><meta name=DC.publisher content="Tranzum Planejamento e Consultoria de Trânsito Ltda"><meta name=DC.Rights content="© 2002-2019 Tranzum Planejamento e Consultoria de Trânsito Ltda"><meta name=Custodian content="© 2002-2019 Tranzum Planejamento e Consultoria de Trânsito Ltda"><meta name=DC.date.created content=2017-11-01><meta name=DC.date.modified content=2019-12-06><meta name=DC.Identifier content="http://localhost:8102/IGU/"><meta name=DC.format content=text/html><meta name=DC.type content="Mapa; Projetos de Trânsito"><script src=/IGU/_03o/js/jquery.js></script><script src=/IGU/_03o/js/tether.min.js></script><script src=/IGU/_03o/js/bootstrap.min.js></script><script src=/IGU/_03o/js/ie10-viewport-bug-workaround.js></script><script src=/IGU/_03o/js/jstree.min.js></script><script src=/IGU/_03o/js/jquery.tree.js></script><script src=/IGU/_03o/js/pdfobject.min.js></script><script src=/IGU/_03o/js/js-dir.js></script><script src=/IGU/_160/js/_0x4a160j.js></script><script></script><link rel=stylesheet href=/IGU/_03o/css/bootstrap.min.css><link rel=stylesheet href=/IGU/_03o/css/ie10-viewport-bug-workaround.css><link rel=stylesheet href=/IGU/_03o/css/font-awesome.min.css><link rel=stylesheet href=/IGU/_03o/themes/default/style.css><link rel=stylesheet href=/IGU/_160/css/_0x4a160e.css><style>iframe { 
      width:98%;
      height:560px;
      display:inline-block;
      position: relative;
      top: 0px;
      float: none;
      border: none;
    }

#ver3 {
  position: absolute;
  top: 10px;
  left: 310px;
 }</style><body><div id=container><div style="font-size: 80%; font-family: Helvetica, sans-serif"><img src=/IGU/_160/images/iguIconeIGU.svg height=64 width=auto align=left style="margin-right: 12px"><h3>IGU <small>Interface Gráfica Urbana</small></h3><hr><b>Documentação: <?php echo $_GET["u"]; ?>:</b><form id=s><b><?php echo $_GET["i"]; ?></b>&nbsp;&nbsp;&nbsp;<input style="box-shadow:inset 0 0 4px #eee; width:120px; margin:0; padding:6px 12px; border-radius:4px; border:1px solid silver; font-size:1.1em" id=q placeholder=Busca...></form><div id=diretorio><?php
    // This links the user to http://example.com/?file=filename.ext
    //echo php_file_tree($_SERVER['DOCUMENT_ROOT'], "http://example.com/?file=[link]/");
    // This links the user to http://example.com/?file=filename.ext and only shows image files
    //$allowed_extensions = array("gif", "jpg", "jpeg", "png");
    $pasta = $_SERVER['DOCUMENT_ROOT']."/".$_GET["g"]."/".$_GET["i"];
    //$pasta = "/Intersecoes/";
    $extensoes = array("pdf", "PDF", "JPG", "jpg", "jpeg");
    echo php_file_tree($pasta, "#");
    // This displays a JavaScript alert stating which file the user clicked on
    //echo php_file_tree("demo/", "javascript:alert('You clicked on [link]');");
    ?></div></div><div class=center id=thumbnails><div class=thumbnail><div class="image shadow" id=ver3><div class=title id=nome3></div><div id=visualizador3></div></div></div></div></div>