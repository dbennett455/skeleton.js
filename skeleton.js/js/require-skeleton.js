require.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-1.11.0',
        base64: 'base64-utf8.module'
    }
});

define(['jquery','base64'], function(jQuery,base64) {

// function closure to encapsulate our definition
(function(parent){

	// === constructor ===

	var Skeleton=(function(){
		return this;
	});

	// === Properties ===

	Skeleton.fn = Skeleton.prototype = {
			name: "",
			other: null
	};

	// === Methods ===

	// define a method
	Skeleton.fn.setName=(function(v) {
		this.name=v;
		return this;
	});

	// define a method
	Skeleton.fn.getName=(function(){
		return this.name;
	});

	// === namespace mappings ===

	// map to parent context
	parent.Skeleton=Skeleton;

	// map to browser global context
	if (typeof window !== 'undefined')
		window.Skeleton=Skeleton;

	// map to node.js
	if (typeof global !== 'undefined')
		global.Skeleton=Skeleton;

})(this);  // this is passed as 'parent' (defining object space)


});
