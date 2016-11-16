function lineSrc()
{
var width  = 221;
var height = 168; 
d3.csv("https://yang-shih-chao.github.io/Github-Projects/table.csv", function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
	});
	var maxy = d3.max(data, function(d) { return d.Open; });
	var hmaxy = d3.max(data, function(d) { return d.High; });
	var lmaxy = d3.max(data, function(d) { return d.Low; });
	var cmaxy = d3.max(data, function(d) { return d.Close; });
	var ln = data.length;
	var ctrl  = d3.select(".newsletter").append("svg").attr("width", width).attr("height", height);
	
	var lines = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Open * (height/maxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("d", lines);
	
	
	var lines2 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.High * (height/maxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline2" ).
	attr("d", lines2);
	
	var lines3 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Low * (height/maxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline3" ).
	attr("d", lines3);
	
	var lines4 = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Close * (height/maxy); });
	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "pathline4" ).
	attr("d", lines4);
});
}
