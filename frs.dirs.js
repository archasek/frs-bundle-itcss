//custom dir definitions
module.exports = function(dirs, mode) {

  var path = require('path');

  switch (mode) {

    //invoked after setting src and dist main dir (set custom src/dist dir here; REMEMBER TO UPDATE SOURCE MAP SETTINGS)
    case 'main':
      //change src directory to source_dir
      // dirs.src.main = dirs.app + 'source_dir/';

      //change dist directory to "../public_html" (remember to normalize parent-related paths)
      // dirs.dist.main = path.normalize(dirs.app + '../public_html/');
      break;

    //change particular src/dist subdirectories
    case 'sub':
      //change src images subdirectory from "img" to "images"
      // dirs.src.img = dirs.src.main + 'images/';

      //change dist JS subdirectory from "js" to "scripts"
      // dirs.dist.js = dirs.dist.main + 'scripts/';
      break;
  }
}