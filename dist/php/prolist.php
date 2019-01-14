 <?php
    include('db.php');
    $sel = "select * from product";
    $res = $mysqli->query($sel);
    $arr = array();
    while($row = $res->fetch_assoc()) {
        array_push($arr,$row);
    };
    $json = json_encode($arr);
    echo $json;
    $mysqli->close();
 ?>