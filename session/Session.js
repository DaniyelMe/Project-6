
/**
 *   A session
 */
class Session{
  constructor (id, store) {
    this._id = id;
    this._store = store;
    this._data   = {};
  }

  getId(){
    return this._id;
  };

  get(key, value) {
    return this._data[key];
  };

  set(key, value) {
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

  invalidate() {
    this._data = {};
    this._store.remove(this._id);
    this._id = undefined;
  };

  isLoggedIn() {
    return !!this._data.loggedIn;
  };

  getStatus() {
    return this.get("status");
  };

  setStatus(status) {
    this.set("status", status);
  };

}
module.exports = Session;
