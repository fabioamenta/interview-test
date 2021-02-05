module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: "expanded",
        },
        files: {
          "dist/css/style.css": "src/scss/style.scss",
        },
      },
    },
    watch: {
      scripts: {
        files: "**/*.js",
        tasks: ["uglify"],
      },
      css: {
        files: ["src/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ["dist/*.html"],
      },
      options: {
        livereload: true,
      },
    },
    uglify: {
      scripts: {
        options: {
          minify: true,
        },
        files: {
          "dist/plugins/js/vendor.min.js": [
            "node_modules/@popperjs/core/dist/umd/popper.min.js",
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
            "node_modules/jquery-sticky/jquery.sticky.js",
          ],
          "dist/js/main.min.js": ["src/script/*.js"],
        },
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["dist/js/*.js", "dist/css/*.css", "dist/*.html"],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "dist/",
            index: "index.html"
          }
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.registerTask("dev", ["browserSync", "sass", "watch"]);
};