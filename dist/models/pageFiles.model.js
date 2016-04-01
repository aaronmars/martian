'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageFilesModel = undefined;

var _modelHelper = require('./modelHelper');

var _file = require('./file.model');

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

var pageFilesModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            offset: _modelHelper.modelHelper.getInt(obj['@offset']),
            totalcount: _modelHelper.modelHelper.getInt(obj['@totalcount']),
            href: obj['@href']
        };
        if ('file' in obj) {
            parsed.file = [];
            var files = _modelHelper.modelHelper.getArray(obj.file);
            files.forEach(function (f) {
                parsed.file.push(_file.fileModel.parse(f));
            });
        }
        return parsed;
    }
};
exports.pageFilesModel = pageFilesModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlRmlsZXMubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxpQkFBaUI7QUFDakIsV0FBTyxlQUFTLElBQVQsRUFBZTtBQUNsQixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBRGM7QUFFbEIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLG9CQUFRLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxTQUFKLENBQW5CLENBQVI7QUFDQSx3QkFBWSx5QkFBWSxNQUFaLENBQW1CLElBQUksYUFBSixDQUFuQixDQUFaO0FBQ0Esa0JBQU0sSUFBSSxPQUFKLENBQU47U0FKQSxDQUZjO0FBUWxCLFlBQUcsVUFBVSxHQUFWLEVBQWU7QUFDZCxtQkFBTyxJQUFQLEdBQWMsRUFBZCxDQURjO0FBRWQsZ0JBQUksUUFBUSx5QkFBWSxRQUFaLENBQXFCLElBQUksSUFBSixDQUE3QixDQUZVO0FBR2Qsa0JBQU0sT0FBTixDQUFjLFVBQUMsQ0FBRCxFQUFPO0FBQ2pCLHVCQUFPLElBQVAsQ0FBWSxJQUFaLENBQWlCLGdCQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBakIsRUFEaUI7YUFBUCxDQUFkLENBSGM7U0FBbEI7QUFPQSxlQUFPLE1BQVAsQ0Fma0I7S0FBZjtDQURQO1FBbUJJIiwiZmlsZSI6Im1vZGVscy9wYWdlRmlsZXMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge2ZpbGVNb2RlbH0gZnJvbSAnLi9maWxlLm1vZGVsJztcbmxldCBwYWdlRmlsZXNNb2RlbCA9IHtcbiAgICBwYXJzZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQGNvdW50J10pLFxuICAgICAgICAgICAgb2Zmc2V0OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAb2Zmc2V0J10pLFxuICAgICAgICAgICAgdG90YWxjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQHRvdGFsY291bnQnXSksXG4gICAgICAgICAgICBocmVmOiBvYmpbJ0BocmVmJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ2ZpbGUnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLmZpbGUgPSBbXTtcbiAgICAgICAgICAgIGxldCBmaWxlcyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai5maWxlKTtcbiAgICAgICAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuZmlsZS5wdXNoKGZpbGVNb2RlbC5wYXJzZShmKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbn07XG5leHBvcnQge3BhZ2VGaWxlc01vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageFiles.model.js.map
