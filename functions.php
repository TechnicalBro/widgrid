<?php

function loadAppsData() {
	// Begin App Loading
	foreach(scandir('app') as $app){

		// Skip . and ..
		if($app == "." || $app == ".."){
			continue;
		}

		// Build app data array
		$appConfig = explode("\n", file_get_contents("app/".$app."/app.config"));
		foreach($appConfig as $line){
			if($line == "" || $line == " "){
				continue;
			}
			$parse = explode("=", $line);
			$appData[$parse[0]] = $parse[1];
		}

		// Fix paths
		$htmlFile = $appData['html'];
		$cssFile = $appData['style'];
		$jsFile = $appData['js'];
		$appData['jsfile'] = $jsFile;
		$appData['cssfile'] = $cssFile;
		$appData['htmlfile'] = $htmlFile;
		$appData['folder'] = $app;
		$appData['style'] = "app/".$app."/".$appData['style'];
		$appData['js'] = "app/".$app."/".$appData['js'];
		$appData['html'] = "app/".$app."/".$appData['html'];

		// Add to Apps Array
		$appsData[$app] = $appData;
	}

	// Return json array of Apps and Data
	return $appsData;
}

?>