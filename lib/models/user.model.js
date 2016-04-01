'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userModel = undefined;

var _modelHelper = require('./modelHelper');

var _page = require('./page.model');

var _permissions = require('./permissions.model');

var userModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            id: _modelHelper.modelHelper.getInt(obj['@id']),
            wikiId: obj['@wikiid'],
            href: obj['@href'],
            dateCreated: _modelHelper.modelHelper.getDate(obj['date.created']),
            email: obj.email,
            fullname: obj.fullname,
            username: obj.username,
            nick: obj.nick,
            status: obj.status
        };
        if (typeof obj['license.seat'] === 'string') {
            parsed.seated = _modelHelper.modelHelper.getBool(obj['license.seat']);
            parsed.siteOwner = false;
        } else {
            parsed.seated = _modelHelper.modelHelper.getBool(_modelHelper.modelHelper.getString(obj['license.seat']));
            parsed.siteOwner = _modelHelper.modelHelper.getBool(obj['license.seat']['@owner']);
        }
        if ('date.lastlogin' in obj) {
            parsed.dateLastLogin = _modelHelper.modelHelper.getDate(obj['date.lastlogin']);
        }
        if ('page.home' in obj) {
            parsed.pageHome = _page.pageModel.parse(obj['page.home']);
        }
        if ('permissions.user' in obj) {
            parsed.userPermissions = _permissions.permissionsModel.parse(obj['permissions.user']);
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

exports.userModel = userModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyLm1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBSSxZQUFZO0FBQ1osV0FBTyxlQUFTLElBQVQsRUFBZTtBQUNsQixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBRGM7QUFFbEIsWUFBSSxTQUFTO0FBQ1QsZ0JBQUkseUJBQVksTUFBWixDQUFtQixJQUFJLEtBQUosQ0FBbkIsQ0FBSjtBQUNBLG9CQUFRLElBQUksU0FBSixDQUFSO0FBQ0Esa0JBQU0sSUFBSSxPQUFKLENBQU47QUFDQSx5QkFBYSx5QkFBWSxPQUFaLENBQW9CLElBQUksY0FBSixDQUFwQixDQUFiO0FBQ0EsbUJBQU8sSUFBSSxLQUFKO0FBQ1Asc0JBQVUsSUFBSSxRQUFKO0FBQ1Ysc0JBQVUsSUFBSSxRQUFKO0FBQ1Ysa0JBQU0sSUFBSSxJQUFKO0FBQ04sb0JBQVEsSUFBSSxNQUFKO1NBVFIsQ0FGYztBQWFsQixZQUFHLE9BQU8sSUFBSSxjQUFKLENBQVAsS0FBK0IsUUFBL0IsRUFBeUM7QUFDeEMsbUJBQU8sTUFBUCxHQUFnQix5QkFBWSxPQUFaLENBQW9CLElBQUksY0FBSixDQUFwQixDQUFoQixDQUR3QztBQUV4QyxtQkFBTyxTQUFQLEdBQW1CLEtBQW5CLENBRndDO1NBQTVDLE1BR087QUFDSCxtQkFBTyxNQUFQLEdBQWdCLHlCQUFZLE9BQVosQ0FBb0IseUJBQVksU0FBWixDQUFzQixJQUFJLGNBQUosQ0FBdEIsQ0FBcEIsQ0FBaEIsQ0FERztBQUVILG1CQUFPLFNBQVAsR0FBbUIseUJBQVksT0FBWixDQUFvQixJQUFJLGNBQUosRUFBb0IsUUFBcEIsQ0FBcEIsQ0FBbkIsQ0FGRztTQUhQO0FBT0EsWUFBRyxvQkFBb0IsR0FBcEIsRUFBeUI7QUFDeEIsbUJBQU8sYUFBUCxHQUF1Qix5QkFBWSxPQUFaLENBQW9CLElBQUksZ0JBQUosQ0FBcEIsQ0FBdkIsQ0FEd0I7U0FBNUI7QUFHQSxZQUFHLGVBQWUsR0FBZixFQUFvQjtBQUNuQixtQkFBTyxRQUFQLEdBQWtCLGdCQUFVLEtBQVYsQ0FBZ0IsSUFBSSxXQUFKLENBQWhCLENBQWxCLENBRG1CO1NBQXZCO0FBR0EsWUFBRyxzQkFBc0IsR0FBdEIsRUFBMkI7QUFDMUIsbUJBQU8sZUFBUCxHQUF5Qiw4QkFBaUIsS0FBakIsQ0FBdUIsSUFBSSxrQkFBSixDQUF2QixDQUF6QixDQUQwQjtTQUE5QjtBQUdBLGVBQU8sTUFBUCxDQTdCa0I7S0FBZjtDQURQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUNJIiwiZmlsZSI6Im1vZGVscy91c2VyLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vcGFnZS5tb2RlbCc7XG5pbXBvcnQge3Blcm1pc3Npb25zTW9kZWx9IGZyb20gJy4vcGVybWlzc2lvbnMubW9kZWwnO1xubGV0IHVzZXJNb2RlbCA9IHtcbiAgICBwYXJzZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsZXQgb2JqID0gbW9kZWxIZWxwZXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgIGxldCBwYXJzZWQgPSB7XG4gICAgICAgICAgICBpZDogbW9kZWxIZWxwZXIuZ2V0SW50KG9ialsnQGlkJ10pLFxuICAgICAgICAgICAgd2lraUlkOiBvYmpbJ0B3aWtpaWQnXSxcbiAgICAgICAgICAgIGhyZWY6IG9ialsnQGhyZWYnXSxcbiAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBtb2RlbEhlbHBlci5nZXREYXRlKG9ialsnZGF0ZS5jcmVhdGVkJ10pLFxuICAgICAgICAgICAgZW1haWw6IG9iai5lbWFpbCxcbiAgICAgICAgICAgIGZ1bGxuYW1lOiBvYmouZnVsbG5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogb2JqLnVzZXJuYW1lLFxuICAgICAgICAgICAgbmljazogb2JqLm5pY2ssXG4gICAgICAgICAgICBzdGF0dXM6IG9iai5zdGF0dXNcbiAgICAgICAgfTtcbiAgICAgICAgaWYodHlwZW9mIG9ialsnbGljZW5zZS5zZWF0J10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwYXJzZWQuc2VhdGVkID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ2xpY2Vuc2Uuc2VhdCddKTtcbiAgICAgICAgICAgIHBhcnNlZC5zaXRlT3duZXIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWF0ZWQgPSBtb2RlbEhlbHBlci5nZXRCb29sKG1vZGVsSGVscGVyLmdldFN0cmluZyhvYmpbJ2xpY2Vuc2Uuc2VhdCddKSk7XG4gICAgICAgICAgICBwYXJzZWQuc2l0ZU93bmVyID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ2xpY2Vuc2Uuc2VhdCddWydAb3duZXInXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoJ2RhdGUubGFzdGxvZ2luJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC5kYXRlTGFzdExvZ2luID0gbW9kZWxIZWxwZXIuZ2V0RGF0ZShvYmpbJ2RhdGUubGFzdGxvZ2luJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdwYWdlLmhvbWUnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnBhZ2VIb21lID0gcGFnZU1vZGVsLnBhcnNlKG9ialsncGFnZS5ob21lJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdwZXJtaXNzaW9ucy51c2VyJyBpbiBvYmopIHtcbiAgICAgICAgICAgIHBhcnNlZC51c2VyUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9uc01vZGVsLnBhcnNlKG9ialsncGVybWlzc2lvbnMudXNlciddKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbn07XG5leHBvcnQge3VzZXJNb2RlbH07XG4iXX0=
//# sourceMappingURL=user.model.js.map
