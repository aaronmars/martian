'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageTagsModel = undefined;

var _modelHelper = require('./modelHelper');

var pageTagsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            href: obj['@href']
        };
        if ('tag' in obj) {
            parsed.tags = [];
            var tags = _modelHelper.modelHelper.getArray(obj.tag);
            tags.forEach(function (tag) {
                parsed.tags.push({
                    value: tag['@value'],
                    id: _modelHelper.modelHelper.getInt(tag['@id']),
                    href: tag['@href'],
                    title: tag.title,
                    type: tag.type,
                    uri: tag.uri
                });
            });
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

exports.pageTagsModel = pageTagsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlVGFncy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBLElBQUksZ0JBQWdCO0FBQ2hCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCxtQkFBTyx5QkFBWSxNQUFaLENBQW1CLElBQUksUUFBSixDQUFuQixDQUFQO0FBQ0Esa0JBQU0sSUFBSSxPQUFKLENBQU47U0FGQSxDQUZJO0FBTVIsWUFBRyxTQUFTLEdBQVQsRUFBYztBQUNiLG1CQUFPLElBQVAsR0FBYyxFQUFkLENBRGE7QUFFYixnQkFBSSxPQUFPLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxHQUFKLENBQTVCLENBRlM7QUFHYixpQkFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFDbEIsdUJBQU8sSUFBUCxDQUFZLElBQVosQ0FBaUI7QUFDYiwyQkFBTyxJQUFJLFFBQUosQ0FBUDtBQUNBLHdCQUFJLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxLQUFKLENBQW5CLENBQUo7QUFDQSwwQkFBTSxJQUFJLE9BQUosQ0FBTjtBQUNBLDJCQUFPLElBQUksS0FBSjtBQUNQLDBCQUFNLElBQUksSUFBSjtBQUNOLHlCQUFLLElBQUksR0FBSjtpQkFOVCxFQURrQjthQUFULENBQWIsQ0FIYTtTQUFqQjtBQWNBLGVBQU8sTUFBUCxDQXBCUTtLQURJO0NBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBd0JJIiwiZmlsZSI6Im1vZGVscy9wYWdlVGFncy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmxldCBwYWdlVGFnc01vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgY291bnQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgIGhyZWY6IG9ialsnQGhyZWYnXVxuICAgICAgICB9O1xuICAgICAgICBpZigndGFnJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC50YWdzID0gW107XG4gICAgICAgICAgICBsZXQgdGFncyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai50YWcpO1xuICAgICAgICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJzZWQudGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhZ1snQHZhbHVlJ10sXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtb2RlbEhlbHBlci5nZXRJbnQodGFnWydAaWQnXSksXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRhZ1snQGhyZWYnXSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhZy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGFnLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHVyaTogdGFnLnVyaVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtwYWdlVGFnc01vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageTags.model.js.map
