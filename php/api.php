<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."authentication.php";
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."machines.php";
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."feedback.php";

    if (isset($_GET['action'])) {
        switch($_GET['action']) {
            case 'signIn':
                signIn();
                break;
            case 'signOut':
                signOut();
                break;
            case 'getFeedbackMessages':
                getFeedbackMessages();
                break;
            case 'addFeedbackMessage':
                addFeedbackMessage();
                break;
            case 'deleteMessage':
                deleteMessage();
                break;
            case 'getMachinesList':
                getMachinesList();
                break;
            case 'editMachine':
                editMachine();
                break;
            case 'deleteMachine':
                deleteMachine();
                break;
        }
    }


    if (isset($_POST['action'])) {
        switch($_POST['action']) {
            case 'addMachine':
                addMachine();
                break;
            case 'uploadMachinePhoto':
                uploadPhoto();
                break;
        }
    }
?>