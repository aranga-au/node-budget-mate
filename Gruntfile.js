module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: ['**/*.js'],
            options: {

                ignores: ['node_modules/**/*.js']
            }
        },
        watch:{
            files: ['lib/**/*js', 'models/**/*.js'],
            tasks: ['jshint']
        },
        copy: {
            main: {
                src: ['**/*', '!**/grunt-**/**','!**/grunt/**'],
                expand: true,
                cwd: '.',
                dest: 'buid'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

};
