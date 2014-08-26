function clicky() {
	console.info("Accessing a property of an undefined object");
	console.log("calculating scroll top %d", $('inexistne')[0].top);
};

function clicky2() {
	console.info("Calling a method of an undefined object");
	adjust.ScrollBottom();
};

function clicky3() {
	console.info("Throwing an execption");
	throw "Version Mismatch!";
};


function clicky4() {
	console.info("404 on XHR");
	$.ajax({
	"url": "non_existing.php"
	});
};

function clicky5() {
	console.info("Cross-Origin on XHR");
	$.ajax({
	"url": "http://facebook.com/cross-origin"
	});
};

function clicky6() {
	console.info("Parse Error");
	eval("parseit'");
};
