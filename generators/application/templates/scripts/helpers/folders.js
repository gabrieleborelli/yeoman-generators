/*eslint-env node*/

const path = require('path');

const root = path.resolve(__dirname, '../..');

module.exports = {
  MODULES: path.join(root, 'node_modules'),
  BOWER  : path.join(root, 'bower_components'),
  SRC    : path.join(root, 'src'),
  VENDOR : path.join(root, 'src/vendor'),
  DIST   : path.join(root, 'dist')
};
