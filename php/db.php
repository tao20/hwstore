<?php
    header('content-type:text/html; charset=utf-8');
    $config = array(
        "host"=>"127.0.0.1:3306",
        "uname"=>"root",
        "pwd"=>"",
        "db"=>"user"
    );

    $mysqli = new mysqli($config['host'],$config['uname'],$config['pwd']);
    if($mysqli->connect_errno) {
        die('{"mes":"连接数据库失败!","err":1}');
    }
    $mysqli->query("set names utf8");  
    
    $select_db = $mysqli->select_db($config['db']);
    if(!$select_db) {
        die('{"mes":"选择数据库失败","err":1}');
    }
    
?>