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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
