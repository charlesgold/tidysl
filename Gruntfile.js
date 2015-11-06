module.exports = function(grunt) {

  var cfg = {
    
  }



  // Load the plugins
  //load-grunt-tasks instead of grunt.loadNpmTasks('grunt-contrib-concat');
  //https://www.npmjs.com/package/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')


    ,concat: {
      options: {
          separator: ';'
          ,banner: '/* <%=pkg.name %> - <%=pkg.version %> */'
      }
      ,js: {
          src: [
            'app/js/master/master.js'
            ,'app/js/*.js'
          ]
          ,dest: 'tidy/app-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.js'
      }

    }//Concat

    ,less: {
      phoneGap: {
        options: {

        } 
        ,files: {
          'tidy/app-pg-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/less/app-pg-includes.less'
        }       
      }
      ,www: {
        options: {

        } 
        ,files: {
          'tidy/app-www-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/less/app-www-includes.less'
        }       
      }
      ,shopify: {
        options: {

        } 
        ,files: {
          'tidy/app-shopify-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/less/app-shopify-includes.less'
        }       
      }
    }//Less

    ,sass: {
      phoneGap: {
      options: {

        } 
        ,files: {
          'tidy/app-pg-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/sass/app-pg-includes.scss'
        }       
      }
      ,www: {
        options: {

        } 
        ,files: {
          'tidy/app-www-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/sass/app-www-includes.scss'
        }       
      }
      ,shopify: {
        options: {

        } 
        ,files: {
          'tidy/app-shopify-<%= pkg.version %>-<%= grunt.template.today("yyyymmdd-hMMss") %>.css' : 'app/sass/app-shopify-includes.scss'
        }       
      }      
    }

    
  }); //end of initConfig


  // Default task(s).
  grunt.registerTask('default', ['concat']);

};