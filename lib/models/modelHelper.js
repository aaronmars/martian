'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
var modelHelper = {
    fromJson: function fromJson(data) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        return data;
    },
    getInt: function getInt(field) {
        return parseInt(field, 10);
    },
    getString: function getString(field) {
        return typeof field === 'string' ? field : field['#text'];
    },
    getBool: function getBool(field) {
        return field === 'true';
    },
    getDate: function getDate(field) {
        return new Date(field);
    },
    getArray: function getArray(val) {
        if (!val) {
            return [];
        }
        return Array.isArray(val) ? val : [val];
    },
    addIfDefined: function addIfDefined(field, name, obj) {
        var parser = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        if (typeof field !== 'undefined') {
            if (parser !== null) {
                field = parser.parse.call(parser, field);
            }
            obj[name] = field;
        }
    }
};
exports.modelHelper = modelHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb2RlbEhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFJLGNBQWM7QUFDZCxnQ0FBUyxNQUFNO0FBQ1gsWUFBRyxPQUFPLElBQVAsS0FBZ0IsUUFBaEIsRUFBMEI7QUFDekIsbUJBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFQLENBRHlCO1NBQTdCO0FBR0EsZUFBTyxJQUFQLENBSlc7S0FERDtBQU9kLDRCQUFPLE9BQU87QUFDVixlQUFPLFNBQVMsS0FBVCxFQUFnQixFQUFoQixDQUFQLENBRFU7S0FQQTtBQVVkLGtDQUFVLE9BQU87QUFDYixlQUFPLE9BQVEsS0FBUCxLQUFpQixRQUFqQixHQUE2QixLQUE5QixHQUFzQyxNQUFNLE9BQU4sQ0FBdEMsQ0FETTtLQVZIO0FBYWQsOEJBQVEsT0FBTztBQUNYLGVBQU8sVUFBVSxNQUFWLENBREk7S0FiRDtBQWdCZCw4QkFBUSxPQUFPO0FBQ1gsZUFBTyxJQUFJLElBQUosQ0FBUyxLQUFULENBQVAsQ0FEVztLQWhCRDtBQW1CZCxnQ0FBUyxLQUFLO0FBQ1YsWUFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLG1CQUFPLEVBQVAsQ0FESztTQUFUO0FBR0EsZUFBTyxNQUFNLE9BQU4sQ0FBYyxHQUFkLElBQXFCLEdBQXJCLEdBQTJCLENBQUUsR0FBRixDQUEzQixDQUpHO0tBbkJBO0FBeUJkLHdDQUFhLE9BQU8sTUFBTSxLQUFvQjtZQUFmLCtEQUFTLG9CQUFNOztBQUMxQyxZQUFHLE9BQU8sS0FBUCxLQUFpQixXQUFqQixFQUE4QjtBQUM3QixnQkFBRyxXQUFXLElBQVgsRUFBaUI7QUFDaEIsd0JBQVEsT0FBTyxLQUFQLENBQWEsSUFBYixDQUFrQixNQUFsQixFQUEwQixLQUExQixDQUFSLENBRGdCO2FBQXBCO0FBR0EsZ0JBQUksSUFBSixJQUFZLEtBQVosQ0FKNkI7U0FBakM7S0ExQlU7Q0FBZDtRQWtDSSIsImZpbGUiOiJtb2RlbHMvbW9kZWxIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xubGV0IG1vZGVsSGVscGVyID0ge1xuICAgIGZyb21Kc29uKGRhdGEpIHtcbiAgICAgICAgaWYodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIGdldEludChmaWVsZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoZmllbGQsIDEwKTtcbiAgICB9LFxuICAgIGdldFN0cmluZyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBmaWVsZCA9PT0gJ3N0cmluZycpID8gZmllbGQgOiBmaWVsZFsnI3RleHQnXTtcbiAgICB9LFxuICAgIGdldEJvb2woZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkID09PSAndHJ1ZSc7XG4gICAgfSxcbiAgICBnZXREYXRlKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShmaWVsZCk7XG4gICAgfSxcbiAgICBnZXRBcnJheSh2YWwpIHtcbiAgICAgICAgaWYoIXZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbIHZhbCBdO1xuICAgIH0sXG4gICAgYWRkSWZEZWZpbmVkKGZpZWxkLCBuYW1lLCBvYmosIHBhcnNlciA9IG51bGwpIHtcbiAgICAgICAgaWYodHlwZW9mIGZpZWxkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYocGFyc2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBwYXJzZXIucGFyc2UuY2FsbChwYXJzZXIsIGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialtuYW1lXSA9IGZpZWxkO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7bW9kZWxIZWxwZXJ9O1xuIl19
//# sourceMappingURL=modelHelper.js.map
