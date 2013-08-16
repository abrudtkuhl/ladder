/************
hide.js
Uses data in localstorage to hide elements on the client side
*************/

$(document).ready(function() {
	chrome.storage.local.get("sites", function(data) {
    var sites = data.sites;

    // check our sites array for a record from the current URL
    var uri = new URI();
    var host = uri.scheme() + "://" + uri.hostname();
    console.log("host = " + host);

    var results = $.grep(sites, function(e) {
      return e.host === host;
    });

    // no match, get out
    if (results === null || results.length !== 1) {
      return false;
    }

    var site = results[0];

    if (site.element !== "undefined" && site.element !== "") {
      console.log("## hiding element  for " +  host + " ELEMENT == " + site.element + " ##");
      if ($(site.element).length) {
        $(site.element).hide();
      }
    }
	});
});