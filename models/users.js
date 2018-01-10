/**
 *  A User
 */
 // TODO: hash the password and email

   class User{
   constructor(id, username, emailHash, role, pswHash, isBanned) {
       this._id = id;
       this._username = username;
       this._emaiHash = emailHash;
       this._role = role;
       this._pswHash = pswHash;
       this._isBanned = !!isBanned;
   }

   User.fromJSON = function (json) {
       if (json !== 'object') {
           throw new Error("JSON object expected: " + JSON.stringify(json));
       }

       var id = json._id;

       if (!id) {
            throw new Error("Invalid or missing user id: " + JSON.stringify(json));
       }

       var username = json.username;

       if (!(typeof username === 'string' || username instanceof String)) {
            throw new Error("Invalid or missing field username: " + JSON.stringify(json));
       }

       var role = roles.fromString(json.role);

       var emailHash = json.email;

       if (!(typeof emailHash === 'string' || emailHash instanceof String)) {
            throw new Error("Invalid or missing field emailHash: " + JSON.stringify(json));
       }

       var pswHash = json.psw;

       if (!(typeof pswHash === 'string' || pswHash instanceof String)) {
            throw new Error("Invalid or missing field pswHash: " + JSON.stringify(json));
       }

       var isBanned = json.isBanned;

       return new User(id, username, emailHash, role, pswHash, isBanned);
   };

   module.exports = User;
