'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pagePropertyModel = undefined;

var _modelHelper = require('./modelHelper');

var _page = require('./page.model');

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

var pagePropertyModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            revision: obj['@revision'],
            name: obj['@name'],
            href: obj['@href'],
            dateModified: _modelHelper.modelHelper.getDate(obj['date.modified'])
        };
        _modelHelper.modelHelper.addIfDefined(obj.page, 'page', parsed, _page.pageModel);
        return parsed;
    }
};
exports.pagePropertyModel = pagePropertyModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlUHJvcGVydHkubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxvQkFBb0I7QUFDcEIsMEJBQU0sTUFBTTtBQUNSLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FESTtBQUVSLFlBQUksU0FBUztBQUNULHNCQUFVLElBQUksV0FBSixDQUFWO0FBQ0Esa0JBQU0sSUFBSSxPQUFKLENBQU47QUFDQSxrQkFBTSxJQUFJLE9BQUosQ0FBTjtBQUNBLDBCQUFjLHlCQUFZLE9BQVosQ0FBb0IsSUFBSSxlQUFKLENBQXBCLENBQWQ7U0FKQSxDQUZJO0FBUVIsaUNBQVksWUFBWixDQUF5QixJQUFJLElBQUosRUFBVSxNQUFuQyxFQUEyQyxNQUEzQyxtQkFSUTtBQVNSLGVBQU8sTUFBUCxDQVRRO0tBRFE7Q0FBcEI7UUFhSSIsImZpbGUiOiJtb2RlbHMvcGFnZVByb3BlcnR5Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vcGFnZS5tb2RlbCc7XG5sZXQgcGFnZVByb3BlcnR5TW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICByZXZpc2lvbjogb2JqWydAcmV2aXNpb24nXSxcbiAgICAgICAgICAgIG5hbWU6IG9ialsnQG5hbWUnXSxcbiAgICAgICAgICAgIGhyZWY6IG9ialsnQGhyZWYnXSxcbiAgICAgICAgICAgIGRhdGVNb2RpZmllZDogbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ2RhdGUubW9kaWZpZWQnXSlcbiAgICAgICAgfTtcbiAgICAgICAgbW9kZWxIZWxwZXIuYWRkSWZEZWZpbmVkKG9iai5wYWdlLCAncGFnZScsIHBhcnNlZCwgcGFnZU1vZGVsKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtwYWdlUHJvcGVydHlNb2RlbH07XG4iXX0=
//# sourceMappingURL=pageProperty.model.js.map
