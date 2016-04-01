'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageRatingsModel = undefined;

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

var pageRatingsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            href: obj['@href']
        };
        if ('page' in obj) {
            parsed.page = [];
            var pageArray = _modelHelper.modelHelper.getArray(obj.page);
            pageArray.forEach(function (page) {
                parsed.page.push(_page.pageModel.parse(page));
            });
        }
        return parsed;
    }
};
exports.pageRatingsModel = pageRatingsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlUmF0aW5ncy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLG1CQUFtQjtBQUNuQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO1NBRkEsQ0FGSTtBQU1SLFlBQUcsVUFBVSxHQUFWLEVBQWU7QUFDZCxtQkFBTyxJQUFQLEdBQWMsRUFBZCxDQURjO0FBRWQsZ0JBQUksWUFBWSx5QkFBWSxRQUFaLENBQXFCLElBQUksSUFBSixDQUFqQyxDQUZVO0FBR2Qsc0JBQVUsT0FBVixDQUFrQixVQUFDLElBQUQsRUFBVTtBQUN4Qix1QkFBTyxJQUFQLENBQVksSUFBWixDQUFpQixnQkFBVSxLQUFWLENBQWdCLElBQWhCLENBQWpCLEVBRHdCO2FBQVYsQ0FBbEIsQ0FIYztTQUFsQjtBQU9BLGVBQU8sTUFBUCxDQWJRO0tBRE87Q0FBbkI7UUFpQkkiLCJmaWxlIjoibW9kZWxzL3BhZ2VSYXRpbmdzLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vcGFnZS5tb2RlbCc7XG5sZXQgcGFnZVJhdGluZ3NNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAY291bnQnXSksXG4gICAgICAgICAgICBocmVmOiBvYmpbJ0BocmVmJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ3BhZ2UnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnBhZ2UgPSBbXTtcbiAgICAgICAgICAgIGxldCBwYWdlQXJyYXkgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmoucGFnZSk7XG4gICAgICAgICAgICBwYWdlQXJyYXkuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYWdlLnB1c2gocGFnZU1vZGVsLnBhcnNlKHBhZ2UpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7cGFnZVJhdGluZ3NNb2RlbH07XG4iXX0=
//# sourceMappingURL=pageRatings.model.js.map
