var _autologin_io_usernameInput = document.getElementById("loginPageUsernameInput");
var _autologin_io_passwordInput = document.getElementById("loginPagePasswordInput");

// var $usernameInput = $('#loginPageUsernameInput');
// var $passwordInput = $('#loginPagePasswordInput');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.type === "logininfo") {
		_autologin_io_usernameInput.value = request.username;
		_autologin_io_passwordInput.value = request.password;
		// $usernameInput.val(request.username);
		// $passwordInput.val(request.password);

		console.log("content.js: received request " + JSON.stringify(request));

		// chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
	}
});

// Add some comments from gitpod

// Add some more comments from gitpod