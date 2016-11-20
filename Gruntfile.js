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
                src: ['**/*', '!**/grunt-**/**','!**/grunt/**','!*.md','!./.idea/**','!Gruntfile.js','!config-sample.js'],
                expand: true,
                cwd: '.',
                dest: 'build'
            }
        },
        compress: {
            main: {
                options: {
                    archive: './dist/node-budget-api.zip',
                    mode : 'zip'
                },
                files: [{
                    src: ['**/*'],
                    cwd: './build/',
                    expand: true
                }]

            }
        },
        clean: {
            all: {
                src: ['./build','./dist']
            },
            temp:{
                src: ['./build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('build',['jshint','clean:all','copy','compress','clean:temp']);


};
