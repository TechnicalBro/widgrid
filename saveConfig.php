<?php

if (isset($_POST["f"]) && isset($_POST["d"]))
{
	$folderName = $_POST["f"];
	$appData = $_POST["d"];
	file_put_contents("app/".$folderName."/app.config", $appData);
}

?>