//custom config options
module.exports = function(config, dirs) {

  //require a module from core
  //var extend = require(dirs.rootModules + 'extend');



  /********************
    Styles
  *********************/

  //change sourcemaps root
  // config.styles.sourceMapsRoot = '/src/';

  //enable sourcemaps for prod
  // config.styles.prod.sourceMaps = true;

  //change autoprefixer options
  // config.styles.autoprefixer.remove = false;

  //change cssnano options
  // config.styles.cssNamenano.safe = false;

  //inject - enable group-css-media-queries plugin (disabled by default as unsafe)
  // config.styles.inject.optimizeMediaQueries = true;

  var sassLint = require('gulp-sass-lint');

  config.styles.inject.sass = function(stream) {
    return stream
      .pipe(sassLint({
        rules: {
          'no-css-comments': false,
          'property-sort-order': 0
        }
      }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  };



  /********************
    Fonts
  *********************/

  //inject - add a middleware plugin before writing the output
  // var myPlugin = require('my-plugin');
  // config.fonts.inject.dest = function(stream) {
  //   return stream.pipe(myPlugin());
  // };



  /********************
    Sprites
  *********************/

  //modify default sprites item - example for responsive sprites
  // config.sprites.items[0].options.algorithm = 'diagonal';

  //modify default sprites item - example for animations (change Spritesmith algorithm options)
  // config.sprites.items[0].options.algorithm = 'left-right';
  // config.sprites.items[0].options.algorithmOpts = { sort: false };


  //add a sprites item - full options (any option omitted will receive a default value)
  /*
  config.sprites.items.push({
    name: 'name',                                     //sprite base name, the only required parameter
    src: dirs.src.sprites.main + 'name/**' + '/*.*',  //source dir, concat used just to avoid comment ending
    dest: dirs.dist.sprites,                          //dest dir, set to null to ignore
    varPrepend: 'name-',                              //prepended before SASS sprite variable name

    //Spritesmith options
    options: {
      imgName: 'name.png',                    //output sprite image name
      imgPath: '../img/name.png',             //path to the output image relative to the CSS file
      cssName: '_name.scss',                  //name of the output SASS file created in the styles dir
      cssSpritesheetName: 'name-spritesheet', //stylesheet is a SASS map containing info about all sprite images
      cssVarMap: function (sprite) {
        sprite.name = 'name-' + sprite.name;  //sprite variable builder
      }
    }
  });
  */



  /********************
    JS
  *********************/

  //store vendor and app code in separate files
  config.js.concatVendorApp = false;

  //change sourcemaps root
  // config.js.sourceMapsRoot = '/src/';

  //enable lint on change
  config.js.inject.lint = true;

  //allow build even if lint errored
  config.js.inject.lintFailAfterError = false;

  //disable Babel
  config.js.inject.babel = false;
  config.lint.options.parserOptions.ecmaVersion = 5;


  //handy comps references
  var comps = config.js.comps,
      compMain = comps.main;

  //main JS: change filename to script.js
  // compMain.filename = 'script.js';

  //main JS: add prioritized files
  // compMain.priority.vendor = ['carousel.js'];
  // compMain.priority.app = ['core.js', 'app/init.js'];

  //add a html5shiv comp (add a dependency in in your bower.json file first)
  // comps.html5shiv = {
  //   bower: ['html5shiv'],
  //   excludeIn: true,
  //   watch: false
  // }

  //add a comp (full parameters)
  // comps.comp_name = {
  //   filename: 'comp_filename',      //set to false to not produce any output file (for sub-comps); if not set, defaults to comp id

  //   bower: ['**/*.js'],   //set only name of the package
  //   vendor: ['**/*.js'],  //path relative to the appropriate directory
  //   app: ['**/*.js'],     //path relative to the appropriate directory

  //   //set prioritized paths
  //   priority: {
  //     vendor: [],
  //     app: []
  //   },

  //   //set other comp ids to include
  //   dependencies: [],

  //   //set comps to exclude all loaded scripts in other comps, e.g.
  //   //excludeIn: ['comp1', 'comp2'] //excluded in selected comps
  //   //excludeIn: true   //excluded in all other comps
  //   //excludeIn: false  //no exclusion
  //   excludeIn: false,

  //   watch: true  //not needed, watch blocked only if false
  // }



  /********************
    Images
  *********************/

  //change imagemin optimization level
  // config.images.imagemin.optimizationLevel = 4;



  /********************
    Views
  *********************/

  //change htmlmin options
  // config.views.htmlmin.collapseWhitespace = false;
  // config.views.htmlmin.removeComments = false;


  //disable htmlmin
  // config.views.inject.optimize = false;



  /********************
    Custom dirs
  *********************/

  //watch and copy contents of "php" dir from src to dist
  /*
  config.customDirs.items.push({
    name: 'php views',  //optional, displayed in the console during watch
    src: dirs.src.main + 'php/**' + '/*.php',
    dest: dirs.dist.main + 'php/',  //set to null to just watch the dir without copying (e.g. external backend views)
    inject: {
      //an object { dirInfo } (with this config) available as this.taskData from within inject functions
      src: true,   //function must return: a stream (if canceled) or a glob array passed to the src
      limit: true, //gulp-changed plugin
      dest: true,

      //watch task, receives undefined and { id, dirInfo } with id and definition as a second parameter
      watch: true,

      //clean task, receives current glob to delete (see the clean task injector docs) and { dirInfo } with definition object as a second parameter
      //not needed to disable if "dest" is null
      clean: true
    }
  });
*/



  /********************
    Lint
  *********************/

  //change ESLint options - add allowed globals
  // config.lint.options.globals = {
  //   angular: false
  // }

  //change ESLint options - customize rules
  // config.lint.options.rules = {
  //   'quotes': [2, 'single'],
  //   'comma-dangle': [2, 'only-multiline']
  // }

  config.lint.options.rules = {
    'indent': ['error', 2]
  }



  /********************
    Browsersync
  *********************/

  //handy Browsersync options reference
  var bsOpts = config.browserSync.options;

  // bsOpts.host = 'website.local';
  // bsOpts.port = 81;

  //set proxy
  // bsOpts.server = false;
  // bsOpts.open = 'external';
  // bsOpts.proxy = 'proxy.local';



  /********************
    Clean
  *********************/

  //disable images dir cleaning
  // config.clean.inject.images = false;

}
