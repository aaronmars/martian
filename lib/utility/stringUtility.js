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
var stringUtility = {
    isBlank: function isBlank() {
        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        return (/^\s*$/.test(this.makeString(str))
        );
    },
    makeString: function makeString() {
        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        if (typeof str !== 'string') {
            return String(str);
        }
        return str;
    },
    leftTrim: function leftTrim(str) {
        var char = arguments.length <= 1 || arguments[1] === undefined ? '\\s' : arguments[1];

        str = this.makeString(str);
        return str.replace(new RegExp('^' + char + '+'), '');
    },
    startsWith: function startsWith(str, starts) {
        str = this.makeString(str);
        return str.lastIndexOf(starts, 0) === 0;
    },
    stringLeft: function stringLeft(str, sep) {
        if (!sep) {
            return str;
        }
        str = this.makeString(str);
        sep = this.makeString(sep);
        var pos = str.indexOf(sep);
        return pos >= 0 ? str.slice(0, pos) : str;
    },
    stringRight: function stringRight(str, sep) {
        if (!sep) {
            return str;
        }
        str = this.makeString(str);
        sep = this.makeString(sep);
        var pos = str.indexOf(sep);
        return pos >= 0 ? str.slice(pos + sep.length, str.length) : str;
    },
    words: function words(str) {
        var delimiter = arguments.length <= 1 || arguments[1] === undefined ? /\s+/ : arguments[1];

        str = this.makeString(str);
        return str.split(delimiter);
    }
};
exports.stringUtility = stringUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvc3RyaW5nVXRpbGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFJLGdCQUFnQjtBQUNoQixhQUFTLG1CQUFtQjtZQUFWLDREQUFNLGtCQUFJOztBQUN4QixlQUFPLFNBQVUsSUFBVixDQUFlLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFmLENBQVA7VUFEd0I7S0FBbkI7QUFHVCxnQkFBWSxzQkFBbUI7WUFBViw0REFBTSxrQkFBSTs7QUFDM0IsWUFBRyxPQUFPLEdBQVAsS0FBZSxRQUFmLEVBQXlCO0FBQ3hCLG1CQUFPLE9BQU8sR0FBUCxDQUFQLENBRHdCO1NBQTVCO0FBR0EsZUFBTyxHQUFQLENBSjJCO0tBQW5CO0FBTVosY0FBVSxrQkFBUyxHQUFULEVBQTRCO1lBQWQsNkRBQU8scUJBQU87O0FBQ2xDLGNBQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQU4sQ0FEa0M7QUFFbEMsZUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFJLE1BQUosQ0FBVyxNQUFNLElBQU4sR0FBYSxHQUFiLENBQXZCLEVBQTBDLEVBQTFDLENBQVAsQ0FGa0M7S0FBNUI7QUFJVixnQkFBWSxvQkFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQjtBQUM5QixjQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFOLENBRDhCO0FBRTlCLGVBQU8sSUFBSSxXQUFKLENBQWdCLE1BQWhCLEVBQXdCLENBQXhCLE1BQStCLENBQS9CLENBRnVCO0tBQXRCO0FBSVosZ0JBQVksb0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDM0IsWUFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLG1CQUFPLEdBQVAsQ0FESztTQUFUO0FBR0EsY0FBTSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBTixDQUoyQjtBQUszQixjQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFOLENBTDJCO0FBTTNCLFlBQUksTUFBTSxJQUFJLE9BQUosQ0FBWSxHQUFaLENBQU4sQ0FOdUI7QUFPM0IsZUFBTyxHQUFDLElBQU8sQ0FBUCxHQUFZLElBQUksS0FBSixDQUFVLENBQVYsRUFBYSxHQUFiLENBQWIsR0FBaUMsR0FBakMsQ0FQb0I7S0FBbkI7QUFTWixpQkFBYSxxQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUM1QixZQUFHLENBQUMsR0FBRCxFQUFNO0FBQ0wsbUJBQU8sR0FBUCxDQURLO1NBQVQ7QUFHQSxjQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFOLENBSjRCO0FBSzVCLGNBQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQU4sQ0FMNEI7QUFNNUIsWUFBSSxNQUFNLElBQUksT0FBSixDQUFZLEdBQVosQ0FBTixDQU53QjtBQU81QixlQUFPLEdBQUMsSUFBTyxDQUFQLEdBQVksSUFBSSxLQUFKLENBQVUsTUFBTSxJQUFJLE1BQUosRUFBWSxJQUFJLE1BQUosQ0FBekMsR0FBdUQsR0FBdkQsQ0FQcUI7S0FBbkI7QUFTYixXQUFPLGVBQVMsR0FBVCxFQUFpQztZQUFuQixrRUFBWSxxQkFBTzs7QUFDcEMsY0FBTSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBTixDQURvQztBQUVwQyxlQUFPLElBQUksS0FBSixDQUFVLFNBQVYsQ0FBUCxDQUZvQztLQUFqQztDQXBDUDtRQXlDSSIsImZpbGUiOiJ1dGlsaXR5L3N0cmluZ1V0aWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xubGV0IHN0cmluZ1V0aWxpdHkgPSB7XG4gICAgaXNCbGFuazogZnVuY3Rpb24oc3RyID0gJycpIHtcbiAgICAgICAgcmV0dXJuICgvXlxccyokLykudGVzdCh0aGlzLm1ha2VTdHJpbmcoc3RyKSk7XG4gICAgfSxcbiAgICBtYWtlU3RyaW5nOiBmdW5jdGlvbihzdHIgPSAnJykge1xuICAgICAgICBpZih0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcbiAgICBsZWZ0VHJpbTogZnVuY3Rpb24oc3RyLCBjaGFyID0gJ1xcXFxzJykge1xuICAgICAgICBzdHIgPSB0aGlzLm1ha2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoJ14nICsgY2hhciArICcrJyksICcnKTtcbiAgICB9LFxuICAgIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uKHN0ciwgc3RhcnRzKSB7XG4gICAgICAgIHN0ciA9IHRoaXMubWFrZVN0cmluZyhzdHIpO1xuICAgICAgICByZXR1cm4gc3RyLmxhc3RJbmRleE9mKHN0YXJ0cywgMCkgPT09IDA7XG4gICAgfSxcbiAgICBzdHJpbmdMZWZ0OiBmdW5jdGlvbihzdHIsIHNlcCkge1xuICAgICAgICBpZighc2VwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IHRoaXMubWFrZVN0cmluZyhzdHIpO1xuICAgICAgICBzZXAgPSB0aGlzLm1ha2VTdHJpbmcoc2VwKTtcbiAgICAgICAgdmFyIHBvcyA9IHN0ci5pbmRleE9mKHNlcCk7XG4gICAgICAgIHJldHVybiAocG9zID49IDApID8gc3RyLnNsaWNlKDAsIHBvcykgOiBzdHI7XG4gICAgfSxcbiAgICBzdHJpbmdSaWdodDogZnVuY3Rpb24oc3RyLCBzZXApIHtcbiAgICAgICAgaWYoIXNlcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSB0aGlzLm1ha2VTdHJpbmcoc3RyKTtcbiAgICAgICAgc2VwID0gdGhpcy5tYWtlU3RyaW5nKHNlcCk7XG4gICAgICAgIHZhciBwb3MgPSBzdHIuaW5kZXhPZihzZXApO1xuICAgICAgICByZXR1cm4gKHBvcyA+PSAwKSA/IHN0ci5zbGljZShwb3MgKyBzZXAubGVuZ3RoLCBzdHIubGVuZ3RoKSA6IHN0cjtcbiAgICB9LFxuICAgIHdvcmRzOiBmdW5jdGlvbihzdHIsIGRlbGltaXRlciA9IC9cXHMrLykge1xuICAgICAgICBzdHIgPSB0aGlzLm1ha2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIH1cbn07XG5leHBvcnQge3N0cmluZ1V0aWxpdHl9O1xuIl19
//# sourceMappingURL=stringUtility.js.map
