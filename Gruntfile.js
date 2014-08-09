module.exports = function (grunt) {

    grunt.initConfig({
        lessFile: 'styles/main.less',
        destCssFile: 'styles/main.css',
        tmpCssFile: 'styles/tmp.css',

        watch: {
            less: {
                files: '<%= lessFile %>',
                tasks: ['less']
            },
            autoPrefix: {
                files: '<%= tmpCssFile %>',
                tasks: ['autoprefixer', 'clean'],
                options: {
                    event: ['added', 'changed']
                }
            },
            html: {
                files: ['index.html', '<%= tmpCssFile %>'],
                options: {
                    livereload: true
                }
            }
        },
        less: {
            '<%= tmpCssFile %>': '<%= lessFile %>'
        },
        autoprefixer: {
            '<%= destCssFile %>': '<%= tmpCssFile %>'
        },
        clean: {
            tmp: ['<%= tmpCssFile %>']
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);
};
