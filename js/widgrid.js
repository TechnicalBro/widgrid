function layoutApps(){
	$(".gridster ul").gridster({
		widget_margins: [10, 10],
		widget_base_dimensions: [200, 200],
		draggable:
        {
			stop: function(event, ui)
			{
		        saveWidgets();
			}
        }
	});
}

function saveWidgets()
{
	widgets.forEach(function(widget)
	{
		widget.updateCords();
		widget.saveData();
	});
}

function loadApps(){
	// Fetch app data
	var appsData = jQuery.ajax({
		url: 'getAppsJson.php',
		async: false,
		dataType: 'json'
	}).responseText;

	// For each app, set properties and push to screen
	var curRow = 1;
	var curCol = 1;

	$.each($.parseJSON(appsData), function(key, app){
		
		// Create a li element to contain the widget
		var elem = document.createElement('li');

		// Set ID
		elem.id = "app-" + app.name;
		
		// Assing classes for height and width
		elem.className = "app";

		//Add gridster data to elements
		elem.setAttribute('data-row', app.y);
		elem.setAttribute('data-col', app.x);
		elem.setAttribute('data-sizex', app.width);
		elem.setAttribute('data-sizey', app.height);

		// Push containing element to screen
		$('#container ul').append(elem);

		// Load App in container using ajax
		$('#'+elem.id).load(app.html);

		var widget = new Widget(app.folder,app.name,app.author,app.description,app.width,app.height,app.x,app.y,app.cssfile,app.jsfile,app.htmlfile);

		// Layout Control
		var nextCol = parseInt(curCol) + parseInt(app.width);
		if(nextCol >= 5){
			curCol = 1;
			curRow = curRow + 1;
		}else{
			curCol = curCol + 1;	
		}

	});

	// Layout Apps
	console.log(widgets);
	layoutApps();
}