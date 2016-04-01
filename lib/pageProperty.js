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


var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS2E7Ozs7Ozs7O0FBT1QsYUFQUyxZQU9ULEdBQW1DO1lBQXZCLDJEQUFLLHNCQUFrQjtZQUFWLHdCQUFVOzs4QkFQMUIsY0FPMEI7O0FBQy9CLGFBQUssR0FBTCxHQUFXLGlCQUFRLGFBQVIsQ0FBc0IsRUFBdEIsRUFBMEIsTUFBMUIsQ0FBWCxDQUQrQjtBQUUvQixhQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsS0FBSyxHQUFMLEVBQVUsWUFBekQsQ0FBYixDQUYrQjtLQUFuQzs7Ozs7Ozs7O2lCQVBTOzt3Q0FpQmlCO2dCQUFaLDhEQUFRLGtCQUFJOztBQUN0QixnQkFBRyxDQUFDLE1BQU0sT0FBTixDQUFjLEtBQWQsQ0FBRCxFQUF1QjtBQUN0Qix1QkFBTyxRQUFRLE1BQVIsQ0FBZSxJQUFJLEtBQUosQ0FBVSxxQ0FBVixDQUFmLENBQVAsQ0FEc0I7YUFBMUI7QUFHQSxnQkFBSSxPQUFPLEtBQUssS0FBTCxDQUpXO0FBS3RCLGdCQUFHLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDakIsdUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsT0FBTyxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQVAsRUFBbEIsQ0FBUCxDQURpQjthQUFyQjtBQUdBLG1CQUFPLEtBQUssR0FBTCxHQUFXLElBQVgsQ0FBZ0Isb0NBQW9CLEtBQXBCLENBQXZCLENBUnNCOzs7Ozs7Ozs7OztvQ0FnQmQsS0FBSztBQUNiLGdCQUFHLENBQUMsR0FBRCxFQUFNO0FBQ0wsdUJBQU8sUUFBUSxNQUFSLENBQWUsSUFBSSxLQUFKLENBQVUsc0VBQVYsQ0FBZixDQUFQLENBREs7YUFBVDtBQUdBLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxtQkFBbUIsR0FBbkIsQ0FBZCxFQUF1QyxNQUF2QyxFQUErQyxHQUEvQyxHQUFxRCxJQUFyRCxDQUEwRCxnQ0FBa0IsS0FBbEIsQ0FBakUsQ0FKYTs7Ozs7Ozs7Ozs7NENBWUcsS0FBSztBQUNyQixnQkFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLHVCQUFPLFFBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVLCtFQUFWLENBQWYsQ0FBUCxDQURLO2FBQVQ7QUFHQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsbUJBQW1CLEdBQW5CLENBQWQsRUFBdUMsR0FBdkMsRUFBUCxDQUpxQjs7Ozs7Ozs7Ozs7OytDQWFGLEtBQWdCO2dCQUFYLDhEQUFRLGlCQUFHOztBQUNuQyxnQkFBRyxDQUFDLEdBQUQsRUFBTTtBQUNMLHVCQUFPLFFBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVLDhFQUFWLENBQWYsQ0FBUCxDQURLO2FBQVQ7QUFHQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEVBQUUsT0FBTyxLQUFQLEVBQWMsT0FBTyxHQUFQLEVBQXRDLEVBQW9ELEdBQXBELEVBQVAsQ0FKbUM7Ozs7V0ExRDlCIiwiZmlsZSI6InBhZ2VQcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1BsdWd9IGZyb20gJy4vdXRpbGl0eS9wbHVnJztcbmltcG9ydCB7dXRpbGl0eX0gZnJvbSAnLi91dGlsaXR5L3V0aWxpdHknO1xuaW1wb3J0IHtwYWdlUHJvcGVydGllc01vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlUHJvcGVydGllcy5tb2RlbCc7XG5pbXBvcnQge3BhZ2VQcm9wZXJ0eU1vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlUHJvcGVydHkubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIG1hbmFnaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGEgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VQcm9wZXJ0eSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgUGFnZVByb3BlcnR5IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtpZD0naG9tZSddIFRoZSBudW1lcmljIHBhZ2UgSUQgb3IgdGhlIHBhZ2UgcGF0aC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCA9ICdob21lJywgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1dGlsaXR5LmdldFJlc291cmNlSWQoaWQsICdob21lJyk7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdwYWdlcycsIHRoaXMuX2lkLCAncHJvcGVydGllcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHBhZ2UuXG4gICAgICogQHBhcmFtIHtBcnJheX0gW25hbWVzPVtdXSAtIEFuIGFycmF5IG9mIG5hbWVzIHRvIGZldGNoIHNvIHRoYXQgdGhlIHJlc3VsdHMgYXJlIGZpbHRlcmVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlUHJvcGVydGllc01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VQcm9wZXJ0aWVzTW9kZWx9IG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBsaXN0aW5nIG9mIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgZ2V0UHJvcGVydGllcyhuYW1lcyA9IFtdKSB7XG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KG5hbWVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVGhlIHByb3BlcnR5IG5hbWVzIG11c3QgYmUgYW4gYXJyYXknKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBsdWcgPSB0aGlzLl9wbHVnO1xuICAgICAgICBpZihuYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwbHVnID0gcGx1Zy53aXRoUGFyYW1zKHsgbmFtZXM6IG5hbWVzLmpvaW4oJywnKSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGx1Zy5nZXQoKS50aGVuKHBhZ2VQcm9wZXJ0aWVzTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBzaW5nbGUgcGFnZSBwcm9wZXJ0eSBieSBwcm9wZXJ0eSBrZXkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGZldGNoLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlUHJvcGVydHlNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlUHJvcGVydHlNb2RlbH0gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHByb3BlcnR5IGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldFByb3BlcnR5KGtleSkge1xuICAgICAgICBpZigha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIGZldGNoIGEgcGFnZSBwcm9wZXJ0eSB3aXRob3V0IHByb3ZpZGluZyBhIHByb3BlcnR5IGtleScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdChlbmNvZGVVUklDb21wb25lbnQoa2V5KSwgJ2luZm8nKS5nZXQoKS50aGVuKHBhZ2VQcm9wZXJ0eU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIGEgcGFnZSBwcm9wZXJ0eS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZmV0Y2guXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyB0aGUgcHJvcGVydHkgY29udGVudHMuICBUaGUgcHJvcGVydHkgY2FuIGJlIG9mIGFueSB0eXBlIGFsbG93ZWQgYnkgdGhlIE1pbmRUb3VjaCBwcm9wZXJ0eSBzdWJzeXN0ZW0uXG4gICAgICovXG4gICAgZ2V0UHJvcGVydHlDb250ZW50cyhrZXkpIHtcbiAgICAgICAgaWYoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBmZXRjaCBhIHBhZ2UgcHJvcGVydHkgY29udGVudHMgd2l0aG91dCBwcm92aWRpbmcgYSBwcm9wZXJ0eSBrZXknKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoZW5jb2RlVVJJQ29tcG9uZW50KGtleSkpLmdldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGxpc3Rpbmcgb2YgcGFnZSBwcm9wZXJ0aWVzIGZvciBhIGhpZXJhcmNoeSBvZiBwYWdlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZmV0Y2guXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkZXB0aD0xXSAtIEJldHdlZW4gMCBhbmQgMiBsZXZlbHMgZGVlcCBpbiB0aGUgc2VhcmNoIGFyZSBhbGxvd2VkLiBJZiBkZXB0aCBpcyAxIG9yIDIsIHRoZSBuYW1lcyBhcmd1bWVudCBvbmx5IGNhbiBiZSBhIHNpbmdsZSBwcm9wZXJ0eSB0byBiZSBsb29rZWQgdXAsIGFuZCBubyB3aWxkY2FyZHMgYXJlIGFsbG93ZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyB0aGUgbGlzdGluZyBvZiB0aGUgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBnZXRQcm9wZXJ0eUZvckNoaWxkcmVuKGtleSwgZGVwdGggPSAxKSB7XG4gICAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gZmV0Y2ggcHJvcGVydGllcyBmb3IgY2hpbGRyZW4gd2l0aG91dCBwcm92aWRpbmcgYSBwcm9wZXJ0eSBrZXknKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcud2l0aFBhcmFtcyh7IGRlcHRoOiBkZXB0aCwgbmFtZXM6IGtleSB9KS5nZXQoKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=pageProperty.js.map
