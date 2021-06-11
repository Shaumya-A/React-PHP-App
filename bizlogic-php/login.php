<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'dbConnect.php';


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);

	// print_r($request);

	$id = $request->id;
	$username = $request->username;
	$password = $request->password;

	$sql = "INSERT INTO `student`(`id`, `username`, `password`) VALUES ('{$id},'{$username}','{$password}')";

	if (mysqli_query($con,$sql)) {
		http_response_code(201);
	}
	else {
		http_response_code(422);
	}
}


?>