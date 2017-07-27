module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files 'destination': 'source'
          'library/assets/vendor/bootstrap/bootstrap.css': 'node_modules/bootstrap/scss/bootstrap.scss',
          'library/assets/vendor/font-awesome/font-awesome.css': 'node_modules/font-awesome/scss/font-awesome.scss',
          'library/assets/vendor/tether/tether.css': 'node_modules/tether/src/css/tether.sass',
          'library/assets/vendor/css/style.css': 'stylesheets/style.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
        {expand: true, src: ['javascripts/**'], dest: 'library/assets/'},
        {expand: true, cwd: 'node_modules/bootstrap/dist/js/', src: ['bootstrap.js'], dest: 'library/assets/vendor/bootstrap/', filter: 'isFile'},
        {expand: true, cwd: 'node_modules/tether/dist/js/', src: ['tether.js'], dest: 'library/assets/vendor/tether/', filter: 'isFile'},
        {expand: true, cwd: 'node_modules/jquery/dist/', src: ['jquery.js'], dest: 'library/assets/vendor/jquery/', filter: 'isFile'},
        {expand: true, cwd: 'node_modules/font-awesome/', src: ['fonts/*'], dest: 'library/assets/vendor/font-awesome/', filter: 'isFile'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass', 'copy']);
};
