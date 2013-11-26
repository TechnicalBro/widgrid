<!--
	Widgrid - By Jarred Kenny.

	Description: A web based home screen with plugin support.
-->

<!DOCTYPE html>
<html>
<head>
	<!-- Load Functions -->
	<?php require("functions.php"); ?>

	<!-- Normalize -->
	<link rel='stylesheet' href='css/normalize.css'/>

	<!-- App CSS -->
	<link rel='stylesheet' href='css/widgrid.css'/>
	
	<!-- jQuery -->
	<script src='js/jquery-1.10.2.min.js'></script>

	<!-- Grid Layout -->
	<script src='js/jquery.gridster.min.js'></script>

   	<!-- Grid Styles -->
	<link rel='stylesheet' href='css/jquery.gridster.min.css'/>

	<script type="text/javascript" src="js/widget.js"></script>

	<!-- Web Board JS -->
	<script src='js/widgrid.js'></script>

	<!-- Load Styles From Apps -->
	<?php
		foreach(loadAppsData() as $app){
			echo "<link rel='stylesheet' href='".$app['style']."'/>";
		}
	?>

	<!-- Load JS From Apps -->
	<?php
		foreach(loadAppsData() as $app){
			echo "<script src='".$app['js']."'></script>";
		}
	?>

	<title>Widgrid</title>
	<meta charset='UTF-8'/>

</head>

<body onload='loadApps();'>
	<div id='wrapper'>
		<div id='container' class='gridster'>
			<ul>
			</ul>
		</div>
	</div>
</body>