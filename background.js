/*****************************
background.js
******************************/

// run when a window is created
chrome.windows.onCreated.addListener(function(window) {
	$.getJSON("data.json", function(data) {
		var sites = [];

		// iterate data
		$.each(data.sites, function(key, value) {
	    sites.push(value);
	  });

	  // save in localstorage for client access
	  chrome.storage.local.set({"sites": sites}, function() {
	    console.log("data saved");
	  });
	});
});

// run when tab is updated, ie URL is changed
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	// only run if the tab is done loading
	if (changeInfo.status !== "complete") {
		return false;
	}

	// grab data from localstorage
	chrome.storage.local.get("sites", function(data) {
		console.log(data);
		if (data === null || data === "undefined" || data.length === 0) {
			return false;
		}

		var sites = data;
		var uri = new URI(tab.url);
		var host = uri.scheme() + "://" + uri.hostname();

		// check our sites array for a record from the current URL
		var results = $.grep(sites, function(e) {
			return e.host === host;
		});

		// if there are results, process cookie munching
		if (results !== null && results.length === 1) {
			var site = results[0];
			
			if (site.cookie !== "undefined" && site.cookie !== "") {
				console.log("## REMOVING COOKIE FOR " +  host + " COOKIE == " + site.cookie + " ##");
				chrome.cookies.remove({
					name: site.cookie,
					url: site.host
				});
			}
		}
	});
});