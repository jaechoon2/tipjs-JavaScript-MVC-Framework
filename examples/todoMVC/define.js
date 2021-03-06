/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.define({
	noCache:true,
	noCacheVersion:"1.21",
	noCacheParam:"tipJS",
	noCacheAuto:false,
	name:"todoMVC",
	controllers:[
		"init.js",
		"create.js",
		"toggleAll.js",
		"destroyCompleted.js",
		"toggle.js",
		"edit.js",
		"blurOnEnter.js",
		"update.js",
		"destroy.js"
	],
	models:[
		"bindAction.js",
		"globalTodos.js",
		"utils.js"
	],
	views:[
		"renderer.js"
	]
});

