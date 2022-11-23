module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
      sprite:{
        all: {
          src: 'img/*.png',
          dest: 'img/spritesheet.png',
          destCss: 'img/sprites.css'
        }
      }
    });
  
    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');
  };