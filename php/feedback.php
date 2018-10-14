<?php
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."php".$DS."config.php";

    function getFeedbackMessages() {
        global $db_host;
        global $db_user;
        global $db_password;
        global $db_name;
        $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
        if ($conn -> connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM feedback ORDER BY date_created DESC";
        $result = $conn -> query($sql);
        $messages = array();
        if ($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                array_push($messages, $row);
            }
        }
        echo(json_encode($messages));
        $conn -> close();
    }

    function addFeedbackMessage() {
        if (isset($_GET['name']) && isset($_GET['email']) && isset($_GET['message'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $name = $_GET['name'];
            $email = $_GET['email'];
            $message = $_GET['message'];

            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO feedback (name, email, message, date_created) VALUES ('".$name."', '".$email."', '".$message."', ".round(microtime(true) * 1000).")";
            $result = $conn -> query($sql);
            $id = $conn -> insert_id;

            $sql = "SELECT * FROM feedback WHERE id = ".$id;
            $result = $conn -> query($sql);
            if ($result -> num_rows > 0) {
                $row = $result -> fetch_assoc();
                echo(json_encode($row));
            } else {
                echo(json_encode('null'));
            }
            $conn -> close();
        }
    }

    function deleteMessage() {
        if (isset($_GET['id'])) {
            global $db_host;
            global $db_user;
            global $db_password;
            global $db_name;
            $id = $_GET['id'];
            $conn = new mysqli($db_host, $db_user, $db_password, $db_name);
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "DELETE FROM feedback WHERE id = ".$id;
            $result = $conn -> query($sql);
            echo(json_encode(true));
            $conn -> close();
        }
    }
?>