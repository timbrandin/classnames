// Helper to build out class from a list, object or a string in an attribute.
classNames = function(obj) {
  this.obj = obj;
};
classNames.prototype.toString = classNames.prototype.toHTML = function() {
  return '' + new SafeString(classNames.prototype._classNames(this.obj));
};
