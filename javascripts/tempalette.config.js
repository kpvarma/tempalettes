tempalette = {

		currentBackgroundTheme: 'default', // 'default', 'glass' etc...'
		currentBackgroundType: 'pattern', // 'image' OR 'pattern'
		currentBackgroundPicture: 'mountains', // 'mountains', 'oceans', 'treetops', 'pebbles' etc ....
		currentBackgroundPattern: '01', // '01', '02', '03' etc ...
		currentBackgroundShade: 'white-smoke', // 'olive', 'indian-red', 'forest-green' etc ...
		currentChangeThemeHeader: 'Change Theme',

		defaultBackgroundTheme: 'default', // 'default', 'glass' etc...'
		defaultBackgroundType: 'pattern', // 'image' OR 'pattern'
		defaultBackgroundPicture: 'mountains', // 'mountains', 'oceans', 'treetops', 'pebbles' etc ....
		defaultBackgroundPattern: '06', // '01', '02', '03' etc ...
		defaultBackgroundShade: 'steel-blue', // 'olive', 'indian-red', 'forest-green' etc ...
		defaultChangeThemeHeader: 'Change Theme',
		
		pictures: ["mountains", "ocean", "beach", "treetops", "pebbles", "ror1", "ruby", "apple", "grafitti"],
		patterns: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
		shades: ["bootstrap-violet", "olive-green", "goldern-red", "dark-green", "dark-red", "dark-salmon", "dark-grey", "slate-grey", "dark-slate-grey", "light-slate-grey", "dim-grey", "steel-blue", "dark-steel-blue", "light-steel-blue", "cadet-blue", "brown", "maroon", "forest-green", "peru", "olive", "olive-rab", "indian-red", "fire-brick", "white-smoke"],
		themes: ["default", "glass"],
		bundles: {
								"mountains": {"picture": "mountains", "shade": "white-smoke", "theme": "default"},
								"ocean": {"picture": "ocean", "shade": "white-smoke", "theme": "default"},
								"beach": {"picture": "beach", "shade": "white-smoke", "theme": "default"},
								"treetops": {"picture": "treetops", "shade": "white-smoke", "theme": "default"},
								"pebbles": {"picture": "pebbles", "shade": "white-smoke", "theme": "default"},
								"ror1": {"picture": "ror1", "shade": "white-smoke", "theme": "default"},
								"ruby": {"picture": "ruby", "shade": "white-smoke", "theme": "default"},
								"apple": {"picture": "apple", "shade": "white-smoke", "theme": "default"},
								"grafitti": {"picture": "grafitti", "shade": "white-smoke", "theme": "default"},
								
								"bootstrap-violet": {"pattern": "06", "shade": "bootstrap-violet", "theme": "default"},
								"olive-green": {"pattern": "06", "shade": "olive-green", "theme": "default"},
								"goldern-red": {"pattern": "06", "shade": "goldern-red", "theme": "default"},
								"dark-green": {"pattern": "06", "shade": "dark-green", "theme": "default"},
								"dark-red": {"pattern": "06", "shade": "dark-red", "theme": "default"},
								"dark-salmon": {"pattern": "06", "shade": "dark-salmon", "theme": "default"},
								"dark-grey": {"pattern": "06", "shade": "dark-grey", "theme": "default"},
								"slate-grey": {"pattern": "06", "shade": "slate-grey", "theme": "default"},
								"dark-slate-grey": {"pattern": "06", "shade": "dark-slate-grey", "theme": "default"},
								"light-slate-grey": {"pattern": "06", "shade": "light-slate-grey", "theme": "default"},
								"dim-grey": {"pattern": "06", "shade": "dim-grey", "theme": "default"},
								"steel-blue": {"pattern": "06", "shade": "steel-blue", "theme": "default"},
								"dark-steel-blue": {"pattern": "06", "shade": "dark-steel-blue", "theme": "default"},
								"light-steel-blue": {"pattern": "06", "shade": "light-steel-blue", "theme": "default"},
								"cadet-blue": {"pattern": "06", "shade": "cadet-blue", "theme": "default"},
								"brown": {"pattern": "06", "shade": "brown", "theme": "default"},
								"maroon": {"pattern": "06", "shade": "maroon", "theme": "default"},
								"forest-green": {"pattern": "06", "shade": "forest-green", "theme": "default"},
								"peru": {"pattern": "06", "shade": "peru", "theme": "default"},
								"olive": {"pattern": "06", "shade": "olive", "theme": "default"},
								"olive-rab": {"pattern": "06", "shade": "olive-rab", "theme": "default"},
								"indian-red": {"pattern": "06", "shade": "indian-red", "theme": "default"},
								"fire-brick": {"pattern": "06", "shade": "fire-brick", "theme": "default"},
								"white-smoke": {"pattern": "06", "shade": "white-smoke", "theme": "default"}
								
							},
		thumbnailImageSourceFolder: "images/backdrops/pictures",
    
		loadTheme: function(){
			var currentBackgroundThemeClass = "theme-" + this.currentBackgroundTheme;
			var currentBackgroundTypeClass = "backdrop-" + this.currentBackgroundType;
			var currentBackgroundPictureClass = "backdrop-picture-" + this.currentBackgroundPicture;
			var currentBackgroundPatternClass = "backdrop-pattern-" + this.currentBackgroundPattern;
			var currentBackgroundShadeClass = "backdrop-shade-" + this.currentBackgroundShade;
			
			$("body").removeClass().addClass(currentBackgroundThemeClass).addClass(currentBackgroundTypeClass);
			if(this.currentBackgroundType == 'pattern'){
				$("#backdrop-holder").removeClass().addClass(currentBackgroundPatternClass).addClass(currentBackgroundShadeClass);
			} else {
				$("#backdrop-holder").removeClass().addClass(currentBackgroundPictureClass);
			}
		},
		
		setBackgroundTheme: function(value){
			this.currentBackgroundTheme = value;
			this.loadTheme();
		},
		setBackgroundType: function(value){
			this.currentBackgroundType = value;
			this.loadTheme();
		},
		setBackgroundPicture: function(value){
			this.currentBackgroundPicture = value;
			this.loadTheme();
		},
		setBackgroundPattern: function(value){
			this.currentBackgroundPattern = value;
			this.loadTheme();
		},
		setBackgroundShade: function(value){
			this.currentBackgroundShade = value;
			this.loadTheme();
		},
		setTheme: function(values){
			
			this.currentBackgroundTheme = values != null && values.currentBackgroundTheme != null ? values.currentBackgroundTheme : this.currentBackgroundTheme;
			this.currentBackgroundType = values != null && values.currentBackgroundType != null ? values.currentBackgroundType : this.currentBackgroundType;
			this.currentBackgroundPicture = values != null && values.currentBackgroundPicture != null ? values.currentBackgroundPicture : this.currentBackgroundPicture;
			this.currentBackgroundPattern = values != null && values.currentBackgroundPattern != null ? values.currentBackgroundPattern : this.currentBackgroundPattern;
			this.currentBackgroundShade = values != null && values.currentBackgroundShade != null ? values.currentBackgroundShade : this.currentBackgroundShade;
			this.loadTheme();
		} 
		
};

