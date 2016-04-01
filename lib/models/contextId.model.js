'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contextIdModel = undefined;

var _modelHelper = require('./modelHelper');

var contextIdModel = {
    parse: function parse(data) {
        var parsed = _modelHelper.modelHelper.fromJson(data);
        if ('context' in parsed) {
            parsed = parsed.context;
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

exports.contextIdModel = contextIdModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250ZXh0SWQubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQSxJQUFJLGlCQUFpQjtBQUNqQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxTQUFTLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBVCxDQURJO0FBRVIsWUFBRyxhQUFhLE1BQWIsRUFBcUI7QUFDcEIscUJBQVMsT0FBTyxPQUFQLENBRFc7U0FBeEI7QUFHQSxlQUFPLE1BQVAsQ0FMUTtLQURLO0NBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBU0kiLCJmaWxlIjoibW9kZWxzL2NvbnRleHRJZC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmxldCBjb250ZXh0SWRNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgaWYoJ2NvbnRleHQnIGluIHBhcnNlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VkLmNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtjb250ZXh0SWRNb2RlbH07XG4iXX0=
//# sourceMappingURL=contextId.model.js.map
