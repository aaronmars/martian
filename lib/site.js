'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Site = undefined;

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


var _utility = require('./utility/utility');

var _stringUtility = require('./utility/stringUtility');

var _plug = require('./utility/plug');

var _search = require('./models/search.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _buildSearchConstraints(params) {
    var constraints = [];
    params.namespace = 'main';
    constraints.push('+namespace:' + _utility.utility.searchEscape(params.namespace));
    if ('path' in params) {
        var path = params.path;
        if (_stringUtility.stringUtility.startsWith(path, '/')) {
            path = _stringUtility.stringUtility.leftTrim(path, '/');
        }
        constraints.push('+path.ancestor:' + _utility.utility.searchEscape(path));
    }
    if ('tags' in params) {
        var tags = params.tags;
        if (typeof tags === 'string' && tags) {
            tags = tags.split(',');
        }
        tags.forEach(function (tag) {
            constraints.push('+tag:"' + _utility.utility.searchEscape(tag) + '"');
        });
    }
    if ('type' in params) {
        var types = params.type;
        if (typeof types === 'string' && types) {
            types = types.split(',');
        }
        types.forEach(function (type) {
            constraints.push('+type:' + _utility.utility.searchEscape(type));
        });
    }
    return '+(' + constraints.join(' ') + ')';
}

/**
 * A class for administering aspects of a MindTouch site.
 */

var Site = exports.Site = function () {

    /**
     * Construct a Site object.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function Site(settings) {
        _classCallCheck(this, Site);

        this.plug = new _plug.Plug(settings).at('@api', 'deki', 'site');
    }

    /**
     * Get the localized string corresponding to the supplied resource key.
     * @param {Object} options - Options to direct the fetching of the localized string.
     * @param {String} options.key - The key that identifies the string to fetch.
     * @param {String} [options.lang] - A language code used to fetch the string in a specific language.  If not supplied, the current system language will be used.
     * @returns {Promise.<String>} - A Promise that, when resolved, yields the fetched string.
     */


    _createClass(Site, [{
        key: 'getResourceString',
        value: function getResourceString() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!('key' in options)) {
                return Promise.reject('No resource key was supplied');
            }
            var locPlug = this.plug.at('localization', options.key);
            if ('lang' in options) {
                locPlug = locPlug.withParam('lang', options.lang);
            }
            return locPlug.get();
        }

        /**
         * Perform a search across the site.
         * This function takes a single parameter with the following options.
         * @param {Number} [page=1] The paginated page number offset to return.
         * @param {Number} [limit=10] - Limit search results to the specified number of items per paginated page.
         * @param {String} [tags=''] - A comma-separated list of tags to constrain search results to items containing one of the tags.
         * @param {String} [type=''] - Type or types to filter the results in a comma delimited list.  Valid types: `wiki`, `document`, `image`, `binary`
         * @param {String} [q=''] - Search keywords or advanced search syntax.
         * @param {String} [path=''] - A page path to constrain the search results to items located under the specified path.
         * @param {Boolean} [recommendations=true] - `true` to include recommended search results based off site configuration. `false` to suppress them.
         * @returns {Promise.<searchModel>} - A Promise that, when resolved, yields the results from the search in a {@link searchModel}.
         */

    }, {
        key: 'search',
        value: function search() {
            var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var _ref$page = _ref.page;
            var page = _ref$page === undefined ? 1 : _ref$page;
            var _ref$limit = _ref.limit;
            var limit = _ref$limit === undefined ? 10 : _ref$limit;
            var _ref$tags = _ref.tags;
            var tags = _ref$tags === undefined ? '' : _ref$tags;
            var _ref$type = _ref.type;
            var type = _ref$type === undefined ? '' : _ref$type;
            var _ref$q = _ref.q;
            var q = _ref$q === undefined ? '' : _ref$q;
            var _ref$path = _ref.path;
            var path = _ref$path === undefined ? '' : _ref$path;
            var _ref$recommendations = _ref.recommendations;
            var recommendations = _ref$recommendations === undefined ? true : _ref$recommendations;

            var constraint = {};
            if (path !== '') {
                constraint.path = path;
            }
            if (tags !== '') {
                constraint.tags = tags;
            }
            if (type !== '') {
                constraint.type = type;
            }
            var searchParams = {
                limit: limit,
                page: page,
                offset: parseInt(limit, 10) * (parseInt(page, 10) - 1),
                sortBy: '-date,-rank',
                q: q,
                summarypath: encodeURI(path),
                constraint: _buildSearchConstraints(constraint),
                recommendations: recommendations
            };
            return this.plug.at('query').withParams(searchParams).get().then(_search.searchModel.parse);
        }
    }]);

    return Site;
}();
//# sourceMappingURL=data:application/json;base64,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QUFnRjtpQ0FBNUUsS0FBNEU7Z0JBQXRFLGlDQUFPLGVBQStEOzhCQUEzRCxFQUEyRDtnQkFBeEQsMkJBQUksWUFBb0Q7aUNBQWhELEtBQWdEO2dCQUExQyxpQ0FBTyxlQUFtQzs0Q0FBL0IsZ0JBQStCO2dCQUEvQix1REFBa0IsNEJBQWE7O0FBQ3JJLGdCQUFJLGFBQWEsRUFBYixDQURpSTtBQUVySSxnQkFBRyxTQUFTLEVBQVQsRUFBYTtBQUNaLDJCQUFXLElBQVgsR0FBa0IsSUFBbEIsQ0FEWTthQUFoQjtBQUdBLGdCQUFHLFNBQVMsRUFBVCxFQUFhO0FBQ1osMkJBQVcsSUFBWCxHQUFrQixJQUFsQixDQURZO2FBQWhCO0FBR0EsZ0JBQUcsU0FBUyxFQUFULEVBQWE7QUFDWiwyQkFBVyxJQUFYLEdBQWtCLElBQWxCLENBRFk7YUFBaEI7QUFHQSxnQkFBSSxlQUFlO0FBQ2YsdUJBQU8sS0FBUDtBQUNBLHNCQUFNLElBQU47QUFDQSx3QkFBUyxTQUFTLEtBQVQsRUFBZ0IsRUFBaEIsS0FBdUIsU0FBUyxJQUFULEVBQWUsRUFBZixJQUFxQixDQUFyQixDQUF2QjtBQUNULHdCQUFRLGFBQVI7QUFDQSxtQkFBRyxDQUFIO0FBQ0EsNkJBQWEsVUFBVSxJQUFWLENBQWI7QUFDQSw0QkFBWSx3QkFBd0IsVUFBeEIsQ0FBWjtBQUNBLGlDQUFpQixlQUFqQjthQVJBLENBWGlJO0FBcUJySSxtQkFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsT0FBYixFQUFzQixVQUF0QixDQUFpQyxZQUFqQyxFQUErQyxHQUEvQyxHQUFxRCxJQUFyRCxDQUEwRCxvQkFBWSxLQUFaLENBQWpFLENBckJxSTs7OztXQXhDaEkiLCJmaWxlIjoic2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vdXRpbGl0eS91dGlsaXR5JztcbmltcG9ydCB7c3RyaW5nVXRpbGl0eX0gZnJvbSAnLi91dGlsaXR5L3N0cmluZ1V0aWxpdHknO1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL3V0aWxpdHkvcGx1Zyc7XG5pbXBvcnQge3NlYXJjaE1vZGVsfSBmcm9tICcuL21vZGVscy9zZWFyY2gubW9kZWwnO1xuZnVuY3Rpb24gX2J1aWxkU2VhcmNoQ29uc3RyYWludHMocGFyYW1zKSB7XG4gICAgbGV0IGNvbnN0cmFpbnRzID0gW107XG4gICAgcGFyYW1zLm5hbWVzcGFjZSA9ICdtYWluJztcbiAgICBjb25zdHJhaW50cy5wdXNoKCcrbmFtZXNwYWNlOicgKyB1dGlsaXR5LnNlYXJjaEVzY2FwZShwYXJhbXMubmFtZXNwYWNlKSk7XG4gICAgaWYoJ3BhdGgnIGluIHBhcmFtcykge1xuICAgICAgICBsZXQgcGF0aCA9IHBhcmFtcy5wYXRoO1xuICAgICAgICBpZihzdHJpbmdVdGlsaXR5LnN0YXJ0c1dpdGgocGF0aCwgJy8nKSkge1xuICAgICAgICAgICAgcGF0aCA9IHN0cmluZ1V0aWxpdHkubGVmdFRyaW0ocGF0aCwgJy8nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJhaW50cy5wdXNoKCcrcGF0aC5hbmNlc3RvcjonICsgdXRpbGl0eS5zZWFyY2hFc2NhcGUocGF0aCkpO1xuICAgIH1cbiAgICBpZigndGFncycgaW4gcGFyYW1zKSB7XG4gICAgICAgIHZhciB0YWdzID0gcGFyYW1zLnRhZ3M7XG4gICAgICAgIGlmKHR5cGVvZiB0YWdzID09PSAnc3RyaW5nJyAmJiAodGFncykpIHtcbiAgICAgICAgICAgIHRhZ3MgPSB0YWdzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnB1c2goJyt0YWc6XCInICsgdXRpbGl0eS5zZWFyY2hFc2NhcGUodGFnKSArICdcIicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYoJ3R5cGUnIGluIHBhcmFtcykge1xuICAgICAgICB2YXIgdHlwZXMgPSBwYXJhbXMudHlwZTtcbiAgICAgICAgaWYodHlwZW9mIHR5cGVzID09PSAnc3RyaW5nJyAmJiAodHlwZXMpKSB7XG4gICAgICAgICAgICB0eXBlcyA9IHR5cGVzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3RyYWludHMucHVzaCgnK3R5cGU6JyArIHV0aWxpdHkuc2VhcmNoRXNjYXBlKHR5cGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAnKygnICsgY29uc3RyYWludHMuam9pbignICcpICsgJyknO1xufVxuXG4vKipcbiAqIEEgY2xhc3MgZm9yIGFkbWluaXN0ZXJpbmcgYXNwZWN0cyBvZiBhIE1pbmRUb3VjaCBzaXRlLlxuICovXG5leHBvcnQgY2xhc3MgU2l0ZSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBTaXRlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnBsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdzaXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhbGl6ZWQgc3RyaW5nIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHN1cHBsaWVkIHJlc291cmNlIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gZGlyZWN0IHRoZSBmZXRjaGluZyBvZiB0aGUgbG9jYWxpemVkIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXkgLSBUaGUga2V5IHRoYXQgaWRlbnRpZmllcyB0aGUgc3RyaW5nIHRvIGZldGNoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sYW5nXSAtIEEgbGFuZ3VhZ2UgY29kZSB1c2VkIHRvIGZldGNoIHRoZSBzdHJpbmcgaW4gYSBzcGVjaWZpYyBsYW5ndWFnZS4gIElmIG5vdCBzdXBwbGllZCwgdGhlIGN1cnJlbnQgc3lzdGVtIGxhbmd1YWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48U3RyaW5nPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIHRoZSBmZXRjaGVkIHN0cmluZy5cbiAgICAgKi9cbiAgICBnZXRSZXNvdXJjZVN0cmluZyhvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYoISgna2V5JyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyByZXNvdXJjZSBrZXkgd2FzIHN1cHBsaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvY1BsdWcgPSB0aGlzLnBsdWcuYXQoJ2xvY2FsaXphdGlvbicsIG9wdGlvbnMua2V5KTtcbiAgICAgICAgaWYoJ2xhbmcnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxvY1BsdWcgPSBsb2NQbHVnLndpdGhQYXJhbSgnbGFuZycsIG9wdGlvbnMubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY1BsdWcuZ2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBhIHNlYXJjaCBhY3Jvc3MgdGhlIHNpdGUuXG4gICAgICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBwYXJhbWV0ZXIgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwYWdlPTFdIFRoZSBwYWdpbmF0ZWQgcGFnZSBudW1iZXIgb2Zmc2V0IHRvIHJldHVybi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2xpbWl0PTEwXSAtIExpbWl0IHNlYXJjaCByZXN1bHRzIHRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdpbmF0ZWQgcGFnZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3RhZ3M9JyddIC0gQSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB0YWdzIHRvIGNvbnN0cmFpbiBzZWFyY2ggcmVzdWx0cyB0byBpdGVtcyBjb250YWluaW5nIG9uZSBvZiB0aGUgdGFncy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3R5cGU9JyddIC0gVHlwZSBvciB0eXBlcyB0byBmaWx0ZXIgdGhlIHJlc3VsdHMgaW4gYSBjb21tYSBkZWxpbWl0ZWQgbGlzdC4gIFZhbGlkIHR5cGVzOiBgd2lraWAsIGBkb2N1bWVudGAsIGBpbWFnZWAsIGBiaW5hcnlgXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtxPScnXSAtIFNlYXJjaCBrZXl3b3JkcyBvciBhZHZhbmNlZCBzZWFyY2ggc3ludGF4LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbcGF0aD0nJ10gLSBBIHBhZ2UgcGF0aCB0byBjb25zdHJhaW4gdGhlIHNlYXJjaCByZXN1bHRzIHRvIGl0ZW1zIGxvY2F0ZWQgdW5kZXIgdGhlIHNwZWNpZmllZCBwYXRoLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlY29tbWVuZGF0aW9ucz10cnVlXSAtIGB0cnVlYCB0byBpbmNsdWRlIHJlY29tbWVuZGVkIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9mZiBzaXRlIGNvbmZpZ3VyYXRpb24uIGBmYWxzZWAgdG8gc3VwcHJlc3MgdGhlbS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48c2VhcmNoTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIHJlc3VsdHMgZnJvbSB0aGUgc2VhcmNoIGluIGEge0BsaW5rIHNlYXJjaE1vZGVsfS5cbiAgICAgKi9cbiAgICBzZWFyY2goeyBwYWdlOiBwYWdlID0gMSwgbGltaXQ6IGxpbWl0ID0gMTAsIHRhZ3M6IHRhZ3MgPSAnJywgdHlwZTogdHlwZSA9ICcnLCBxOiBxID0gJycsIHBhdGg6IHBhdGggPSAnJywgcmVjb21tZW5kYXRpb25zID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IGNvbnN0cmFpbnQgPSB7fTtcbiAgICAgICAgaWYocGF0aCAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucGF0aCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGFncyAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQudGFncyA9IHRhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXJjaFBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICBvZmZzZXQ6IChwYXJzZUludChsaW1pdCwgMTApICogKHBhcnNlSW50KHBhZ2UsIDEwKSAtIDEpKSxcbiAgICAgICAgICAgIHNvcnRCeTogJy1kYXRlLC1yYW5rJyxcbiAgICAgICAgICAgIHE6IHEsXG4gICAgICAgICAgICBzdW1tYXJ5cGF0aDogZW5jb2RlVVJJKHBhdGgpLFxuICAgICAgICAgICAgY29uc3RyYWludDogX2J1aWxkU2VhcmNoQ29uc3RyYWludHMoY29uc3RyYWludCksXG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbnM6IHJlY29tbWVuZGF0aW9uc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCdxdWVyeScpLndpdGhQYXJhbXMoc2VhcmNoUGFyYW1zKS5nZXQoKS50aGVuKHNlYXJjaE1vZGVsLnBhcnNlKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=site.js.map
