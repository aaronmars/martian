'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageHierarchy = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var _page = require('./models/page.model');

var _subpages = require('./models/subpages.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for fetching hierarchy information.
 */

var PageHierarchy = exports.PageHierarchy = function () {

    /**
     * Construct a new PageHierarchy object.
     * @param {Array} [articleTypes=[]] - An array of article types to filter by when fetching pages in the hierarchy.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function PageHierarchy() {
        var articleTypes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var settings = arguments[1];

        _classCallCheck(this, PageHierarchy);

        this.filterByArticleTypes = articleTypes;
        this._plug = new _plug.Plug(settings).at('@api', 'deki', 'pages');
    }

    /**
     * Get the root of the hierarchy based on the page with {@see id}.
     * @param {Number|String} [id='home'] - The identifier of the page to use as the hierarchy root.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the root page information.
     */


    _createClass(PageHierarchy, [{
        key: 'getRoot',
        value: function getRoot() {
            var id = arguments.length <= 0 || arguments[0] === undefined ? 'home' : arguments[0];

            return this._plug.at(id).get().then(_page.pageModel.parse);
        }

        /**
         * Get children of the page as an Array.
         * @param {Number|String} [id='home'] - The identifier of the page to use as the hierarchy root.
         * @returns {Promise.<Array>} - A Promise that, when resolved, yields the array of child pages of the identified root.
         */

    }, {
        key: 'getChildren',
        value: function getChildren() {
            var id = arguments.length <= 0 || arguments[0] === undefined ? 'home' : arguments[0];

            var subpagesPlug = this._plug.at(id, 'subpages');
            if (this.filterByArticleTypes.length > 0) {
                subpagesPlug = subpagesPlug.withParam('article', this.filterByArticleTypes.join(','));
            }
            return subpagesPlug.get().then(_subpages.subpagesModel.parse).then(function (spModel) {
                return spModel.pageSubpage || [];
            });
        }

        /**
         * Gets a root page and its children.
         * @param {Number|String} [id='home'] - The identifier of the page to use as the hierarchy root.
         * @param {Boolean} [asArray=true] - Force the result to be wrapped as an Array.
         * @returns {Promise.<Array|Object>} - A Promise that, when resolved, yields an Object or Array, depending on the value of {@see asArray}.
         */

    }, {
        key: 'getRootAndChildren',
        value: function getRootAndChildren(id) {
            var asArray = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            return Promise.all([this.getRoot(id), this.getChildren(id)]).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var root = _ref2[0];
                var children = _ref2[1];

                root.subpages = children.length > 0;
                if (asArray) {
                    root = [root];
                }
                return root;
            });
        }
    }]);

    return PageHierarchy;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VIaWVyYXJjaHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS2E7Ozs7Ozs7O0FBT1QsYUFQUyxhQU9ULEdBQXlDO1lBQTdCLHFFQUFlLGtCQUFjO1lBQVYsd0JBQVU7OzhCQVBoQyxlQU9nQzs7QUFDckMsYUFBSyxvQkFBTCxHQUE0QixZQUE1QixDQURxQztBQUVyQyxhQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsQ0FBYixDQUZxQztLQUF6Qzs7Ozs7Ozs7O2lCQVBTOztrQ0FpQlk7Z0JBQWIsMkRBQUssc0JBQVE7O0FBQ2pCLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxFQUFkLEVBQWtCLEdBQWxCLEdBQXdCLElBQXhCLENBQTZCLGdCQUFVLEtBQVYsQ0FBcEMsQ0FEaUI7Ozs7Ozs7Ozs7O3NDQVNJO2dCQUFiLDJEQUFLLHNCQUFROztBQUNyQixnQkFBSSxlQUFlLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxFQUFkLEVBQWtCLFVBQWxCLENBQWYsQ0FEaUI7QUFFckIsZ0JBQUcsS0FBSyxvQkFBTCxDQUEwQixNQUExQixHQUFtQyxDQUFuQyxFQUFzQztBQUNyQywrQkFBZSxhQUFhLFNBQWIsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixHQUEvQixDQUFsQyxDQUFmLENBRHFDO2FBQXpDO0FBR0EsbUJBQU8sYUFBYSxHQUFiLEdBQW1CLElBQW5CLENBQXdCLHdCQUFjLEtBQWQsQ0FBeEIsQ0FBNkMsSUFBN0MsQ0FBa0QsVUFBQyxPQUFELEVBQWE7QUFDbEUsdUJBQU8sUUFBUSxXQUFSLElBQXVCLEVBQXZCLENBRDJEO2FBQWIsQ0FBekQsQ0FMcUI7Ozs7Ozs7Ozs7OzsyQ0FnQk4sSUFBb0I7Z0JBQWhCLGdFQUFVLG9CQUFNOztBQUNuQyxtQkFBTyxRQUFRLEdBQVIsQ0FBWSxDQUNmLEtBQUssT0FBTCxDQUFhLEVBQWIsQ0FEZSxFQUVmLEtBQUssV0FBTCxDQUFpQixFQUFqQixDQUZlLENBQVosRUFHSixJQUhJLENBR0MsZ0JBQXdCOzs7b0JBQXJCLGdCQUFxQjtvQkFBZixvQkFBZTs7QUFDNUIscUJBQUssUUFBTCxHQUFnQixTQUFTLE1BQVQsR0FBa0IsQ0FBbEIsQ0FEWTtBQUU1QixvQkFBRyxPQUFILEVBQVk7QUFDUiwyQkFBTyxDQUFFLElBQUYsQ0FBUCxDQURRO2lCQUFaO0FBR0EsdUJBQU8sSUFBUCxDQUw0QjthQUF4QixDQUhSLENBRG1DOzs7O1dBMUM5QiIsImZpbGUiOiJwYWdlSGllcmFyY2h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi91dGlsaXR5L3BsdWcnO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHtzdWJwYWdlc01vZGVsfSBmcm9tICcuL21vZGVscy9zdWJwYWdlcy5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgZmV0Y2hpbmcgaGllcmFyY2h5IGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgUGFnZUhpZXJhcmNoeSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgUGFnZUhpZXJhcmNoeSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2FydGljbGVUeXBlcz1bXV0gLSBBbiBhcnJheSBvZiBhcnRpY2xlIHR5cGVzIHRvIGZpbHRlciBieSB3aGVuIGZldGNoaW5nIHBhZ2VzIGluIHRoZSBoaWVyYXJjaHkuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJ0aWNsZVR5cGVzID0gW10sIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQnlBcnRpY2xlVHlwZXMgPSBhcnRpY2xlVHlwZXM7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdwYWdlcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcm9vdCBvZiB0aGUgaGllcmFyY2h5IGJhc2VkIG9uIHRoZSBwYWdlIHdpdGgge0BzZWUgaWR9LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW2lkPSdob21lJ10gLSBUaGUgaWRlbnRpZmllciBvZiB0aGUgcGFnZSB0byB1c2UgYXMgdGhlIGhpZXJhcmNoeSByb290LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZU1vZGVsfSBjb250YWluaW5nIHRoZSByb290IHBhZ2UgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0Um9vdChpZCA9ICdob21lJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdChpZCkuZ2V0KCkudGhlbihwYWdlTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjaGlsZHJlbiBvZiB0aGUgcGFnZSBhcyBhbiBBcnJheS5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtpZD0naG9tZSddIC0gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHBhZ2UgdG8gdXNlIGFzIHRoZSBoaWVyYXJjaHkgcm9vdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXJyYXk+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIGFycmF5IG9mIGNoaWxkIHBhZ2VzIG9mIHRoZSBpZGVudGlmaWVkIHJvb3QuXG4gICAgICovXG4gICAgZ2V0Q2hpbGRyZW4oaWQgPSAnaG9tZScpIHtcbiAgICAgICAgbGV0IHN1YnBhZ2VzUGx1ZyA9IHRoaXMuX3BsdWcuYXQoaWQsICdzdWJwYWdlcycpO1xuICAgICAgICBpZih0aGlzLmZpbHRlckJ5QXJ0aWNsZVR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHN1YnBhZ2VzUGx1ZyA9IHN1YnBhZ2VzUGx1Zy53aXRoUGFyYW0oJ2FydGljbGUnLCB0aGlzLmZpbHRlckJ5QXJ0aWNsZVR5cGVzLmpvaW4oJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnBhZ2VzUGx1Zy5nZXQoKS50aGVuKHN1YnBhZ2VzTW9kZWwucGFyc2UpLnRoZW4oKHNwTW9kZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzcE1vZGVsLnBhZ2VTdWJwYWdlIHx8IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcm9vdCBwYWdlIGFuZCBpdHMgY2hpbGRyZW4uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbaWQ9J2hvbWUnXSAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBwYWdlIHRvIHVzZSBhcyB0aGUgaGllcmFyY2h5IHJvb3QuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYXNBcnJheT10cnVlXSAtIEZvcmNlIHRoZSByZXN1bHQgdG8gYmUgd3JhcHBlZCBhcyBhbiBBcnJheS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXJyYXl8T2JqZWN0Pn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGFuIE9iamVjdCBvciBBcnJheSwgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB7QHNlZSBhc0FycmF5fS5cbiAgICAgKi9cbiAgICBnZXRSb290QW5kQ2hpbGRyZW4oaWQsIGFzQXJyYXkgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmdldFJvb3QoaWQpLFxuICAgICAgICAgICAgdGhpcy5nZXRDaGlsZHJlbihpZClcbiAgICAgICAgXSkudGhlbigoWyByb290LCBjaGlsZHJlbiBdKSA9PiB7XG4gICAgICAgICAgICByb290LnN1YnBhZ2VzID0gY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByb290ID0gWyByb290IF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=pageHierarchy.js.map
