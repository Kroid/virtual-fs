module.exports = VirtualFS;

/**
 * @function VirtualFS
 *
 * @param {function} adapter - Adapter for VirtualFS
 * @param {*} [options] - Configure VirtualFS
 * @param {function} done - Callback, return instance of VirtualFS class
 */

function VirtualFS(adapter, options) {
  this.adapter = adapter;

  if (!options) { options = {};}
  if (!options.cache) {options.cache = {}; }

  options.cache.list = options.cache.list === undefined ? true : !!options.cache.list;
  options.cache.content = options.cache.content === undefined ? false : !!options.cache.content;

  this.options = options;
}


/**
 * VirtualFS api:
 *
 * @function copy
 * @function createDirectory
 * @function createFile
 * @function list
 * @function move
 * @function read
 * @function remove
 * @function rename
 * @function watch
 * @function write
 *
 */

VirtualFS.prototype.copy = function(src, dest, cb) {
  this.adapter.copy(src, dest, cb);
};
VirtualFS.prototype.createDirectory = function(_path, cb) {
  this.adapter.createDirectory();
};
VirtualFS.prototype.createFile = function(_path, content, options, cb) {
  this.adapter.createFile(_path, content, options, cb);
};
VirtualFS.prototype.list = function(_path, cb) {
  this.adapter.list(_path, cb);
};
VirtualFS.prototype.move = function(src, dest, cb) {
  this.adapter.move(src, dest, cb);
};
VirtualFS.prototype.read = function(_path, options, cb) {
  this.adapter.read(_path, options, cb);
};
VirtualFS.prototype.remove = function(_path, cb) {
  this.adapter.remove(_path, cb);
};
VirtualFS.prototype.rename = function(_path, oldName, newName, cb) {
  this.adapter.rename(_path, oldName, newName, cb);
};
//VirtualFS.prototype.watch = function() {
//  this.adapter.watch();
//};
VirtualFS.prototype.write = function(_path, content, options, cb) {
  this.adapter.write(_path, content, options, cb);
};

