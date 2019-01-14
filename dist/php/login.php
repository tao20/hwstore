<?php
    include('db.php');
    $uname = $_REQUEST['username'];
    $pwd = $_REQUEST['password'];

    $select = "select * from user_1809 where user_name='$uname' and user_password='$pwd'";
    
    $res = $mysqli->query($select);
    if($res->num_rows>0) {
        
        echo '{"mes":"登录成功","username":"'.$uname.'","err":0}';
    }else {
        echo '{"mes":"登录失败","err":1}';
    }

    $mysqli->close();
?>