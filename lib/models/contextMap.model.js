'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contextMapModel = undefined;

var _modelHelper = require('./modelHelper');

var _page = require('./page.model');

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

var contextMapModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            default: _modelHelper.modelHelper.getBool(obj['@default']),
            exists: _modelHelper.modelHelper.getBool(obj['@exists']),
            description: obj.description,
            id: obj.id,
            language: obj.language
        };
        if ('page' in obj) {
            parsed.page = _page.pageModel.parse(obj.page);
        }
        if ('pageid' in obj) {
            var id = _modelHelper.modelHelper.getString(obj.pageid);
            parsed.pageId = _modelHelper.modelHelper.getInt(id);
        }
        return parsed;
    }
};
exports.contextMapModel = contextMapModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250ZXh0TWFwLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksa0JBQWtCO0FBQ2xCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCxxQkFBUyx5QkFBWSxPQUFaLENBQW9CLElBQUksVUFBSixDQUFwQixDQUFUO0FBQ0Esb0JBQVEseUJBQVksT0FBWixDQUFvQixJQUFJLFNBQUosQ0FBcEIsQ0FBUjtBQUNBLHlCQUFhLElBQUksV0FBSjtBQUNiLGdCQUFJLElBQUksRUFBSjtBQUNKLHNCQUFVLElBQUksUUFBSjtTQUxWLENBRkk7QUFTUixZQUFHLFVBQVUsR0FBVixFQUFlO0FBQ2QsbUJBQU8sSUFBUCxHQUFjLGdCQUFVLEtBQVYsQ0FBZ0IsSUFBSSxJQUFKLENBQTlCLENBRGM7U0FBbEI7QUFHQSxZQUFHLFlBQVksR0FBWixFQUFpQjtBQUNoQixnQkFBSSxLQUFLLHlCQUFZLFNBQVosQ0FBc0IsSUFBSSxNQUFKLENBQTNCLENBRFk7QUFFaEIsbUJBQU8sTUFBUCxHQUFnQix5QkFBWSxNQUFaLENBQW1CLEVBQW5CLENBQWhCLENBRmdCO1NBQXBCO0FBSUEsZUFBTyxNQUFQLENBaEJRO0tBRE07Q0FBbEI7UUFvQkkiLCJmaWxlIjoibW9kZWxzL2NvbnRleHRNYXAubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9wYWdlLm1vZGVsJztcbmxldCBjb250ZXh0TWFwTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBkZWZhdWx0OiBtb2RlbEhlbHBlci5nZXRCb29sKG9ialsnQGRlZmF1bHQnXSksXG4gICAgICAgICAgICBleGlzdHM6IG1vZGVsSGVscGVyLmdldEJvb2wob2JqWydAZXhpc3RzJ10pLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG9iai5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgICAgICBsYW5ndWFnZTogb2JqLmxhbmd1YWdlXG4gICAgICAgIH07XG4gICAgICAgIGlmKCdwYWdlJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYWdlID0gcGFnZU1vZGVsLnBhcnNlKG9iai5wYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBpZigncGFnZWlkJyBpbiBvYmopIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG1vZGVsSGVscGVyLmdldFN0cmluZyhvYmoucGFnZWlkKTtcbiAgICAgICAgICAgIHBhcnNlZC5wYWdlSWQgPSBtb2RlbEhlbHBlci5nZXRJbnQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7Y29udGV4dE1hcE1vZGVsfTtcbiJdfQ==
//# sourceMappingURL=contextMap.model.js.map
