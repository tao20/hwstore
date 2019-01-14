<?php
    include('db.php');

    // 获取到数据库的内容  渲染到页面上
    $idlist = $_REQUEST['idlist'];
    $sql = "select * from product where id in ($idlist)";
    $res = $mysqli->query($sql);
    
    $arr = array();
    while($row = $res->fetch_assoc()) {
        array_push($arr,$row);
    };
    $json = json_encode($arr);
    echo $json;
    $mysqli->close();
?>