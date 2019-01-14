<?php
    include('db.php');

    // 从数据库根据 ID 获取到购物车数据  并返回  (详情页)
    $id = $_REQUEST['id'];
    $sel = "select * from product where id ='$id'";
    $res = $mysqli->query($sel);
    $row = $res->fetch_assoc();

    $json = json_encode($row);
    echo $json;
    $mysqli->close();
?>