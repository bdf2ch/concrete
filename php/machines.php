<?php

    getMachinesList() {
         $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t', 'c2680_ukmdu');
         if ($conn -> connect_error) {
            die("Connection failed: " . $conn -> connect_error);
         }
         $sql = "SELECT * FROM machines";
         $result = $conn -> query($sql);
         $machines = new array();
         if ($result -> num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                array_push($machines, $row);
            }
         }
         echo(json_encode($machines));
         $conn -> close();
    }

    addMachine() {
        if (isset($_POST['title']) && isset($_POST['description']) && isset($_POST['cost']) && isset($_POST['rent']) && isset($_POST['photo'])) {
            $title = $_POST['title'];
            $description = $_POST['description'];
            $cost = $_POST['cost'];
            $rent = $_POST['rent'];
            $url = '';

            $uploaddir = $_SERVER["DOCUMENT_ROOT"].DIRECTORY_SEPARATOR."images".DIRECTORY_SEPARATOR."machines";
            $uploadfile = $uploaddir . basename($_FILES['photo']['name']);

            if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile)) {
                echo "Файл корректен и был успешно загружен.\n";
            } else {
                echo "Возможная атака с помощью файловой загрузки!\n";
            }

            $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t', 'c2680_ukmdu');
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "INSERT INTO machines (title, description, cost, rent, photo_url, is_enabled) VALUES ('".$title."', '".$description."', '".$cost."', '".$rent."', '".$ploadfile."', 1)";
            $result = $conn -> query($sql);

            $id = mysqli_insert_id();
            $sql = "SELECT * FROM machines WHERE id = ".$id;
            $result = $conn -> query($sql);
            $row = $result -> fetch_assoc();

            echo(json_encode($row));
            $conn -> close();
        }
    }


    editMachine() {}

    deleteMachine() {
        if (isset($_GET['id'])) {
            $conn = new mysqli('localhost', 'root', 'l1mpb1zk1t', 'c2680_ukmdu');
            if ($conn -> connect_error) {
                die("Connection failed: " . $conn -> connect_error);
            }
            $sql = "DELETE FROM machines WHERE id = ".$id;
            $result = $conn -> query($sql);
            echo(json_encode(true));
            $conn -> close();
        }
    }

?>