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


var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7OztBQU9ULFdBUFMsSUFPVCxHQUFzQztRQUExQiwyREFBSyx5QkFBcUI7UUFBVix3QkFBVTs7MEJBUDdCLE1BTzZCOztBQUNsQyxTQUFLLEdBQUwsR0FBVyxpQkFBUSxhQUFSLENBQXNCLEVBQXRCLEVBQTBCLFNBQTFCLENBQVgsQ0FEa0M7QUFFbEMsU0FBSyxLQUFMLEdBQWEsZUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDLEtBQUssR0FBTCxDQUE1RCxDQUZrQztHQUF0Qzs7Ozs7Ozs7ZUFQUzs7OEJBZ0JDO0FBQ04sYUFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQWlCLElBQWpCLENBQXNCLGdCQUFVLEtBQVYsQ0FBN0IsQ0FETTs7OztTQWhCRDs7Ozs7Ozs7SUF3QkE7Ozs7Ozs7QUFNVCxXQU5TLFdBTVQsQ0FBWSxRQUFaLEVBQXNCOzBCQU5iLGFBTWE7O0FBQ2xCLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQURrQjtBQUVsQixTQUFLLElBQUwsR0FBWSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsQ0FBWixDQUZrQjtHQUF0Qjs7Ozs7Ozs7ZUFOUzs7cUNBZVE7QUFDYixhQUFPLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLEdBQXhCLEdBQThCLElBQTlCLENBQW1DLGdCQUFVLEtBQVYsQ0FBMUMsQ0FEYTs7Ozs7Ozs7OzsrQkFRTjtBQUNQLGFBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixHQUFnQixJQUFoQixDQUFxQix3QkFBYyxLQUFkLENBQTVCLENBRE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQWtCQyxhQUFhO0FBQ3JCLGFBQU8sS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBdkIsQ0FBa0MsV0FBbEMsRUFBK0MsR0FBL0MsR0FBcUQsSUFBckQsQ0FBMEQsd0JBQWMsS0FBZCxDQUFqRSxDQURxQjs7Ozs7Ozs7Ozs7OEJBU0Q7VUFBaEIsMkRBQUsseUJBQVc7O0FBQ3BCLGFBQU8sSUFBSSxJQUFKLENBQVMsRUFBVCxFQUFhLEtBQUssUUFBTCxDQUFwQixDQURvQjs7OztTQWxEZiIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi91dGlsaXR5L3BsdWcnO1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL3V0aWxpdHkvdXRpbGl0eSc7XG5pbXBvcnQge3VzZXJNb2RlbH0gZnJvbSAnLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQge3VzZXJMaXN0TW9kZWx9IGZyb20gJy4vbW9kZWxzL3VzZXJMaXN0Lm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIGZvciBtYW5hZ2luZyBhIE1pbmRUb3VjaCB1c2VyLlxuICovXG5leHBvcnQgY2xhc3MgVXNlciB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgVXNlciBvYmplY3QuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbaWQ9J2N1cnJlbnQnXSAtIFRoZSB1c2VyJ3MgbnVtZXJpYyBJRCBvciB1c2VybmFtZS5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCA9ICdjdXJyZW50Jywgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1dGlsaXR5LmdldFJlc291cmNlSWQoaWQsICdjdXJyZW50Jyk7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICd1c2VycycsIHRoaXMuX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVzZXIgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHVzZXJNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHJldHVybnMgYSB7QGxpbmsgdXNlck1vZGVsfSBjb250YWluaW5nIHRoZSB1c2VyIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmdldCgpLnRoZW4odXNlck1vZGVsLnBhcnNlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgbWFuYWdpbmcgdGhlIHVzZXJzIG9uIGEgTWluZFRvdWNoIHNpdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgVXNlck1hbmFnZXIgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAndXNlcnMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzaWduZWQtaW4gdXNlci5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48dXNlck1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgcmV0dXJucyBhIHtAbGluayB1c2VyTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgdXNlcidzIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCdjdXJyZW50JykuZ2V0KCkudGhlbih1c2VyTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgb2YgdGhlIHVzZXJzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjx1c2VyTGlzdE1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgcmV0dXJucyBhIHtAbGluayB1c2VyTGlzdE1vZGVsfSBjb250YWluaW5nIHRoZSBsaXN0IG9mIHVzZXJzLlxuICAgICAqL1xuICAgIGdldFVzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmdldCgpLnRoZW4odXNlckxpc3RNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdGluZyBvZiB1c2VycyBmaWx0ZXJlZCBieSB0aGUgc3VwcGxpZWQgY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uc3RyYWludHMgLSBUaGUgdmFyaW91cyBjb25zdHJhaW50cyB0aGF0IGNhbiBiZSB1c2VkIHRvIGZpbHRlciB0aGUgdXNlciBsaXN0aW5nLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25zdHJhaW50cy5ncm91cGlkIC0gU2VhcmNoIGZvciB1c2VycyBpbiBhIHNwZWNpZmljIGdyb3VwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cmFpbnRzLmZ1bGxuYW1lIC0gU2VhcmNoIGZvciB1c2VycyBmdWxsIG5hbWUgc3RhcnRpbmcgd2l0aCBzdXBwbGllZCB0ZXh0LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uc3RyYWludHMuYWN0aXZlIC0gU2VhcmNoIGZvciB1c2VycyBieSB0aGVpciBhY3RpdmUgc3RhdHVzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbnN0cmFpbnRzLmF1dGhwcm92aWRlciAtIFJldHVybiB1c2VycyBiZWxvbmdpbmcgdG8gZ2l2ZW4gYXV0aGVudGljYXRpb24gc2VydmljZSBpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJhaW50cy5lbWFpbCAtIFNlYXJjaCBmb3IgdXNlcnMgYnkgbmFtZSBhbmQgZW1haWwgb3IgcGFydCBvZiBhIG5hbWUgYW5kIGVtYWlsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb25zdHJhaW50cy5zZWF0ZWQgLSBTZWFyY2ggZm9yIHVzZXJzIHdpdGggb3Igd2l0aG91dCBzZWF0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJhaW50cy51c2VybmFtZSAtIFNlYXJjaCBmb3IgdXNlcnMgbmFtZSBzdGFydGluZyB3aXRoIHN1cHBsaWVkIHRleHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uc3RyYWludHMucm9sZWlkIC0gU2VhcmNoIGZvciB1c2VycyBvZiBhIHNwZWNpZmljIHJvbGUgSUQuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbnN0cmFpbnRzLmxpbWl0IC0gTWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gcmV0cmlldmUuIEFjdHVhbCBtYXhpbXVtIGlzIGNhcHBlZCBieSBzaXRlIHNldHRpbmdcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48dXNlckxpc3RNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHJldHVybnMgYSB7QGxpbmsgdXNlckxpc3RNb2RlbH0gY29udGFpbmluZyB0aGUgbGlzdCBvZiBmb3VuZCB1c2Vycy5cbiAgICAgKi9cbiAgICBzZWFyY2hVc2Vycyhjb25zdHJhaW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCdzZWFyY2gnKS53aXRoUGFyYW1zKGNvbnN0cmFpbnRzKS5nZXQoKS50aGVuKHVzZXJMaXN0TW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHtAc2VlIFVzZXJ9IG9iamVjdCBieSBJRC5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtpZD0nY3VycmVudCddIC0gVGhlIHVzZXIncyBudW1lcmljIElEIG9yIHVzZXJuYW1lLlxuICAgICAqIEByZXR1cm5zIHtVc2VyfSAtIFRoZSBVc2VyIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBzdXBwbGllZCBJRC5cbiAgICAgKi9cbiAgICBnZXRVc2VyKGlkID0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihpZCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=user.js.map
