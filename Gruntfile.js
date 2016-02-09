module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
        	// destination file and source file
          "css/custom/custom-bootstrap.css": "css/custom/custom-bootstrap.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['css/custom/custom-bootstrap.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};