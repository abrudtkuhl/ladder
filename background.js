var sites = [];

chrome.windows.onCreated.addListener(function(window) {
	$.getJSON("data.json", function(data) {
		$.each(data.sites, function(key, value) {
	    sites.push(value);
	  });
	  chrome.storage.local.set({"sites": sites}, function() {
	    console.log("data saved");
	  });
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo !== null && changeInfo !== "undefined" && changeInfo.status === "complete") {
		if (tab !== null && tab !== "undefined") {
			
			chrome.storage.local.get("sites", function(data) {
				console.log("got data from chrome storage");
				console.log(data);
			});


			var uri = new URI(tab.url);
			var host = uri.scheme() + "://" + uri.hostname();

			var results = $.grep(sites, function(e) {
				return e.host === host;
			});

			if (results !== null && results.length === 1) {
				var site = results[0];
				
				if (site.cookie !== "undefined" && site.cookie !== "") {
					console.log("## REMOVING COOKIE FOR " +  host + " COOKIE == " + site.cookie + " ##");
					chrome.cookies.remove({
						name: site.cookie,
						url: site.host
					});
				}				

				if (site.element !== "undefined" && site.element !== "") {
					console.log("## HIDING POPUPS FOR " + host + " ELEMENT == " + site.element + " ##");
				}
			}
		}
	}
});