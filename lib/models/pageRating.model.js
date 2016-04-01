'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageRatingModel = undefined;

var _modelHelper = require('./modelHelper');

var pageRatingModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            date: _modelHelper.modelHelper.getDate(obj['@date']),
            seatedCount: _modelHelper.modelHelper.getInt(obj['@seated.count']),
            unseatedCount: _modelHelper.modelHelper.getInt(obj['@unseated.count'])
        };
        if ('@score' in obj && obj['@score'] !== '') {
            parsed.score = _modelHelper.modelHelper.getInt(obj['@score']);
        }
        if ('@seated.score' in obj && obj['@seated.score'] !== '') {
            parsed.seatedScore = _modelHelper.modelHelper.getInt(obj['@seated.score']);
        }
        if ('@unseated.score' in obj && obj['@unseated.score'] !== '') {
            parsed.unseatedScore = _modelHelper.modelHelper.getInt(obj['@unseated.score']);
        }
        if ('@score.trend' in obj) {
            parsed.scoreTrend = _modelHelper.modelHelper.getInt(obj['@score.trend']);
        }
        if ('@seated.score.trend' in obj) {
            parsed.seatedScoreTrend = _modelHelper.modelHelper.getInt(obj['@seated.score.trend']);
        }
        if ('@unseated.score.trend' in obj) {
            parsed.unseatedScoreTrend = _modelHelper.modelHelper.getInt(obj['@unseated.score.trend']);
        }
        if ('user.ratedby' in obj) {
            var ratedBy = obj['user.ratedby'];
            parsed.userRatedBy = {
                id: _modelHelper.modelHelper.getInt(ratedBy['@id']),
                score: _modelHelper.modelHelper.getInt(ratedBy['@score']),
                date: _modelHelper.modelHelper.getDate(ratedBy['@date']),
                href: ratedBy['@href'],
                seated: _modelHelper.modelHelper.getBool(ratedBy['@seated'])
            };
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

exports.pageRatingModel = pageRatingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlUmF0aW5nLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0EsSUFBSSxrQkFBa0I7QUFDbEIsMEJBQU0sTUFBTTtBQUNSLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FESTtBQUVSLFlBQUksU0FBUztBQUNULG1CQUFPLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxRQUFKLENBQW5CLENBQVA7QUFDQSxrQkFBTSx5QkFBWSxPQUFaLENBQW9CLElBQUksT0FBSixDQUFwQixDQUFOO0FBQ0EseUJBQWEseUJBQVksTUFBWixDQUFtQixJQUFJLGVBQUosQ0FBbkIsQ0FBYjtBQUNBLDJCQUFlLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxpQkFBSixDQUFuQixDQUFmO1NBSkEsQ0FGSTtBQVFSLFlBQUcsWUFBWSxHQUFaLElBQW1CLElBQUksUUFBSixNQUFrQixFQUFsQixFQUFzQjtBQUN4QyxtQkFBTyxLQUFQLEdBQWUseUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBZixDQUR3QztTQUE1QztBQUdBLFlBQUcsbUJBQW1CLEdBQW5CLElBQTBCLElBQUksZUFBSixNQUF5QixFQUF6QixFQUE2QjtBQUN0RCxtQkFBTyxXQUFQLEdBQXFCLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxlQUFKLENBQW5CLENBQXJCLENBRHNEO1NBQTFEO0FBR0EsWUFBRyxxQkFBcUIsR0FBckIsSUFBNEIsSUFBSSxpQkFBSixNQUEyQixFQUEzQixFQUErQjtBQUMxRCxtQkFBTyxhQUFQLEdBQXVCLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxpQkFBSixDQUFuQixDQUF2QixDQUQwRDtTQUE5RDtBQUdBLFlBQUcsa0JBQWtCLEdBQWxCLEVBQXVCO0FBQ3RCLG1CQUFPLFVBQVAsR0FBb0IseUJBQVksTUFBWixDQUFtQixJQUFJLGNBQUosQ0FBbkIsQ0FBcEIsQ0FEc0I7U0FBMUI7QUFHQSxZQUFHLHlCQUF5QixHQUF6QixFQUE4QjtBQUM3QixtQkFBTyxnQkFBUCxHQUEwQix5QkFBWSxNQUFaLENBQW1CLElBQUkscUJBQUosQ0FBbkIsQ0FBMUIsQ0FENkI7U0FBakM7QUFHQSxZQUFHLDJCQUEyQixHQUEzQixFQUFnQztBQUMvQixtQkFBTyxrQkFBUCxHQUE0Qix5QkFBWSxNQUFaLENBQW1CLElBQUksdUJBQUosQ0FBbkIsQ0FBNUIsQ0FEK0I7U0FBbkM7QUFHQSxZQUFHLGtCQUFrQixHQUFsQixFQUF1QjtBQUN0QixnQkFBSSxVQUFVLElBQUksY0FBSixDQUFWLENBRGtCO0FBRXRCLG1CQUFPLFdBQVAsR0FBcUI7QUFDakIsb0JBQUkseUJBQVksTUFBWixDQUFtQixRQUFRLEtBQVIsQ0FBbkIsQ0FBSjtBQUNBLHVCQUFPLHlCQUFZLE1BQVosQ0FBbUIsUUFBUSxRQUFSLENBQW5CLENBQVA7QUFDQSxzQkFBTSx5QkFBWSxPQUFaLENBQW9CLFFBQVEsT0FBUixDQUFwQixDQUFOO0FBQ0Esc0JBQU0sUUFBUSxPQUFSLENBQU47QUFDQSx3QkFBUSx5QkFBWSxPQUFaLENBQW9CLFFBQVEsU0FBUixDQUFwQixDQUFSO2FBTEosQ0FGc0I7U0FBMUI7QUFVQSxlQUFPLE1BQVAsQ0FwQ1E7S0FETTtDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXdDSSIsImZpbGUiOiJtb2RlbHMvcGFnZVJhdGluZy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge21vZGVsSGVscGVyfSBmcm9tICcuL21vZGVsSGVscGVyJztcbmxldCBwYWdlUmF0aW5nTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQGNvdW50J10pLFxuICAgICAgICAgICAgZGF0ZTogbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ0BkYXRlJ10pLFxuICAgICAgICAgICAgc2VhdGVkQ291bnQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0BzZWF0ZWQuY291bnQnXSksXG4gICAgICAgICAgICB1bnNlYXRlZENvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAdW5zZWF0ZWQuY291bnQnXSlcbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ0BzY29yZScgaW4gb2JqICYmIG9ialsnQHNjb3JlJ10gIT09ICcnKSB7XG4gICAgICAgICAgICBwYXJzZWQuc2NvcmUgPSBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAc2NvcmUnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ0BzZWF0ZWQuc2NvcmUnIGluIG9iaiAmJiBvYmpbJ0BzZWF0ZWQuc2NvcmUnXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWF0ZWRTY29yZSA9IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0BzZWF0ZWQuc2NvcmUnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ0B1bnNlYXRlZC5zY29yZScgaW4gb2JqICYmIG9ialsnQHVuc2VhdGVkLnNjb3JlJ10gIT09ICcnKSB7XG4gICAgICAgICAgICBwYXJzZWQudW5zZWF0ZWRTY29yZSA9IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0B1bnNlYXRlZC5zY29yZSddKTtcbiAgICAgICAgfVxuICAgICAgICBpZignQHNjb3JlLnRyZW5kJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5zY29yZVRyZW5kID0gbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQHNjb3JlLnRyZW5kJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdAc2VhdGVkLnNjb3JlLnRyZW5kJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWF0ZWRTY29yZVRyZW5kID0gbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQHNlYXRlZC5zY29yZS50cmVuZCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZignQHVuc2VhdGVkLnNjb3JlLnRyZW5kJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC51bnNlYXRlZFNjb3JlVHJlbmQgPSBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAdW5zZWF0ZWQuc2NvcmUudHJlbmQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ3VzZXIucmF0ZWRieScgaW4gb2JqKSB7XG4gICAgICAgICAgICBsZXQgcmF0ZWRCeSA9IG9ialsndXNlci5yYXRlZGJ5J107XG4gICAgICAgICAgICBwYXJzZWQudXNlclJhdGVkQnkgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG1vZGVsSGVscGVyLmdldEludChyYXRlZEJ5WydAaWQnXSksXG4gICAgICAgICAgICAgICAgc2NvcmU6IG1vZGVsSGVscGVyLmdldEludChyYXRlZEJ5WydAc2NvcmUnXSksXG4gICAgICAgICAgICAgICAgZGF0ZTogbW9kZWxIZWxwZXIuZ2V0RGF0ZShyYXRlZEJ5WydAZGF0ZSddKSxcbiAgICAgICAgICAgICAgICBocmVmOiByYXRlZEJ5WydAaHJlZiddLFxuICAgICAgICAgICAgICAgIHNlYXRlZDogbW9kZWxIZWxwZXIuZ2V0Qm9vbChyYXRlZEJ5WydAc2VhdGVkJ10pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxufTtcbmV4cG9ydCB7cGFnZVJhdGluZ01vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageRating.model.js.map
