'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contextMapsModel = undefined;

var _modelHelper = require('./modelHelper');

var _contextMap = require('./contextMap.model');

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

var contextMapsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            contextMap: [],
            languages: _modelHelper.modelHelper.getArray(obj.languages.language)
        };
        if ('contextmap' in obj) {
            var maps = _modelHelper.modelHelper.getArray(obj.contextmap);
            maps.forEach(function (map) {
                parsed.contextMap.push(_contextMap.contextMapModel.parse(map));
            });
        }
        return parsed;
    }
};
exports.contextMapsModel = contextMapsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250ZXh0TWFwcy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLG1CQUFtQjtBQUNuQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1Qsd0JBQVksRUFBWjtBQUNBLHVCQUFXLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxTQUFKLENBQWMsUUFBZCxDQUFoQztTQUZBLENBRkk7QUFNUixZQUFHLGdCQUFnQixHQUFoQixFQUFxQjtBQUNwQixnQkFBSSxPQUFPLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxVQUFKLENBQTVCLENBRGdCO0FBRXBCLGlCQUFLLE9BQUwsQ0FBYSxVQUFDLEdBQUQsRUFBUztBQUNsQix1QkFBTyxVQUFQLENBQWtCLElBQWxCLENBQXVCLDRCQUFnQixLQUFoQixDQUFzQixHQUF0QixDQUF2QixFQURrQjthQUFULENBQWIsQ0FGb0I7U0FBeEI7QUFNQSxlQUFPLE1BQVAsQ0FaUTtLQURPO0NBQW5CO1FBZ0JJIiwiZmlsZSI6Im1vZGVscy9jb250ZXh0TWFwcy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7Y29udGV4dE1hcE1vZGVsfSBmcm9tICcuL2NvbnRleHRNYXAubW9kZWwnO1xubGV0IGNvbnRleHRNYXBzTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBjb250ZXh0TWFwOiBbXSxcbiAgICAgICAgICAgIGxhbmd1YWdlczogbW9kZWxIZWxwZXIuZ2V0QXJyYXkob2JqLmxhbmd1YWdlcy5sYW5ndWFnZSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ2NvbnRleHRtYXAnIGluIG9iaikge1xuICAgICAgICAgICAgbGV0IG1hcHMgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmouY29udGV4dG1hcCk7XG4gICAgICAgICAgICBtYXBzLmZvckVhY2goKG1hcCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5jb250ZXh0TWFwLnB1c2goY29udGV4dE1hcE1vZGVsLnBhcnNlKG1hcCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtjb250ZXh0TWFwc01vZGVsfTtcbiJdfQ==
//# sourceMappingURL=contextMaps.model.js.map
