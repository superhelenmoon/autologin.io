// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		// "message" key can be anything
		var message = {
			type: "logininfo",
			username: "gotusername " + extractDomain(activeTab.url),
			password: "gotpassword"
		};
		chrome.tabs.sendMessage(activeTab.id, message);
		console.log("activeTab: " + JSON.stringify(activeTab));
	});

   // chrome.app.window.create('main.html', { transparentBackground: true, frame: "none"});
   // chrome.windows.create({'url': 'main.html', 'type': 'popup', 'frame': 'none'}, function(window) {

   // });
   // chrome.windows.create({'url': 'main.html', 'type': 'popup'}, function(window) {});
});

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// 	if( request.message === "open_new_tab" ) {
// 		chrome.tabs.create({"url": request.url});
// 	}
// });

// Given http://abc.domain.com:8080/blahblah/blah.html, return domain.com
function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    var domainArray = domain.split('.');

    if (domainArray.length >= 2) {
    	return domainArray.slice(domainArray.length - 2).join('.');
    }

    return domain;
}
