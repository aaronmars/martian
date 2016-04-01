'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageBase = undefined;

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


var _utility = require('./lib/utility');

var _modelHelper = require('./models/modelHelper');

var _page = require('./models/page.model');

var _pageContents = require('./models/pageContents.model');

var _pageTags = require('./models/pageTags.model');

var _pageFiles = require('./models/pageFiles.model');

var _pageEdit = require('./models/pageEdit.model');

var _relatedPages = require('./models/relatedPages.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _handleVirtualPage(error) {
    if (error.errorCode === 404 && error.response && error.response['@virtual']) {
        return Promise.resolve(_page.pageModel.parse(error.response));
    }
    throw error;
}

var PageBase = exports.PageBase = function () {
    function PageBase(id) {
        _classCallCheck(this, PageBase);

        if (this.constructor.name === 'PageBase') {
            throw new TypeError('PageBase must not be constructed directly.  Use one of Page() or Draft()');
        }
        this._id = _utility.utility.getResourceId(id, 'home');
    }

    _createClass(PageBase, [{
        key: 'getFullInfo',
        value: function getFullInfo() {
            return this._plug.get().then(_page.pageModel.parse).catch(_handleVirtualPage);
        }
    }, {
        key: 'getContents',
        value: function getContents(params) {
            return this._plug.at('contents').withParams(params).get().then(_pageContents.pageContentsModel.parse);
        }
    }, {
        key: 'setContents',
        value: function setContents(contents) {
            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            if (typeof contents !== 'string') {
                return Promise.reject(new Error('Contents should be string.'));
            }
            var contentsParams = {
                edittime: 'now'
            };
            Object.keys(params).forEach(function (key) {
                contentsParams[key] = params[key];
            });
            return this._plug.at('contents').withParams(contentsParams).post(contents, 'text/plain; charset=utf-8').then(_pageEdit.pageEditModel.parse);
        }
    }, {
        key: 'getFiles',
        value: function getFiles() {
            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return this._plug.at('files').withParams(params).get().then(_pageFiles.pageFilesModel.parse);
        }
    }, {
        key: 'getOverview',
        value: function getOverview() {
            return this._plug.at('overview').get().then(JSON.parse).then(function (overview) {
                return Promise.resolve({ overview: _modelHelper.modelHelper.getString(overview) });
            }).catch(function () {
                return Promise.reject('Unable to parse the page overview response');
            });
        }
    }, {
        key: 'setOverview',
        value: function setOverview() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!('body' in options)) {
                return Promise.reject(new Error('No overview body was supplied'));
            }
            var request = '<overview>' + options.body + '</overview>';
            return this._plug.at('overview').put(request);
        }
    }, {
        key: 'getTags',
        value: function getTags() {
            return this._plug.at('tags').get().then(_pageTags.pageTagsModel.parse);
        }
    }, {
        key: 'getDiff',
        value: function getDiff() {
            throw new Error('Page.getDiff() is not implemented');
        }
    }, {
        key: 'getRelated',
        value: function getRelated() {
            return this._plug.at('related').get().then(_relatedPages.relatedPagesModel.parse);
        }
    }]);

    return PageBase;
}();
//# sourceMappingURL=data:application/json;base64,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QXNCO0FBQ3JCLHVCQUFPLFFBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVLCtCQUFWLENBQWYsQ0FBUCxDQURxQjthQUF6QjtBQUdBLGdCQUFJLHlCQUF1QixRQUFRLElBQVIsZ0JBQXZCLENBSmtCO0FBS3RCLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxVQUFkLEVBQTBCLEdBQTFCLENBQThCLE9BQTlCLENBQVAsQ0FMc0I7Ozs7a0NBT2hCO0FBQ04sbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLE1BQWQsRUFBc0IsR0FBdEIsR0FBNEIsSUFBNUIsQ0FBaUMsd0JBQWMsS0FBZCxDQUF4QyxDQURNOzs7O2tDQUdBO0FBQ04sa0JBQU0sSUFBSSxLQUFKLENBQVUsbUNBQVYsQ0FBTixDQURNOzs7O3FDQUdHO0FBQ1QsbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLFNBQWQsRUFBeUIsR0FBekIsR0FBK0IsSUFBL0IsQ0FBb0MsZ0NBQWtCLEtBQWxCLENBQTNDLENBRFM7Ozs7V0FoREoiLCJmaWxlIjoicGFnZUJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL2xpYi91dGlsaXR5JztcbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxzL21vZGVsSGVscGVyJztcbmltcG9ydCB7cGFnZU1vZGVsfSBmcm9tICcuL21vZGVscy9wYWdlLm1vZGVsJztcbmltcG9ydCB7cGFnZUNvbnRlbnRzTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VDb250ZW50cy5tb2RlbCc7XG5pbXBvcnQge3BhZ2VUYWdzTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VUYWdzLm1vZGVsJztcbmltcG9ydCB7cGFnZUZpbGVzTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VGaWxlcy5tb2RlbCc7XG5pbXBvcnQge3BhZ2VFZGl0TW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2VFZGl0Lm1vZGVsJztcbmltcG9ydCB7cmVsYXRlZFBhZ2VzTW9kZWx9IGZyb20gJy4vbW9kZWxzL3JlbGF0ZWRQYWdlcy5tb2RlbCc7XG5mdW5jdGlvbiBfaGFuZGxlVmlydHVhbFBhZ2UoZXJyb3IpIHtcbiAgICBpZihlcnJvci5lcnJvckNvZGUgPT09IDQwNCAmJiBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZVsnQHZpcnR1YWwnXSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhZ2VNb2RlbC5wYXJzZShlcnJvci5yZXNwb25zZSkpO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbn1cbmV4cG9ydCBjbGFzcyBQYWdlQmFzZSB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUGFnZUJhc2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYWdlQmFzZSBtdXN0IG5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS4gIFVzZSBvbmUgb2YgUGFnZSgpIG9yIERyYWZ0KCknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pZCA9IHV0aWxpdHkuZ2V0UmVzb3VyY2VJZChpZCwgJ2hvbWUnKTtcbiAgICB9XG4gICAgZ2V0RnVsbEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmdldCgpLnRoZW4ocGFnZU1vZGVsLnBhcnNlKS5jYXRjaChfaGFuZGxlVmlydHVhbFBhZ2UpO1xuICAgIH1cbiAgICBnZXRDb250ZW50cyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2NvbnRlbnRzJykud2l0aFBhcmFtcyhwYXJhbXMpLmdldCgpLnRoZW4ocGFnZUNvbnRlbnRzTW9kZWwucGFyc2UpO1xuICAgIH1cbiAgICBzZXRDb250ZW50cyhjb250ZW50cywgcGFyYW1zID0ge30pIHtcbiAgICAgICAgaWYodHlwZW9mIGNvbnRlbnRzICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ29udGVudHMgc2hvdWxkIGJlIHN0cmluZy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbnRlbnRzUGFyYW1zID0ge1xuICAgICAgICAgICAgZWRpdHRpbWU6ICdub3cnXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250ZW50c1BhcmFtc1trZXldID0gcGFyYW1zW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnY29udGVudHMnKS53aXRoUGFyYW1zKGNvbnRlbnRzUGFyYW1zKS5wb3N0KGNvbnRlbnRzLCAndGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOCcpLnRoZW4ocGFnZUVkaXRNb2RlbC5wYXJzZSk7XG4gICAgfVxuICAgIGdldEZpbGVzKHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdmaWxlcycpLndpdGhQYXJhbXMocGFyYW1zKS5nZXQoKS50aGVuKHBhZ2VGaWxlc01vZGVsLnBhcnNlKTtcbiAgICB9XG4gICAgZ2V0T3ZlcnZpZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdvdmVydmlldycpLmdldCgpLnRoZW4oSlNPTi5wYXJzZSkudGhlbigob3ZlcnZpZXcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBvdmVydmlldzogbW9kZWxIZWxwZXIuZ2V0U3RyaW5nKG92ZXJ2aWV3KSB9KTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVbmFibGUgdG8gcGFyc2UgdGhlIHBhZ2Ugb3ZlcnZpZXcgcmVzcG9uc2UnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldE92ZXJ2aWV3KG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZighKCdib2R5JyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTm8gb3ZlcnZpZXcgYm9keSB3YXMgc3VwcGxpZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcXVlc3QgPSBgPG92ZXJ2aWV3PiR7b3B0aW9ucy5ib2R5fTwvb3ZlcnZpZXc+YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ292ZXJ2aWV3JykucHV0KHJlcXVlc3QpO1xuICAgIH1cbiAgICBnZXRUYWdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgndGFncycpLmdldCgpLnRoZW4ocGFnZVRhZ3NNb2RlbC5wYXJzZSk7XG4gICAgfVxuICAgIGdldERpZmYoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGFnZS5nZXREaWZmKCkgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuICAgIGdldFJlbGF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdyZWxhdGVkJykuZ2V0KCkudGhlbihyZWxhdGVkUGFnZXNNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=pageBase.js.map
