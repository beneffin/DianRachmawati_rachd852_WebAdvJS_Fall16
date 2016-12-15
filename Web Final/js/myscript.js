$(document).ready(function() {

	$.getJSON('js/data.json', function(data){
		console.log(data);

	$("#contentData").html('<ol>');
			var dir = "img/";
			var output="";
			
			for(var i in data.contentData){
				output += "<li>" + "<content>" + '<a href="' + data.contentData[i].link + '" target="_blank">';	
				// output += "<imgp>" + "<img src='"+ dir + data.contentData[i].name + "_bg.png" + "'/>" + "</imgp>" ;
				output += "<imgb>" + "<img src='"+ data.contentData[i].image + "'/>" + "</imgb>";
				output += "<wrapper>"
				output += "<web>" + data.contentData[i].web + "</web>";
				output += "<title>" + data.contentData[i].title + "</title>";
				output += "<h3>"
				output += "<desc>" + data.contentData[i].description + "</desc>";
				// output += "<profession>" + data.contentData[i].profession + "</profession>";
				output += "</h3>"
				output += "</wrapper>"
				output += "<tagswrapper>"
				output += "<tags>" + data.contentData[i].tags1 + "</tags>";
				output += "</tagswrapper>"
				// output += "<description>" + data.contentData[i].description + "</description>";
				output += "</a>" +"</content>" + "</li>";
			}
			$("#contentData ol").append(output);
			$("#contentData ol").append('</ol>');
			$(".spinner").hide();

	}); //getJSON

}); // ready
