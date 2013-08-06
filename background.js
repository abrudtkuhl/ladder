chrome.cookies.onChanged.addListener(function(info) {
	var host = URI.parse(info.cookie.domain);

	var map = {
		".nytimes.com": {
			callback: function() { console.log("nytimes"); }
		},
		".desmoinesregister.com": {
			callback: function() { console.log("dmregister"); }
		}
	}

	var property = map[host.path];

	if (property === undefined || property === null)
		return false;

	property.callback();

	chrome.cookies.remove({
		name: "EMETA_NCLICK",
		url: "http://www.desmoinesregister.com"
	});
});