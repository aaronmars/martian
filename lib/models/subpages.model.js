'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subpagesModel = undefined;

var _modelHelper = require('./modelHelper');

var subpagesModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            totalcount: _modelHelper.modelHelper.getInt(obj['@totalcount']),
            count: _modelHelper.modelHelper.getInt(obj['@count']),
            href: obj['@href']
        };
        if ('page.subpage' in obj) {
            var subpages = _modelHelper.modelHelper.getArray(obj['page.subpage']);
            parsed.pageSubpage = [];
            subpages.forEach(function (sp) {
                parsed.pageSubpage.push({
                    id: _modelHelper.modelHelper.getInt(sp['@id']),
                    href: sp['@href'],
                    deleted: _modelHelper.modelHelper.getBool(sp['@deleted']),
                    subpages: _modelHelper.modelHelper.getBool(sp['@subpages']),
                    dateCreated: _modelHelper.modelHelper.getDate(sp['date.created']),
                    language: sp.language,
                    namespace: sp.namespace,
                    path: _modelHelper.modelHelper.getString(sp.path),
                    title: sp.title,
                    uriUi: sp['uri.ui']
                });
            });
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

exports.subpagesModel = subpagesModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zdWJwYWdlcy5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBLElBQUksZ0JBQWdCO0FBQ2hCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCx3QkFBWSx5QkFBWSxNQUFaLENBQW1CLElBQUksYUFBSixDQUFuQixDQUFaO0FBQ0EsbUJBQU8seUJBQVksTUFBWixDQUFtQixJQUFJLFFBQUosQ0FBbkIsQ0FBUDtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO1NBSEEsQ0FGSTtBQU9SLFlBQUcsa0JBQWtCLEdBQWxCLEVBQXVCO0FBQ3RCLGdCQUFJLFdBQVcseUJBQVksUUFBWixDQUFxQixJQUFJLGNBQUosQ0FBckIsQ0FBWCxDQURrQjtBQUV0QixtQkFBTyxXQUFQLEdBQXFCLEVBQXJCLENBRnNCO0FBR3RCLHFCQUFTLE9BQVQsQ0FBaUIsVUFBQyxFQUFELEVBQVE7QUFDckIsdUJBQU8sV0FBUCxDQUFtQixJQUFuQixDQUF3QjtBQUNwQix3QkFBSSx5QkFBWSxNQUFaLENBQW1CLEdBQUcsS0FBSCxDQUFuQixDQUFKO0FBQ0EsMEJBQU0sR0FBRyxPQUFILENBQU47QUFDQSw2QkFBUyx5QkFBWSxPQUFaLENBQW9CLEdBQUcsVUFBSCxDQUFwQixDQUFUO0FBQ0EsOEJBQVUseUJBQVksT0FBWixDQUFvQixHQUFHLFdBQUgsQ0FBcEIsQ0FBVjtBQUNBLGlDQUFhLHlCQUFZLE9BQVosQ0FBb0IsR0FBRyxjQUFILENBQXBCLENBQWI7QUFDQSw4QkFBVSxHQUFHLFFBQUg7QUFDViwrQkFBVyxHQUFHLFNBQUg7QUFDWCwwQkFBTSx5QkFBWSxTQUFaLENBQXNCLEdBQUcsSUFBSCxDQUE1QjtBQUNBLDJCQUFPLEdBQUcsS0FBSDtBQUNQLDJCQUFPLEdBQUcsUUFBSCxDQUFQO2lCQVZKLEVBRHFCO2FBQVIsQ0FBakIsQ0FIc0I7U0FBMUI7QUFrQkEsZUFBTyxNQUFQLENBekJRO0tBREk7Q0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUE2QkkiLCJmaWxlIjoibW9kZWxzL3N1YnBhZ2VzLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xubGV0IHN1YnBhZ2VzTW9kZWwgPSB7XG4gICAgcGFyc2UoZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICB0b3RhbGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAdG90YWxjb3VudCddKSxcbiAgICAgICAgICAgIGNvdW50OiBtb2RlbEhlbHBlci5nZXRJbnQob2JqWydAY291bnQnXSksXG4gICAgICAgICAgICBocmVmOiBvYmpbJ0BocmVmJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ3BhZ2Uuc3VicGFnZScgaW4gb2JqKSB7XG4gICAgICAgICAgICBsZXQgc3VicGFnZXMgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmpbJ3BhZ2Uuc3VicGFnZSddKTtcbiAgICAgICAgICAgIHBhcnNlZC5wYWdlU3VicGFnZSA9IFtdO1xuICAgICAgICAgICAgc3VicGFnZXMuZm9yRWFjaCgoc3ApID0+IHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGFnZVN1YnBhZ2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBtb2RlbEhlbHBlci5nZXRJbnQoc3BbJ0BpZCddKSxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogc3BbJ0BocmVmJ10sXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IG1vZGVsSGVscGVyLmdldEJvb2woc3BbJ0BkZWxldGVkJ10pLFxuICAgICAgICAgICAgICAgICAgICBzdWJwYWdlczogbW9kZWxIZWxwZXIuZ2V0Qm9vbChzcFsnQHN1YnBhZ2VzJ10pLFxuICAgICAgICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogbW9kZWxIZWxwZXIuZ2V0RGF0ZShzcFsnZGF0ZS5jcmVhdGVkJ10pLFxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogc3AubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogc3AubmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBtb2RlbEhlbHBlci5nZXRTdHJpbmcoc3AucGF0aCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzcC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdXJpVWk6IHNwWyd1cmkudWknXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtzdWJwYWdlc01vZGVsfTtcbiJdfQ==
//# sourceMappingURL=subpages.model.js.map
