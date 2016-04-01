'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventDetailModel = undefined;

var _modelHelper = require('./modelHelper');

var _event = require('./event.model');

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
var eventDetailModel = exports.eventDetailModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            summary: {
                id: obj.summary['@id'],
                datetime: _modelHelper.modelHelper.getDate(obj.summary['@datetime']),
                count: _modelHelper.modelHelper.getInt(obj.summary['@count']),
                journaled: _modelHelper.modelHelper.getBool(obj.summary['@journaled']),
                diffable: _modelHelper.modelHelper.getBool(obj.summary['@diffable']),
                event: _event.eventModel.parse(obj.summary.event)
            }
        };
        return parsed;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ldmVudERldGFpbC5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQUksOENBQW1CO0FBQzFCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCxtQkFBTyx5QkFBWSxNQUFaLENBQW1CLElBQUksUUFBSixDQUFuQixDQUFQO0FBQ0EscUJBQVM7QUFDTCxvQkFBSSxJQUFJLE9BQUosQ0FBWSxLQUFaLENBQUo7QUFDQSwwQkFBVSx5QkFBWSxPQUFaLENBQW9CLElBQUksT0FBSixDQUFZLFdBQVosQ0FBcEIsQ0FBVjtBQUNBLHVCQUFPLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxPQUFKLENBQVksUUFBWixDQUFuQixDQUFQO0FBQ0EsMkJBQVcseUJBQVksT0FBWixDQUFvQixJQUFJLE9BQUosQ0FBWSxZQUFaLENBQXBCLENBQVg7QUFDQSwwQkFBVSx5QkFBWSxPQUFaLENBQW9CLElBQUksT0FBSixDQUFZLFdBQVosQ0FBcEIsQ0FBVjtBQUNBLHVCQUFPLGtCQUFXLEtBQVgsQ0FBaUIsSUFBSSxPQUFKLENBQVksS0FBWixDQUF4QjthQU5KO1NBRkEsQ0FGSTtBQWFSLGVBQU8sTUFBUCxDQWJRO0tBRGM7Q0FBbkIiLCJmaWxlIjoibW9kZWxzL2V2ZW50RGV0YWlsLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtldmVudE1vZGVsfSBmcm9tICcuL2V2ZW50Lm1vZGVsJztcbmV4cG9ydCBsZXQgZXZlbnREZXRhaWxNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAY291bnQnXSksXG4gICAgICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICAgICAgaWQ6IG9iai5zdW1tYXJ5WydAaWQnXSxcbiAgICAgICAgICAgICAgICBkYXRldGltZTogbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmouc3VtbWFyeVsnQGRhdGV0aW1lJ10pLFxuICAgICAgICAgICAgICAgIGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqLnN1bW1hcnlbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgICAgICBqb3VybmFsZWQ6IG1vZGVsSGVscGVyLmdldEJvb2wob2JqLnN1bW1hcnlbJ0Bqb3VybmFsZWQnXSksXG4gICAgICAgICAgICAgICAgZGlmZmFibGU6IG1vZGVsSGVscGVyLmdldEJvb2wob2JqLnN1bW1hcnlbJ0BkaWZmYWJsZSddKSxcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnRNb2RlbC5wYXJzZShvYmouc3VtbWFyeS5ldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuIl19
//# sourceMappingURL=eventDetail.model.js.map
