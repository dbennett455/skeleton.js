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
