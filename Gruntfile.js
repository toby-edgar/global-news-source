module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    },
    sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'css/style.css': 'sass/style.scss'
      }
    }
  }

  });

  // Load the plugin that provides the "uglify" amd "sass" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};
