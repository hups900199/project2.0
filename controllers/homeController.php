<?php
    session_start();
	// require('../shared/connect.php');

    if (isset($_SESSION['UserID'])) {
        echo json_encode(array("userId" => $_SESSION['UserID'], "role" => $_SESSION['role'], "username" => $_SESSION['username']));
    }
    else echo json_encode(array());
?>