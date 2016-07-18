module.exports = function(grunt) {

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),

    // Compiles our Sass
    sass: {
      options: {
        precision: 6,
        sourceComments: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/carbon.css': 'scss/carbon.scss'
        }
      }
    },

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      dist: {
        src: 'css/*.css'
      },
      docs: {
        src: '_site/*.css'
      }
    },

    // Runs CSS reporting
    parker: {
      options: {
        metrics: [
          'TotalStylesheets',
          'TotalStylesheetSize',
          'TotalRules',
          'TotalSelectors',
          'TotalIdentifiers',
          'TotalDeclarations',
          'SelectorsPerRule',
          'IdentifiersPerSelector',
          'SpecificityPerSelector',
          'TopSelectorSpecificity',
          'TopSelectorSpecificitySelector',
          'TotalIdSelectors',
          'TotalUniqueColours',
          'TotalImportantKeywords',
          'TotalMediaQueries'
        ],
        file: "css/.carbon-stats.md",
        usePackage: true
      },
      src: [
        'css/*.css'
      ]
    },

    // Build tooling

    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs/docs.scss'],
        tasks: ['sass', 'postcss', 'parker']
      }
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: '_site',
        raw: "version: <%= pkg.version %>"
      },
      serve: {
        options: {
          config: '_config.yml',
          serve: true,
          raw: 'baseurl: ""'
        }
      },
      dist: {
        options: {
          config: '_config.yml',
          serve: false
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:l1f7/simplexmobility-styleguide.git',
          branch: 'gh-pages'
        }
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            flatten: true,
            src: [
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.eot',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.svg',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.ttf',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.woff',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.woff2'
            ],
            dest: 'docs/fonts/',
            filter: 'isFile'
          }
        ]
      },
      dist: {
        files: [
          // includes files within path
          {
            expand: true,
            flatten: true,
            src: [
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.eot',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.svg',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.ttf',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.woff',
              'scss/vendor/font-awesome/fonts/fontawesome-webfont.woff2'
            ],
            dest: '_site/fonts/',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-parker');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Generate and format the CSS
  grunt.registerTask('default', ['sass', 'postcss', 'copy', 'jekyll:dist', 'parker']);

  grunt.registerTask('serve', ['sass', 'postcss', 'copy', 'jekyll:serve']);

  // Publish to GitHub
  grunt.registerTask('publish', ['copy:dist', 'jekyll:dist', 'postcss:docs', 'buildcontrol:pages']);
};
