tempalette = {

		currentBackgroundBundleName: 'beach', // 'default', 'treetops' etc...'
		currentBackgroundBundle: {}, // will load it while inititizliaing 
		currentBackgroundTheme: 'default', // 'default', 'glass' etc...'
		currentBackgroundType: 'pattern', // 'image' OR 'pattern'
		currentBackgroundPicture: 'mountains', // 'mountains', 'oceans', 'treetops', 'pebbles' etc ....
		currentBackgroundPattern: '01', // '01', '02', '03' etc ...
		currentBackgroundShade: 'white-smoke', // 'olive', 'indian-red', 'forest-green' etc ...
		currentChangeThemeHeader: 'Change Theme',
		
		defaultBackgroundBundleName: 'beach', // 'default', 'treetops' etc...'
		defaultBackgroundBundle: {}, // will load it while inititizliaing 
		defaultBackgroundTheme: 'default', // 'default', 'glass' etc...'
		defaultBackgroundType: 'pattern', // 'picture' OR 'pattern'
		defaultBackgroundPicture: 'mountains', // 'mountains', 'oceans', 'treetops', 'pebbles' etc ....
		defaultBackgroundPattern: '06', // '01', '02', '03' etc ...
		defaultBackgroundShade: 'steel-blue', // 'olive', 'indian-red', 'forest-green' etc ...
		defaultChangeThemeHeader: 'Change Theme',
		
		pictures: ["mountains", "ocean", "beach", "treetops", "pebbles", "ror1", "ruby", "apple", "grafitti"],
		patterns: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
		shades: ["bootstrap-violet", "olive-green", "goldern-red", "dark-green", "dark-red", "dark-salmon", "dark-grey", "slate-grey", "dark-slate-grey", "light-slate-grey", "dim-grey", "steel-blue", "dark-steel-blue", "light-steel-blue", "cadet-blue", "brown", "maroon", "forest-green", "peru", "olive", "olive-rab", "indian-red", "fire-brick", "white-smoke"],
		themes: ["default", "glass"],
		bundles: {
								"mountains": {"type": "picture", "picture": "mountains", "shade": "white-smoke", "theme": "default"},
								"ocean": {"type": "picture", "picture": "ocean", "shade": "white-smoke", "theme": "default"},
								"beach": {"type": "picture", "picture": "beach", "shade": "white-smoke", "theme": "default"},
								"treetops": {"type": "picture", "picture": "treetops", "shade": "white-smoke", "theme": "default"},
								"pebbles": {"type": "picture", "picture": "pebbles", "shade": "white-smoke", "theme": "default"},
								"ror1": {"type": "picture", "picture": "ror1", "shade": "white-smoke", "theme": "default"},
								"ruby": {"type": "picture", "picture": "ruby", "shade": "white-smoke", "theme": "default"},
								"apple": {"type": "picture", "picture": "apple", "shade": "white-smoke", "theme": "default"},
								"grafitti": {"type": "picture", "picture": "grafitti", "shade": "white-smoke", "theme": "default"},
								
								"bootstrap-violet": {"type": "pattern", "pattern": "06", "shade": "bootstrap-violet", "theme": "default"},
								"olive-green": {"type": "pattern", "pattern": "06", "shade": "olive-green", "theme": "default"},
								"goldern-red": {"type": "pattern", "pattern": "06", "shade": "goldern-red", "theme": "default"},
								"dark-green": {"type": "pattern", "pattern": "06", "shade": "dark-green", "theme": "default"},
								"dark-red": {"type": "pattern", "pattern": "06", "shade": "dark-red", "theme": "default"},
								"dark-salmon": {"type": "pattern", "pattern": "06", "shade": "dark-salmon", "theme": "default"},
								"dark-grey": {"type": "pattern", "pattern": "06", "shade": "dark-grey", "theme": "default"},
								"slate-grey": {"type": "pattern", "pattern": "06", "shade": "slate-grey", "theme": "default"},
								"dark-slate-grey": {"type": "pattern", "pattern": "06", "shade": "dark-slate-grey", "theme": "default"},
								"light-slate-grey": {"type": "pattern", "pattern": "06", "shade": "light-slate-grey", "theme": "default"},
								"dim-grey": {"type": "pattern", "pattern": "06", "shade": "dim-grey", "theme": "default"},
								"steel-blue": {"type": "pattern", "pattern": "06", "shade": "steel-blue", "theme": "default"},
								"dark-steel-blue": {"type": "pattern", "pattern": "06", "shade": "dark-steel-blue", "theme": "default"},
								"light-steel-blue": {"type": "pattern", "pattern": "06", "shade": "light-steel-blue", "theme": "default"},
								"cadet-blue": {"type": "pattern", "pattern": "06", "shade": "cadet-blue", "theme": "default"},
								"brown": {"type": "pattern", "pattern": "06", "shade": "brown", "theme": "default"},
								"maroon": {"type": "pattern", "pattern": "06", "shade": "maroon", "theme": "default"},
								"forest-green": {"type": "pattern", "pattern": "06", "shade": "forest-green", "theme": "default"},
								"peru": {"type": "pattern", "pattern": "06", "shade": "peru", "theme": "default"},
								"olive": {"type": "pattern", "pattern": "06", "shade": "olive", "theme": "default"},
								"olive-rab": {"type": "pattern", "pattern": "06", "shade": "olive-rab", "theme": "default"},
								"indian-red": {"type": "pattern", "pattern": "06", "shade": "indian-red", "theme": "default"},
								"fire-brick": {"type": "pattern", "pattern": "06", "shade": "fire-brick", "theme": "default"},
								"white-smoke": {"type": "pattern", "pattern": "06", "shade": "white-smoke", "theme": "default"}
								
							},
		thumbnailImageSourceFolder: "images/backdrops/pictures",
    
		refresh: function(){
			var currentBackgroundThemeClass = "theme-" + this.currentBackgroundTheme;
			var currentBackgroundTypeClass = "backdrop-" + this.currentBackgroundType;
			var currentBackgroundPictureClass = "backdrop-picture-" + this.currentBackgroundPicture;
			var currentBackgroundPatternClass = "backdrop-pattern-" + this.currentBackgroundPattern;
			var currentBackgroundShadeClass = "backdrop-shade-" + this.currentBackgroundShade;
			
			$("body").removeClass().addClass(currentBackgroundThemeClass).addClass(currentBackgroundTypeClass);
			
			// Create #backdrop-holder element if its not there
			if($("body > #backdrop-holder").length == 0){
				$("body").prepend(tempaletteRenderer.createAnElement('div', {"id":"backdrop-holder"}));
			}
			
			if(this.currentBackgroundType == 'pattern'){
				$("body > #backdrop-holder").removeClass().addClass(currentBackgroundPatternClass).addClass(currentBackgroundShadeClass);
			} else {
				$("body > #backdrop-holder").removeClass().addClass(currentBackgroundPictureClass);
			}
		},
		
		loadBundle: function(bundleName, overrides, preview){
			
			if(bundleName == undefined || bundleName == null){
				bundleName = null;
			}
			if(preview == undefined || preview == null){
				preview = false;
			}
			if(overrides == undefined || overrides == null){
				overrides = {};
			}
			
			console.log("bundleName: " + bundleName);
			console.log("preview: " + preview);
			console.log("overrides: ");
			console.log(overrides);
			
			// The precendence is bundleName > urlParameter > cookie > DefaultBundleName
			this.currentBackgroundBundleName = bundleName || tempaletteUtilities.getURLParameter("tempalette-bundle") || tempaletteUtilities.getTempaletteCookie("tempalette-bundle") || this.defaultBackgroundBundleName;
			
			console.log("this.currentBackgroundBundleName: " + this.currentBackgroundBundleName);
			
			// You can override the use of a bundle by setting a cookie or url
			// The precendence is overrides["value"] > urlParameter["value"] > cookie["value"] > bundle["value"] > defaultValue
			
			// Load the values from the bundle (cloning using jquery.extend)
			this.currentBackgroundBundle = this.bundles[this.currentBackgroundBundleName];
			var bundle = jQuery.extend(true, {}, this.currentBackgroundBundle);
			
			console.log("bundle: ");
			console.log(bundle);
			
			// Override the values if cookie is set
			var bundle = this.loadValuesCookie(bundle);
			
			console.log("loadValuesCookie: ");
			console.log(bundle);
			
			// Override the values if url parameter is set
			var bundle = this.loadValuesUrlParameters(bundle);
			
			console.log("loadValuesUrlParameters: ");
			console.log(bundle);
			
			// Override the values if a custom override object is passed to this function
			if(overrides["theme"]){
				bundle["theme"] = overrides["theme"];
			}
			if(overrides["type"] ){
				bundle["type"] = overrides["type"];
			}
			if(overrides["picture"] ){
				bundle["picture"] = overrides["picture"];
			}
			if(overrides["pattern"] ){
				bundle["pattern"] = overrides["pattern"];
			}
			if(overrides["shade"] ){
				bundle["shade"] = overrides["shade"];
			}
			
			console.log("overrides: ");
			console.log(bundle);
			
			//var selectedTheme = overrides["theme"] || tempaletteUtilities.getURLParameter("tempalette-theme") || tempaletteUtilities.getTempaletteCookie("tempalette-theme") || this.bundles[value]["theme"] || this.currentBackgroundTheme;
			//var selectedType = overrides["type"] || tempaletteUtilities.getURLParameter("tempalette-type") || tempaletteUtilities.getTempaletteCookie("tempalette-type") || this.bundles[value]["type"] || this.currentBackgroundType;
			//var selectedPicture = overrides["picture"] || tempaletteUtilities.getURLParameter("tempalette-picture") || tempaletteUtilities.getTempaletteCookie("tempalette-picture") || this.bundles[value]["picture"] || this.currentBackgroundPicture;
			//var selectedPattern = overrides["pattern"] || tempaletteUtilities.getURLParameter("tempalette-pattern") || tempaletteUtilities.getTempaletteCookie("tempalette-pattern") || this.bundles[value]["pattern"] || this.currentBackgroundPattern;
			//var selectedShade = overrides["shade"] || tempaletteUtilities.getURLParameter("tempalette-shade") || tempaletteUtilities.getTempaletteCookie("tempalette-shade") || this.bundles[value]["shade"] || this.currentBackgroundShade;

			// Will set the cookie if preview = false
			this.setBackgroundTheme(bundle["theme"], false, (preview==true));
			this.setBackgroundType(bundle["type"], false, (preview==true));
			this.setBackgroundPicture(bundle["picture"], false, (preview==true));
			this.setBackgroundPattern(bundle["pattern"], false, (preview==true));
			this.setBackgroundShade(bundle["shade"], false, (preview==true));
			
			this.refresh();
		},
		loadValuesUrlParameters: function(bundle){
			if(bundle == undefined || bundle == null){
				var bundle = {};
			}
			bundle["theme"] = tempaletteUtilities.getURLParameter("tempalette-theme") || bundle["theme"] || null;
			bundle["type"] = tempaletteUtilities.getURLParameter("tempalette-type") || bundle["type"] || null;
			bundle["picture"] = tempaletteUtilities.getURLParameter("tempalette-picture") || bundle["picture"] || null;
			bundle["pattern"] = tempaletteUtilities.getURLParameter("tempalette-pattern") || bundle["pattern"] || null;
			bundle["shade"] = tempaletteUtilities.getURLParameter("tempalette-shade") || bundle["shade"] || null;
			return bundle;
		},
		loadValuesCookie: function(bundle){
			if(bundle == undefined || bundle == null){
				var bundle = {};
			}
			bundle["theme"] = tempaletteUtilities.getTempaletteCookie("tempalette-theme") || bundle["theme"] || null;
			bundle["type"] = tempaletteUtilities.getTempaletteCookie("tempalette-type") || bundle["type"] || null;
			bundle["picture"] = tempaletteUtilities.getTempaletteCookie("tempalette-picture") || bundle["picture"] || null;
			bundle["pattern"] = tempaletteUtilities.getTempaletteCookie("tempalette-pattern") || bundle["pattern"] || null;
			bundle["shade"] = tempaletteUtilities.getTempaletteCookie("tempalette-shade") || bundle["shade"] || null;
			return bundle;
		},
		setBackgroundTheme: function(value, refresh, setCookie){
			this.currentBackgroundTheme = value;
			
			// Setting the value to cookie if setCookie is true
			if(setCookie == true || setCookie == "true" || setCookie == "t" || setCookie == "T" || setCookie == 1 || setCookie == "1" ){
				tempaletteUtilities.setTempaletteCookie("tempalette-theme", value);
			}
			
			// Refreshing if required
			if(refresh == true || refresh == "true" || refresh == "t" || refresh == "T" || refresh == 1 || refresh == "1" ){
				this.refresh();
			}
		},
		setBackgroundType: function(value, refresh, setCookie){
			this.currentBackgroundType = value;
			
			// Setting the value to cookie if setCookie is true
			if(setCookie == true || setCookie == "true" || setCookie == "t" || setCookie == "T" || setCookie == 1 || setCookie == "1" ){
				tempaletteUtilities.setTempaletteCookie("tempalette-type", value);
			}
			
			// Refreshing if required
			if(refresh == true || refresh == "true" || refresh == "t" || refresh == "T" || refresh == 1 || refresh == "1" ){
				this.refresh();
			}
		},
		setBackgroundPicture: function(value, refresh, setCookie){
			this.currentBackgroundPicture = value;
			
			// Setting the value to cookie if setCookie is true
			if(setCookie == true || setCookie == "true" || setCookie == "t" || setCookie == "T" || setCookie == 1 || setCookie == "1" ){
				tempaletteUtilities.setTempaletteCookie("tempalette-picture", value);
			}
			
			// Refreshing if required
			if(refresh == true || refresh == "true" || refresh == "t" || refresh == "T" || refresh == 1 || refresh == "1" ){
				this.refresh();
			}
		},
		setBackgroundPattern: function(value, refresh, setCookie){
			this.currentBackgroundPattern = value;
			
			// Setting the value to cookie if setCookie is true
			if(setCookie == true || setCookie == "true" || setCookie == "t" || setCookie == "T" || setCookie == 1 || setCookie == "1" ){
				tempaletteUtilities.setTempaletteCookie("tempalette-pattern", value);
			}
			
			// Refreshing if required
			if(refresh == true || refresh == "true" || refresh == "t" || refresh == "T" || refresh == 1 || refresh == "1" ){
				this.refresh();
			}
		},
		setBackgroundShade: function(value, refresh, setCookie){
			this.currentBackgroundShade = value;
			
			// Setting the value to cookie if setCookie is true
			if(setCookie == true || setCookie == "true" || setCookie == "t" || setCookie == "T" || setCookie == 1 || setCookie == "1" ){
				tempaletteUtilities.setTempaletteCookie("tempalette-shade", value);
			}
			
			// Refreshing if required
			if(refresh == true || refresh == "true" || refresh == "t" || refresh == "T" || refresh == 1 || refresh == "1" ){
				this.refresh();
			}
		},

		
};

