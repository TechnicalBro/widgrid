
widgets = new Array();

function Widget(folder, name, author, description, width, height, x, y, style, js, html)
{
	if (typeof name == 'undefined')
	{
		throw("Widget name is undefined");
	}

	this.folder = folder;
	this.name = name;
	this.author = author;
	this.description = description;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.style = style;
	this.js = js;
	this.html = html;

	widgets.push(this);

	this.getName = function()
	{
		return this.name;
	};

	this.getAuthor = function()
	{
		return this.author;
	};

	this.updateCords = function()
	{
		var widgetPageData = $("#app-" + this.name);
        this.y = $(widgetPageData).attr("data-row");
        this.x = $(widgetPageData).attr("data-col");
        console.log("Cords for " + this.name + "updated to " + this.x + ", " + this.y);
	}

	this.getAppConfig = function()
	{
		var appConfig = "name=" + this.name + "\n"
		+ "author=" + this.author + "\n"
		+ "description=" + this.description + "\n"
		+ "width=" + this.width + "\n"
		+ "height=" + this.height + "\n"
		+ "x=" + this.x + "\n"
		+ "y=" + this.y + "\n"
		+ "style=" + this.style + "\n"
		+ "js=" + this.js + "\n"
		+ "html=" + this.html + "\n";
	}

	this.saveData = function()
	{
		var appConfig = "name=" + this.name + "\n"
		+ "author=" + this.author + "\n"
		+ "description=" + this.description + "\n"
		+ "width=" + this.width + "\n"
		+ "height=" + this.height + "\n"
		+ "x=" + this.x + "\n"
		+ "y=" + this.y + "\n"
		+ "style=" + this.style + "\n"
		+ "js=" + this.js + "\n"
		+ "html=" + this.html + "\n";
		var content = jQuery.ajax({url: 'saveConfig.php', data: 'f=' + this.folder + '&d=' + appConfig, type: 'post', async: 'false', dataType: 'text' }).done(function() {
            console.log("Saved config for " + this.name);
            console.log(appConfig);
        });
	}

}