<?php
    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."libs".$DS."xtemplate".$DS."xtemplate.class.php";
    $path = $_SERVER['REQUEST_URI'];
    $url = split('/', $path);
    $section = $url[1];


    $sectionTemplate = '';
    switch ($section) {
        case 'about':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."about.html";
            break;
        case 'services':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."services.html";
            break;
        case 'gallery':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."gallery.html";
            break;
        case 'contacts':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."contacts.html";
            break;
        default:
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."start.html";
    }

    $template = new XTemplate($_SERVER["DOCUMENT_ROOT"].DIRECTORY_SEPARATOR."php".DIRECTORY_SEPARATOR."templates".DIRECTORY_SEPARATOR."main.html");
    $template -> assign_file('CONTENT', $sectionTemplate);
    $template -> parse("main");
    $template -> out("main");
?>