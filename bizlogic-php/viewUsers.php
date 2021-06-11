<?php
header("Access-Control-Allow-Origin: 'http://localhost:3000'");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'dbConnect.php';

error_reporting(E_ERROR);
$users = [];
$sql = "SELECT * FROM user";

if ($result = mysqli_query($con, $sql)) {
	// code...
	$cr = 0;
	while ($row = mysqli_fetch_assoc($result)) {
		// code...
		$users[$cr]['id'] = $row['id'];
		$users[$cr]['name'] = $row['name'];
		$users[$cr]['username'] = $row['username'];
		$users[$cr]['email'] = $row['email'];
		$cr++;
	}
	echo json_encode($users);
}
else {
	http_response_code(404);
}

?>