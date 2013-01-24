$(document).ready(function(){
	
	// Load the backdrop along with the theme from the selected bundle.
	tempalette.loadBundle();
	
	// Show change theme window contents.
	tempaletteRenderer.createModal();
	
	// Bind functions for select button to load themes.
	$(".select-theme:not(.disabled)").on("click", function() {
		if($(this).data("bundle")){
			console.log("data(bundle): " + $(this).data("bundle"));
			tempalette.loadBundle($(this).data("bundle"));
		}
	  return false;
	});
	
	// Bind functions for select button to load themes.
	$(".preview-theme:not(.disabled)").on("click", function() {
		if($(this).data("theme-bundle")){
	  	tempalette.loadBundle($(this).data("bundle"), null, true);
		}
	  return false;
	});
	
	
});