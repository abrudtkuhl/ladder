var sites = [];

chrome.windows.onCreated.addListener(function(window) {
	$.getJSON("data.json", function(data) {
		$.each(data.sites, function(key, value) {
	    sites.push(value);
	  });
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo !== null && changeInfo !== "undefined" && changeInfo.status === "loading") {
		if (tab !== null && tab !== "undefined") {
			var host = URI.parse(tab.url);
			var results = $.grep(sites, function(e) {
				return e.host === host.hostname;
			});

			if (results !== null && results.length > 0) {
				// do stuff
				console.log("## MATCH ##");

				if (results.length === 1) {
					console.log("## REMOVING COOKIE ##");
					console.log(results[0].cookie);
					chrome.cookies.remove({
						name: results[0].cookie,
						url: results[0].host
					});
				}
			}
		}
	}
});