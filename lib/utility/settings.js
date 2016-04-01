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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvc2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFJLHFCQUFxQixFQUFyQjs7SUFDUzs7OzBCQUNXLFlBQVk7QUFDNUIsaUNBQXFCLFVBQXJCLENBRDRCOzs7O0FBR2hDLGFBSlMsUUFJVCxHQUE2QztZQUFqQyxtRUFBYSxrQ0FBb0I7OzhCQUpwQyxVQUlvQzs7QUFDekMsYUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBRHlDO0tBQTdDOztpQkFKUzs7Z0NBT2E7OztnQkFBaEIsa0VBQVksa0JBQUk7O0FBQ2xCLGdCQUFJLFdBQVcsU0FBWCxDQURjO0FBRWxCLG1CQUFPLElBQVAsQ0FBWSxLQUFLLFVBQUwsQ0FBWixDQUE2QixPQUE3QixDQUFxQyxVQUFDLEdBQUQsRUFBUztBQUMxQyxvQkFBRyxFQUFFLE9BQU8sU0FBUCxDQUFGLEVBQXFCO0FBQ3BCLDZCQUFTLEdBQVQsSUFBZ0IsTUFBSyxVQUFMLENBQWdCLEdBQWhCLENBQWhCLENBRG9CO2lCQUF4QjthQURpQyxDQUFyQyxDQUZrQjtBQU9sQixtQkFBTyxJQUFJLFFBQUosQ0FBYSxRQUFiLENBQVAsQ0FQa0I7Ozs7NEJBU2xCLGNBQWM7QUFDZCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBUCxDQURjOzs7OzRCQUdkLGNBQWMsT0FBTztBQUNyQixpQkFBSyxVQUFMLENBQWdCLFlBQWhCLElBQWdDLEtBQWhDLENBRHFCOzs7O3dDQUdUO0FBQ1osbUJBQU8sS0FBSyxVQUFMLENBREs7Ozs7V0F0QlAiLCJmaWxlIjoidXRpbGl0eS9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5sZXQgX2RlZmF1bHRQcm9wZXJ0aWVzID0ge307XG5leHBvcnQgY2xhc3MgU2V0dGluZ3Mge1xuICAgIHN0YXRpYyBzZXQgZGVmYXVsdHMocHJvcGVydGllcykge1xuICAgICAgICBfZGVmYXVsdFByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0gX2RlZmF1bHRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxuICAgIGNsb25lKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgICAgIGxldCBuZXdQcm9wcyA9IG92ZXJyaWRlcztcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmKCEoa2V5IGluIG92ZXJyaWRlcykpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1trZXldID0gdGhpcy5wcm9wZXJ0aWVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFNldHRpbmdzKG5ld1Byb3BzKTtcbiAgICB9XG4gICAgZ2V0KHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgfVxuICAgIHNldChwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIGdldFByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=settings.js.map
