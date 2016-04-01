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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zdHJpbmdVdGlsaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUksZ0JBQWdCO0FBQ2hCLGFBQVMsbUJBQW1CO1lBQVYsNERBQU0sa0JBQUk7O0FBQ3hCLGVBQU8sU0FBVSxJQUFWLENBQWUsS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQWYsQ0FBUDtVQUR3QjtLQUFuQjtBQUdULGdCQUFZLHNCQUFtQjtZQUFWLDREQUFNLGtCQUFJOztBQUMzQixZQUFHLE9BQU8sR0FBUCxLQUFlLFFBQWYsRUFBeUI7QUFDeEIsbUJBQU8sT0FBTyxHQUFQLENBQVAsQ0FEd0I7U0FBNUI7QUFHQSxlQUFPLEdBQVAsQ0FKMkI7S0FBbkI7QUFNWixjQUFVLGtCQUFTLEdBQVQsRUFBNEI7WUFBZCw2REFBTyxxQkFBTzs7QUFDbEMsY0FBTSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBTixDQURrQztBQUVsQyxlQUFPLElBQUksT0FBSixDQUFZLElBQUksTUFBSixDQUFXLE1BQU0sSUFBTixHQUFhLEdBQWIsQ0FBdkIsRUFBMEMsRUFBMUMsQ0FBUCxDQUZrQztLQUE1QjtBQUlWLGdCQUFZLG9CQUFTLEdBQVQsRUFBYyxNQUFkLEVBQXNCO0FBQzlCLGNBQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQU4sQ0FEOEI7QUFFOUIsZUFBTyxJQUFJLFdBQUosQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsTUFBK0IsQ0FBL0IsQ0FGdUI7S0FBdEI7QUFJWixnQkFBWSxvQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUMzQixZQUFHLENBQUMsR0FBRCxFQUFNO0FBQ0wsbUJBQU8sR0FBUCxDQURLO1NBQVQ7QUFHQSxjQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFOLENBSjJCO0FBSzNCLGNBQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQU4sQ0FMMkI7QUFNM0IsWUFBSSxNQUFNLElBQUksT0FBSixDQUFZLEdBQVosQ0FBTixDQU51QjtBQU8zQixlQUFPLEdBQUMsSUFBTyxDQUFQLEdBQVksSUFBSSxLQUFKLENBQVUsQ0FBVixFQUFhLEdBQWIsQ0FBYixHQUFpQyxHQUFqQyxDQVBvQjtLQUFuQjtBQVNaLGlCQUFhLHFCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQzVCLFlBQUcsQ0FBQyxHQUFELEVBQU07QUFDTCxtQkFBTyxHQUFQLENBREs7U0FBVDtBQUdBLGNBQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQU4sQ0FKNEI7QUFLNUIsY0FBTSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBTixDQUw0QjtBQU01QixZQUFJLE1BQU0sSUFBSSxPQUFKLENBQVksR0FBWixDQUFOLENBTndCO0FBTzVCLGVBQU8sR0FBQyxJQUFPLENBQVAsR0FBWSxJQUFJLEtBQUosQ0FBVSxNQUFNLElBQUksTUFBSixFQUFZLElBQUksTUFBSixDQUF6QyxHQUF1RCxHQUF2RCxDQVBxQjtLQUFuQjtBQVNiLFdBQU8sZUFBUyxHQUFULEVBQWlDO1lBQW5CLGtFQUFZLHFCQUFPOztBQUNwQyxjQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFOLENBRG9DO0FBRXBDLGVBQU8sSUFBSSxLQUFKLENBQVUsU0FBVixDQUFQLENBRm9DO0tBQWpDO0NBcENQO1FBeUNJIiwiZmlsZSI6ImxpYi9zdHJpbmdVdGlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmxldCBzdHJpbmdVdGlsaXR5ID0ge1xuICAgIGlzQmxhbms6IGZ1bmN0aW9uKHN0ciA9ICcnKSB7XG4gICAgICAgIHJldHVybiAoL15cXHMqJC8pLnRlc3QodGhpcy5tYWtlU3RyaW5nKHN0cikpO1xuICAgIH0sXG4gICAgbWFrZVN0cmluZzogZnVuY3Rpb24oc3RyID0gJycpIHtcbiAgICAgICAgaWYodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoc3RyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG4gICAgbGVmdFRyaW06IGZ1bmN0aW9uKHN0ciwgY2hhciA9ICdcXFxccycpIHtcbiAgICAgICAgc3RyID0gdGhpcy5tYWtlU3RyaW5nKHN0cik7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdeJyArIGNoYXIgKyAnKycpLCAnJyk7XG4gICAgfSxcbiAgICBzdGFydHNXaXRoOiBmdW5jdGlvbihzdHIsIHN0YXJ0cykge1xuICAgICAgICBzdHIgPSB0aGlzLm1ha2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIHN0ci5sYXN0SW5kZXhPZihzdGFydHMsIDApID09PSAwO1xuICAgIH0sXG4gICAgc3RyaW5nTGVmdDogZnVuY3Rpb24oc3RyLCBzZXApIHtcbiAgICAgICAgaWYoIXNlcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSB0aGlzLm1ha2VTdHJpbmcoc3RyKTtcbiAgICAgICAgc2VwID0gdGhpcy5tYWtlU3RyaW5nKHNlcCk7XG4gICAgICAgIHZhciBwb3MgPSBzdHIuaW5kZXhPZihzZXApO1xuICAgICAgICByZXR1cm4gKHBvcyA+PSAwKSA/IHN0ci5zbGljZSgwLCBwb3MpIDogc3RyO1xuICAgIH0sXG4gICAgc3RyaW5nUmlnaHQ6IGZ1bmN0aW9uKHN0ciwgc2VwKSB7XG4gICAgICAgIGlmKCFzZXApIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gdGhpcy5tYWtlU3RyaW5nKHN0cik7XG4gICAgICAgIHNlcCA9IHRoaXMubWFrZVN0cmluZyhzZXApO1xuICAgICAgICB2YXIgcG9zID0gc3RyLmluZGV4T2Yoc2VwKTtcbiAgICAgICAgcmV0dXJuIChwb3MgPj0gMCkgPyBzdHIuc2xpY2UocG9zICsgc2VwLmxlbmd0aCwgc3RyLmxlbmd0aCkgOiBzdHI7XG4gICAgfSxcbiAgICB3b3JkczogZnVuY3Rpb24oc3RyLCBkZWxpbWl0ZXIgPSAvXFxzKy8pIHtcbiAgICAgICAgc3RyID0gdGhpcy5tYWtlU3RyaW5nKHN0cik7XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICB9XG59O1xuZXhwb3J0IHtzdHJpbmdVdGlsaXR5fTtcbiJdfQ==
//# sourceMappingURL=stringUtility.js.map
