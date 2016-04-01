'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageEditModel = undefined;

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

var pageEditModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            status: obj['@status']
        };
        if ('page' in obj) {
            parsed.page = _page.pageModel.parse(obj.page);
        }
        if ('draft' in obj) {
            parsed.draft = _page.pageModel.parse(obj.draft);
        }
        if ('page.base' in obj) {
            parsed.pageBase = _page.pageModel.parse(obj['page.base']);
        }
        if ('page.overwritten' in obj) {
            parsed.pageOverwritten = _page.pageModel.parse(obj['page.overwritten']);
        }
        return parsed;
    }
};
exports.pageEditModel = pageEditModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlRWRpdC5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLGdCQUFnQjtBQUNoQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1Qsb0JBQVEsSUFBSSxTQUFKLENBQVI7U0FEQSxDQUZJO0FBS1IsWUFBRyxVQUFVLEdBQVYsRUFBZTtBQUNkLG1CQUFPLElBQVAsR0FBYyxnQkFBVSxLQUFWLENBQWdCLElBQUksSUFBSixDQUE5QixDQURjO1NBQWxCO0FBR0EsWUFBRyxXQUFXLEdBQVgsRUFBZ0I7QUFDZixtQkFBTyxLQUFQLEdBQWUsZ0JBQVUsS0FBVixDQUFnQixJQUFJLEtBQUosQ0FBL0IsQ0FEZTtTQUFuQjtBQUdBLFlBQUcsZUFBZSxHQUFmLEVBQW9CO0FBQ25CLG1CQUFPLFFBQVAsR0FBa0IsZ0JBQVUsS0FBVixDQUFnQixJQUFJLFdBQUosQ0FBaEIsQ0FBbEIsQ0FEbUI7U0FBdkI7QUFHQSxZQUFHLHNCQUFzQixHQUF0QixFQUEyQjtBQUMxQixtQkFBTyxlQUFQLEdBQXlCLGdCQUFVLEtBQVYsQ0FBZ0IsSUFBSSxrQkFBSixDQUFoQixDQUF6QixDQUQwQjtTQUE5QjtBQUdBLGVBQU8sTUFBUCxDQWpCUTtLQURJO0NBQWhCO1FBcUJJIiwiZmlsZSI6Im1vZGVscy9wYWdlRWRpdC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7cGFnZU1vZGVsfSBmcm9tICcuL3BhZ2UubW9kZWwnO1xubGV0IHBhZ2VFZGl0TW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IG9ialsnQHN0YXR1cyddXG4gICAgICAgIH07XG4gICAgICAgIGlmKCdwYWdlJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYWdlID0gcGFnZU1vZGVsLnBhcnNlKG9iai5wYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBpZignZHJhZnQnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLmRyYWZ0ID0gcGFnZU1vZGVsLnBhcnNlKG9iai5kcmFmdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ3BhZ2UuYmFzZScgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQucGFnZUJhc2UgPSBwYWdlTW9kZWwucGFyc2Uob2JqWydwYWdlLmJhc2UnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ3BhZ2Uub3ZlcndyaXR0ZW4nIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnBhZ2VPdmVyd3JpdHRlbiA9IHBhZ2VNb2RlbC5wYXJzZShvYmpbJ3BhZ2Uub3ZlcndyaXR0ZW4nXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtwYWdlRWRpdE1vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageEdit.model.js.map
