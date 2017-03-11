var fs = require('fs');
var path = require('path');

var is = {
  array: function(item) {
    return Array.isArray(item);
  },
  func: function(item) {
    return typeof item === 'function';
  },
  exists: function(name) {
    return fs.existsSync(name);
  },
  file: function(name) {
    return is.exists(name)
      ? fs.statSync(name).isFile() : false;
  },
  sameFile: function(a, b) {
    return path.resolve(a) == path.resolve(b);
  },
  directory: function(name) {
    return is.exists(name)
      ? fs.statSync(name).isDirectory() : false;
  },
  symbolicLink: function(name) {
    return is.exists(name)
      ? fs.lstatSync(name).isSymbolicLink() : false;
  }
};

module.exports = is;