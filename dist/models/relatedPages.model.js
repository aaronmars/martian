'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.relatedPagesModel = undefined;

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
var relatedPagesModel = exports.relatedPagesModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            href: obj['@href'],
            pages: []
        };
        var pages = _modelHelper.modelHelper.getArray(obj.page);
        pages.forEach(function (page) {
            parsed.pages.push(_page.pageModel.parse(page));
        });
        return parsed;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9yZWxhdGVkUGFnZXMubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFJLGdEQUFvQjtBQUMzQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EsbUJBQU8sRUFBUDtTQUhBLENBRkk7QUFPUixZQUFJLFFBQVEseUJBQVksUUFBWixDQUFxQixJQUFJLElBQUosQ0FBN0IsQ0FQSTtBQVFSLGNBQU0sT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQ3BCLG1CQUFPLEtBQVAsQ0FBYSxJQUFiLENBQWtCLGdCQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBbEIsRUFEb0I7U0FBVixDQUFkLENBUlE7QUFXUixlQUFPLE1BQVAsQ0FYUTtLQURlO0NBQXBCIiwiZmlsZSI6Im1vZGVscy9yZWxhdGVkUGFnZXMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9wYWdlLm1vZGVsJztcbmV4cG9ydCBsZXQgcmVsYXRlZFBhZ2VzTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQGNvdW50J10pLFxuICAgICAgICAgICAgaHJlZjogb2JqWydAaHJlZiddLFxuICAgICAgICAgICAgcGFnZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYWdlcyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai5wYWdlKTtcbiAgICAgICAgcGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgcGFyc2VkLnBhZ2VzLnB1c2gocGFnZU1vZGVsLnBhcnNlKHBhZ2UpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbiJdfQ==
//# sourceMappingURL=relatedPages.model.js.map
