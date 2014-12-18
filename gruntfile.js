module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["Assets"],
                },
                files: {
                    "wwwroot/assets/css/bootstrap.css": "_libs/components/bootstrap/less/bootstrap.less"
                }
            },
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-less");
};