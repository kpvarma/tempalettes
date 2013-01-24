$(document).ready(function(){
	
	// Load the backdrop along with the theme from the selected bundle.
	tempalette.loadBundle();
	
	// Show change theme window contents.
	tempaletteRenderer.createModal();
	
	// Bind functions for select button to load themes.
	$(".select-theme:not(.disabled)").on("click", function() {
		bundleName = $(this).data("bundle");
		if(bundleName){
			var bundle = tempalette.bundles[bundleName];
	  	tempalette.loadBundle(bundleName, bundle);
		}
	  return false;
	});
	
	// Bind functions for select button to load themes.
	$(".preview-theme:not(.disabled)").on("click", function() {
		bundleName = $(this).data("bundle");
		if(bundleName){
			var bundle = tempalette.bundles[bundleName];
	  	tempalette.loadBundle(bundleName, bundle, true);
		}
	  return false;
	});
	
	
});