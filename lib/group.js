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


var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFLYTs7Ozs7Ozs7QUFPVCxXQVBTLEtBT1QsQ0FBWSxFQUFaLEVBQWdCLFFBQWhCLEVBQTBCOzBCQVBqQixPQU9pQjs7QUFDdEIsUUFBRyxDQUFDLEVBQUQsRUFBSztBQUNKLFlBQU0sSUFBSSxLQUFKLENBQVUsNkJBQVYsQ0FBTixDQURJO0tBQVI7QUFHQSxTQUFLLEdBQUwsR0FBVyxpQkFBUSxhQUFSLENBQXNCLEVBQXRCLENBQVgsQ0FKc0I7QUFLdEIsU0FBSyxVQUFMLEdBQWtCLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxFQUFnRCxLQUFLLEdBQUwsQ0FBbEUsQ0FMc0I7R0FBMUI7Ozs7Ozs7O2VBUFM7OzhCQW1CQztBQUNOLGFBQU8sS0FBSyxVQUFMLENBQWdCLEdBQWhCLEdBQXNCLElBQXRCLENBQTJCLGtCQUFXLEtBQVgsQ0FBbEMsQ0FETTs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBZUQsU0FBUztBQUNkLGFBQU8sS0FBSyxVQUFMLENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQTVCLENBQXVDLE9BQXZDLEVBQWdELEdBQWhELEdBQXNELElBQXRELENBQTJELHdCQUFjLEtBQWQsQ0FBbEUsQ0FEYzs7OztTQWxDVDs7Ozs7Ozs7SUEwQ0E7Ozs7Ozs7QUFNVCxXQU5TLFlBTVQsQ0FBWSxRQUFaLEVBQXNCOzBCQU5iLGNBTWE7O0FBQ2xCLFNBQUssSUFBTCxHQUFZLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxDQUFaLENBRGtCO0FBRWxCLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQUZrQjtHQUF0Qjs7Ozs7Ozs7ZUFOUzs7bUNBZU07QUFDWCxhQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsR0FBZ0IsSUFBaEIsQ0FBcUIsMEJBQWUsS0FBZixDQUE1QixDQURXOzs7Ozs7Ozs7Ozs2QkFTTixJQUFJO0FBQ1QsYUFBTyxJQUFJLEtBQUosQ0FBVSxFQUFWLEVBQWMsS0FBSyxRQUFMLENBQXJCLENBRFM7Ozs7U0F4QkoiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL3V0aWxpdHkvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vdXRpbGl0eS91dGlsaXR5JztcbmltcG9ydCB7Z3JvdXBNb2RlbH0gZnJvbSAnLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHtncm91cExpc3RNb2RlbH0gZnJvbSAnLi9tb2RlbHMvZ3JvdXBMaXN0Lm1vZGVsJztcbmltcG9ydCB7dXNlckxpc3RNb2RlbH0gZnJvbSAnLi9tb2RlbHMvdXNlckxpc3QubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIG1hbmFnaW5nIGEgc2luZ2xlIGdyb3VwIG9mIHVzZXJzLlxuICovXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IEdyb3VwIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkIC0gVGhlIGludGVnZXIgZ3JvdXAgSUQsIG9yIHRoZSBncm91cCBuYW1lIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZ3JvdXAgSUQgbXVzdCBiZSBzdXBwbGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lkID0gdXRpbGl0eS5nZXRSZXNvdXJjZUlkKGlkKTtcbiAgICAgICAgdGhpcy5fZ3JvdXBQbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAnZ3JvdXBzJywgdGhpcy5faWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZ3JvdXAgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGdyb3VwTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZ3JvdXBNb2RlbH0gY29udGFpbmluZyB0aGUgZ3JvdXAgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwUGx1Zy5nZXQoKS50aGVuKGdyb3VwTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Qgb2Ygb3B0aW9uYWxseS1maWx0ZXJlZCBncm91cCB1c2Vycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBmaWx0ZXJpbmcgb3B0aW9ucyBmb3IgZmV0Y2hpbmcgdGhlIGxpc3RpbmcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnVzZXJuYW1lZmlsdGVyXSAtIFNlYXJjaCBmb3IgdXNlcnMgYnkgbmFtZSBvciBwYXJ0IG9mIGEgbmFtZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMub2Zmc2V0PTBdIC0gTnVtYmVyIG9mIGl0ZW1zIHRvIHNraXAuIE11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgb3IgMCB0byBub3Qgc2tpcCBhbnkuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbb3B0aW9ucy5saW1pdD0xMDBdIC0gTWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gcmV0cmlldmUuIE11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgb3IgJ2FsbCcgdG8gcmV0cmlldmUgYWxsIGl0ZW1zLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWN0aXZhdGVkZmlsdGVyXSAtIFNlYXJjaCBmb3IgdXNlcnMgYnkgdGhlaXIgYWN0aXZlIHN0YXR1cy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm9sZWZpbHRlcl0gLSBTZWFyY2ggZm9yIHVzZXJzIGJ5IGEgcm9sZSBuYW1lLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zb3J0YnldIC0gU29ydCBmaWVsZC4gUHJlZml4IHZhbHVlIHdpdGggJy0nIHRvIHNvcnQgZGVzY2VuZGluZy4gVmFsaWQgdmFsdWVzIGFyZTogYGlkYCwgYHVzZXJuYW1lYCwgYG5pY2tgLCBgZW1haWxgLCBgZnVsbG5hbWVgLCBgZGF0ZS5sYXN0bG9naW5gLCBgc3RhdHVzYCwgYHJvbGVgLCBgc2VydmljZWBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48dXNlckxpc3RNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayB1c2VyTGlzdE1vZGVsfSB3aXRoIHRoZSB1c2VycyBsaXN0aW5nLlxuICAgICAqL1xuICAgIGdldFVzZXJzKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwUGx1Zy5hdCgndXNlcnMnKS53aXRoUGFyYW1zKG9wdGlvbnMpLmdldCgpLnRoZW4odXNlckxpc3RNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgdG8gbWFuYWdlIHRoZSBncm91cHMgZGVmaW5lZCBvbiB0aGUgTWluZFRvdWNoIHNpdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cE1hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgR3JvdXBNYW5hZ2VyIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnBsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdncm91cHMnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGlzdGluZyBvZiBhbGwgb2YgdGhlIGdyb3VwcyBkZWZpbmVkIG9uIHRoZSBzaXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxncm91cExpc3RNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBncm91cExpc3RNb2RlbH0gY29udGFpbmluZyB0aGUgZ3JvdXAgbGlzdGluZy5cbiAgICAgKi9cbiAgICBnZXRHcm91cExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuZ2V0KCkudGhlbihncm91cExpc3RNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgR3JvdXAgb2JqZWN0IGJhc2VkIG9uIElELlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWQgLSBUaGUgaW50ZWdlciBncm91cCBJRCwgb3IgdGhlIGdyb3VwIG5hbWUgc3RyaW5nLlxuICAgICAqIEByZXR1cm5zIHtHcm91cH0gLSBBIG5ldyB7QGxpbmsgR3JvdXB9IG9iamVjdCBmb3IgbWFuYWdpbmcgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIGdldEdyb3VwKGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAoaWQsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=group.js.map
