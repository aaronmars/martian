"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var _defaultProperties = {};

var Settings = exports.Settings = function () {
    _createClass(Settings, null, [{
        key: "defaults",
        set: function set(properties) {
            _defaultProperties = properties;
        }
    }]);

    function Settings() {
        var properties = arguments.length <= 0 || arguments[0] === undefined ? _defaultProperties : arguments[0];

        _classCallCheck(this, Settings);

        this.properties = properties;
    }

    _createClass(Settings, [{
        key: "clone",
        value: function clone() {
            var _this = this;

            var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var newProps = overrides;
            Object.keys(this.properties).forEach(function (key) {
                if (!(key in overrides)) {
                    newProps[key] = _this.properties[key];
                }
            });
            return new Settings(newProps);
        }
    }, {
        key: "get",
        value: function get(propertyName) {
            return this.properties[propertyName];
        }
    }, {
        key: "set",
        value: function set(propertyName, value) {
            this.properties[propertyName] = value;
        }
    }, {
        key: "getProperties",
        value: function getProperties() {
            return this.properties;
        }
    }]);

    return Settings;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUkscUJBQXFCLEVBQXJCOztJQUNTOzs7MEJBQ1csWUFBWTtBQUM1QixpQ0FBcUIsVUFBckIsQ0FENEI7Ozs7QUFHaEMsYUFKUyxRQUlULEdBQTZDO1lBQWpDLG1FQUFhLGtDQUFvQjs7OEJBSnBDLFVBSW9DOztBQUN6QyxhQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEeUM7S0FBN0M7O2lCQUpTOztnQ0FPYTs7O2dCQUFoQixrRUFBWSxrQkFBSTs7QUFDbEIsZ0JBQUksV0FBVyxTQUFYLENBRGM7QUFFbEIsbUJBQU8sSUFBUCxDQUFZLEtBQUssVUFBTCxDQUFaLENBQTZCLE9BQTdCLENBQXFDLFVBQUMsR0FBRCxFQUFTO0FBQzFDLG9CQUFHLEVBQUUsT0FBTyxTQUFQLENBQUYsRUFBcUI7QUFDcEIsNkJBQVMsR0FBVCxJQUFnQixNQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBaEIsQ0FEb0I7aUJBQXhCO2FBRGlDLENBQXJDLENBRmtCO0FBT2xCLG1CQUFPLElBQUksUUFBSixDQUFhLFFBQWIsQ0FBUCxDQVBrQjs7Ozs0QkFTbEIsY0FBYztBQUNkLG1CQUFPLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUFQLENBRGM7Ozs7NEJBR2QsY0FBYyxPQUFPO0FBQ3JCLGlCQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsSUFBZ0MsS0FBaEMsQ0FEcUI7Ozs7d0NBR1Q7QUFDWixtQkFBTyxLQUFLLFVBQUwsQ0FESzs7OztXQXRCUCIsImZpbGUiOiJsaWIvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xubGV0IF9kZWZhdWx0UHJvcGVydGllcyA9IHt9O1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbiAgICBzdGF0aWMgc2V0IGRlZmF1bHRzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgX2RlZmF1bHRQcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IF9kZWZhdWx0UHJvcGVydGllcykge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBjbG9uZShvdmVycmlkZXMgPSB7fSkge1xuICAgICAgICBsZXQgbmV3UHJvcHMgPSBvdmVycmlkZXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpZighKGtleSBpbiBvdmVycmlkZXMpKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNba2V5XSA9IHRoaXMucHJvcGVydGllc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhuZXdQcm9wcyk7XG4gICAgfVxuICAgIGdldChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgIH1cbiAgICBzZXQocHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=settings.js.map
