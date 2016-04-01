'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fileRevisionsModel = undefined;

var _modelHelper = require('./modelHelper');

var _file = require('./file.model');

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

var fileRevisionsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: obj['@count'],
            totalcount: obj['@totalcount'],
            href: obj['@href']
        };
        if ('file' in obj) {
            parsed.file = [];
            var file = _modelHelper.modelHelper.getArray(obj.file);
            file.forEach(function (f) {
                parsed.file.push(_file.fileModel.parse(f));
            });
        }
        return parsed;
    }
};
exports.fileRevisionsModel = fileRevisionsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9maWxlUmV2aXNpb25zLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUkscUJBQXFCO0FBQ3JCLFdBQU8sZUFBQyxJQUFELEVBQVU7QUFDYixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBRFM7QUFFYixZQUFJLFNBQVM7QUFDVCxtQkFBTyxJQUFJLFFBQUosQ0FBUDtBQUNBLHdCQUFZLElBQUksYUFBSixDQUFaO0FBQ0Esa0JBQU0sSUFBSSxPQUFKLENBQU47U0FIQSxDQUZTO0FBT2IsWUFBRyxVQUFVLEdBQVYsRUFBZTtBQUNkLG1CQUFPLElBQVAsR0FBYyxFQUFkLENBRGM7QUFFZCxnQkFBSSxPQUFPLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxJQUFKLENBQTVCLENBRlU7QUFHZCxpQkFBSyxPQUFMLENBQWEsVUFBQyxDQUFELEVBQU87QUFDaEIsdUJBQU8sSUFBUCxDQUFZLElBQVosQ0FBaUIsZ0JBQVUsS0FBVixDQUFnQixDQUFoQixDQUFqQixFQURnQjthQUFQLENBQWIsQ0FIYztTQUFsQjtBQU9BLGVBQU8sTUFBUCxDQWRhO0tBQVY7Q0FEUDtRQWtCSSIsImZpbGUiOiJtb2RlbHMvZmlsZVJldmlzaW9ucy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7ZmlsZU1vZGVsfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xubGV0IGZpbGVSZXZpc2lvbnNNb2RlbCA9IHtcbiAgICBwYXJzZTogKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgY291bnQ6IG9ialsnQGNvdW50J10sXG4gICAgICAgICAgICB0b3RhbGNvdW50OiBvYmpbJ0B0b3RhbGNvdW50J10sXG4gICAgICAgICAgICBocmVmOiBvYmpbJ0BocmVmJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ2ZpbGUnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLmZpbGUgPSBbXTtcbiAgICAgICAgICAgIGxldCBmaWxlID0gbW9kZWxIZWxwZXIuZ2V0QXJyYXkob2JqLmZpbGUpO1xuICAgICAgICAgICAgZmlsZS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmZpbGUucHVzaChmaWxlTW9kZWwucGFyc2UoZikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtmaWxlUmV2aXNpb25zTW9kZWx9O1xuIl19
//# sourceMappingURL=fileRevisions.model.js.map
