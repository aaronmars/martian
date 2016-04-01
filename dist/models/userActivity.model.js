'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userActivityModel = undefined;

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
var userActivityModel = exports.userActivityModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            upto: obj['@upto'],
            since: obj['@since'],
            events: []
        };
        var events = _modelHelper.modelHelper.getArray(obj.event);
        events.forEach(function (e) {
            parsed.events.push(_event.eventModel.parse(e));
        });
        return parsed;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyQWN0aXZpdHkubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFJLGdEQUFvQjtBQUMzQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EsbUJBQU8sSUFBSSxRQUFKLENBQVA7QUFDQSxvQkFBUSxFQUFSO1NBSkEsQ0FGSTtBQVFSLFlBQUksU0FBUyx5QkFBWSxRQUFaLENBQXFCLElBQUksS0FBSixDQUE5QixDQVJJO0FBU1IsZUFBTyxPQUFQLENBQWUsVUFBQyxDQUFELEVBQU87QUFDbEIsbUJBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUIsa0JBQVcsS0FBWCxDQUFpQixDQUFqQixDQUFuQixFQURrQjtTQUFQLENBQWYsQ0FUUTtBQVlSLGVBQU8sTUFBUCxDQVpRO0tBRGU7Q0FBcEIiLCJmaWxlIjoibW9kZWxzL3VzZXJBY3Rpdml0eS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmltcG9ydCB7ZXZlbnRNb2RlbH0gZnJvbSAnLi9ldmVudC5tb2RlbCc7XG5leHBvcnQgbGV0IHVzZXJBY3Rpdml0eU1vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgY291bnQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgIHVwdG86IG9ialsnQHVwdG8nXSxcbiAgICAgICAgICAgIHNpbmNlOiBvYmpbJ0BzaW5jZSddLFxuICAgICAgICAgICAgZXZlbnRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBsZXQgZXZlbnRzID0gbW9kZWxIZWxwZXIuZ2V0QXJyYXkob2JqLmV2ZW50KTtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIHBhcnNlZC5ldmVudHMucHVzaChldmVudE1vZGVsLnBhcnNlKGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbiJdfQ==
//# sourceMappingURL=userActivity.model.js.map
