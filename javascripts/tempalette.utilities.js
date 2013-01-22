tempaletteUtilities = {
	// ######################
	// URL FUNCTIONS        #
	// ######################
	// Functions to play with urls and request data and parameters.
	getURLParameter: function(name) {
		value = decodeURIComponent((location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]);
		if(value == "null"){
			return null;
		} else {
			return value;
		}
	},

	// ######################
	// COOKIE FUNCTIONS     #
	// ######################

	// Functions to play with cookies.
	// setTempaletteCookie('name', 'Ram');
	// "Ram"
	// setTempaletteCookie('name', 'Krishna', true);
	// "Ram, Krishna"
	// setTempaletteCookie('name', 'Sita', false);
	// "Sita"

	setTempaletteCookie: function(name, value, append){
	  var tCookie = $.cookie(name);
		if(append == null || append == false){
			$.cookie(name, value, { path: '/' });
		} else {
			if(tCookie != null){
	  		$.cookie(name, $.cookie(name) + ',' + value, { path: '/' });
			}
			else{
	  		$.cookie(name, value, { path: '/' });
			}
		}
		return $.cookie(name);
	}, 

	getTempaletteCookie: function(name){
		return $.cookie(name);
	},
	
	capitalize: function(stringValue){
		var capitalisedString = stringValue.charAt(0).toUpperCase() + stringValue.substring(1);
		return capitalisedString;
	}

}
