function login() {
	window.setTimeout(function() {
    	$.ajax( {
	        url: "login.json",
	        dataType: "json"
	    }).done(function(data) {
            console.log("ready. logged in: %o", data);
	    	checkout();
	    });
	}, 5000);
};
