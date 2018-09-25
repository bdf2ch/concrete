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
            $subSection = $url[2];
            switch ($subSection) {
                case 'products':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."products.html";
                    break;
                case 'roads':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."roads.html";
                    break;
                case 'labs':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."labs.html";
                    break;
                default:
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."start.html";
                    break;
            }
            break;
        case 'contacts':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."contacts.html";
            break;
        default:
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."start.html";
    }

    $template = new XTemplate($sectionTemplate);
    // $template -> assign_file('CONTENT', $sectionTemplate);
    $template -> parse("main");
    $template -> out("main");
?>