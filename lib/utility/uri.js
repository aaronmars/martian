'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Uri = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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


var _uriParser = require('./uriParser');

var _stringUtility = require('./stringUtility');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Uri = exports.Uri = function () {
    function Uri() {
        var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        _classCallCheck(this, Uri);

        this.parsedUrl = new _uriParser.UriParser(url);
    }

    _createClass(Uri, [{
        key: 'removeQueryParam',
        value: function removeQueryParam(key) {
            this.parsedUrl.searchParams.delete(key);
            return this;
        }
    }, {
        key: 'addQueryParam',
        value: function addQueryParam(key, value) {
            this.parsedUrl.searchParams.append(key, encodeURIComponent(value));
            return this;
        }
    }, {
        key: 'addQueryParams',
        value: function addQueryParams(queryMap) {
            var _this = this;

            Object.keys(queryMap).forEach(function (key) {
                _this.addQueryParam(key, queryMap[key]);
            });
            return this;
        }
    }, {
        key: 'addSegments',
        value: function addSegments() {
            var path = '';

            for (var _len = arguments.length, segments = Array(_len), _key = 0; _key < _len; _key++) {
                segments[_key] = arguments[_key];
            }

            segments.forEach(function (segment) {
                if (Array.isArray(segment)) {
                    segment.forEach(function (arraySegment) {
                        arraySegment = _stringUtility.stringUtility.leftTrim(arraySegment, '/');
                        path = path + '/' + arraySegment;
                    });
                } else {
                    segment = _stringUtility.stringUtility.leftTrim(segment, '/');
                    path = path + '/' + segment;
                }
            });
            var pathName = this.parsedUrl.pathname;
            if (pathName === '/') {
                pathName = '';
            }
            this.parsedUrl.pathname = '' + pathName + path;
            return this;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.parsedUrl.toString();
        }
    }, {
        key: 'protocol',
        get: function get() {
            return this.parsedUrl.protocol;
        }
    }, {
        key: 'origin',
        get: function get() {
            return this.parsedUrl.origin;
        }
    }]);

    return Uri;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvdXJpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7OztJQUNhO0FBQ1QsYUFEUyxHQUNULEdBQXNCO1lBQVYsNERBQU0sa0JBQUk7OzhCQURiLEtBQ2E7O0FBQ2xCLGFBQUssU0FBTCxHQUFpQix5QkFBYyxHQUFkLENBQWpCLENBRGtCO0tBQXRCOztpQkFEUzs7eUNBVVEsS0FBSztBQUNsQixpQkFBSyxTQUFMLENBQWUsWUFBZixDQUE0QixNQUE1QixDQUFtQyxHQUFuQyxFQURrQjtBQUVsQixtQkFBTyxJQUFQLENBRmtCOzs7O3NDQUlSLEtBQUssT0FBTztBQUN0QixpQkFBSyxTQUFMLENBQWUsWUFBZixDQUE0QixNQUE1QixDQUFtQyxHQUFuQyxFQUF3QyxtQkFBbUIsS0FBbkIsQ0FBeEMsRUFEc0I7QUFFdEIsbUJBQU8sSUFBUCxDQUZzQjs7Ozt1Q0FJWCxVQUFVOzs7QUFDckIsbUJBQU8sSUFBUCxDQUFZLFFBQVosRUFBc0IsT0FBdEIsQ0FBOEIsVUFBQyxHQUFELEVBQVM7QUFDbkMsc0JBQUssYUFBTCxDQUFtQixHQUFuQixFQUF3QixTQUFTLEdBQVQsQ0FBeEIsRUFEbUM7YUFBVCxDQUE5QixDQURxQjtBQUlyQixtQkFBTyxJQUFQLENBSnFCOzs7O3NDQU1BO0FBQ3JCLGdCQUFJLE9BQU8sRUFBUCxDQURpQjs7OENBQVY7O2FBQVU7O0FBRXJCLHFCQUFTLE9BQVQsQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDMUIsb0JBQUcsTUFBTSxPQUFOLENBQWMsT0FBZCxDQUFILEVBQTJCO0FBQ3ZCLDRCQUFRLE9BQVIsQ0FBZ0IsVUFBQyxZQUFELEVBQWtCO0FBQzlCLHVDQUFlLDZCQUFjLFFBQWQsQ0FBdUIsWUFBdkIsRUFBcUMsR0FBckMsQ0FBZixDQUQ4QjtBQUU5QiwrQkFBVSxhQUFRLFlBQWxCLENBRjhCO3FCQUFsQixDQUFoQixDQUR1QjtpQkFBM0IsTUFLTztBQUNILDhCQUFVLDZCQUFjLFFBQWQsQ0FBdUIsT0FBdkIsRUFBZ0MsR0FBaEMsQ0FBVixDQURHO0FBRUgsMkJBQVUsYUFBUSxPQUFsQixDQUZHO2lCQUxQO2FBRGEsQ0FBakIsQ0FGcUI7QUFhckIsZ0JBQUksV0FBVyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBYk07QUFjckIsZ0JBQUcsYUFBYSxHQUFiLEVBQWtCO0FBQ2pCLDJCQUFXLEVBQVgsQ0FEaUI7YUFBckI7QUFHQSxpQkFBSyxTQUFMLENBQWUsUUFBZixRQUE2QixXQUFXLElBQXhDLENBakJxQjtBQWtCckIsbUJBQU8sSUFBUCxDQWxCcUI7Ozs7bUNBb0JkO0FBQ1AsbUJBQU8sS0FBSyxTQUFMLENBQWUsUUFBZixFQUFQLENBRE87Ozs7NEJBeENJO0FBQ1gsbUJBQU8sS0FBSyxTQUFMLENBQWUsUUFBZixDQURJOzs7OzRCQUdGO0FBQ1QsbUJBQU8sS0FBSyxTQUFMLENBQWUsTUFBZixDQURFOzs7O1dBUEoiLCJmaWxlIjoidXRpbGl0eS91cmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtVcmlQYXJzZXJ9IGZyb20gJy4vdXJpUGFyc2VyJztcbmltcG9ydCB7c3RyaW5nVXRpbGl0eX0gZnJvbSAnLi9zdHJpbmdVdGlsaXR5JztcbmV4cG9ydCBjbGFzcyBVcmkge1xuICAgIGNvbnN0cnVjdG9yKHVybCA9ICcnKSB7XG4gICAgICAgIHRoaXMucGFyc2VkVXJsID0gbmV3IFVyaVBhcnNlcih1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJvdG9jb2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZFVybC5wcm90b2NvbDtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VkVXJsLm9yaWdpbjtcbiAgICB9XG4gICAgcmVtb3ZlUXVlcnlQYXJhbShrZXkpIHtcbiAgICAgICAgdGhpcy5wYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkUXVlcnlQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFF1ZXJ5UGFyYW1zKHF1ZXJ5TWFwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5TWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUXVlcnlQYXJhbShrZXksIHF1ZXJ5TWFwW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNlZ21lbnRzKC4uLnNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LmZvckVhY2goKGFycmF5U2VnbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcnJheVNlZ21lbnQgPSBzdHJpbmdVdGlsaXR5LmxlZnRUcmltKGFycmF5U2VnbWVudCwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGAke3BhdGh9LyR7YXJyYXlTZWdtZW50fWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSBzdHJpbmdVdGlsaXR5LmxlZnRUcmltKHNlZ21lbnQsICcvJyk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IGAke3BhdGh9LyR7c2VnbWVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHBhdGhOYW1lID0gdGhpcy5wYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGlmKHBhdGhOYW1lID09PSAnLycpIHtcbiAgICAgICAgICAgIHBhdGhOYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJzZWRVcmwucGF0aG5hbWUgPSBgJHtwYXRoTmFtZX0ke3BhdGh9YDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWRVcmwudG9TdHJpbmcoKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=uri.js.map
