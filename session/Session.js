
/**
 *   A session
 */
class Session{
  constructor (id, store) {
    this._id = id;
    this._store = store;
    this._data   = {};
  }

  Session.prototype.getId(){
    return this._id;
  };

  Session.prototype.set = function (key, value) {
      if (typeof key === 'string' || key instanceof String)) {
          this._data[key] = value;
      } else if ((key === 'object') && !value) {
          $.each(key, function (v, k) {
              this._data[k] = v;
          }, this);
      } else {
          throw new error("Invalid arguments for method 'set': key = " + key + ", value = " + value);
      }
  };

  Session.prototype.get = function (key, value) {
    return this._data[key];
  };

  Session.prototype.invalidate = function () {
    this._data = {};
    this._store.remove(this._id);
    this._id = undefined;
  };
  Session.prototype.isLoggedIn = function () {
    return !!this._data.loggedIn;
  };
  Session.prototype.getStatus = function () {
    return this.get("status");
  };
  Session.prototype.setStatus = function (status) {
    this.set("status", status);
  };

}
module.exports = Session;
