'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fileModel = undefined;

var _modelHelper = require('./modelHelper');

var _user = require('./user.model');

var _page = require('./page.model');

var fileModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            id: _modelHelper.modelHelper.getInt(obj['@id']),
            revision: _modelHelper.modelHelper.getInt(obj['@revision']),
            resId: _modelHelper.modelHelper.getInt(obj['@res-id']),
            href: obj['@href'],
            resIsHead: _modelHelper.modelHelper.getBool(obj['@res-is-head']),
            resIsDeleted: _modelHelper.modelHelper.getBool(obj['@res-is-deleted']),
            resRevIsDeleted: _modelHelper.modelHelper.getBool(obj['@res-rev-is-head']),
            resContentsId: _modelHelper.modelHelper.getInt(obj['@res-contents-id']),
            dateCreated: _modelHelper.modelHelper.getDate(obj['date.created']),
            description: obj.description,
            filename: obj.filename,
            contents: {
                type: obj.contents['@type'],
                size: _modelHelper.modelHelper.getInt(obj.contents['@size']),
                href: obj.contents['@href']
            }
        };
        if ('user.createdby' in obj) {
            parsed.userCreatedBy = _user.userModel.parse(obj['user.createdby']);
        }
        if ('page.parent' in obj) {
            parsed.pageParent = _page.pageModel.parse(obj['page.parent']);
        }
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

exports.fileModel = fileModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9maWxlLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBSSxZQUFZO0FBQ1osV0FBTyxlQUFDLElBQUQsRUFBVTtBQUNiLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FEUztBQUViLFlBQUksU0FBUztBQUNULGdCQUFJLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxLQUFKLENBQW5CLENBQUo7QUFDQSxzQkFBVSx5QkFBWSxNQUFaLENBQW1CLElBQUksV0FBSixDQUFuQixDQUFWO0FBQ0EsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFNBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EsdUJBQVcseUJBQVksT0FBWixDQUFvQixJQUFJLGNBQUosQ0FBcEIsQ0FBWDtBQUNBLDBCQUFjLHlCQUFZLE9BQVosQ0FBb0IsSUFBSSxpQkFBSixDQUFwQixDQUFkO0FBQ0EsNkJBQWlCLHlCQUFZLE9BQVosQ0FBb0IsSUFBSSxrQkFBSixDQUFwQixDQUFqQjtBQUNBLDJCQUFlLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxrQkFBSixDQUFuQixDQUFmO0FBQ0EseUJBQWEseUJBQVksT0FBWixDQUFvQixJQUFJLGNBQUosQ0FBcEIsQ0FBYjtBQUNBLHlCQUFhLElBQUksV0FBSjtBQUNiLHNCQUFVLElBQUksUUFBSjtBQUNWLHNCQUFVO0FBQ04sc0JBQU0sSUFBSSxRQUFKLENBQWEsT0FBYixDQUFOO0FBQ0Esc0JBQU0seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBYSxPQUFiLENBQW5CLENBQU47QUFDQSxzQkFBTSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQU47YUFISjtTQVpBLENBRlM7QUFvQmIsWUFBRyxvQkFBb0IsR0FBcEIsRUFBeUI7QUFDeEIsbUJBQU8sYUFBUCxHQUF1QixnQkFBVSxLQUFWLENBQWdCLElBQUksZ0JBQUosQ0FBaEIsQ0FBdkIsQ0FEd0I7U0FBNUI7QUFHQSxZQUFHLGlCQUFpQixHQUFqQixFQUFzQjtBQUNyQixtQkFBTyxVQUFQLEdBQW9CLGdCQUFVLEtBQVYsQ0FBZ0IsSUFBSSxhQUFKLENBQWhCLENBQXBCLENBRHFCO1NBQXpCO0FBR0EsZUFBTyxNQUFQLENBMUJhO0tBQVY7Q0FEUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQThCSSIsImZpbGUiOiJtb2RlbHMvZmlsZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7dXNlck1vZGVsfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vcGFnZS5tb2RlbCc7XG5sZXQgZmlsZU1vZGVsID0ge1xuICAgIHBhcnNlOiAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBpZDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQGlkJ10pLFxuICAgICAgICAgICAgcmV2aXNpb246IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0ByZXZpc2lvbiddKSxcbiAgICAgICAgICAgIHJlc0lkOiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAcmVzLWlkJ10pLFxuICAgICAgICAgICAgaHJlZjogb2JqWydAaHJlZiddLFxuICAgICAgICAgICAgcmVzSXNIZWFkOiBtb2RlbEhlbHBlci5nZXRCb29sKG9ialsnQHJlcy1pcy1oZWFkJ10pLFxuICAgICAgICAgICAgcmVzSXNEZWxldGVkOiBtb2RlbEhlbHBlci5nZXRCb29sKG9ialsnQHJlcy1pcy1kZWxldGVkJ10pLFxuICAgICAgICAgICAgcmVzUmV2SXNEZWxldGVkOiBtb2RlbEhlbHBlci5nZXRCb29sKG9ialsnQHJlcy1yZXYtaXMtaGVhZCddKSxcbiAgICAgICAgICAgIHJlc0NvbnRlbnRzSWQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0ByZXMtY29udGVudHMtaWQnXSksXG4gICAgICAgICAgICBkYXRlQ3JlYXRlZDogbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ2RhdGUuY3JlYXRlZCddKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmouZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmaWxlbmFtZTogb2JqLmZpbGVuYW1lLFxuICAgICAgICAgICAgY29udGVudHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBvYmouY29udGVudHNbJ0B0eXBlJ10sXG4gICAgICAgICAgICAgICAgc2l6ZTogbW9kZWxIZWxwZXIuZ2V0SW50KG9iai5jb250ZW50c1snQHNpemUnXSksXG4gICAgICAgICAgICAgICAgaHJlZjogb2JqLmNvbnRlbnRzWydAaHJlZiddXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmKCd1c2VyLmNyZWF0ZWRieScgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQudXNlckNyZWF0ZWRCeSA9IHVzZXJNb2RlbC5wYXJzZShvYmpbJ3VzZXIuY3JlYXRlZGJ5J10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdwYWdlLnBhcmVudCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQucGFnZVBhcmVudCA9IHBhZ2VNb2RlbC5wYXJzZShvYmpbJ3BhZ2UucGFyZW50J10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7ZmlsZU1vZGVsfTtcbiJdfQ==
//# sourceMappingURL=file.model.js.map
