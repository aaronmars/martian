'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserManager = exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Martian - Core JavaScript API for MindTouch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015 MindTouch Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * www.mindtouch.com  oss@mindtouch.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _plug = require('./lib/plug');

var _utility = require('./lib/utility');

var _user = require('./models/user.model');

var _userList = require('./models/userList.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for managing a MindTouch user.
 */

var User = exports.User = function () {

  /**
   * Construct a new User object.
   * @param {Number|String} [id='current'] - The user's numeric ID or username.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function User() {
    var id = arguments.length <= 0 || arguments[0] === undefined ? 'current' : arguments[0];
    var settings = arguments[1];

    _classCallCheck(this, User);

    this._id = _utility.utility.getResourceId(id, 'current');
    this._plug = new _plug.Plug(settings).at('@api', 'deki', 'users', this._id);
  }

  /**
   * Get the user information.
   * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the user information.
   */


  _createClass(User, [{
    key: 'getInfo',
    value: function getInfo() {
      return this._plug.get().then(_user.userModel.parse);
    }
  }]);

  return User;
}();

/**
 * A class for managing the users on a MindTouch site.
 */


var UserManager = exports.UserManager = function () {

  /**
   * Construct a new UserManager object.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function UserManager(settings) {
    _classCallCheck(this, UserManager);

    this.settings = settings;
    this.plug = new _plug.Plug(settings).at('@api', 'deki', 'users');
  }

  /**
   * Get the currently signed-in user.
   * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the current user's information.
   */


  _createClass(UserManager, [{
    key: 'getCurrentUser',
    value: function getCurrentUser() {
      return this.plug.at('current').get().then(_user.userModel.parse);
    }

    /**
     * Get all of the users.
     * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of users.
     */

  }, {
    key: 'getUsers',
    value: function getUsers() {
      return this.plug.get().then(_userList.userListModel.parse);
    }

    /**
     * Get a listing of users filtered by the supplied constraints
     * @param {Object} constraints - The various constraints that can be used to filter the user listing.
     * @param {Number} constraints.groupid - Search for users in a specific group
     * @param {String} constraints.fullname - Search for users full name starting with supplied text.
     * @param {Boolean} constraints.active - Search for users by their active status
     * @param {Number} constraints.authprovider - Return users belonging to given authentication service id
     * @param {String} constraints.email - Search for users by name and email or part of a name and email
     * @param {Boolean} constraints.seated - Search for users with or without seats
     * @param {String} constraints.username - Search for users name starting with supplied text
     * @param {Number} constraints.roleid - Search for users of a specific role ID.
     * @param {Number} constraints.limit - Maximum number of items to retrieve. Actual maximum is capped by site setting
     * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of found users.
     */

  }, {
    key: 'searchUsers',
    value: function searchUsers(constraints) {
      return this.plug.at('search').withParams(constraints).get().then(_userList.userListModel.parse);
    }

    /**
     * Get a {@see User} object by ID.
     * @param {Number|String} [id='current'] - The user's numeric ID or username.
     * @returns {User} - The User object corresponding to the supplied ID.
     */

  }, {
    key: 'getUser',
    value: function getUser() {
      var id = arguments.length <= 0 || arguments[0] === undefined ? 'current' : arguments[0];

      return new User(id, this.settings);
    }
  }]);

  return UserManager;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7OztBQU9ULFdBUFMsSUFPVCxHQUFzQztRQUExQiwyREFBSyx5QkFBcUI7UUFBVix3QkFBVTs7MEJBUDdCLE1BTzZCOztBQUNsQyxTQUFLLEdBQUwsR0FBVyxpQkFBUSxhQUFSLENBQXNCLEVBQXRCLEVBQTBCLFNBQTFCLENBQVgsQ0FEa0M7QUFFbEMsU0FBSyxLQUFMLEdBQWEsZUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDLEtBQUssR0FBTCxDQUE1RCxDQUZrQztHQUF0Qzs7Ozs7Ozs7ZUFQUzs7OEJBZ0JDO0FBQ04sYUFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQWlCLElBQWpCLENBQXNCLGdCQUFVLEtBQVYsQ0FBN0IsQ0FETTs7OztTQWhCRDs7Ozs7Ozs7SUF3QkE7Ozs7Ozs7QUFNVCxXQU5TLFdBTVQsQ0FBWSxRQUFaLEVBQXNCOzBCQU5iLGFBTWE7O0FBQ2xCLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQURrQjtBQUVsQixTQUFLLElBQUwsR0FBWSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsQ0FBWixDQUZrQjtHQUF0Qjs7Ozs7Ozs7ZUFOUzs7cUNBZVE7QUFDYixhQUFPLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLEdBQXhCLEdBQThCLElBQTlCLENBQW1DLGdCQUFVLEtBQVYsQ0FBMUMsQ0FEYTs7Ozs7Ozs7OzsrQkFRTjtBQUNQLGFBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixHQUFnQixJQUFoQixDQUFxQix3QkFBYyxLQUFkLENBQTVCLENBRE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQWtCQyxhQUFhO0FBQ3JCLGFBQU8sS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBdkIsQ0FBa0MsV0FBbEMsRUFBK0MsR0FBL0MsR0FBcUQsSUFBckQsQ0FBMEQsd0JBQWMsS0FBZCxDQUFqRSxDQURxQjs7Ozs7Ozs7Ozs7OEJBU0Q7VUFBaEIsMkRBQUsseUJBQVc7O0FBQ3BCLGFBQU8sSUFBSSxJQUFKLENBQVMsRUFBVCxFQUFhLEtBQUssUUFBTCxDQUFwQixDQURvQjs7OztTQWxEZiIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vbGliL3V0aWxpdHknO1xuaW1wb3J0IHt1c2VyTW9kZWx9IGZyb20gJy4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHt1c2VyTGlzdE1vZGVsfSBmcm9tICcuL21vZGVscy91c2VyTGlzdC5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgbWFuYWdpbmcgYSBNaW5kVG91Y2ggdXNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IFVzZXIgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW2lkPSdjdXJyZW50J10gLSBUaGUgdXNlcidzIG51bWVyaWMgSUQgb3IgdXNlcm5hbWUuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQgPSAnY3VycmVudCcsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdXRpbGl0eS5nZXRSZXNvdXJjZUlkKGlkLCAnY3VycmVudCcpO1xuICAgICAgICB0aGlzLl9wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAndXNlcnMnLCB0aGlzLl9pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjx1c2VyTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCByZXR1cm5zIGEge0BsaW5rIHVzZXJNb2RlbH0gY29udGFpbmluZyB0aGUgdXNlciBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5nZXQoKS50aGVuKHVzZXJNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgZm9yIG1hbmFnaW5nIHRoZSB1c2VycyBvbiBhIE1pbmRUb3VjaCBzaXRlLlxuICovXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IFVzZXJNYW5hZ2VyIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMucGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ3VzZXJzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50bHkgc2lnbmVkLWluIHVzZXIuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHVzZXJNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHJldHVybnMgYSB7QGxpbmsgdXNlck1vZGVsfSBjb250YWluaW5nIHRoZSBjdXJyZW50IHVzZXIncyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5hdCgnY3VycmVudCcpLmdldCgpLnRoZW4odXNlck1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9mIHRoZSB1c2Vycy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48dXNlckxpc3RNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHJldHVybnMgYSB7QGxpbmsgdXNlckxpc3RNb2RlbH0gY29udGFpbmluZyB0aGUgbGlzdCBvZiB1c2Vycy5cbiAgICAgKi9cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5nZXQoKS50aGVuKHVzZXJMaXN0TW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Rpbmcgb2YgdXNlcnMgZmlsdGVyZWQgYnkgdGhlIHN1cHBsaWVkIGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzIC0gVGhlIHZhcmlvdXMgY29uc3RyYWludHMgdGhhdCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgdGhlIHVzZXIgbGlzdGluZy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uc3RyYWludHMuZ3JvdXBpZCAtIFNlYXJjaCBmb3IgdXNlcnMgaW4gYSBzcGVjaWZpYyBncm91cFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJhaW50cy5mdWxsbmFtZSAtIFNlYXJjaCBmb3IgdXNlcnMgZnVsbCBuYW1lIHN0YXJ0aW5nIHdpdGggc3VwcGxpZWQgdGV4dC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnN0cmFpbnRzLmFjdGl2ZSAtIFNlYXJjaCBmb3IgdXNlcnMgYnkgdGhlaXIgYWN0aXZlIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25zdHJhaW50cy5hdXRocHJvdmlkZXIgLSBSZXR1cm4gdXNlcnMgYmVsb25naW5nIHRvIGdpdmVuIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uc3RyYWludHMuZW1haWwgLSBTZWFyY2ggZm9yIHVzZXJzIGJ5IG5hbWUgYW5kIGVtYWlsIG9yIHBhcnQgb2YgYSBuYW1lIGFuZCBlbWFpbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uc3RyYWludHMuc2VhdGVkIC0gU2VhcmNoIGZvciB1c2VycyB3aXRoIG9yIHdpdGhvdXQgc2VhdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uc3RyYWludHMudXNlcm5hbWUgLSBTZWFyY2ggZm9yIHVzZXJzIG5hbWUgc3RhcnRpbmcgd2l0aCBzdXBwbGllZCB0ZXh0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbnN0cmFpbnRzLnJvbGVpZCAtIFNlYXJjaCBmb3IgdXNlcnMgb2YgYSBzcGVjaWZpYyByb2xlIElELlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25zdHJhaW50cy5saW1pdCAtIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIHJldHJpZXZlLiBBY3R1YWwgbWF4aW11bSBpcyBjYXBwZWQgYnkgc2l0ZSBzZXR0aW5nXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHVzZXJMaXN0TW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCByZXR1cm5zIGEge0BsaW5rIHVzZXJMaXN0TW9kZWx9IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2YgZm91bmQgdXNlcnMuXG4gICAgICovXG4gICAgc2VhcmNoVXNlcnMoY29uc3RyYWludHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5hdCgnc2VhcmNoJykud2l0aFBhcmFtcyhjb25zdHJhaW50cykuZ2V0KCkudGhlbih1c2VyTGlzdE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB7QHNlZSBVc2VyfSBvYmplY3QgYnkgSUQuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbaWQ9J2N1cnJlbnQnXSAtIFRoZSB1c2VyJ3MgbnVtZXJpYyBJRCBvciB1c2VybmFtZS5cbiAgICAgKiBAcmV0dXJucyB7VXNlcn0gLSBUaGUgVXNlciBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgc3VwcGxpZWQgSUQuXG4gICAgICovXG4gICAgZ2V0VXNlcihpZCA9ICdjdXJyZW50Jykge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoaWQsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=user.js.map
