'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageProperty = undefined;

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


var _plug = require('./lib/plug');

var _utility = require('./lib/utility');

var _pageProperties = require('./models/pageProperties.model');

var _pageProperty = require('./models/pageProperty.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for managing the properties of a page.
 */

var PageProperty = exports.PageProperty = function () {

    /**
     * Construct a new PageProperty object.
     * @param {Number|String} [id='home'] The numeric page ID or the page path.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function PageProperty() {
        var id = arguments.length <= 0 || arguments[0] === undefined ? 'home' : arguments[0];
        var settings = arguments[1];

        _classCallCheck(this, PageProperty);

        this._id = _utility.utility.getResourceId(id, 'home');
        this._plug = new _plug.Plug(settings).at('@api', 'deki', 'pages', this._id, 'properties');
    }

    /**
     * Get all of the properties of the page.
     * @param {Array} [names=[]] - An array of names to fetch so that the results are filtered.
     * @returns {Promise.<pagePropertiesModel>} - A Promise that, when resolved, yields a {@link pagePropertiesModel} object that contains the listing of properties.
     */


    _createClass(PageProperty, [{
        key: 'getProperties',
        value: function getProperties() {
            var names = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            if (!Array.isArray(names)) {
                return Promise.reject(new Error('The property names must be an array'));
            }
            var plug = this._plug;
            if (names.length > 0) {
                plug = plug.withParams({ names: names.join(',') });
            }
            return plug.get().then(_pageProperties.pagePropertiesModel.parse);
        }

        /**
         * Gets a single page property by property key.
         * @param {String} key - The key of the property to fetch.
         * @returns {Promise.<pagePropertyModel>} - A Promise that, when resolved, yields a {@link pagePropertyModel} object that contains the property information.
         */

    }, {
        key: 'getProperty',
        value: function getProperty(key) {
            if (!key) {
                return Promise.reject(new Error('Attempting to fetch a page property without providing a property key'));
            }
            return this._plug.at(encodeURIComponent(key), 'info').get().then(_pageProperty.pagePropertyModel.parse);
        }

        /**
         * Get the contents of a page property.
         * @param {String} key - The key of the property to fetch.
         * @returns {Promise} - A Promise that, when resolved, yields the property contents.  The property can be of any type allowed by the MindTouch property subsystem.
         */

    }, {
        key: 'getPropertyContents',
        value: function getPropertyContents(key) {
            if (!key) {
                return Promise.reject(new Error('Attempting to fetch a page property contents without providing a property key'));
            }
            return this._plug.at(encodeURIComponent(key)).get();
        }

        /**
         * Get a listing of page properties for a hierarchy of pages.
         * @param {String} key - The key of the property to fetch.
         * @param {Number} [depth=1] - Between 0 and 2 levels deep in the search are allowed. If depth is 1 or 2, the names argument only can be a single property to be looked up, and no wildcards are allowed.
         * @returns {Promise} - A Promise that, when resolved, yields the listing of the properties.
         */

    }, {
        key: 'getPropertyForChildren',
        value: function getPropertyForChildren(key) {
            var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

            if (!key) {
                return Promise.reject(new Error('Attempting to fetch properties for children without providing a property key'));
            }
            return this._plug.withParams({ depth: depth, names: key }).get();
        }
    }]);

    return PageProperty;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS2E7Ozs7Ozs7O0FBT1QsYUFQUyxZQU9ULEdBQW1DO1lBQXZCLDJEQUFLLHNCQUFrQjtZQUFWLHdCQUFVOzs4QkFQMUIsY0FPMEI7O0FBQy9CLGFBQUssR0FBTCxHQUFXLGlCQUFRLGFBQVIsQ0FBc0IsRUFBdEIsRUFBMEIsTUFBMUIsQ0FBWCxDQUQrQjtBQUUvQixhQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsS0FBSyxHQUFMLEVBQVUsWUFBekQsQ0FBYixDQUYrQjtLQUFuQzs7Ozs7Ozs7O2lCQVBTOzt3Q0FpQmlCO2dCQUFaLDhEQUFRLGtCQUFJOztBQUN0QixnQkFBRyxDQUFDLE1BQU0sT0FBTixDQUFjLEtBQWQsQ0FBRCxFQUF1QjtBQUN0Qix1QkFBTyxRQUFRLE1BQVIsQ0FBZSxJQUFJLEtBQUosQ0FBVSxxQ0FBVixDQUFmLENBQVAsQ0FEc0I7YUFBMUI7QUFHQSxnQkFBSSxPQUFPLEtBQUssS0FBTCxDQUpXO0FBS3RCLGdCQUFHLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDakIsdUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsT0FBTyxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQVAsRUFBbEIsQ0FBUCxDQURpQjthQUFyQjtBQUdBLG1CQUFPLEtBQUssR0FBTCxHQUFXLElBQVgsQ0FBZ0Isb0NBQW9CLEtBQXBCLENBQXZCLENBUnNCOzs7Ozs7Ozs7OztvQ0FnQmQsS0FBSztBQUNiLGdCQUFHLENBQUMsR0FBRCxFQUFNO0FBQ0wsdUJBQU8sUUFBUSxNQUFSLENBQWUsSUFBSSxLQUFKLENBQVUsc0VBQVYsQ0FBZixDQUFQLENBREs7YUFBVDtBQUdBLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxtQkFBbUIsR0FBbkIsQ0FBZCxFQUF1QyxNQUF2QyxFQUErQyxHQUEvQyxHQUFxRCxJQUFyRCxDQUEwRCxnQ0FBa0IsS0FBbEIsQ0FBakUsQ0FKYTs7Ozs7Ozs7Ozs7NENBWUcsS0FBSztBQUNyQixnQkFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLHVCQUFPLFFBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVLCtFQUFWLENBQWYsQ0FBUCxDQURLO2FBQVQ7QUFHQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsbUJBQW1CLEdBQW5CLENBQWQsRUFBdUMsR0FBdkMsRUFBUCxDQUpxQjs7Ozs7Ozs7Ozs7OytDQWFGLEtBQWdCO2dCQUFYLDhEQUFRLGlCQUFHOztBQUNuQyxnQkFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLHVCQUFPLFFBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVLDhFQUFWLENBQWYsQ0FBUCxDQURLO2FBQVQ7QUFHQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEVBQUUsT0FBTyxLQUFQLEVBQWMsT0FBTyxHQUFQLEVBQXRDLEVBQW9ELEdBQXBELEVBQVAsQ0FKbUM7Ozs7V0ExRDlCIiwiZmlsZSI6InBhZ2VQcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1BsdWd9IGZyb20gJy4vbGliL3BsdWcnO1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL2xpYi91dGlsaXR5JztcbmltcG9ydCB7cGFnZVByb3BlcnRpZXNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZVByb3BlcnRpZXMubW9kZWwnO1xuaW1wb3J0IHtwYWdlUHJvcGVydHlNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZVByb3BlcnR5Lm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIGZvciBtYW5hZ2luZyB0aGUgcHJvcGVydGllcyBvZiBhIHBhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYWdlUHJvcGVydHkge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IFBhZ2VQcm9wZXJ0eSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbaWQ9J2hvbWUnXSBUaGUgbnVtZXJpYyBwYWdlIElEIG9yIHRoZSBwYWdlIHBhdGguXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQgPSAnaG9tZScsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdXRpbGl0eS5nZXRSZXNvdXJjZUlkKGlkLCAnaG9tZScpO1xuICAgICAgICB0aGlzLl9wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAncGFnZXMnLCB0aGlzLl9pZCwgJ3Byb3BlcnRpZXMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBwYWdlLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFtuYW1lcz1bXV0gLSBBbiBhcnJheSBvZiBuYW1lcyB0byBmZXRjaCBzbyB0aGF0IHRoZSByZXN1bHRzIGFyZSBmaWx0ZXJlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZVByb3BlcnRpZXNNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlUHJvcGVydGllc01vZGVsfSBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgbGlzdGluZyBvZiBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGdldFByb3BlcnRpZXMobmFtZXMgPSBbXSkge1xuICAgICAgICBpZighQXJyYXkuaXNBcnJheShuYW1lcykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoZSBwcm9wZXJ0eSBuYW1lcyBtdXN0IGJlIGFuIGFycmF5JykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbHVnID0gdGhpcy5fcGx1ZztcbiAgICAgICAgaWYobmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGx1ZyA9IHBsdWcud2l0aFBhcmFtcyh7IG5hbWVzOiBuYW1lcy5qb2luKCcsJykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsdWcuZ2V0KCkudGhlbihwYWdlUHJvcGVydGllc01vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgc2luZ2xlIHBhZ2UgcHJvcGVydHkgYnkgcHJvcGVydHkga2V5LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBmZXRjaC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZVByb3BlcnR5TW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZVByb3BlcnR5TW9kZWx9IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBwcm9wZXJ0eSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgaWYoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBmZXRjaCBhIHBhZ2UgcHJvcGVydHkgd2l0aG91dCBwcm92aWRpbmcgYSBwcm9wZXJ0eSBrZXknKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoZW5jb2RlVVJJQ29tcG9uZW50KGtleSksICdpbmZvJykuZ2V0KCkudGhlbihwYWdlUHJvcGVydHlNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHBhZ2UgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGZldGNoLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIHByb3BlcnR5IGNvbnRlbnRzLiAgVGhlIHByb3BlcnR5IGNhbiBiZSBvZiBhbnkgdHlwZSBhbGxvd2VkIGJ5IHRoZSBNaW5kVG91Y2ggcHJvcGVydHkgc3Vic3lzdGVtLlxuICAgICAqL1xuICAgIGdldFByb3BlcnR5Q29udGVudHMoa2V5KSB7XG4gICAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gZmV0Y2ggYSBwYWdlIHByb3BlcnR5IGNvbnRlbnRzIHdpdGhvdXQgcHJvdmlkaW5nIGEgcHJvcGVydHkga2V5JykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KGVuY29kZVVSSUNvbXBvbmVudChrZXkpKS5nZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBsaXN0aW5nIG9mIHBhZ2UgcHJvcGVydGllcyBmb3IgYSBoaWVyYXJjaHkgb2YgcGFnZXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGZldGNoLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGVwdGg9MV0gLSBCZXR3ZWVuIDAgYW5kIDIgbGV2ZWxzIGRlZXAgaW4gdGhlIHNlYXJjaCBhcmUgYWxsb3dlZC4gSWYgZGVwdGggaXMgMSBvciAyLCB0aGUgbmFtZXMgYXJndW1lbnQgb25seSBjYW4gYmUgYSBzaW5nbGUgcHJvcGVydHkgdG8gYmUgbG9va2VkIHVwLCBhbmQgbm8gd2lsZGNhcmRzIGFyZSBhbGxvd2VkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIGxpc3Rpbmcgb2YgdGhlIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgZ2V0UHJvcGVydHlGb3JDaGlsZHJlbihrZXksIGRlcHRoID0gMSkge1xuICAgICAgICBpZigha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIGZldGNoIHByb3BlcnRpZXMgZm9yIGNoaWxkcmVuIHdpdGhvdXQgcHJvdmlkaW5nIGEgcHJvcGVydHkga2V5JykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLndpdGhQYXJhbXMoeyBkZXB0aDogZGVwdGgsIG5hbWVzOiBrZXkgfSkuZ2V0KCk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=pageProperty.js.map
