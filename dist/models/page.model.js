'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageModel = undefined;

var _modelHelper = require('./modelHelper');

var _pageRating = require('./pageRating.model');

var _user = require('./user.model');

var pageModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            id: _modelHelper.modelHelper.getInt(obj['@id']),
            title: obj.title,
            uriUi: obj['uri.ui']
        };
        _modelHelper.modelHelper.addIfDefined(obj['@href'], 'href', parsed);
        _modelHelper.modelHelper.addIfDefined(obj['@state'], 'state', parsed);
        _modelHelper.modelHelper.addIfDefined(obj['@draft.state'], 'draftState', parsed);
        _modelHelper.modelHelper.addIfDefined(obj.article, 'article', parsed);
        _modelHelper.modelHelper.addIfDefined(obj.language, 'language', parsed);
        _modelHelper.modelHelper.addIfDefined(obj.namespace, 'namespace', parsed);
        _modelHelper.modelHelper.addIfDefined(obj['language.effective'], 'languageEffective', parsed);
        _modelHelper.modelHelper.addIfDefined(obj.timeuuid, 'timeuuid', parsed);
        if ('path' in obj) {
            parsed.path = _modelHelper.modelHelper.getString(obj.path);
        }
        if ('@revision' in obj) {
            parsed.revision = _modelHelper.modelHelper.getInt(obj['@revision']);
        }
        if ('date.created' in obj) {
            parsed.dateCreated = _modelHelper.modelHelper.getDate(obj['date.created']);
        }
        if ('@deleted' in obj) {
            parsed.deleted = _modelHelper.modelHelper.getBool(obj['@deleted']);
        }
        if ('@publish' in obj) {
            parsed.publish = _modelHelper.modelHelper.getBool(obj['@publish']);
        }
        if ('@unpublish' in obj) {
            parsed.unpublish = _modelHelper.modelHelper.getBool(obj['@unpublish']);
        }
        if ('@deactivate' in obj) {
            parsed.deactivate = _modelHelper.modelHelper.getBool(obj['@deactivate']);
        }
        if ('@virtual' in obj) {
            parsed.virtual = _modelHelper.modelHelper.getBool(obj['@virtual']);
        }
        if ('date.modified' in obj) {
            parsed.dateModified = _modelHelper.modelHelper.getDate(obj['date.modified']);
        }
        if ('date.edited' in obj) {
            parsed.dateEdited = _modelHelper.modelHelper.getDate(obj['date.edited']);
        }
        if ('page.parent' in obj) {
            parsed.pageParent = pageModel._getParents(obj['page.parent']);
        }
        if ('rating' in obj) {
            parsed.rating = _pageRating.pageRatingModel.parse(obj.rating);
        }
        if ('user.author' in obj) {
            parsed.userAuthor = _user.userModel.parse(obj['user.author']);
        }

        // TODO: Parse obj.files if defined
        // TODO: Parse obj.content if defined
        // TODO: Parse obj.properties if defined
        // TODO: Parse obj['user.createdby'] if defined

        // Only parse subpages if the property exists, and it has a 'page'
        //  sub-property.
        if ('subpages' in obj && typeof obj.subpages !== 'string' && 'page' in obj.subpages) {
            parsed.subpages = pageModel._getSubpages(obj.subpages);
        }
        return parsed;
    },
    _getParents: function _getParents(parent) {
        return pageModel.parse(parent);
    },
    _getSubpages: function _getSubpages(subpages) {
        var pageDef = subpages.page;
        var parsed = [];
        pageDef = _modelHelper.modelHelper.getArray(pageDef);
        pageDef.forEach(function (sp) {
            parsed.push(pageModel.parse(sp));
        });
        return parsed;
    }
}; /**
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

exports.pageModel = pageModel;
//# sourceMappingURL=data:application/json;base64,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KipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge3BhZ2VSYXRpbmdNb2RlbH0gZnJvbSAnLi9wYWdlUmF0aW5nLm1vZGVsJztcbmltcG9ydCB7dXNlck1vZGVsfSBmcm9tICcuL3VzZXIubW9kZWwnO1xubGV0IHBhZ2VNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGlkOiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAaWQnXSksXG4gICAgICAgICAgICB0aXRsZTogb2JqLnRpdGxlLFxuICAgICAgICAgICAgdXJpVWk6IG9ialsndXJpLnVpJ11cbiAgICAgICAgfTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9ialsnQGhyZWYnXSwgJ2hyZWYnLCBwYXJzZWQpO1xuICAgICAgICBtb2RlbEhlbHBlci5hZGRJZkRlZmluZWQob2JqWydAc3RhdGUnXSwgJ3N0YXRlJywgcGFyc2VkKTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9ialsnQGRyYWZ0LnN0YXRlJ10sICdkcmFmdFN0YXRlJywgcGFyc2VkKTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9iai5hcnRpY2xlLCAnYXJ0aWNsZScsIHBhcnNlZCk7XG4gICAgICAgIG1vZGVsSGVscGVyLmFkZElmRGVmaW5lZChvYmoubGFuZ3VhZ2UsICdsYW5ndWFnZScsIHBhcnNlZCk7XG4gICAgICAgIG1vZGVsSGVscGVyLmFkZElmRGVmaW5lZChvYmoubmFtZXNwYWNlLCAnbmFtZXNwYWNlJywgcGFyc2VkKTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9ialsnbGFuZ3VhZ2UuZWZmZWN0aXZlJ10sICdsYW5ndWFnZUVmZmVjdGl2ZScsIHBhcnNlZCk7XG4gICAgICAgIG1vZGVsSGVscGVyLmFkZElmRGVmaW5lZChvYmoudGltZXV1aWQsICd0aW1ldXVpZCcsIHBhcnNlZCk7XG4gICAgICAgIGlmKCdwYXRoJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRoID0gbW9kZWxIZWxwZXIuZ2V0U3RyaW5nKG9iai5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZignQHJldmlzaW9uJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5yZXZpc2lvbiA9IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0ByZXZpc2lvbiddKTtcbiAgICAgICAgfVxuICAgICAgICBpZignZGF0ZS5jcmVhdGVkJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5kYXRlQ3JlYXRlZCA9IG1vZGVsSGVscGVyLmdldERhdGUob2JqWydkYXRlLmNyZWF0ZWQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ0BkZWxldGVkJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5kZWxldGVkID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ0BkZWxldGVkJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdAcHVibGlzaCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVibGlzaCA9IG1vZGVsSGVscGVyLmdldEJvb2wob2JqWydAcHVibGlzaCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZignQHVucHVibGlzaCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQudW5wdWJsaXNoID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ0B1bnB1Ymxpc2gnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ0BkZWFjdGl2YXRlJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5kZWFjdGl2YXRlID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ0BkZWFjdGl2YXRlJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdAdmlydHVhbCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQudmlydHVhbCA9IG1vZGVsSGVscGVyLmdldEJvb2wob2JqWydAdmlydHVhbCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZignZGF0ZS5tb2RpZmllZCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQuZGF0ZU1vZGlmaWVkID0gbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ2RhdGUubW9kaWZpZWQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ2RhdGUuZWRpdGVkJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5kYXRlRWRpdGVkID0gbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ2RhdGUuZWRpdGVkJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdwYWdlLnBhcmVudCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQucGFnZVBhcmVudCA9IHBhZ2VNb2RlbC5fZ2V0UGFyZW50cyhvYmpbJ3BhZ2UucGFyZW50J10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdyYXRpbmcnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnJhdGluZyA9IHBhZ2VSYXRpbmdNb2RlbC5wYXJzZShvYmoucmF0aW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZigndXNlci5hdXRob3InIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnVzZXJBdXRob3IgPSB1c2VyTW9kZWwucGFyc2Uob2JqWyd1c2VyLmF1dGhvciddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IFBhcnNlIG9iai5maWxlcyBpZiBkZWZpbmVkXG4gICAgICAgIC8vIFRPRE86IFBhcnNlIG9iai5jb250ZW50IGlmIGRlZmluZWRcbiAgICAgICAgLy8gVE9ETzogUGFyc2Ugb2JqLnByb3BlcnRpZXMgaWYgZGVmaW5lZFxuICAgICAgICAvLyBUT0RPOiBQYXJzZSBvYmpbJ3VzZXIuY3JlYXRlZGJ5J10gaWYgZGVmaW5lZFxuXG4gICAgICAgIC8vIE9ubHkgcGFyc2Ugc3VicGFnZXMgaWYgdGhlIHByb3BlcnR5IGV4aXN0cywgYW5kIGl0IGhhcyBhICdwYWdlJ1xuICAgICAgICAvLyAgc3ViLXByb3BlcnR5LlxuICAgICAgICBpZignc3VicGFnZXMnIGluIG9iaiAmJiB0eXBlb2Ygb2JqLnN1YnBhZ2VzICE9PSAnc3RyaW5nJyAmJiAncGFnZScgaW4gb2JqLnN1YnBhZ2VzKSB7XG4gICAgICAgICAgICBwYXJzZWQuc3VicGFnZXMgPSBwYWdlTW9kZWwuX2dldFN1YnBhZ2VzKG9iai5zdWJwYWdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9LFxuICAgIF9nZXRQYXJlbnRzKHBhcmVudCkge1xuICAgICAgICByZXR1cm4gcGFnZU1vZGVsLnBhcnNlKHBhcmVudCk7XG4gICAgfSxcbiAgICBfZ2V0U3VicGFnZXMoc3VicGFnZXMpIHtcbiAgICAgICAgbGV0IHBhZ2VEZWYgPSBzdWJwYWdlcy5wYWdlO1xuICAgICAgICBsZXQgcGFyc2VkID0gW107XG4gICAgICAgIHBhZ2VEZWYgPSBtb2RlbEhlbHBlci5nZXRBcnJheShwYWdlRGVmKTtcbiAgICAgICAgcGFnZURlZi5mb3JFYWNoKChzcCkgPT4ge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2gocGFnZU1vZGVsLnBhcnNlKHNwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbn07XG5leHBvcnQge3BhZ2VNb2RlbH07XG4iXX0=
//# sourceMappingURL=page.model.js.map
