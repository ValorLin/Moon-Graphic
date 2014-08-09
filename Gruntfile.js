module.exports = function (grunt) {

    grunt.initConfig({
        lessFile: 'styles/main.less',
        tmpCssFile: 'styles/tmp.css',
        destCssFile: 'styles/main.css',

        watch: {
            less: {
                files: '<%= lessFile %>',
                tasks: ['less']
            },
            autoPrefix: {
                files: '<%= tmpCssFile %>',
                tasks: ['autoprefixer']
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
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
};
