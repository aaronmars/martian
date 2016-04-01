'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userListModel = undefined;

var _modelHelper = require('./modelHelper');

var _user = require('./user.model');

/**
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

var userListModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: obj['@count'],
            users: []
        };
        _modelHelper.modelHelper.addIfDefined(obj['@querycount'], 'querycount', parsed);
        _modelHelper.modelHelper.addIfDefined(obj['@totalcount'], 'totalcount', parsed);
        _modelHelper.modelHelper.addIfDefined(obj['@href'], 'href', parsed);
        if ('user' in obj) {
            var users = _modelHelper.modelHelper.getArray(obj.user);
            users.forEach(function (user) {
                parsed.users.push(_user.userModel.parse(user));
            });
        }
        return parsed;
    }
};
exports.userListModel = userListModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyTGlzdC5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLGdCQUFnQjtBQUNoQixXQUFPLGVBQUMsSUFBRCxFQUFVO0FBQ2IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURTO0FBRWIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8sSUFBSSxRQUFKLENBQVA7QUFDQSxtQkFBTyxFQUFQO1NBRkEsQ0FGUztBQU1iLGlDQUFZLFlBQVosQ0FBeUIsSUFBSSxhQUFKLENBQXpCLEVBQTZDLFlBQTdDLEVBQTJELE1BQTNELEVBTmE7QUFPYixpQ0FBWSxZQUFaLENBQXlCLElBQUksYUFBSixDQUF6QixFQUE2QyxZQUE3QyxFQUEyRCxNQUEzRCxFQVBhO0FBUWIsaUNBQVksWUFBWixDQUF5QixJQUFJLE9BQUosQ0FBekIsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsRUFSYTtBQVNiLFlBQUcsVUFBVSxHQUFWLEVBQWU7QUFDZCxnQkFBSSxRQUFRLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxJQUFKLENBQTdCLENBRFU7QUFFZCxrQkFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsdUJBQU8sS0FBUCxDQUFhLElBQWIsQ0FBa0IsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixDQUFsQixFQURvQjthQUFWLENBQWQsQ0FGYztTQUFsQjtBQU1BLGVBQU8sTUFBUCxDQWZhO0tBQVY7Q0FEUDtRQW1CSSIsImZpbGUiOiJtb2RlbHMvdXNlckxpc3QubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge3VzZXJNb2RlbH0gZnJvbSAnLi91c2VyLm1vZGVsJztcbmxldCB1c2VyTGlzdE1vZGVsID0ge1xuICAgIHBhcnNlOiAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBjb3VudDogb2JqWydAY291bnQnXSxcbiAgICAgICAgICAgIHVzZXJzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBtb2RlbEhlbHBlci5hZGRJZkRlZmluZWQob2JqWydAcXVlcnljb3VudCddLCAncXVlcnljb3VudCcsIHBhcnNlZCk7XG4gICAgICAgIG1vZGVsSGVscGVyLmFkZElmRGVmaW5lZChvYmpbJ0B0b3RhbGNvdW50J10sICd0b3RhbGNvdW50JywgcGFyc2VkKTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9ialsnQGhyZWYnXSwgJ2hyZWYnLCBwYXJzZWQpO1xuICAgICAgICBpZigndXNlcicgaW4gb2JqKSB7XG4gICAgICAgICAgICBsZXQgdXNlcnMgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmoudXNlcik7XG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnVzZXJzLnB1c2godXNlck1vZGVsLnBhcnNlKHVzZXIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7dXNlckxpc3RNb2RlbH07XG4iXX0=
//# sourceMappingURL=userList.model.js.map
