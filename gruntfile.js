module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "_libs",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/assets/css/site.min.css': [
                        '_libs/bootswatch/paper/bootstrap.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    '_libs/angular/angular.js',
                    '_libs/angular-animate/angular-animate.js',
                    '_libs/angular-aria/angular-aria.js',
                    '_libs/angular-cookies/angular-cookies.js',
                    '_libs/angular-loader/angular-loader.js',
                    '_libs/angular-messages/angular-messages.js',
                    '_libs/angular-resource/angular-resource.js',
                    '_libs/angular-route/angular-route.js',
                    '_libs/angular-sanitize/angular-sanitize.js',
                    '_libs/angular-touch/angular-touch.js',
                    '_libs/jquery/jquery.js',
                    '_libs/bootstrap/js/bootstrap.js'
                ],
                dest: 'wwwroot/assets/libs/main-bundle.min.js'
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};