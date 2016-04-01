'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventModel = undefined;

var _modelHelper = require('./modelHelper');

var eventModel = exports.eventModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            id: obj['@id'],
            datetime: _modelHelper.modelHelper.getDate(obj['@datetime']),
            type: obj['@type'],
            journaled: _modelHelper.modelHelper.getBool(obj['@journaled']),
            version: _modelHelper.modelHelper.getInt(obj['@version']),
            requestId: obj.request['@id']
        };
        if ('@language' in obj) {
            parsed.language = obj['@language'];
        }
        if ('page' in obj) {
            parsed.page = {
                id: obj.page['@id'],
                path: obj.page.path
            };
            if ('@revision' in obj.page) {
                parsed.page.revision = _modelHelper.modelHelper.getInt(obj.page['@revision']);
            }
        }
        if ('user' in obj) {
            parsed.user = { id: obj.user['@id'] };
            if ('name' in obj.user) {
                parsed.user.name = obj.user.name;
            }
        }
        if ('data' in obj) {
            if (parsed.type === 'user:search') {
                parsed.data = {
                    constraint: obj.data.constraint,
                    path: obj.data.path,
                    query: obj.data.query,
                    limit: _modelHelper.modelHelper.getInt(obj.data.limit),
                    qid: _modelHelper.modelHelper.getInt(obj.data.qid),
                    totalrecommended: _modelHelper.modelHelper.getInt(obj.data.totalrecommended),
                    totalresults: _modelHelper.modelHelper.getInt(obj.data.totalresults)
                };
            } else {

                // The only other type possible here is 'page:view'
                parsed.data = {
                    host: obj.data['_uri.host'],
                    query: obj.data['_uri.query'],
                    scheme: obj.data['_uri.scheme']
                };
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ldmVudC5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNPLElBQUksa0NBQWE7QUFDcEIsMEJBQU0sTUFBTTtBQUNSLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FESTtBQUVSLFlBQUksU0FBUztBQUNULGdCQUFJLElBQUksS0FBSixDQUFKO0FBQ0Esc0JBQVUseUJBQVksT0FBWixDQUFvQixJQUFJLFdBQUosQ0FBcEIsQ0FBVjtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO0FBQ0EsdUJBQVcseUJBQVksT0FBWixDQUFvQixJQUFJLFlBQUosQ0FBcEIsQ0FBWDtBQUNBLHFCQUFTLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxVQUFKLENBQW5CLENBQVQ7QUFDQSx1QkFBVyxJQUFJLE9BQUosQ0FBWSxLQUFaLENBQVg7U0FOQSxDQUZJO0FBVVIsWUFBRyxlQUFlLEdBQWYsRUFBb0I7QUFDbkIsbUJBQU8sUUFBUCxHQUFrQixJQUFJLFdBQUosQ0FBbEIsQ0FEbUI7U0FBdkI7QUFHQSxZQUFHLFVBQVUsR0FBVixFQUFlO0FBQ2QsbUJBQU8sSUFBUCxHQUFjO0FBQ1Ysb0JBQUksSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFKO0FBQ0Esc0JBQU0sSUFBSSxJQUFKLENBQVMsSUFBVDthQUZWLENBRGM7QUFLZCxnQkFBRyxlQUFlLElBQUksSUFBSixFQUFVO0FBQ3hCLHVCQUFPLElBQVAsQ0FBWSxRQUFaLEdBQXVCLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFuQixDQUF2QixDQUR3QjthQUE1QjtTQUxKO0FBU0EsWUFBRyxVQUFVLEdBQVYsRUFBZTtBQUNkLG1CQUFPLElBQVAsR0FBYyxFQUFFLElBQUksSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFKLEVBQWhCLENBRGM7QUFFZCxnQkFBRyxVQUFVLElBQUksSUFBSixFQUFVO0FBQ25CLHVCQUFPLElBQVAsQ0FBWSxJQUFaLEdBQW1CLElBQUksSUFBSixDQUFTLElBQVQsQ0FEQTthQUF2QjtTQUZKO0FBTUEsWUFBRyxVQUFVLEdBQVYsRUFBZTtBQUNkLGdCQUFHLE9BQU8sSUFBUCxLQUFnQixhQUFoQixFQUErQjtBQUM5Qix1QkFBTyxJQUFQLEdBQWM7QUFDVixnQ0FBWSxJQUFJLElBQUosQ0FBUyxVQUFUO0FBQ1osMEJBQU0sSUFBSSxJQUFKLENBQVMsSUFBVDtBQUNOLDJCQUFPLElBQUksSUFBSixDQUFTLEtBQVQ7QUFDUCwyQkFBTyx5QkFBWSxNQUFaLENBQW1CLElBQUksSUFBSixDQUFTLEtBQVQsQ0FBMUI7QUFDQSx5QkFBSyx5QkFBWSxNQUFaLENBQW1CLElBQUksSUFBSixDQUFTLEdBQVQsQ0FBeEI7QUFDQSxzQ0FBa0IseUJBQVksTUFBWixDQUFtQixJQUFJLElBQUosQ0FBUyxnQkFBVCxDQUFyQztBQUNBLGtDQUFjLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxJQUFKLENBQVMsWUFBVCxDQUFqQztpQkFQSixDQUQ4QjthQUFsQyxNQVVPOzs7QUFHSCx1QkFBTyxJQUFQLEdBQWM7QUFDViwwQkFBTSxJQUFJLElBQUosQ0FBUyxXQUFULENBQU47QUFDQSwyQkFBTyxJQUFJLElBQUosQ0FBUyxZQUFULENBQVA7QUFDQSw0QkFBUSxJQUFJLElBQUosQ0FBUyxhQUFULENBQVI7aUJBSEosQ0FIRzthQVZQO1NBREo7QUFxQkEsZUFBTyxNQUFQLENBakRRO0tBRFE7Q0FBYiIsImZpbGUiOiJtb2RlbHMvZXZlbnQubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHttb2RlbEhlbHBlcn0gZnJvbSAnLi9tb2RlbEhlbHBlcic7XG5leHBvcnQgbGV0IGV2ZW50TW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBpZDogb2JqWydAaWQnXSxcbiAgICAgICAgICAgIGRhdGV0aW1lOiBtb2RlbEhlbHBlci5nZXREYXRlKG9ialsnQGRhdGV0aW1lJ10pLFxuICAgICAgICAgICAgdHlwZTogb2JqWydAdHlwZSddLFxuICAgICAgICAgICAgam91cm5hbGVkOiBtb2RlbEhlbHBlci5nZXRCb29sKG9ialsnQGpvdXJuYWxlZCddKSxcbiAgICAgICAgICAgIHZlcnNpb246IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0B2ZXJzaW9uJ10pLFxuICAgICAgICAgICAgcmVxdWVzdElkOiBvYmoucmVxdWVzdFsnQGlkJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ0BsYW5ndWFnZScgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQubGFuZ3VhZ2UgPSBvYmpbJ0BsYW5ndWFnZSddO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdwYWdlJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYWdlID0ge1xuICAgICAgICAgICAgICAgIGlkOiBvYmoucGFnZVsnQGlkJ10sXG4gICAgICAgICAgICAgICAgcGF0aDogb2JqLnBhZ2UucGF0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKCdAcmV2aXNpb24nIGluIG9iai5wYWdlKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhZ2UucmV2aXNpb24gPSBtb2RlbEhlbHBlci5nZXRJbnQob2JqLnBhZ2VbJ0ByZXZpc2lvbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZigndXNlcicgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQudXNlciA9IHsgaWQ6IG9iai51c2VyWydAaWQnXSB9O1xuICAgICAgICAgICAgaWYoJ25hbWUnIGluIG9iai51c2VyKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnVzZXIubmFtZSA9IG9iai51c2VyLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ2RhdGEnIGluIG9iaikge1xuICAgICAgICAgICAgaWYocGFyc2VkLnR5cGUgPT09ICd1c2VyOnNlYXJjaCcpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludDogb2JqLmRhdGEuY29uc3RyYWludCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogb2JqLmRhdGEucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9iai5kYXRhLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogbW9kZWxIZWxwZXIuZ2V0SW50KG9iai5kYXRhLmxpbWl0KSxcbiAgICAgICAgICAgICAgICAgICAgcWlkOiBtb2RlbEhlbHBlci5nZXRJbnQob2JqLmRhdGEucWlkKSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxyZWNvbW1lbmRlZDogbW9kZWxIZWxwZXIuZ2V0SW50KG9iai5kYXRhLnRvdGFscmVjb21tZW5kZWQpLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbHJlc3VsdHM6IG1vZGVsSGVscGVyLmdldEludChvYmouZGF0YS50b3RhbHJlc3VsdHMpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgb25seSBvdGhlciB0eXBlIHBvc3NpYmxlIGhlcmUgaXMgJ3BhZ2U6dmlldydcbiAgICAgICAgICAgICAgICBwYXJzZWQuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdDogb2JqLmRhdGFbJ191cmkuaG9zdCddLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb2JqLmRhdGFbJ191cmkucXVlcnknXSxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lOiBvYmouZGF0YVsnX3VyaS5zY2hlbWUnXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuIl19
//# sourceMappingURL=event.model.js.map
