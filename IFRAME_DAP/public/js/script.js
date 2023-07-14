function displayMessage (evt) {
	var message;
	if (evt.origin !== "http://localhost:3000") {
		message = "You are not worthy";
	}
	else {
		message = "I got " + evt.data + " from " + evt.origin;
    document.getElementById("fname").value = "Start typing your first name here"
    document.getElementById("fname").focus();
	}
	document.getElementById("received-message").innerHTML = message;
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}

function onFocusInSubmit(x) {
  document.getElementById("announcements").innerHTML = "Please submit your details to our website"
}

function onFocusLastName(x) {
  document.getElementById("announcements").innerHTML = "Please add your last name (optional)"
}

function onFocusCountry(x) {
  document.getElementById("announcements").innerHTML = "Please select a country"
}

function onFocusGender(x) {
  document.getElementById("announcements").innerHTML = "Please select a gender"
}

function onSubmit(x) {
  document.getElementById("announcements").innerHTML = "Hurray !! your have logged into our system"
}
