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
var utility = exports.utility = {
    xmlRequestType: 'application/xml; charset=utf-8',
    textRequestType: 'text/plain; charset=utf-8',
    jsonRequestType: 'application/json; charset=utf-8',
    searchEscape: function searchEscape(query) {
        var result = query.toString();
        var charArr = ['\\', '+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':'];
        charArr.forEach(function (c) {
            var regex = new RegExp('\\' + c, 'g');
            result = result.replace(regex, '\\' + c);
        });
        return result;
    },
    getResourceId: function getResourceId(id) {
        var defaultId = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var resourceId = null;
        if (typeof id === 'string' && id !== defaultId) {
            resourceId = '=' + encodeURIComponent(encodeURIComponent(id));
        } else {
            resourceId = id;
        }
        return resourceId;
    },
    getFilenameId: function getFilenameId(filename) {
        if (typeof filename !== 'string') {
            throw new Error('The filename must be a string');
        }
        var encodedName = encodeURIComponent(encodeURIComponent(filename));
        if (filename.indexOf('.') <= 0) {

            // File name has no dot (or the dot is at the first position).
            // Assume that means it doesn't have an extension.
            encodedName = '=' + encodedName;
        }
        return encodedName;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi91dGlsaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JPLElBQUksNEJBQVU7QUFDakIsb0JBQWdCLGdDQUFoQjtBQUNBLHFCQUFpQiwyQkFBakI7QUFDQSxxQkFBaUIsaUNBQWpCO0FBQ0Esd0NBQWEsT0FBTztBQUNoQixZQUFJLFNBQVMsTUFBTSxRQUFOLEVBQVQsQ0FEWTtBQUVoQixZQUFJLFVBQVUsQ0FBRSxJQUFGLEVBQVEsR0FBUixFQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsR0FBakMsRUFBc0MsR0FBdEMsRUFBMkMsR0FBM0MsRUFBZ0QsR0FBaEQsRUFBcUQsR0FBckQsRUFBMEQsR0FBMUQsRUFBK0QsR0FBL0QsRUFBb0UsR0FBcEUsRUFBeUUsR0FBekUsRUFBOEUsR0FBOUUsRUFBbUYsR0FBbkYsRUFBd0YsR0FBeEYsQ0FBVixDQUZZO0FBR2hCLGdCQUFRLE9BQVIsQ0FBZ0IsVUFBQyxDQUFELEVBQU87QUFDbkIsZ0JBQUksUUFBUSxJQUFJLE1BQUosQ0FBVyxPQUFPLENBQVAsRUFBVSxHQUFyQixDQUFSLENBRGU7QUFFbkIscUJBQVMsT0FBTyxPQUFQLENBQWUsS0FBZixFQUFzQixPQUFPLENBQVAsQ0FBL0IsQ0FGbUI7U0FBUCxDQUFoQixDQUhnQjtBQU9oQixlQUFPLE1BQVAsQ0FQZ0I7S0FKSDtBQWFqQiwwQ0FBYyxJQUFzQjtZQUFsQixrRUFBWSxvQkFBTTs7QUFDaEMsWUFBSSxhQUFhLElBQWIsQ0FENEI7QUFFaEMsWUFBRyxPQUFPLEVBQVAsS0FBYyxRQUFkLElBQTBCLE9BQU8sU0FBUCxFQUFrQjtBQUMzQywrQkFBaUIsbUJBQW1CLG1CQUFtQixFQUFuQixDQUFuQixDQUFqQixDQUQyQztTQUEvQyxNQUVPO0FBQ0gseUJBQWEsRUFBYixDQURHO1NBRlA7QUFLQSxlQUFPLFVBQVAsQ0FQZ0M7S0FibkI7QUFzQmpCLDBDQUFjLFVBQVU7QUFDcEIsWUFBRyxPQUFPLFFBQVAsS0FBb0IsUUFBcEIsRUFBOEI7QUFDN0Isa0JBQU0sSUFBSSxLQUFKLENBQVUsK0JBQVYsQ0FBTixDQUQ2QjtTQUFqQztBQUdBLFlBQUksY0FBYyxtQkFBbUIsbUJBQW1CLFFBQW5CLENBQW5CLENBQWQsQ0FKZ0I7QUFLcEIsWUFBRyxTQUFTLE9BQVQsQ0FBaUIsR0FBakIsS0FBeUIsQ0FBekIsRUFBNEI7Ozs7QUFJM0IsZ0NBQWtCLFdBQWxCLENBSjJCO1NBQS9CO0FBTUEsZUFBTyxXQUFQLENBWG9CO0tBdEJQO0NBQVYiLCJmaWxlIjoibGliL3V0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGxldCB1dGlsaXR5ID0ge1xuICAgIHhtbFJlcXVlc3RUeXBlOiAnYXBwbGljYXRpb24veG1sOyBjaGFyc2V0PXV0Zi04JyxcbiAgICB0ZXh0UmVxdWVzdFR5cGU6ICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04JyxcbiAgICBqc29uUmVxdWVzdFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICBzZWFyY2hFc2NhcGUocXVlcnkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHF1ZXJ5LnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBjaGFyQXJyID0gWyAnXFxcXCcsICcrJywgJy0nLCAnJicsICd8JywgJyEnLCAnKCcsICcpJywgJ3snLCAnfScsICdbJywgJ10nLCAnXicsICdcIicsICd+JywgJyonLCAnPycsICc6JyBdO1xuICAgICAgICBjaGFyQXJyLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoJ1xcXFwnICsgYywgJ2cnKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJlZ2V4LCAnXFxcXCcgKyBjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBnZXRSZXNvdXJjZUlkKGlkLCBkZWZhdWx0SWQgPSBudWxsKSB7XG4gICAgICAgIGxldCByZXNvdXJjZUlkID0gbnVsbDtcbiAgICAgICAgaWYodHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiBpZCAhPT0gZGVmYXVsdElkKSB7XG4gICAgICAgICAgICByZXNvdXJjZUlkID0gYD0ke2VuY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoaWQpKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb3VyY2VJZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZUlkO1xuICAgIH0sXG4gICAgZ2V0RmlsZW5hbWVJZChmaWxlbmFtZSkge1xuICAgICAgICBpZih0eXBlb2YgZmlsZW5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmaWxlbmFtZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudChmaWxlbmFtZSkpO1xuICAgICAgICBpZihmaWxlbmFtZS5pbmRleE9mKCcuJykgPD0gMCkge1xuXG4gICAgICAgICAgICAvLyBGaWxlIG5hbWUgaGFzIG5vIGRvdCAob3IgdGhlIGRvdCBpcyBhdCB0aGUgZmlyc3QgcG9zaXRpb24pLlxuICAgICAgICAgICAgLy8gQXNzdW1lIHRoYXQgbWVhbnMgaXQgZG9lc24ndCBoYXZlIGFuIGV4dGVuc2lvbi5cbiAgICAgICAgICAgIGVuY29kZWROYW1lID0gYD0ke2VuY29kZWROYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuY29kZWROYW1lO1xuICAgIH1cbn07XG4iXX0=
//# sourceMappingURL=utility.js.map
