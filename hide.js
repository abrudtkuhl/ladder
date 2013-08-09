// hide.js
$(document).ready(function() {
	var sites = [];
	var uri = new URI();
	var host = uri.scheme() + "://" + uri.hostname();
	
	chrome.storage.local.get("sites", function(data) {
		console.log("got data from chrome storage");
		console.log(data);
	});
});