'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventListModel = undefined;

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
var eventListModel = exports.eventListModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            upto: obj['@upto'],
            since: obj['@since'],
            summary: []
        };
        var events = _modelHelper.modelHelper.getArray(obj.summary);
        events.forEach(function (e) {
            var parsedEvent = {
                id: e['@id'],
                datetime: _modelHelper.modelHelper.getDate(e['@datetime']),
                count: _modelHelper.modelHelper.getInt(e['@count']),
                detailid: e['@detailid'],
                uriDetail: e['@uri.detail'],
                event: _event.eventModel.parse(e.event)
            };
            parsed.summary.push(parsedEvent);
        });
        return parsed;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ldmVudExpc3QubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFJLDBDQUFpQjtBQUN4QiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EsbUJBQU8sSUFBSSxRQUFKLENBQVA7QUFDQSxxQkFBUyxFQUFUO1NBSkEsQ0FGSTtBQVFSLFlBQUksU0FBUyx5QkFBWSxRQUFaLENBQXFCLElBQUksT0FBSixDQUE5QixDQVJJO0FBU1IsZUFBTyxPQUFQLENBQWUsVUFBQyxDQUFELEVBQU87QUFDbEIsZ0JBQUksY0FBYztBQUNkLG9CQUFJLEVBQUUsS0FBRixDQUFKO0FBQ0EsMEJBQVUseUJBQVksT0FBWixDQUFvQixFQUFFLFdBQUYsQ0FBcEIsQ0FBVjtBQUNBLHVCQUFPLHlCQUFZLE1BQVosQ0FBbUIsRUFBRSxRQUFGLENBQW5CLENBQVA7QUFDQSwwQkFBVSxFQUFFLFdBQUYsQ0FBVjtBQUNBLDJCQUFXLEVBQUUsYUFBRixDQUFYO0FBQ0EsdUJBQU8sa0JBQVcsS0FBWCxDQUFpQixFQUFFLEtBQUYsQ0FBeEI7YUFOQSxDQURjO0FBU2xCLG1CQUFPLE9BQVAsQ0FBZSxJQUFmLENBQW9CLFdBQXBCLEVBVGtCO1NBQVAsQ0FBZixDQVRRO0FBb0JSLGVBQU8sTUFBUCxDQXBCUTtLQURZO0NBQWpCIiwiZmlsZSI6Im1vZGVscy9ldmVudExpc3QubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5pbXBvcnQge2V2ZW50TW9kZWx9IGZyb20gJy4vZXZlbnQubW9kZWwnO1xuZXhwb3J0IGxldCBldmVudExpc3RNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAY291bnQnXSksXG4gICAgICAgICAgICB1cHRvOiBvYmpbJ0B1cHRvJ10sXG4gICAgICAgICAgICBzaW5jZTogb2JqWydAc2luY2UnXSxcbiAgICAgICAgICAgIHN1bW1hcnk6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGxldCBldmVudHMgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmouc3VtbWFyeSk7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGVbJ0BpZCddLFxuICAgICAgICAgICAgICAgIGRhdGV0aW1lOiBtb2RlbEhlbHBlci5nZXREYXRlKGVbJ0BkYXRldGltZSddKSxcbiAgICAgICAgICAgICAgICBjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KGVbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgICAgICBkZXRhaWxpZDogZVsnQGRldGFpbGlkJ10sXG4gICAgICAgICAgICAgICAgdXJpRGV0YWlsOiBlWydAdXJpLmRldGFpbCddLFxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudE1vZGVsLnBhcnNlKGUuZXZlbnQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFyc2VkLnN1bW1hcnkucHVzaChwYXJzZWRFdmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbn07XG4iXX0=
//# sourceMappingURL=eventList.model.js.map
