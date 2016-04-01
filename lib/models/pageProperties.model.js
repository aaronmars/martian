'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pagePropertiesModel = undefined;

var _modelHelper = require('./modelHelper');

var _pageProperty = require('./pageProperty.model');

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

var pagePropertiesModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            href: obj['@href'],
            property: []
        };
        if ('property' in obj) {
            if (!Array.isArray(obj.property)) {
                obj.property = [obj.property];
            }
            obj.property.forEach(function (prop) {
                parsed.property.push(_pageProperty.pagePropertyModel.parse(prop));
            });
        }
        return parsed;
    }
};
exports.pagePropertiesModel = pagePropertiesModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlUHJvcGVydGllcy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLHNCQUFzQjtBQUN0QiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0Esc0JBQVUsRUFBVjtTQUhBLENBRkk7QUFPUixZQUFHLGNBQWMsR0FBZCxFQUFtQjtBQUNsQixnQkFBRyxDQUFDLE1BQU0sT0FBTixDQUFjLElBQUksUUFBSixDQUFmLEVBQThCO0FBQzdCLG9CQUFJLFFBQUosR0FBZSxDQUFFLElBQUksUUFBSixDQUFqQixDQUQ2QjthQUFqQztBQUdBLGdCQUFJLFFBQUosQ0FBYSxPQUFiLENBQXFCLFVBQUMsSUFBRCxFQUFVO0FBQzNCLHVCQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsZ0NBQWtCLEtBQWxCLENBQXdCLElBQXhCLENBQXJCLEVBRDJCO2FBQVYsQ0FBckIsQ0FKa0I7U0FBdEI7QUFRQSxlQUFPLE1BQVAsQ0FmUTtLQURVO0NBQXRCO1FBbUJJIiwiZmlsZSI6Im1vZGVscy9wYWdlUHJvcGVydGllcy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7cGFnZVByb3BlcnR5TW9kZWx9IGZyb20gJy4vcGFnZVByb3BlcnR5Lm1vZGVsJztcbmxldCBwYWdlUHJvcGVydGllc01vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgY291bnQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgIGhyZWY6IG9ialsnQGhyZWYnXSxcbiAgICAgICAgICAgIHByb3BlcnR5OiBbXVxuICAgICAgICB9O1xuICAgICAgICBpZigncHJvcGVydHknIGluIG9iaikge1xuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkob2JqLnByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIG9iai5wcm9wZXJ0eSA9IFsgb2JqLnByb3BlcnR5IF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmoucHJvcGVydHkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wcm9wZXJ0eS5wdXNoKHBhZ2VQcm9wZXJ0eU1vZGVsLnBhcnNlKHByb3ApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7cGFnZVByb3BlcnRpZXNNb2RlbH07XG4iXX0=
//# sourceMappingURL=pageProperties.model.js.map
