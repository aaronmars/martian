'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plug = require('./lib/plug');

var _utility = require('./lib/utility');

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
//# sourceMappingURL=data:application/json;base64,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QURZOzs7O1dBcEhQIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL2xpYi9wbHVnJztcbmltcG9ydCB7dXRpbGl0eX0gZnJvbSAnLi9saWIvdXRpbGl0eSc7XG5pbXBvcnQge1BhZ2VCYXNlfSBmcm9tICcuL3BhZ2VCYXNlJztcbmltcG9ydCB7cGFnZU1vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlLm1vZGVsJztcbmltcG9ydCB7c3VicGFnZXNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvc3VicGFnZXMubW9kZWwnO1xuaW1wb3J0IHtwYWdlQ29udGVudHNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZUNvbnRlbnRzLm1vZGVsJztcbmltcG9ydCB7cGFnZVRyZWVNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZVRyZWUubW9kZWwnO1xuaW1wb3J0IHtwYWdlUmF0aW5nTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VSYXRpbmcubW9kZWwnO1xuaW1wb3J0IHtwYWdlTW92ZU1vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlTW92ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgbWFuYWdpbmcgYSBwdWJsaXNoZWQgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlQmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgUGFnZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtpZD0naG9tZSddIFRoZSBudW1lcmljIHBhZ2UgSUQgb3IgdGhlIHBhZ2UgcGF0aC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCA9ICdob21lJywgc2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgICAgICB0aGlzLl9wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAncGFnZXMnLCB0aGlzLl9pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYmFzaWMgcGFnZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gZGlyZWN0IHRoZSBBUEkgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VNb2RlbH0gY29udGFpbmluZyB0aGUgYmFzaWMgcGFnZSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRJbmZvKHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIGxldCBpbmZvUGFyYW1zID0geyBleGNsdWRlOiAncmV2aXNpb24nIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBpbmZvUGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdpbmZvJykud2l0aFBhcmFtcyhpbmZvUGFyYW1zKS5nZXQoKS50aGVuKHBhZ2VNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzdWJwYWdlcyBvZiB0aGUgcGFnZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gLSBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gZGlyZWN0IHRoZSBBUEkgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48c3VicGFnZXNNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBzdWJwYWdlc01vZGVsfSBjb250YWluaW5nIHRoZSBiYXNpYyBwYWdlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldFN1YnBhZ2VzKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnc3VicGFnZXMnKS53aXRoUGFyYW1zKHBhcmFtcykuZ2V0KCkudGhlbihzdWJwYWdlc01vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBoaWVyYXJjaHkgdHJlZSBiYXNlZCBvbiB0aGUgY3VycmVudCBwYWdlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSAtIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBkaXJlY3QgdGhlIEFQSSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlVHJlZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VUcmVlTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGJhc2ljIHBhZ2UgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0VHJlZShwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ3RyZWUnKS53aXRoUGFyYW1zKHBhcmFtcykuZ2V0KCkudGhlbihwYWdlVHJlZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhpZXJhcmNoaWNhbCBsaXN0IG9mIHBhZ2VzIElEcyBmcm9tIHRoZSBjdXJyZW50IHBhZ2UgdG8gdGhlIGhvbWUgcGFnZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXJyYXk+fSAtIFRoZSBhcnJheSBvZiBoaWVyYXJjaGljYWwgcGFnZSBJRHMuXG4gICAgICovXG4gICAgZ2V0VHJlZUlkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ3RyZWUnKS53aXRoUGFyYW0oJ2Zvcm1hdCcsICdpZHMnKS5nZXQoKS50aGVuKChpZFN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlkU3RyaW5nLnNwbGl0KCcsJykubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBudW1JZCA9IHBhcnNlSW50KGlkLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYoaXNOYU4obnVtSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIHRoZSB0cmVlIElEcy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bUlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJhdGluZyBpbmZvcm1hdGlvbiBmb3IgdGhlIHBhZ2UuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHBhZ2VSYXRpbmdNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlUmF0aW5nTW9kZWx9IGNvbnRhaW5pbmcgdGhlIHJhdGluZyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRSYXRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdyYXRpbmdzJykuZ2V0KCkudGhlbihwYWdlUmF0aW5nTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcmF0aW5nIGZvciB0aGUgcGFnZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3JhdGluZz0nJ10gLSBUaGUgbmV3IHJhdGluZyBmb3IgdGhlIHBhZ2UuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvbGRSYXRpbmc9JyddIC0gVGhlIG9sZCByYXRpbmcgZm9yIHRoZSBwYWdlIHRoYXQgaXMgYmVpbmcgcmVwbGFjZWQgYnkge0BzZWUgcmF0aW5nfS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZVJhdGluZ01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VSYXRpbmdNb2RlbH0gY29udGFpbmluZyB0aGUgbmV3IHJhdGluZyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICByYXRlKHJhdGluZyA9ICcnLCBvbGRSYXRpbmcgPSAnJykge1xuICAgICAgICByYXRpbmcgPSByYXRpbmcudG9TdHJpbmcoKTtcbiAgICAgICAgb2xkUmF0aW5nID0gb2xkUmF0aW5nLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKHJhdGluZyAhPT0gJzEnICYmIHJhdGluZyAhPT0gJzAnICYmIHJhdGluZyAhPT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByYXRpbmcgc3VwcGxpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvbGRSYXRpbmcgIT09ICcxJyAmJiBvbGRSYXRpbmcgIT09ICcwJyAmJiBvbGRSYXRpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmF0aW5nIHN1cHBsaWVkIGZvciB0aGUgb2xkIHJhdGluZycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdyYXRpbmdzJykud2l0aFBhcmFtcyh7IHNjb3JlOiByYXRpbmcsIHByZXZpb3VzU2NvcmU6IG9sZFJhdGluZyB9KS5wb3N0KG51bGwsIHV0aWxpdHkudGV4dFJlcXVlc3RUeXBlKS50aGVuKHBhZ2VSYXRpbmdNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIE1pbmRUb3VjaCB0ZW1wbGF0ZSByZW5kZXJlZCBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudCBwYWdlLCBhcyBIVE1MLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIC0gVGhlIHRlbXBsYXRlIHBhdGguXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGRpcmVjdCB0aGUgQVBJIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHBhZ2VDb250ZW50c01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIHRoZSByZW5kZXJlZCBIVE1MIHdpdGhpbiBhIHtAbGluayBwYWdlQ29udGVudHNNb2RlbH0uXG4gICAgICovXG4gICAgZ2V0SHRtbFRlbXBsYXRlKHBhdGgsIHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHBhcmFtcy5wYWdlaWQgPSB0aGlzLl9pZDtcblxuICAgICAgICAvLyBEb3VibGUtVVJMLWVuY29kZSB0aGUgcGF0aCBhbmQgYWRkICc9JyB0byB0aGUgYmVnaW5uaW5nLiAgVGhpcyBtYWtlc1xuICAgICAgICAvLyAgaXQgYSBwcm9wZXIgcGFnZSBJRCB0byBiZSB1c2VkIGluIGEgVVJJIHNlZ21lbnQuXG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhdGggPSAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpKTtcbiAgICAgICAgbGV0IGNvbnRlbnRzUGx1ZyA9IG5ldyBQbHVnKCkuYXQoJ0BhcGknLCAnZGVraScsICdwYWdlcycsIHRlbXBsYXRlUGF0aCwgJ2NvbnRlbnRzJykud2l0aFBhcmFtcyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gY29udGVudHNQbHVnLmdldCgpLnRoZW4ocGFnZUNvbnRlbnRzTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwYWdlIHRvIGEgbmV3IGxvY2F0aW9uIGluIHRoZSBoaWVyYXJjaHkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIC0gQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGRpcmVjdCB0aGUgQVBJIHJlcXVlc3QuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHBhZ2VNb3ZlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZU1vdmVNb2RlbH0gY29udGFpbmluZyBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIG1vdmUgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIG1vdmUocGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ21vdmUnKS53aXRoUGFyYW1zKHBhcmFtcykucG9zdChudWxsLCAndGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOCcpLnRoZW4ocGFnZU1vdmVNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNpbmcgdGhlIGN1cnJlbnQgcGFnZSwgYWN0aXZhdGVzIGEgZHJhZnQ7IGNvcHlpbmcgdGdoZSBwYWdlJ3MgY29udGVudCBhbmQgYXR0YWNobWVudHMuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPHBhZ2VNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlTW9kZWx9IGNvbnRhaW5pbmcgdGhlIHBhZ2UgaW5mb3JtYXRpb24gZm9sbG93aW5nIHRoZSBhY3RpdmF0aW9uLlxuICAgICAqL1xuICAgIGFjdGl2YXRlRHJhZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdhY3RpdmF0ZS1kcmFmdCcpLnBvc3QoKS50aGVuKHBhZ2VNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=page.js.map
