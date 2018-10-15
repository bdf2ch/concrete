<?php
    error_reporting(E_ERROR);
    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."libs".$DS."xtemplate".$DS."xtemplate.class.php";
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."config.php";
    $path = $_SERVER['REQUEST_URI'];
    $url = split('/', $path);
    $section = $url[1];


    $sectionTemplate = '';
    switch ($section) {
        case 'about':
            $template = new XTemplate($sectionTemplate);
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."about.html";
            $template -> parse("main");
            $template -> out("main");
            break;
        case 'services':
            $subSection = $url[2];
            switch ($subSection) {
                case 'technics':
                    global $db_host;
                    global $db_user;
                    global $db_password;
                    global $db_name;
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."technics.html";
                    $template = new XTemplate($sectionTemplate);
                    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
                    if ($conn -> connect_error) {
                        die("Connection failed: " . $conn -> connect_error);
                    }
                    $conn -> query("SET NAMES utf8");
                    $sql = "SELECT * FROM technics WHERE is_enabled = 1 ORDER BY title ASC";
                    $result = $conn -> query($sql);
                    if ($result -> num_rows > 0) {
                        while($row = $result -> fetch_assoc()) {
                            $template -> parse('main.machine');
                            $template -> assign("IMAGE_URL", iconv("UTF-8", "Windows-1251", $row['photo_url']));
                            $template -> assign("TITLE", iconv("UTF-8", "Windows-1251", $row['title']));
                            $template -> assign("DESCRIPTION", iconv("UTF-8", "Windows-1251", $row['description']));
                            $template -> assign("COST", iconv("UTF-8", "Windows-1251",$row['cost']));
                            $template -> assign("RENT", iconv("UTF-8", "Windows-1251", $row['rent']));
                        }
                    }
                    $template -> parse("main");
                    $template -> out("main");
                    break;
                case 'products':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."products.html";
                    $template = new XTemplate($sectionTemplate);
                    $template -> parse("main");
                    $template -> out("main");
                    break;
                case 'roads':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."roads.html";
                    $template = new XTemplate($sectionTemplate);
                    $template -> parse("main");
                    $template -> out("main");
                    break;
                case 'labs':
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."labs.html";
                    $template = new XTemplate($sectionTemplate);
                    $template -> parse("main");
                    $template -> out("main");
                    break;
                default:
                    $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."start.html";
                    $template = new XTemplate($sectionTemplate);
                    $template -> parse("main");
                    $template -> out("main");
                    break;
            }
            break;
        case 'contacts':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."contacts.html";
            $template = new XTemplate($sectionTemplate);
            $template -> parse("main");
            $template -> out("main");
            break;
        case 'admin':
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."admin".$DS."index.html";
            $template = new XTemplate($sectionTemplate);
            $template -> parse("main");
            $template -> out("main");
            break;
        default:
            $sectionTemplate = $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."templates".$DS."start.html";
            $template = new XTemplate($sectionTemplate);
            $template -> parse("main");
            $template -> out("main");
            break;
    }
?>