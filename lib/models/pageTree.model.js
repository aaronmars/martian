'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageTreeModel = undefined;

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

var pageTreeModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        return _page.pageModel.parse(obj.page);
    }
};
exports.pageTreeModel = pageTreeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlVHJlZS5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLGdCQUFnQjtBQUNoQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsZUFBTyxnQkFBVSxLQUFWLENBQWdCLElBQUksSUFBSixDQUF2QixDQUZRO0tBREk7Q0FBaEI7UUFNSSIsImZpbGUiOiJtb2RlbHMvcGFnZVRyZWUubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9wYWdlLm1vZGVsJztcbmxldCBwYWdlVHJlZU1vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICByZXR1cm4gcGFnZU1vZGVsLnBhcnNlKG9iai5wYWdlKTtcbiAgICB9XG59O1xuZXhwb3J0IHtwYWdlVHJlZU1vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageTree.model.js.map
