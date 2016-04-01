'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

var _pageBase = require('./pageBase');

var _page = require('./models/page.model');

var _subpages = require('./models/subpages.model');

var _pageContents = require('./models/pageContents.model');

var _pageTree = require('./models/pageTree.model');

var _pageRating = require('./models/pageRating.model');

var _pageMove = require('./models/pageMove.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


/**
 * A class for managing a published page.
 */

var Page = exports.Page = function (_PageBase) {
    _inherits(Page, _PageBase);

    /**
     * Construct a new Page.
     * @param {Number|String} [id='home'] The numeric page ID or the page path.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function Page() {
        var id = arguments.length <= 0 || arguments[0] === undefined ? 'home' : arguments[0];
        var settings = arguments[1];

        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, id));

        _this._plug = new _plug.Plug(settings).at('@api', 'deki', 'pages', _this._id);
        return _this;
    }

    /**
     * Gets the basic page information.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the basic page information.
     */


    _createClass(Page, [{
        key: 'getInfo',
        value: function getInfo() {
            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var infoParams = { exclude: 'revision' };
            Object.keys(params).forEach(function (key) {
                infoParams[key] = params[key];
            });
            return this._plug.at('info').withParams(infoParams).get().then(_page.pageModel.parse);
        }

        /**
         * Get the subpages of the page.
         * @param {Object} [params] - Additional parameters to direct the API request.
         * @returns {Promise.<subpagesModel>} - A Promise that, when resolved, yields a {@link subpagesModel} containing the basic page information.
         */

    }, {
        key: 'getSubpages',
        value: function getSubpages(params) {
            return this._plug.at('subpages').withParams(params).get().then(_subpages.subpagesModel.parse);
        }

        /**
         * Get a hierarchy tree based on the current page.
         * @param {Object} [params] - Additional parameters to direct the API request.
         * @returns {Promise.<pageTreeModel>} - A Promise that, when resolved, yields a {@link pageTreeModel} containing the basic page information.
         */

    }, {
        key: 'getTree',
        value: function getTree(params) {
            return this._plug.at('tree').withParams(params).get().then(_pageTree.pageTreeModel.parse);
        }

        /**
         * Get the hierarchical list of pages IDs from the current page to the home page.
         * @returns {Promise.<Array>} - The array of hierarchical page IDs.
         */

    }, {
        key: 'getTreeIds',
        value: function getTreeIds() {
            return this._plug.at('tree').withParam('format', 'ids').get().then(function (idString) {
                return idString.split(',').map(function (id) {
                    var numId = parseInt(id, 10);
                    if (isNaN(numId)) {
                        throw new Error('Unable to parse the tree IDs.');
                    }
                    return numId;
                });
            }).catch(function (e) {
                return Promise.reject({ message: e.message });
            });
        }

        /**
         * Gets the rating information for the page.
         * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the rating information.
         */

    }, {
        key: 'getRating',
        value: function getRating() {
            return this._plug.at('ratings').get().then(_pageRating.pageRatingModel.parse);
        }

        /**
         * Set the rating for the page.
         * @param {String} [rating=''] - The new rating for the page.
         * @param {String} [oldRating=''] - The old rating for the page that is being replaced by {@see rating}.
         * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the new rating information.
         */

    }, {
        key: 'rate',
        value: function rate() {
            var rating = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var oldRating = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

            rating = rating.toString();
            oldRating = oldRating.toString();
            if (rating !== '1' && rating !== '0' && rating !== '') {
                throw new Error('Invalid rating supplied');
            }
            if (oldRating !== '1' && oldRating !== '0' && oldRating !== '') {
                throw new Error('Invalid rating supplied for the old rating');
            }
            return this._plug.at('ratings').withParams({ score: rating, previousScore: oldRating }).post(null, _utility.utility.textRequestType).then(_pageRating.pageRatingModel.parse);
        }

        /**
         * Gets a MindTouch template rendered in the context of the current page, as HTML.
         * @param {String} path - The template path.
         * @param {Object} [params] - Additional parameters to direct the API request.
         * @returns {Promise.<pageContentsModel>} - A Promise that, when resolved, yields the rendered HTML within a {@link pageContentsModel}.
         */

    }, {
        key: 'getHtmlTemplate',
        value: function getHtmlTemplate(path) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            params.pageid = this._id;

            // Double-URL-encode the path and add '=' to the beginning.  This makes
            //  it a proper page ID to be used in a URI segment.
            var templatePath = '=' + encodeURIComponent(encodeURIComponent(path));
            var contentsPlug = new _plug.Plug().at('@api', 'deki', 'pages', templatePath, 'contents').withParams(params);
            return contentsPlug.get().then(_pageContents.pageContentsModel.parse);
        }

        /**
         * Move a page to a new location in the hierarchy.
         * @param {Object} [params] - Additional parameters to direct the API request.
         * @returns {Promise.<pageMoveModel>} - A Promise that, when resolved, yields a {@link pageMoveModel} containing information regarding the move operation.
         */

    }, {
        key: 'move',
        value: function move() {
            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return this._plug.at('move').withParams(params).post(null, 'text/plain; charset=utf-8').then(_pageMove.pageMoveModel.parse);
        }

        /**
         * Using the current page, activates a draft; copying tghe page's content and attachments.
         * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the page information following the activation.
         */

    }, {
        key: 'activateDraft',
        value: function activateDraft() {
            return this._plug.at('activate-draft').post().then(_page.pageModel.parse);
        }
    }]);

    return Page;
}(_pageBase.PageBase);
//# sourceMappingURL=data:application/json;base64,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QURZOzs7O1dBcEhQIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL3V0aWxpdHkvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vdXRpbGl0eS91dGlsaXR5JztcbmltcG9ydCB7UGFnZUJhc2V9IGZyb20gJy4vcGFnZUJhc2UnO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHtzdWJwYWdlc01vZGVsfSBmcm9tICcuL21vZGVscy9zdWJwYWdlcy5tb2RlbCc7XG5pbXBvcnQge3BhZ2VDb250ZW50c01vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlQ29udGVudHMubW9kZWwnO1xuaW1wb3J0IHtwYWdlVHJlZU1vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlVHJlZS5tb2RlbCc7XG5pbXBvcnQge3BhZ2VSYXRpbmdNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZVJhdGluZy5tb2RlbCc7XG5pbXBvcnQge3BhZ2VNb3ZlTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VNb3ZlLm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIGZvciBtYW5hZ2luZyBhIHB1Ymxpc2hlZCBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgUGFnZSBleHRlbmRzIFBhZ2VCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBQYWdlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW2lkPSdob21lJ10gVGhlIG51bWVyaWMgcGFnZSBJRCBvciB0aGUgcGFnZSBwYXRoLlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkID0gJ2hvbWUnLCBzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdwYWdlcycsIHRoaXMuX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBiYXNpYyBwYWdlIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBkaXJlY3QgdGhlIEFQSSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZU1vZGVsfSBjb250YWluaW5nIHRoZSBiYXNpYyBwYWdlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEluZm8ocGFyYW1zID0ge30pIHtcbiAgICAgICAgbGV0IGluZm9QYXJhbXMgPSB7IGV4Y2x1ZGU6ICdyZXZpc2lvbicgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGluZm9QYXJhbXNba2V5XSA9IHBhcmFtc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2luZm8nKS53aXRoUGFyYW1zKGluZm9QYXJhbXMpLmdldCgpLnRoZW4ocGFnZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN1YnBhZ2VzIG9mIHRoZSBwYWdlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBkaXJlY3QgdGhlIEFQSSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdWJwYWdlc01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHN1YnBhZ2VzTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGJhc2ljIHBhZ2UgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0U3VicGFnZXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdzdWJwYWdlcycpLndpdGhQYXJhbXMocGFyYW1zKS5nZXQoKS50aGVuKHN1YnBhZ2VzTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGhpZXJhcmNoeSB0cmVlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGRpcmVjdCB0aGUgQVBJIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHBhZ2VUcmVlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZVRyZWVNb2RlbH0gY29udGFpbmluZyB0aGUgYmFzaWMgcGFnZSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRUcmVlKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgndHJlZScpLndpdGhQYXJhbXMocGFyYW1zKS5nZXQoKS50aGVuKHBhZ2VUcmVlTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaGllcmFyY2hpY2FsIGxpc3Qgb2YgcGFnZXMgSURzIGZyb20gdGhlIGN1cnJlbnQgcGFnZSB0byB0aGUgaG9tZSBwYWdlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxBcnJheT59IC0gVGhlIGFycmF5IG9mIGhpZXJhcmNoaWNhbCBwYWdlIElEcy5cbiAgICAgKi9cbiAgICBnZXRUcmVlSWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgndHJlZScpLndpdGhQYXJhbSgnZm9ybWF0JywgJ2lkcycpLmdldCgpLnRoZW4oKGlkU3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWRTdHJpbmcuc3BsaXQoJywnKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG51bUlkID0gcGFyc2VJbnQoaWQsIDEwKTtcbiAgICAgICAgICAgICAgICBpZihpc05hTihudW1JZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgdGhlIHRyZWUgSURzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtSWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmF0aW5nIGluZm9ybWF0aW9uIGZvciB0aGUgcGFnZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZVJhdGluZ01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VSYXRpbmdNb2RlbH0gY29udGFpbmluZyB0aGUgcmF0aW5nIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldFJhdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ3JhdGluZ3MnKS5nZXQoKS50aGVuKHBhZ2VSYXRpbmdNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByYXRpbmcgZm9yIHRoZSBwYWdlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbcmF0aW5nPScnXSAtIFRoZSBuZXcgcmF0aW5nIGZvciB0aGUgcGFnZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29sZFJhdGluZz0nJ10gLSBUaGUgb2xkIHJhdGluZyBmb3IgdGhlIHBhZ2UgdGhhdCBpcyBiZWluZyByZXBsYWNlZCBieSB7QHNlZSByYXRpbmd9LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlUmF0aW5nTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZVJhdGluZ01vZGVsfSBjb250YWluaW5nIHRoZSBuZXcgcmF0aW5nIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJhdGUocmF0aW5nID0gJycsIG9sZFJhdGluZyA9ICcnKSB7XG4gICAgICAgIHJhdGluZyA9IHJhdGluZy50b1N0cmluZygpO1xuICAgICAgICBvbGRSYXRpbmcgPSBvbGRSYXRpbmcudG9TdHJpbmcoKTtcbiAgICAgICAgaWYocmF0aW5nICE9PSAnMScgJiYgcmF0aW5nICE9PSAnMCcgJiYgcmF0aW5nICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJhdGluZyBzdXBwbGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9sZFJhdGluZyAhPT0gJzEnICYmIG9sZFJhdGluZyAhPT0gJzAnICYmIG9sZFJhdGluZyAhPT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByYXRpbmcgc3VwcGxpZWQgZm9yIHRoZSBvbGQgcmF0aW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ3JhdGluZ3MnKS53aXRoUGFyYW1zKHsgc2NvcmU6IHJhdGluZywgcHJldmlvdXNTY29yZTogb2xkUmF0aW5nIH0pLnBvc3QobnVsbCwgdXRpbGl0eS50ZXh0UmVxdWVzdFR5cGUpLnRoZW4ocGFnZVJhdGluZ01vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgTWluZFRvdWNoIHRlbXBsYXRlIHJlbmRlcmVkIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IHBhZ2UsIGFzIEhUTUwuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggLSBUaGUgdGVtcGxhdGUgcGF0aC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gZGlyZWN0IHRoZSBBUEkgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZUNvbnRlbnRzTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIHJlbmRlcmVkIEhUTUwgd2l0aGluIGEge0BsaW5rIHBhZ2VDb250ZW50c01vZGVsfS5cbiAgICAgKi9cbiAgICBnZXRIdG1sVGVtcGxhdGUocGF0aCwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgcGFyYW1zLnBhZ2VpZCA9IHRoaXMuX2lkO1xuXG4gICAgICAgIC8vIERvdWJsZS1VUkwtZW5jb2RlIHRoZSBwYXRoIGFuZCBhZGQgJz0nIHRvIHRoZSBiZWdpbm5pbmcuICBUaGlzIG1ha2VzXG4gICAgICAgIC8vICBpdCBhIHByb3BlciBwYWdlIElEIHRvIGJlIHVzZWQgaW4gYSBVUkkgc2VnbWVudC5cbiAgICAgICAgbGV0IHRlbXBsYXRlUGF0aCA9ICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQocGF0aCkpO1xuICAgICAgICBsZXQgY29udGVudHNQbHVnID0gbmV3IFBsdWcoKS5hdCgnQGFwaScsICdkZWtpJywgJ3BhZ2VzJywgdGVtcGxhdGVQYXRoLCAnY29udGVudHMnKS53aXRoUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBjb250ZW50c1BsdWcuZ2V0KCkudGhlbihwYWdlQ29udGVudHNNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhIHBhZ2UgdG8gYSBuZXcgbG9jYXRpb24gaW4gdGhlIGhpZXJhcmNoeS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gZGlyZWN0IHRoZSBBUEkgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZU1vdmVNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlTW92ZU1vZGVsfSBjb250YWluaW5nIGluZm9ybWF0aW9uIHJlZ2FyZGluZyB0aGUgbW92ZSBvcGVyYXRpb24uXG4gICAgICovXG4gICAgbW92ZShwYXJhbXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnbW92ZScpLndpdGhQYXJhbXMocGFyYW1zKS5wb3N0KG51bGwsICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04JykudGhlbihwYWdlTW92ZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2luZyB0aGUgY3VycmVudCBwYWdlLCBhY3RpdmF0ZXMgYSBkcmFmdDsgY29weWluZyB0Z2hlIHBhZ2UncyBjb250ZW50IGFuZCBhdHRhY2htZW50cy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VNb2RlbH0gY29udGFpbmluZyB0aGUgcGFnZSBpbmZvcm1hdGlvbiBmb2xsb3dpbmcgdGhlIGFjdGl2YXRpb24uXG4gICAgICovXG4gICAgYWN0aXZhdGVEcmFmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2FjdGl2YXRlLWRyYWZ0JykucG9zdCgpLnRoZW4ocGFnZU1vZGVsLnBhcnNlKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=page.js.map
