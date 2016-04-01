'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupManager = exports.Group = undefined;

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

var _group = require('./models/group.model');

var _groupList = require('./models/groupList.model');

var _userList = require('./models/userList.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for managing a single group of users.
 */

var Group = exports.Group = function () {

  /**
   * Construct a new Group object.
   * @param {Number|String} id - The integer group ID, or the group name string.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function Group(id, settings) {
    _classCallCheck(this, Group);

    if (!id) {
      throw new Error('A group ID must be supplied');
    }
    this._id = _utility.utility.getResourceId(id);
    this._groupPlug = new _plug.Plug(settings).at('@api', 'deki', 'groups', this._id);
  }

  /**
   * Get the group information.
   * @returns {Promise.<groupModel>} - A Promise that, when resolved, yields a {@link groupModel} containing the group information.
   */


  _createClass(Group, [{
    key: 'getInfo',
    value: function getInfo() {
      return this._groupPlug.get().then(_group.groupModel.parse);
    }

    /**
     * Get a list of optionally-filtered group users.
     * @param {Object} options - The filtering options for fetching the listing.
     * @param {String} [options.usernamefilter] - Search for users by name or part of a name.
     * @param {Number} [options.offset=0] - Number of items to skip. Must be a positive number or 0 to not skip any.
     * @param {Number|String} [options.limit=100] - Maximum number of items to retrieve. Must be a positive number or 'all' to retrieve all items.
     * @param {Boolean} [options.activatedfilter] - Search for users by their active status.
     * @param {String} [options.rolefilter] - Search for users by a role name.
     * @param {String} [options.sortby] - Sort field. Prefix value with '-' to sort descending. Valid values are: `id`, `username`, `nick`, `email`, `fullname`, `date.lastlogin`, `status`, `role`, `service`
     * @returns {Promise.<userListModel>} - A Promise that, when resolved, yields a {@link userListModel} with the users listing.
     */

  }, {
    key: 'getUsers',
    value: function getUsers(options) {
      return this._groupPlug.at('users').withParams(options).get().then(_userList.userListModel.parse);
    }
  }]);

  return Group;
}();

/**
 * A class to manage the groups defined on the MindTouch site.
 */


var GroupManager = exports.GroupManager = function () {

  /**
   * Construct a GroupManager object.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function GroupManager(settings) {
    _classCallCheck(this, GroupManager);

    this.plug = new _plug.Plug(settings).at('@api', 'deki', 'groups');
    this.settings = settings;
  }

  /**
   * Get the listing of all of the groups defined on the site.
   * @returns {Promise.<groupListModel>} - A Promise that, when resolved, yields a {@link groupListModel} containing the group listing.
   */


  _createClass(GroupManager, [{
    key: 'getGroupList',
    value: function getGroupList() {
      return this.plug.get().then(_groupList.groupListModel.parse);
    }

    /**
     * Get a Group object based on ID.
     * @param {Number|String} id - The integer group ID, or the group name string.
     * @returns {Group} - A new {@link Group} object for managing the group.
     */

  }, {
    key: 'getGroup',
    value: function getGroup(id) {
      return new Group(id, this.settings);
    }
  }]);

  return GroupManager;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFLYTs7Ozs7Ozs7QUFPVCxXQVBTLEtBT1QsQ0FBWSxFQUFaLEVBQWdCLFFBQWhCLEVBQTBCOzBCQVBqQixPQU9pQjs7QUFDdEIsUUFBRyxDQUFDLEVBQUQsRUFBSztBQUNKLFlBQU0sSUFBSSxLQUFKLENBQVUsNkJBQVYsQ0FBTixDQURJO0tBQVI7QUFHQSxTQUFLLEdBQUwsR0FBVyxpQkFBUSxhQUFSLENBQXNCLEVBQXRCLENBQVgsQ0FKc0I7QUFLdEIsU0FBSyxVQUFMLEdBQWtCLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxFQUFnRCxLQUFLLEdBQUwsQ0FBbEUsQ0FMc0I7R0FBMUI7Ozs7Ozs7O2VBUFM7OzhCQW1CQztBQUNOLGFBQU8sS0FBSyxVQUFMLENBQWdCLEdBQWhCLEdBQXNCLElBQXRCLENBQTJCLGtCQUFXLEtBQVgsQ0FBbEMsQ0FETTs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBZUQsU0FBUztBQUNkLGFBQU8sS0FBSyxVQUFMLENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQTVCLENBQXVDLE9BQXZDLEVBQWdELEdBQWhELEdBQXNELElBQXRELENBQTJELHdCQUFjLEtBQWQsQ0FBbEUsQ0FEYzs7OztTQWxDVDs7Ozs7Ozs7SUEwQ0E7Ozs7Ozs7QUFNVCxXQU5TLFlBTVQsQ0FBWSxRQUFaLEVBQXNCOzBCQU5iLGNBTWE7O0FBQ2xCLFNBQUssSUFBTCxHQUFZLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxDQUFaLENBRGtCO0FBRWxCLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQUZrQjtHQUF0Qjs7Ozs7Ozs7ZUFOUzs7bUNBZU07QUFDWCxhQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsR0FBZ0IsSUFBaEIsQ0FBcUIsMEJBQWUsS0FBZixDQUE1QixDQURXOzs7Ozs7Ozs7Ozs2QkFTTixJQUFJO0FBQ1QsYUFBTyxJQUFJLEtBQUosQ0FBVSxFQUFWLEVBQWMsS0FBSyxRQUFMLENBQXJCLENBRFM7Ozs7U0F4QkoiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL2xpYi9wbHVnJztcbmltcG9ydCB7dXRpbGl0eX0gZnJvbSAnLi9saWIvdXRpbGl0eSc7XG5pbXBvcnQge2dyb3VwTW9kZWx9IGZyb20gJy4vbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7Z3JvdXBMaXN0TW9kZWx9IGZyb20gJy4vbW9kZWxzL2dyb3VwTGlzdC5tb2RlbCc7XG5pbXBvcnQge3VzZXJMaXN0TW9kZWx9IGZyb20gJy4vbW9kZWxzL3VzZXJMaXN0Lm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIGZvciBtYW5hZ2luZyBhIHNpbmdsZSBncm91cCBvZiB1c2Vycy5cbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBHcm91cCBvYmplY3QuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZCAtIFRoZSBpbnRlZ2VyIGdyb3VwIElELCBvciB0aGUgZ3JvdXAgbmFtZSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIHNldHRpbmdzKSB7XG4gICAgICAgIGlmKCFpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdyb3VwIElEIG11c3QgYmUgc3VwcGxpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pZCA9IHV0aWxpdHkuZ2V0UmVzb3VyY2VJZChpZCk7XG4gICAgICAgIHRoaXMuX2dyb3VwUGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2dyb3VwcycsIHRoaXMuX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGdyb3VwIGluZm9ybWF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxncm91cE1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGdyb3VwTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGdyb3VwIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cFBsdWcuZ2V0KCkudGhlbihncm91cE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBsaXN0IG9mIG9wdGlvbmFsbHktZmlsdGVyZWQgZ3JvdXAgdXNlcnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgZmlsdGVyaW5nIG9wdGlvbnMgZm9yIGZldGNoaW5nIHRoZSBsaXN0aW5nLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51c2VybmFtZWZpbHRlcl0gLSBTZWFyY2ggZm9yIHVzZXJzIGJ5IG5hbWUgb3IgcGFydCBvZiBhIG5hbWUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm9mZnNldD0wXSAtIE51bWJlciBvZiBpdGVtcyB0byBza2lwLiBNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyIG9yIDAgdG8gbm90IHNraXAgYW55LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW29wdGlvbnMubGltaXQ9MTAwXSAtIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIHJldHJpZXZlLiBNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyIG9yICdhbGwnIHRvIHJldHJpZXZlIGFsbCBpdGVtcy5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFjdGl2YXRlZGZpbHRlcl0gLSBTZWFyY2ggZm9yIHVzZXJzIGJ5IHRoZWlyIGFjdGl2ZSBzdGF0dXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvbGVmaWx0ZXJdIC0gU2VhcmNoIGZvciB1c2VycyBieSBhIHJvbGUgbmFtZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc29ydGJ5XSAtIFNvcnQgZmllbGQuIFByZWZpeCB2YWx1ZSB3aXRoICctJyB0byBzb3J0IGRlc2NlbmRpbmcuIFZhbGlkIHZhbHVlcyBhcmU6IGBpZGAsIGB1c2VybmFtZWAsIGBuaWNrYCwgYGVtYWlsYCwgYGZ1bGxuYW1lYCwgYGRhdGUubGFzdGxvZ2luYCwgYHN0YXR1c2AsIGByb2xlYCwgYHNlcnZpY2VgXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHVzZXJMaXN0TW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgdXNlckxpc3RNb2RlbH0gd2l0aCB0aGUgdXNlcnMgbGlzdGluZy5cbiAgICAgKi9cbiAgICBnZXRVc2VycyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cFBsdWcuYXQoJ3VzZXJzJykud2l0aFBhcmFtcyhvcHRpb25zKS5nZXQoKS50aGVuKHVzZXJMaXN0TW9kZWwucGFyc2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIHRvIG1hbmFnZSB0aGUgZ3JvdXBzIGRlZmluZWQgb24gdGhlIE1pbmRUb3VjaCBzaXRlLlxuICovXG5leHBvcnQgY2xhc3MgR3JvdXBNYW5hZ2VyIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIEdyb3VwTWFuYWdlciBvYmplY3QuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAnZ3JvdXBzJyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpc3Rpbmcgb2YgYWxsIG9mIHRoZSBncm91cHMgZGVmaW5lZCBvbiB0aGUgc2l0ZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Z3JvdXBMaXN0TW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZ3JvdXBMaXN0TW9kZWx9IGNvbnRhaW5pbmcgdGhlIGdyb3VwIGxpc3RpbmcuXG4gICAgICovXG4gICAgZ2V0R3JvdXBMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmdldCgpLnRoZW4oZ3JvdXBMaXN0TW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIEdyb3VwIG9iamVjdCBiYXNlZCBvbiBJRC5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkIC0gVGhlIGludGVnZXIgZ3JvdXAgSUQsIG9yIHRoZSBncm91cCBuYW1lIHN0cmluZy5cbiAgICAgKiBAcmV0dXJucyB7R3JvdXB9IC0gQSBuZXcge0BsaW5rIEdyb3VwfSBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBnZXRHcm91cChpZCkge1xuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKGlkLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=group.js.map
