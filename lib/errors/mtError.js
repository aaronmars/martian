"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var MTError = exports.MTError = function (_Error) {
  _inherits(MTError, _Error);

  /**
   * Placeholder class to contain the workaround for Babel not being able
   * to subclass built-in objects due to ES5 limitations.
   */

  function MTError(message) {
    _classCallCheck(this, MTError);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MTError).call(this));

    _this.message = message;
    _this.stack = new Error().stack;
    _this.name = _this.constructor.name;
    return _this;
  }

  return MTError;
}(Error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9tdEVycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQmE7Ozs7Ozs7O0FBTVQsV0FOUyxPQU1ULENBQVksT0FBWixFQUFxQjswQkFOWixTQU1ZOzt1RUFOWixxQkFNWTs7QUFFakIsVUFBSyxPQUFMLEdBQWUsT0FBZixDQUZpQjtBQUdqQixVQUFLLEtBQUwsR0FBYSxJQUFLLEtBQUosRUFBRCxDQUFjLEtBQWQsQ0FISTtBQUlqQixVQUFLLElBQUwsR0FBWSxNQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FKSzs7R0FBckI7O1NBTlM7RUFBZ0IiLCJmaWxlIjoiZXJyb3JzL210RXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE1URXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBjbGFzcyB0byBjb250YWluIHRoZSB3b3JrYXJvdW5kIGZvciBCYWJlbCBub3QgYmVpbmcgYWJsZVxuICAgICAqIHRvIHN1YmNsYXNzIGJ1aWx0LWluIG9iamVjdHMgZHVlIHRvIEVTNSBsaW1pdGF0aW9ucy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=mtError.js.map
