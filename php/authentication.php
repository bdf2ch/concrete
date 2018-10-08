<?php

    function signIn() {
        if (isset($_GET['account']) && isset($_GET['password'])) {
            $account = $_GET['account'];
            $password = $_GET['password'];

            $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t');
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            $sql = "SELECT * FROM users WHERE login = '".$account."' AND password = '".$password."' LIMIT 1";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                echo(json_encode($row));
            } else {
                echo(json_encode('null'));
            }
            $conn->close();
        }
    }

?>