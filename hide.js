/************
hide.js
Uses data in localstorage to hide elements on the client side
*************/

$(document).ready(function() {
	chrome.storage.local.get("sites", function(data) {
    var sites = data;
    var uri = new URI();
    var host = uri.scheme() + "://" + uri.hostname();
		console.log("hide.js: got data from chrome storage");
		console.log(data);
	});
});