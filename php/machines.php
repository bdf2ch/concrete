<?php
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."config.php";

    function getMachinesList() {
        global $db_host;
        global $db_user;
        global $db_password;
        global $db_name;
        $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
        if ($conn -> connect_error) {
            die("Connection failed: " . $conn -> connect_error);
        }
        $sql = "SELECT * FROM technics ORDER BY title ASC";
        $result = $conn -> query($sql);
        $machines = array();
        if ($result -> num_rows > 0) {
           while($row = $result -> fetch_assoc()) {
              array_push($machines, $row);
           }
        }
        echo(json_encode($machines));
        $conn -> close();
    }


    function addMachine() {
        if (isset($_POST['title']) && isset($_POST['description']) && isset($_POST['cost']) && isset($_POST['rent']) && isset($_FILES['photo'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $title = $_POST['title'];
            $description = $_POST['description'];
            $cost = $_POST['cost'];
            $rent = $_POST['rent'];
            $DS = DIRECTORY_SEPARATOR;

            $uploaddir = $_SERVER["DOCUMENT_ROOT"].$DS."images".$DS."machines".$DS;
            $uploadfile = $uploaddir .$DS. basename($_FILES['photo']['name']);
            $url = 'images/techincs/'.basename($_FILES['photo']['name']);

            if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile)) {} else {
                echo "Возможная атака с помощью файловой загрузки!\n";
            }

            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "INSERT INTO technics (title, description, cost, rent, photo_url, is_enabled) VALUES ('".$title."', '".$description."', '".$cost."', '".$rent."', '".$url."', 1)";
            $result = $conn -> query($sql);

            $id = mysqli_insert_id($conn);
            $sql = "SELECT * FROM technics WHERE id = ".$id;
            $result = $conn -> query($sql);
            if ($result -> num_rows > 0) {
                $row = $result -> fetch_assoc();
                echo(json_encode($row));
            } else {
                echo("Не удалось найти добавленный спецтранспорт");
            }
            $conn -> close();
        }
    }


    function editMachine() {
        if (isset($_GET['id']) && isset($_GET['title']) && isset($_GET['description']) && isset($_GET['cost']) && isset($_GET['rent']) && isset($_GET['is_enabled'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $id = $_GET['id'];
            $title = $_GET['title'];
            $description = $_GET['description'];
            $cost = $_GET['cost'];
            $rent = $_GET['rent'];
            $is_enabled = $_GET['is_enabled'];
            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "UPDATE technics SET title = '".$title."', description = '".$description."', cost = '".$cost."', rent = '".$rent."', is_enabled = ".$is_enabled." WHERE id = ".$id;
            $result = $conn -> query($sql);

            $sql = "SELECT * FROM technics WHERE id = ".$id;
            $result = $conn -> query($sql);
            if ($result -> num_rows > 0) {
                $row = $result -> fetch_assoc();
                echo(json_encode($row));
            }
        }
    }


    function uploadPhoto() {
        if (isset($_POST['id']) && isset($_FILES['photo'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $id = $_POST['id'];
            $DS = DIRECTORY_SEPARATOR;
            $uploaddir = $_SERVER["DOCUMENT_ROOT"].$DS."images".$DS."machines".$DS;
            $uploadfile = $uploaddir .$DS. basename($_FILES['photo']['name']);
            $url = 'images/techincs/'.basename($_FILES['photo']['name']);

            if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile)) {} else {
                echo "Возможная атака с помощью файловой загрузки!\n";
            }

            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "UPDATE technics SET photo_url ='".$url."' WHERE id = ".$id;
            $result = $conn -> query($sql);
            echo(json_encode($url));
            $conn -> close();
        }
    }

    function deleteMachine() {
        if (isset($_GET['id'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $id = $_GET['id'];
            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "DELETE FROM technics WHERE id = ".$id;
            $result = $conn -> query($sql);
            echo(json_encode(true));
            $conn -> close();
        }
    }


?>