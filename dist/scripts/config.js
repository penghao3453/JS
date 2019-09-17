
requirejs.config({
	//加载jq插件先设置依赖jq
	shim: {
		cookie: {
		    deps: ['jquery']
		},
		validate:{
			deps: ['jquery']
		},
		validatezh:{
			deps: ['jquery']
		}
   	},
	paths : {
		"jquery" : "../scripts/jquery-1.9.0",
		"swiper" : "../scripts/swiper",
		"cookie" :"../scripts/jquery.cookie",
		"validate" : "../scripts/jquery.validate",
		"validatezh":"../scripts/jquery.validate.messages_zh"
//		"migrate":"http://localhost:8000/scripts/libs/migrate"
	}
});