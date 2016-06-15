module.exports = function (grunt) {

    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),

        //合并css、js
        concat: {
            task1css: {
                //文件头部输出信息
                options: {
                    banner: '/*<%= pkg.version %>*/'
                },
                files: {
                    'css/style.css': ['css/base.css', 'css/app.css']
                }
            }
        },
        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*<%= pkg.version %>*/',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            task4css: {
                src: ['css/style.css'],
                dest: 'css/style.css'
            }
        },
        //合并require文件
        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    //mainConfigFile: "config.js",
                    name: "pdw_app", // assumes a production build using almond 
                    out: "js/bulid.js"
                }
            }
        },
        //压缩业务文件
        uglify: {
            js: {
                expand: true,
                cwd: 'js/use/',
                src: '*.js',
                dest: 'js/use_min/'
            }
        }

    });

    // 加载指定插件任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');


    // 默认执行的任务
    grunt.registerTask('default', ['concat', 'uglify', 'requirejs', 'cssmin']);

};