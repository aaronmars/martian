'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contextIdsModel = undefined;

var _modelHelper = require('./modelHelper');

var contextIdsModel = {
    parse: function parse(data) {
        if (data === '') {
            data = '{"context": []}'; // eslint-disable-line quotes
        }
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            context: []
        };
        var contexts = _modelHelper.modelHelper.getArray(obj.context);
        contexts.forEach(function (c) {
            parsed.context.push(c);
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

exports.contextIdsModel = contextIdsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250ZXh0SWRzLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0EsSUFBSSxrQkFBa0I7QUFDbEIsMEJBQU0sTUFBTTtBQUNSLFlBQUcsU0FBUyxFQUFULEVBQWE7QUFDWjtBQURZLFNBQWhCO0FBR0EsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQUpJO0FBS1IsWUFBSSxTQUFTO0FBQ1QscUJBQVMsRUFBVDtTQURBLENBTEk7QUFRUixZQUFJLFdBQVcseUJBQVksUUFBWixDQUFxQixJQUFJLE9BQUosQ0FBaEMsQ0FSSTtBQVNSLGlCQUFTLE9BQVQsQ0FBaUIsVUFBQyxDQUFELEVBQU87QUFDcEIsbUJBQU8sT0FBUCxDQUFlLElBQWYsQ0FBb0IsQ0FBcEIsRUFEb0I7U0FBUCxDQUFqQixDQVRRO0FBWVIsZUFBTyxNQUFQLENBWlE7S0FETTtDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWdCSSIsImZpbGUiOiJtb2RlbHMvY29udGV4dElkcy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmxldCBjb250ZXh0SWRzTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBpZihkYXRhID09PSAnJykge1xuICAgICAgICAgICAgZGF0YSA9IGB7XCJjb250ZXh0XCI6IFtdfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcXVvdGVzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgY29udGV4dDogW11cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNvbnRleHRzID0gbW9kZWxIZWxwZXIuZ2V0QXJyYXkob2JqLmNvbnRleHQpO1xuICAgICAgICBjb250ZXh0cy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICBwYXJzZWQuY29udGV4dC5wdXNoKGMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtjb250ZXh0SWRzTW9kZWx9O1xuIl19
//# sourceMappingURL=contextIds.model.js.map
