<?php
    include('db.php');
    $id = $_REQUEST['id'];
    $img = $_REQUEST['img'];
    $title = $_REQUEST['title'];
    $detail = $_REQUEST['detail'];
    $price = $_REQUEST['price'];
    $color = $_REQUEST['color'];
    $num = $_REQUEST['num'];
    $store = $_REQUEST['store'];


    $sel = "select * from where id='$id'";
    $res = $mysqli->query($sel);
    if($res) {
        
    }
?> 