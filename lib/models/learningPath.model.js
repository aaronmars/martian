'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.learningPathModel = undefined;

var _page = require('./page.model');

var _modelHelper = require('./modelHelper');

/**
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

var learningPathModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            title: obj.title,
            name: obj['@name'],
            summary: obj.summary,
            pages: [],
            edittime: obj.edittime,
            uri: obj['uri.learningpath'],
            category: obj.category
        };
        if (obj.pages) {
            var pages = Array.isArray(obj.pages) ? obj.pages : [obj.pages];
            pages.forEach(function (pageData) {
                parsed.pages.push(_page.pageModel.parse(pageData));
            });
        }
        return parsed;
    }
};
exports.learningPathModel = learningPathModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9sZWFybmluZ1BhdGgubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxvQkFBb0I7QUFDcEIsMEJBQU0sTUFBTTtBQUNSLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FESTtBQUVSLFlBQUksU0FBUztBQUNULG1CQUFPLElBQUksS0FBSjtBQUNQLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EscUJBQVMsSUFBSSxPQUFKO0FBQ1QsbUJBQU8sRUFBUDtBQUNBLHNCQUFVLElBQUksUUFBSjtBQUNWLGlCQUFLLElBQUksa0JBQUosQ0FBTDtBQUNBLHNCQUFVLElBQUksUUFBSjtTQVBWLENBRkk7QUFXUixZQUFHLElBQUksS0FBSixFQUFXO0FBQ1YsZ0JBQUksUUFBUSxNQUFNLE9BQU4sQ0FBYyxJQUFJLEtBQUosQ0FBZCxHQUEyQixJQUFJLEtBQUosR0FBWSxDQUFFLElBQUksS0FBSixDQUF6QyxDQURGO0FBRVYsa0JBQU0sT0FBTixDQUFjLFVBQVMsUUFBVCxFQUFtQjtBQUM3Qix1QkFBTyxLQUFQLENBQWEsSUFBYixDQUFrQixnQkFBVSxLQUFWLENBQWdCLFFBQWhCLENBQWxCLEVBRDZCO2FBQW5CLENBQWQsQ0FGVTtTQUFkO0FBTUEsZUFBTyxNQUFQLENBakJRO0tBRFE7Q0FBcEI7UUFxQkkiLCJmaWxlIjoibW9kZWxzL2xlYXJuaW5nUGF0aC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9wYWdlLm1vZGVsJztcbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xubGV0IGxlYXJuaW5nUGF0aE1vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgdGl0bGU6IG9iai50aXRsZSxcbiAgICAgICAgICAgIG5hbWU6IG9ialsnQG5hbWUnXSxcbiAgICAgICAgICAgIHN1bW1hcnk6IG9iai5zdW1tYXJ5LFxuICAgICAgICAgICAgcGFnZXM6IFtdLFxuICAgICAgICAgICAgZWRpdHRpbWU6IG9iai5lZGl0dGltZSxcbiAgICAgICAgICAgIHVyaTogb2JqWyd1cmkubGVhcm5pbmdwYXRoJ10sXG4gICAgICAgICAgICBjYXRlZ29yeTogb2JqLmNhdGVnb3J5XG4gICAgICAgIH07XG4gICAgICAgIGlmKG9iai5wYWdlcykge1xuICAgICAgICAgICAgbGV0IHBhZ2VzID0gQXJyYXkuaXNBcnJheShvYmoucGFnZXMpID8gb2JqLnBhZ2VzIDogWyBvYmoucGFnZXMgXTtcbiAgICAgICAgICAgIHBhZ2VzLmZvckVhY2goZnVuY3Rpb24ocGFnZURhdGEpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGFnZXMucHVzaChwYWdlTW9kZWwucGFyc2UocGFnZURhdGEpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7bGVhcm5pbmdQYXRoTW9kZWx9O1xuIl19
//# sourceMappingURL=learningPath.model.js.map
