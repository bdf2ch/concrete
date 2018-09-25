<?php
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $to      = 'bdf2ch@gmail.com';
        $subject = 'Сообщение с сайта УКМДУ';
        $message = 'hello';
        mail($to, $subject, $message);
        var_dump($_POST);
    }
?>