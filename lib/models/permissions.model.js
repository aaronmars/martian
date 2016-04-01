'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.permissionsModel = undefined;

var _modelHelper = require('./modelHelper');

var permissionsModel = exports.permissionsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            operations: _modelHelper.modelHelper.getString(obj.operations).split(','),
            role: {
                id: _modelHelper.modelHelper.getInt(obj.role['@id']),
                name: _modelHelper.modelHelper.getString(obj.role)
            }
        };
        return parsed;
    }
}; /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wZXJtaXNzaW9ucy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNPLElBQUksOENBQW1CO0FBQzFCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCx3QkFBWSx5QkFBWSxTQUFaLENBQXNCLElBQUksVUFBSixDQUF0QixDQUFzQyxLQUF0QyxDQUE0QyxHQUE1QyxDQUFaO0FBQ0Esa0JBQU07QUFDRixvQkFBSSx5QkFBWSxNQUFaLENBQW1CLElBQUksSUFBSixDQUFTLEtBQVQsQ0FBbkIsQ0FBSjtBQUNBLHNCQUFNLHlCQUFZLFNBQVosQ0FBc0IsSUFBSSxJQUFKLENBQTVCO2FBRko7U0FGQSxDQUZJO0FBU1IsZUFBTyxNQUFQLENBVFE7S0FEYztDQUFuQiIsImZpbGUiOiJtb2RlbHMvcGVybWlzc2lvbnMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5leHBvcnQgbGV0IHBlcm1pc3Npb25zTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zOiBtb2RlbEhlbHBlci5nZXRTdHJpbmcob2JqLm9wZXJhdGlvbnMpLnNwbGl0KCcsJyksXG4gICAgICAgICAgICByb2xlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1vZGVsSGVscGVyLmdldEludChvYmoucm9sZVsnQGlkJ10pLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1vZGVsSGVscGVyLmdldFN0cmluZyhvYmoucm9sZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuIl19
//# sourceMappingURL=permissions.model.js.map
