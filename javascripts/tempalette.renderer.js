tempaletteRenderer = {
	
	// Usage: tempaletteRenderer.createAnElement('div', {"id":"tempalette-change-theme-modal", "class":"modal hide fade", "tabindex":"-1", "role":"dialog", "aria-labelledby":"myModalLabel", "aria-hidden":"true"}, "")
	createAnElement: function(tag, attributes, content){
		content = content || "";
		
		var attributesList = []; // list of strings
		jQuery.each(attributes, function(name, value) {
			attributesList.push(name + "=\""+ value +"\"");
		});
		var attributesString = attributesList.join(" "); // String e.g: id=\"tempalette-change-theme-modal\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"
		var el = $('<'+ tag + ' ' + attributesString + '>'+ content +'</' + tag + '>');	
		return el;
	},
	
	createModal: function(){
		
		// Creating the Modal Holder Div
		var modalHolder = this.createAnElement('div', {"id":"tempalette-change-theme-modal", "class":"modal hide fade", "tabindex":"-1", "role":"dialog", "aria-labelledby":"myModalLabel", "aria-hidden":"true"})
		
		// Creating Modal Header Holder Div
		var modalHeader = this.createModalHeader();
		
		// Creating Modal Body Holder Div
		var modalContent = this.createModalBody();
		
		// Creating Modal Footer Holder Div
		//var modalFooter = this.createModalFooter();
		
		$(modalHolder).append(modalHeader);
		$(modalHolder).append(modalContent);
		//$(modalHolder).append(modalFooter);
		$('body').append(modalHolder);
	},
	
	createModalHeader: function(title){
		// <div class="modal-header">
		// 	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		// 	    <h3 id="myModalLabel">Change Theme</h3>
		// </div>
		title = title || tempalette.currentChangeThemeHeader;
		var closeButton = this.createAnElement('button', {"type":"button", "class":"close", "data-dismiss":"modal", "aria-hidden":"true"}, "x");
		var heading = this.createAnElement('h3', {"id":"changeThemeModalHeading"}, title);
		var headerDiv = this.createAnElement('div', {"class":"modal-header"});
		$(headerDiv).append(closeButton);
		$(headerDiv).append(heading);
		return headerDiv;
	},
	
	createModalBody: function(){
		// <div class="modal-body">
		// 	<p>One fine body…</p>
		// </div>
		
		var bodyHolderDiv = this.createAnElement('div', {"class":"modal-body"});
		var bundlesGallery = this.createThumbnailGallery();
		$(bodyHolderDiv).append(bundlesGallery);
		return bodyHolderDiv;
		
	},
	
	createModalFooter: function(){
		// <div class="modal-footer">
		// 	<a href="#" class="btn">Close</a>
		// 	<a href="#" class="btn btn-primary">Save changes</a>
		// </div>
		
		return "";
	},
	
	getThemeDisplayName: function(theme, type, shade, pattern, picture){
		var displayName = "";
		if(type=="pattern"){
			if(shade){
				var shade = shade.replace(/-/gi, " ");
			} else {
				shade = "";
			}
			if(pattern){
				var pattern = pattern.replace(/-/gi, " ");
			} else {
				pattern = "";
			}
			displayName = tempaletteUtilities.capitalize(shade) + " with " + tempaletteUtilities.capitalize(pattern);
		} else {
			if(picture){
				var picture = picture.replace(/-/gi, " ");
			} else {
				picture = "";
			}
			displayName = tempaletteUtilities.capitalize(picture);			
		}
		return displayName;
	},
	
	createThumbnailContent: function(bundleName){
		// <div class="span3 palette-inner margin-bottom-10 padding-top-10" style="border:none;">
		// 	<img alt="E" data-theme="a" data-type="b" data-shade="c" data-pattern="d" data-picture="e">
		// 	<div class="margin-10">
		// 		<div class="cl"></div><a class="title">E</a>
		// 		<div class="cl-10"></div><a href="javascript:void(0);" class="select-theme btn btn-mini btn-special btn-block escape-color" data-theme="a" data-type="b" data-shade="c" data-pattern="d" data-picture="e">Load this Theme</a>
		// 		<div class="cl-10"></div>
		// 	</div>
		// </div>

		var thumbnailSpanHolder = this.createAnElement('div', {"class":"span4", "style":"margin-left:0px;"});
		var thumbnailDiv = this.createAnElement('div', {"id": "backdrop-preview-01", "class":"thumbnail margin-5"});
		
		// Load the values from the bundle (cloning using jquery.extend)
		var bundle = jQuery.extend(true, {}, tempalette.bundles[bundleName]);
		var theme = bundle["theme"];
		var type = bundle["type"];
		var shade = bundle["shade"];
		var pattern = bundle["pattern"];
		var picture = bundle["picture"];
		
		var themeDisplayName = this.getThemeDisplayName(theme, type, shade, pattern, picture);
		
		if(themeDisplayName.length > 16){
			themeDisplayName = themeDisplayName.slice(0,16) + " ..";
		}
		
		if(type == "picture"){
			var thumbnailImageSource = tempalette.thumbnailImageSourceFolder + "/thumb-" + picture + ".jpg";
			var thumbnailImage = this.createAnElement('img', {"src":thumbnailImageSource, "alt":themeDisplayName, "data-bundle":bundleName});
			$(thumbnailDiv).append(thumbnailImage);
		} else {
			preview_pattern_class = "backdrop-pattern-preview-" + pattern + " backdrop-shade-preview-" + shade;
			var patterPreviewDiv = this.createAnElement('div', {"class": preview_pattern_class+" thumbnail", "style":"width:132px;height:96px;margin:0px auto;"});
			$(thumbnailDiv).append(patterPreviewDiv);
		}
		
		var thumbnailInner = this.createAnElement('div', {"class":"margin-10"});
		$(thumbnailInner).append(this.createAnElement('div', {"class":"cl"}));
		$(thumbnailInner).append(this.createAnElement('a', {"class":"title"}, themeDisplayName));
		$(thumbnailInner).append(this.createAnElement('div', {"class":"cl-10"}));
		$(thumbnailInner).append(this.createAnElement('a', {"href": "javascript:void(0);", "class":"select-theme btn btn-mini btn-special btn-block escape-color", "data-bundle":bundleName}, "Load this Theme"));
		$(thumbnailInner).append(this.createAnElement('div', {"class":"cl"}));
		$(thumbnailDiv).append(thumbnailInner);
		$(thumbnailSpanHolder).append(thumbnailDiv);
		return thumbnailSpanHolder;
	},
	
	createThumbnailGallery: function(){
		
		// Creating a holder for gallery of pictures
		var bundlesGallery  = this.createAnElement('div', {"id": "bundles-gallery", "class":"palette-inner"});
		var bundlesFluidHolder = this.createAnElement('div', {"class":"row-fluid"});
		
		jQuery.each(tempalette.bundles, function(name, value) {
			var thumbnail = tempaletteRenderer.createThumbnailContent(name);
			bundlesFluidHolder.append(thumbnail);
		});
		bundlesGallery.append(bundlesFluidHolder);
		return bundlesGallery;
	}

}