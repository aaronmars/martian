'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.learningPathsModel = undefined;

var _modelHelper = require('./modelHelper');

var _learningPath = require('./learningPath.model');

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

var learningPathsModel = {
    parse: function parse(data) {
        var parsed = [];
        var obj = _modelHelper.modelHelper.fromJson(data);
        var learningPaths = Array.isArray(obj.learningpath) ? obj.learningpath : [obj.learningpath];
        learningPaths.forEach(function (path) {
            parsed.push(_learningPath.learningPathModel.parse(path));
        });
        return parsed;
    }
};
exports.learningPathsModel = learningPathsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9sZWFybmluZ1BhdGhzLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUkscUJBQXFCO0FBQ3JCLDBCQUFNLE1BQU07QUFDUixZQUFJLFNBQVMsRUFBVCxDQURJO0FBRVIsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQUZJO0FBR1IsWUFBSSxnQkFBZ0IsTUFBTSxPQUFOLENBQWMsSUFBSSxZQUFKLENBQWQsR0FBa0MsSUFBSSxZQUFKLEdBQW1CLENBQUUsSUFBSSxZQUFKLENBQXZELENBSFo7QUFJUixzQkFBYyxPQUFkLENBQXNCLFVBQUMsSUFBRCxFQUFVO0FBQzVCLG1CQUFPLElBQVAsQ0FBWSxnQ0FBa0IsS0FBbEIsQ0FBd0IsSUFBeEIsQ0FBWixFQUQ0QjtTQUFWLENBQXRCLENBSlE7QUFPUixlQUFPLE1BQVAsQ0FQUTtLQURTO0NBQXJCO1FBV0kiLCJmaWxlIjoibW9kZWxzL2xlYXJuaW5nUGF0aHMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge2xlYXJuaW5nUGF0aE1vZGVsfSBmcm9tICcuL2xlYXJuaW5nUGF0aC5tb2RlbCc7XG5sZXQgbGVhcm5pbmdQYXRoc01vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9IFtdO1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBsZWFybmluZ1BhdGhzID0gQXJyYXkuaXNBcnJheShvYmoubGVhcm5pbmdwYXRoKSA/IG9iai5sZWFybmluZ3BhdGggOiBbIG9iai5sZWFybmluZ3BhdGggXTtcbiAgICAgICAgbGVhcm5pbmdQYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaChsZWFybmluZ1BhdGhNb2RlbC5wYXJzZShwYXRoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbn07XG5leHBvcnQge2xlYXJuaW5nUGF0aHNNb2RlbH07XG4iXX0=
//# sourceMappingURL=learningPaths.model.js.map
