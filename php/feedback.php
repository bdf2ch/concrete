<?php

    function getFeedbackMessages() {
        $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t', 'c2680_ukmdu');
        if ($conn -> connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM feedback";
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
            $name = $_GET['name'];
            $email = $_GET['email'];
            $message = $_GET['message'];

            $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t', 'c2680_ukmdu');
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO feedback (name, email, message) VALUES ('".$name."', '".$email."', '".$message."')";
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
?>