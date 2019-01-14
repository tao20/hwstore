<?php
    include('db.php');
    $uname = $_REQUEST['username'];
    $pwd = $_REQUEST['password'];
    
    $res = "select * from user_1809 where user_name='$uname'";
    $mes = $mysqli->query($res);
    if($mes->num_rows>0) {
        die('{"mes":"用户名已存在","err":1}');
    }else {
        $select = "insert into user_1809 (user_name,user_password) values ('$uname','$pwd')";

        $mess = $mysqli->query($select);
        if($mess) {
             echo '{"mes":"注册成功","username":"'.$uname.'","err":0}';
         }else {
             echo '{"mes":"注册失败","err":1}';
         }
    }
    $mysqli->close();
?>