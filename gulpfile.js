let gulp=require("gulp")
let uglify=require("gulp-uglify")
let babel=require("gulp-babel")
let sass=require("gulp-sass")
let webserver=require("gulp-webserver")


	gulp.task("buildCSS",done=>{
		gulp.src("./src/style/*.css").pipe(sass()).pipe(gulp.dest("./dist/style"))
		done()
	})
//	
	gulp.task("buildHTML",()=>{
		gulp.src("./src/html/*.*").pipe(gulp.dest("./dist/html"))
	})
//	
	gulp.task("buildJS",()=>{
		gulp.src("./src/scripts/libs/*.js").pipe(gulp.dest("./dist/scripts/libs"))
	})
//	
	gulp.task("buildscriptsJS",()=>{
		gulp.src("./src/scripts/*.js").pipe(gulp.dest("./dist/scripts"))
	})
	
	gulp.task("buildStaticResource",()=>{
		gulp.src("./src/static/*.*").pipe(gulp.dest("./dist/static"))
	})
	
//	监听
	gulp.task("watching",()=>{	
		gulp.watch("./src/style/*.scss",["buildCSS"])
		gulp.watch("./src/scripts/*.js",["buildJS"])
		gulp.watch("./src/scripts/*.js",["buildscriptsJS"])
		gulp.watch("./src/html/*.*",["buildHTML"])
		gulp.watch("./src/static/img/*.*",["buildStaticResource"])
	})
//	
//	//启动服务器
gulp.task('webserver',["watching"],function() {
		
	gulp.src('dist')
	  .pipe(webserver({
		livereload: true,
		directoryListing: true,
//	      open: true,
//	      https:true,
		proxies:[{
			source:'/goods',
			target:'http://gouwu.360.cn/list/fetch?'
			
		}]
	  }));
  });
	gulp.task("build",["buildscriptsJS","buildJS","buildHTML","buildCSS","buildStaticResource"])
