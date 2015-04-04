module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
          options: {
            //banner: '/* <%= pkg.name %> v<%= pkg.version %> - <%= pkg.url %> */',
            sassDir: 'src/',
            cssDir: './',
            outputStyle: 'compressed',
            specify: 'src/*'
          }
      },
    }, 

    watch: {
      compass: {
        files: ['src/*.scss'],
        tasks: ['compass']        
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass']);

};
