module.exports = function(grunt) {
    //配置参数
    grunt.initConfig({
        argv:'zx',//监听版本
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("isoDateTime") %> */\n'
            },
            js: {
              files: {
                // 'static/v2/js/jquery-1.7.2.min.js': ['dev/v2/js/public/lib/jquery-1.7.2.min.js'],
                'js/main.min.js': 'js/**/*.js'
              }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['dev/v2/css/<%= argv %>/**/*.css'],
                tasks: ['cssmin:<%= argv %>']
            },
            uglify: {
                files: ['dev/**/*.js'],
                tasks: ['uglify:<%= argv %>']
            }
        },
        cssmin: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("isoDateTime") %> */',
                keepSpecialComments: 0,
                sourceMap: true
            },
            home:{
              files: {

                  'css/min.main.css': [
                      "css/**/*.css"
                  ]
                //'static/v2/css/min.base.css': [
                //    "dev/v2/css/home/base.css", "dev/v2/css/home/screen.css", "dev/v2/css/home/oneone.css"
                //]
              }
            },
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //注册任务
    //grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('build', function(arg){
       if(arguments.length === 0){
         grunt.task.run('uglify', 'cssmin');
       }
    });

    grunt.registerTask('deving', function(arg){
        grunt.task.run('watch');
    });
    grunt.registerTask('test', function (arg1, arg2) {
      console.log(arg1, arg2);
    })
    // grunt.registerTask('deving-ty22', ['cssmin:tiyan22']);
    // grunt.registerTask('weather', ['uglify:common_tiyan21']);
    // grunt.registerTask('suggest', ['uglify:suggest']);
    // grunt.registerTask('bdv', ['uglify:baiduvideo']);
    // grunt.registerTask('nav', ['uglify:nav']);

}
