'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.groupListModel = undefined;

var _modelHelper = require('./modelHelper');

var _group = require('./group.model');

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

var groupListModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: obj['@count'],
            querycount: obj['@querycount'],
            totalcount: obj['@totalcount'],
            href: obj['@href']
        };
        if ('group' in obj) {
            parsed.group = [];
            var groups = _modelHelper.modelHelper.getArray(obj.group);
            groups.forEach(function (group) {
                parsed.group.push(_group.groupModel.parse(group));
            });
        }
        return parsed;
    }
};
exports.groupListModel = groupListModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ncm91cExpc3QubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxpQkFBaUI7QUFDakIsMEJBQU0sTUFBTTtBQUNSLFlBQUksTUFBTSx5QkFBWSxRQUFaLENBQXFCLElBQXJCLENBQU4sQ0FESTtBQUVSLFlBQUksU0FBUztBQUNULG1CQUFPLElBQUksUUFBSixDQUFQO0FBQ0Esd0JBQVksSUFBSSxhQUFKLENBQVo7QUFDQSx3QkFBWSxJQUFJLGFBQUosQ0FBWjtBQUNBLGtCQUFNLElBQUksT0FBSixDQUFOO1NBSkEsQ0FGSTtBQVFSLFlBQUcsV0FBVyxHQUFYLEVBQWdCO0FBQ2YsbUJBQU8sS0FBUCxHQUFlLEVBQWYsQ0FEZTtBQUVmLGdCQUFJLFNBQVMseUJBQVksUUFBWixDQUFxQixJQUFJLEtBQUosQ0FBOUIsQ0FGVztBQUdmLG1CQUFPLE9BQVAsQ0FBZSxVQUFDLEtBQUQsRUFBVztBQUN0Qix1QkFBTyxLQUFQLENBQWEsSUFBYixDQUFrQixrQkFBVyxLQUFYLENBQWlCLEtBQWpCLENBQWxCLEVBRHNCO2FBQVgsQ0FBZixDQUhlO1NBQW5CO0FBT0EsZUFBTyxNQUFQLENBZlE7S0FESztDQUFqQjtRQW1CSSIsImZpbGUiOiJtb2RlbHMvZ3JvdXBMaXN0Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtncm91cE1vZGVsfSBmcm9tICcuL2dyb3VwLm1vZGVsJztcbmxldCBncm91cExpc3RNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGNvdW50OiBvYmpbJ0Bjb3VudCddLFxuICAgICAgICAgICAgcXVlcnljb3VudDogb2JqWydAcXVlcnljb3VudCddLFxuICAgICAgICAgICAgdG90YWxjb3VudDogb2JqWydAdG90YWxjb3VudCddLFxuICAgICAgICAgICAgaHJlZjogb2JqWydAaHJlZiddXG4gICAgICAgIH07XG4gICAgICAgIGlmKCdncm91cCcgaW4gb2JqKSB7XG4gICAgICAgICAgICBwYXJzZWQuZ3JvdXAgPSBbXTtcbiAgICAgICAgICAgIGxldCBncm91cHMgPSBtb2RlbEhlbHBlci5nZXRBcnJheShvYmouZ3JvdXApO1xuICAgICAgICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmdyb3VwLnB1c2goZ3JvdXBNb2RlbC5wYXJzZShncm91cCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtncm91cExpc3RNb2RlbH07XG4iXX0=
//# sourceMappingURL=groupList.model.js.map
