'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchModel = undefined;

var _modelHelper = require('./modelHelper');

var searchModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var search = {
            ranking: obj['@ranking'],
            queryId: obj['@queryid'],
            queryCount: _modelHelper.modelHelper.getInt(obj['@querycount']),
            recommendationCount: _modelHelper.modelHelper.getInt(obj['@count.recommendations']),
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            result: []
        };
        if ('result' in obj) {
            var results = _modelHelper.modelHelper.getArray(obj.result);
            results.forEach(function (result) {
                search.result.push({
                    author: result.author,
                    content: result.content,
                    dateModified: _modelHelper.modelHelper.getDate(result['date.modified']),
                    id: result.id,
                    mime: result.mime,
                    rank: result.rank,
                    title: result.title,
                    uri: result.uri,
                    uriTrack: result['uri.track'],
                    page: {
                        path: result.page.path,
                        rating: result.page.rating,
                        title: result.page.title,
                        uriUi: result.page['uri.ui']
                    }
                });
            });
        }
        if ('summary' in obj) {
            search.summary = {
                path: obj.summary['@path'],
                results: []
            };
            if ('results' in obj.summary) {
                var _results = _modelHelper.modelHelper.getArray(obj.summary.results);
                _results.forEach(function (result) {
                    search.summary.results.push({
                        path: result['@path'],
                        count: _modelHelper.modelHelper.getInt(result['@count']),
                        title: result['@title']
                    });
                });
            }
        }
        return search;
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

exports.searchModel = searchModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zZWFyY2gubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQSxJQUFJLGNBQWM7QUFDZCwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QscUJBQVMsSUFBSSxVQUFKLENBQVQ7QUFDQSxxQkFBUyxJQUFJLFVBQUosQ0FBVDtBQUNBLHdCQUFZLHlCQUFZLE1BQVosQ0FBbUIsSUFBSSxhQUFKLENBQW5CLENBQVo7QUFDQSxpQ0FBcUIseUJBQVksTUFBWixDQUFtQixJQUFJLHdCQUFKLENBQW5CLENBQXJCO0FBQ0EsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLG9CQUFRLEVBQVI7U0FOQSxDQUZJO0FBVVIsWUFBRyxZQUFZLEdBQVosRUFBaUI7QUFDaEIsZ0JBQUksVUFBVSx5QkFBWSxRQUFaLENBQXFCLElBQUksTUFBSixDQUEvQixDQURZO0FBRWhCLG9CQUFRLE9BQVIsQ0FBZ0IsVUFBQyxNQUFELEVBQVk7QUFDeEIsdUJBQU8sTUFBUCxDQUFjLElBQWQsQ0FBbUI7QUFDZiw0QkFBUSxPQUFPLE1BQVA7QUFDUiw2QkFBUyxPQUFPLE9BQVA7QUFDVCxrQ0FBYyx5QkFBWSxPQUFaLENBQW9CLE9BQU8sZUFBUCxDQUFwQixDQUFkO0FBQ0Esd0JBQUksT0FBTyxFQUFQO0FBQ0osMEJBQU0sT0FBTyxJQUFQO0FBQ04sMEJBQU0sT0FBTyxJQUFQO0FBQ04sMkJBQU8sT0FBTyxLQUFQO0FBQ1AseUJBQUssT0FBTyxHQUFQO0FBQ0wsOEJBQVUsT0FBTyxXQUFQLENBQVY7QUFDQSwwQkFBTTtBQUNGLDhCQUFNLE9BQU8sSUFBUCxDQUFZLElBQVo7QUFDTixnQ0FBUSxPQUFPLElBQVAsQ0FBWSxNQUFaO0FBQ1IsK0JBQU8sT0FBTyxJQUFQLENBQVksS0FBWjtBQUNQLCtCQUFPLE9BQU8sSUFBUCxDQUFZLFFBQVosQ0FBUDtxQkFKSjtpQkFWSixFQUR3QjthQUFaLENBQWhCLENBRmdCO1NBQXBCO0FBc0JBLFlBQUcsYUFBYSxHQUFiLEVBQWtCO0FBQ2pCLG1CQUFPLE9BQVAsR0FBaUI7QUFDYixzQkFBTSxJQUFJLE9BQUosQ0FBWSxPQUFaLENBQU47QUFDQSx5QkFBUyxFQUFUO2FBRkosQ0FEaUI7QUFLakIsZ0JBQUcsYUFBYSxJQUFJLE9BQUosRUFBYTtBQUN6QixvQkFBSSxXQUFVLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxPQUFKLENBQVksT0FBWixDQUEvQixDQURxQjtBQUV6Qix5QkFBUSxPQUFSLENBQWdCLFVBQUMsTUFBRCxFQUFZO0FBQ3hCLDJCQUFPLE9BQVAsQ0FBZSxPQUFmLENBQXVCLElBQXZCLENBQTRCO0FBQ3hCLDhCQUFNLE9BQU8sT0FBUCxDQUFOO0FBQ0EsK0JBQU8seUJBQVksTUFBWixDQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBUDtBQUNBLCtCQUFPLE9BQU8sUUFBUCxDQUFQO3FCQUhKLEVBRHdCO2lCQUFaLENBQWhCLENBRnlCO2FBQTdCO1NBTEo7QUFnQkEsZUFBTyxNQUFQLENBaERRO0tBREU7Q0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW9ESSIsImZpbGUiOiJtb2RlbHMvc2VhcmNoLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xubGV0IHNlYXJjaE1vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgc2VhcmNoID0ge1xuICAgICAgICAgICAgcmFua2luZzogb2JqWydAcmFua2luZyddLFxuICAgICAgICAgICAgcXVlcnlJZDogb2JqWydAcXVlcnlpZCddLFxuICAgICAgICAgICAgcXVlcnlDb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQHF1ZXJ5Y291bnQnXSksXG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbkNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAY291bnQucmVjb21tZW5kYXRpb25zJ10pLFxuICAgICAgICAgICAgY291bnQ6IG1vZGVsSGVscGVyLmdldEludChvYmpbJ0Bjb3VudCddKSxcbiAgICAgICAgICAgIHJlc3VsdDogW11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ3Jlc3VsdCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai5yZXN1bHQpO1xuICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBzZWFyY2gucmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHJlc3VsdC5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBkYXRlTW9kaWZpZWQ6IG1vZGVsSGVscGVyLmdldERhdGUocmVzdWx0WydkYXRlLm1vZGlmaWVkJ10pLFxuICAgICAgICAgICAgICAgICAgICBpZDogcmVzdWx0LmlkLFxuICAgICAgICAgICAgICAgICAgICBtaW1lOiByZXN1bHQubWltZSxcbiAgICAgICAgICAgICAgICAgICAgcmFuazogcmVzdWx0LnJhbmssXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHVyaTogcmVzdWx0LnVyaSxcbiAgICAgICAgICAgICAgICAgICAgdXJpVHJhY2s6IHJlc3VsdFsndXJpLnRyYWNrJ10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHJlc3VsdC5wYWdlLnBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc6IHJlc3VsdC5wYWdlLnJhdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQucGFnZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaVVpOiByZXN1bHQucGFnZVsndXJpLnVpJ11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ3N1bW1hcnknIGluIG9iaikge1xuICAgICAgICAgICAgc2VhcmNoLnN1bW1hcnkgPSB7XG4gICAgICAgICAgICAgICAgcGF0aDogb2JqLnN1bW1hcnlbJ0BwYXRoJ10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZigncmVzdWx0cycgaW4gb2JqLnN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai5zdW1tYXJ5LnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaC5zdW1tYXJ5LnJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiByZXN1bHRbJ0BwYXRoJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbW9kZWxIZWxwZXIuZ2V0SW50KHJlc3VsdFsnQGNvdW50J10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdFsnQHRpdGxlJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlYXJjaDtcbiAgICB9XG59O1xuZXhwb3J0IHtzZWFyY2hNb2RlbH07XG4iXX0=
//# sourceMappingURL=search.model.js.map
