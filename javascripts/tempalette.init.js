$(document).ready(function(){
	
	// This will check weather the parameters / cookies contain any theme and theme-style information 
	tempalette.currentBackgroundTheme = tempaletteUtilities.getURLParameter("tempalette-theme") || tempaletteUtilities.getTempaletteCookie("tempalette-theme") || tempalette.defaultBackgroundTheme;
	tempalette.currentBackgroundType = tempaletteUtilities.getURLParameter("tempalette-type") || tempaletteUtilities.getTempaletteCookie("tempalette-type") || tempalette.defaultBackgroundType;
	tempalette.currentBackgroundPicture = tempaletteUtilities.getURLParameter("tempalette-picture") || tempaletteUtilities.getTempaletteCookie("tempalette-picture") || tempalette.defaultBackgroundPicture;
	tempalette.currentBackgroundPattern = tempaletteUtilities.getURLParameter("tempalette-pattern") || tempaletteUtilities.getTempaletteCookie("tempalette-pattern") || tempalette.defaultBackgroundPattern;
	tempalette.currentBackgroundShade = tempaletteUtilities.getURLParameter("tempalette-shade") || tempaletteUtilities.getTempaletteCookie("tempalette-shade") || tempalette.defaultBackgroundShade;
	
	// setting the cookie again just to ensure.
	tempaletteUtilities.setTempaletteCookie("tempalette-theme", tempalette.currentBackgroundTheme);
	tempaletteUtilities.setTempaletteCookie("tempalette-type", tempalette.currentBackgroundType);
	tempaletteUtilities.setTempaletteCookie("tempalette-picture", tempalette.currentBackgroundPicture);
	tempaletteUtilities.setTempaletteCookie("tempalette-pattern", tempalette.currentBackgroundPattern);
	tempaletteUtilities.setTempaletteCookie("tempalette-shade", tempalette.currentBackgroundShade);
	
	// Load the theme by changing the body classes.
	tempalette.loadTheme();
	
	// Show change theme window contents.
	tempaletteRenderer.createModal();
	
	// Bind functions for select button to load themes.
	$(".select-theme:not(.disabled)").on("click", function() {
		if($(this).data("theme")){
	  	tempalette.currentBackgroundTheme = $(this).data("theme");
			tempaletteUtilities.setTempaletteCookie("theme", tempalette.currentBackgroundTheme);
		}
		if($(this).data("type")){
	  	tempalette.currentBackgroundType = $(this).data("type");
			tempaletteUtilities.setTempaletteCookie("type", tempalette.backgroundType);
		}
		if($(this).data("picture")){
	  	tempalette.currentBackgroundPicture = $(this).data("picture");
			tempaletteUtilities.setTempaletteCookie("picture", tempalette.currentBackgroundPicture);
		}
		if($(this).data("pattern")){
	  	tempalette.currentBackgroundPattern = $(this).data("pattern");
			tempaletteUtilities.setTempaletteCookie("pattern", tempalette.currentBackgroundPattern);
		}
		if($(this).data("shade")){
	  	tempalette.currentBackgroundShade = $(this).data("shade");
			tempaletteUtilities.setTempaletteCookie("shade", tempalette.currentBackgroundShade);
		}
		
		tempalette.loadTheme();
	  return false;
	});
	
	// Bind functions for select button to load themes.
	$(".preview-theme:not(.disabled)").on("click", function() {
		if($(this).data("theme-name")){
	  	tempalette.themeName = $(this).data("theme-name");
			//tempaletteUtilities.setTempaletteCookie("theme-name", tempalette.themeName);
		}
		if($(this).data("theme-style")){
	  	tempalette.themeStyle = $(this).data("theme-style");
			//tempaletteUtilities.setTempaletteCookie("theme-style", tempalette.themeStyle);
		}
		if($(this).data("theme-mode")){
	  	tempalette.themeMode = $(this).data("theme-mode");
			//tempaletteUtilities.setTempaletteCookie("theme-mode", tempalette.themeMode);
		}
		tempalette.loadTheme();
	  return false;
	});
	
});