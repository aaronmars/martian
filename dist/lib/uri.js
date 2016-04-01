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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi91cmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOzs7O0lBQ2E7QUFDVCxhQURTLEdBQ1QsR0FBc0I7WUFBViw0REFBTSxrQkFBSTs7OEJBRGIsS0FDYTs7QUFDbEIsYUFBSyxTQUFMLEdBQWlCLHlCQUFjLEdBQWQsQ0FBakIsQ0FEa0I7S0FBdEI7O2lCQURTOzt5Q0FVUSxLQUFLO0FBQ2xCLGlCQUFLLFNBQUwsQ0FBZSxZQUFmLENBQTRCLE1BQTVCLENBQW1DLEdBQW5DLEVBRGtCO0FBRWxCLG1CQUFPLElBQVAsQ0FGa0I7Ozs7c0NBSVIsS0FBSyxPQUFPO0FBQ3RCLGlCQUFLLFNBQUwsQ0FBZSxZQUFmLENBQTRCLE1BQTVCLENBQW1DLEdBQW5DLEVBQXdDLG1CQUFtQixLQUFuQixDQUF4QyxFQURzQjtBQUV0QixtQkFBTyxJQUFQLENBRnNCOzs7O3VDQUlYLFVBQVU7OztBQUNyQixtQkFBTyxJQUFQLENBQVksUUFBWixFQUFzQixPQUF0QixDQUE4QixVQUFDLEdBQUQsRUFBUztBQUNuQyxzQkFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCLFNBQVMsR0FBVCxDQUF4QixFQURtQzthQUFULENBQTlCLENBRHFCO0FBSXJCLG1CQUFPLElBQVAsQ0FKcUI7Ozs7c0NBTUE7QUFDckIsZ0JBQUksT0FBTyxFQUFQLENBRGlCOzs4Q0FBVjs7YUFBVTs7QUFFckIscUJBQVMsT0FBVCxDQUFpQixVQUFDLE9BQUQsRUFBYTtBQUMxQixvQkFBRyxNQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUgsRUFBMkI7QUFDdkIsNEJBQVEsT0FBUixDQUFnQixVQUFDLFlBQUQsRUFBa0I7QUFDOUIsdUNBQWUsNkJBQWMsUUFBZCxDQUF1QixZQUF2QixFQUFxQyxHQUFyQyxDQUFmLENBRDhCO0FBRTlCLCtCQUFVLGFBQVEsWUFBbEIsQ0FGOEI7cUJBQWxCLENBQWhCLENBRHVCO2lCQUEzQixNQUtPO0FBQ0gsOEJBQVUsNkJBQWMsUUFBZCxDQUF1QixPQUF2QixFQUFnQyxHQUFoQyxDQUFWLENBREc7QUFFSCwyQkFBVSxhQUFRLE9BQWxCLENBRkc7aUJBTFA7YUFEYSxDQUFqQixDQUZxQjtBQWFyQixnQkFBSSxXQUFXLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FiTTtBQWNyQixnQkFBRyxhQUFhLEdBQWIsRUFBa0I7QUFDakIsMkJBQVcsRUFBWCxDQURpQjthQUFyQjtBQUdBLGlCQUFLLFNBQUwsQ0FBZSxRQUFmLFFBQTZCLFdBQVcsSUFBeEMsQ0FqQnFCO0FBa0JyQixtQkFBTyxJQUFQLENBbEJxQjs7OzttQ0FvQmQ7QUFDUCxtQkFBTyxLQUFLLFNBQUwsQ0FBZSxRQUFmLEVBQVAsQ0FETzs7Ozs0QkF4Q0k7QUFDWCxtQkFBTyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBREk7Ozs7NEJBR0Y7QUFDVCxtQkFBTyxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBREU7Ozs7V0FQSiIsImZpbGUiOiJsaWIvdXJpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7VXJpUGFyc2VyfSBmcm9tICcuL3VyaVBhcnNlcic7XG5pbXBvcnQge3N0cmluZ1V0aWxpdHl9IGZyb20gJy4vc3RyaW5nVXRpbGl0eSc7XG5leHBvcnQgY2xhc3MgVXJpIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwgPSAnJykge1xuICAgICAgICB0aGlzLnBhcnNlZFVybCA9IG5ldyBVcmlQYXJzZXIodXJsKTtcbiAgICB9XG4gICAgZ2V0IHByb3RvY29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZWRVcmwucHJvdG9jb2w7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlZFVybC5vcmlnaW47XG4gICAgfVxuICAgIHJlbW92ZVF1ZXJ5UGFyYW0oa2V5KSB7XG4gICAgICAgIHRoaXMucGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFF1ZXJ5UGFyYW0oa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcnNlZFVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRRdWVyeVBhcmFtcyhxdWVyeU1hcCkge1xuICAgICAgICBPYmplY3Qua2V5cyhxdWVyeU1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFF1ZXJ5UGFyYW0oa2V5LCBxdWVyeU1hcFtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTZWdtZW50cyguLi5zZWdtZW50cykge1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5mb3JFYWNoKChhcnJheVNlZ21lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlTZWdtZW50ID0gc3RyaW5nVXRpbGl0eS5sZWZ0VHJpbShhcnJheVNlZ21lbnQsICcvJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBgJHtwYXRofS8ke2FycmF5U2VnbWVudH1gO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gc3RyaW5nVXRpbGl0eS5sZWZ0VHJpbShzZWdtZW50LCAnLycpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBgJHtwYXRofS8ke3NlZ21lbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwYXRoTmFtZSA9IHRoaXMucGFyc2VkVXJsLnBhdGhuYW1lO1xuICAgICAgICBpZihwYXRoTmFtZSA9PT0gJy8nKSB7XG4gICAgICAgICAgICBwYXRoTmFtZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyc2VkVXJsLnBhdGhuYW1lID0gYCR7cGF0aE5hbWV9JHtwYXRofWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VkVXJsLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=uri.js.map
