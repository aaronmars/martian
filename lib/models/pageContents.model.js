'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageContentsModel = undefined;

var _modelHelper = require('./modelHelper');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
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


var pageContentsModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            type: obj['@type'],
            title: obj['@title']
        };
        if ('@unsafe' in obj) {
            parsed.unsafe = _modelHelper.modelHelper.getBool(obj['@unsafe']);
        }
        if ('@draft' in obj) {
            parsed.draft = _modelHelper.modelHelper.getBool(obj['@draft']);
        }
        if (Array.isArray(obj.body)) {
            parsed.body = obj.body[0];
            parsed.targets = pageContentsModel._getTargets(obj.body);
        } else {
            parsed.body = obj.body;
        }
        _modelHelper.modelHelper.addIfDefined(obj.tail, 'tail', parsed);
        return parsed;
    },
    _getTargets: function _getTargets(body) {
        var targets = [];
        for (var i = 1; i < body.length; i++) {
            targets.push(_defineProperty({}, body[i]['@target'], body[i]['#text']));
        }
        return targets;
    }
};
exports.pageContentsModel = pageContentsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlQ29udGVudHMubW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksb0JBQW9CO0FBQ3BCLDBCQUFNLE1BQU07QUFDUixZQUFJLE1BQU0seUJBQVksUUFBWixDQUFxQixJQUFyQixDQUFOLENBREk7QUFFUixZQUFJLFNBQVM7QUFDVCxrQkFBTSxJQUFJLE9BQUosQ0FBTjtBQUNBLG1CQUFPLElBQUksUUFBSixDQUFQO1NBRkEsQ0FGSTtBQU1SLFlBQUcsYUFBYSxHQUFiLEVBQWtCO0FBQ2pCLG1CQUFPLE1BQVAsR0FBZ0IseUJBQVksT0FBWixDQUFvQixJQUFJLFNBQUosQ0FBcEIsQ0FBaEIsQ0FEaUI7U0FBckI7QUFHQSxZQUFHLFlBQVksR0FBWixFQUFpQjtBQUNoQixtQkFBTyxLQUFQLEdBQWUseUJBQVksT0FBWixDQUFvQixJQUFJLFFBQUosQ0FBcEIsQ0FBZixDQURnQjtTQUFwQjtBQUdBLFlBQUcsTUFBTSxPQUFOLENBQWMsSUFBSSxJQUFKLENBQWpCLEVBQTRCO0FBQ3hCLG1CQUFPLElBQVAsR0FBYyxJQUFJLElBQUosQ0FBUyxDQUFULENBQWQsQ0FEd0I7QUFFeEIsbUJBQU8sT0FBUCxHQUFpQixrQkFBa0IsV0FBbEIsQ0FBOEIsSUFBSSxJQUFKLENBQS9DLENBRndCO1NBQTVCLE1BR087QUFDSCxtQkFBTyxJQUFQLEdBQWMsSUFBSSxJQUFKLENBRFg7U0FIUDtBQU1BLGlDQUFZLFlBQVosQ0FBeUIsSUFBSSxJQUFKLEVBQVUsTUFBbkMsRUFBMkMsTUFBM0MsRUFsQlE7QUFtQlIsZUFBTyxNQUFQLENBbkJRO0tBRFE7QUFzQnBCLHNDQUFZLE1BQU07QUFDZCxZQUFJLFVBQVUsRUFBVixDQURVO0FBRWQsYUFBSSxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxNQUFMLEVBQWEsR0FBaEMsRUFBcUM7QUFDakMsb0JBQVEsSUFBUixxQkFDTSxLQUFLLENBQUwsRUFBUSxTQUFSLEdBQXNCLEtBQUssQ0FBTCxFQUFRLE9BQVIsRUFENUIsRUFEaUM7U0FBckM7QUFLQSxlQUFPLE9BQVAsQ0FQYztLQXRCRTtDQUFwQjtRQWdDSSIsImZpbGUiOiJtb2RlbHMvcGFnZUNvbnRlbnRzLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xubGV0IHBhZ2VDb250ZW50c01vZGVsID0ge1xuICAgIHBhcnNlKGRhdGEpIHtcbiAgICAgICAgbGV0IG9iaiA9IG1vZGVsSGVscGVyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkID0ge1xuICAgICAgICAgICAgdHlwZTogb2JqWydAdHlwZSddLFxuICAgICAgICAgICAgdGl0bGU6IG9ialsnQHRpdGxlJ11cbiAgICAgICAgfTtcbiAgICAgICAgaWYoJ0B1bnNhZmUnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLnVuc2FmZSA9IG1vZGVsSGVscGVyLmdldEJvb2wob2JqWydAdW5zYWZlJ10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCdAZHJhZnQnIGluIG9iaikge1xuICAgICAgICAgICAgcGFyc2VkLmRyYWZ0ID0gbW9kZWxIZWxwZXIuZ2V0Qm9vbChvYmpbJ0BkcmFmdCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KG9iai5ib2R5KSkge1xuICAgICAgICAgICAgcGFyc2VkLmJvZHkgPSBvYmouYm9keVswXTtcbiAgICAgICAgICAgIHBhcnNlZC50YXJnZXRzID0gcGFnZUNvbnRlbnRzTW9kZWwuX2dldFRhcmdldHMob2JqLmJvZHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLmJvZHkgPSBvYmouYm9keTtcbiAgICAgICAgfVxuICAgICAgICBtb2RlbEhlbHBlci5hZGRJZkRlZmluZWQob2JqLnRhaWwsICd0YWlsJywgcGFyc2VkKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9LFxuICAgIF9nZXRUYXJnZXRzKGJvZHkpIHtcbiAgICAgICAgbGV0IHRhcmdldHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhcmdldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgWyBib2R5W2ldWydAdGFyZ2V0J10gXTogYm9keVtpXVsnI3RleHQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldHM7XG4gICAgfVxufTtcbmV4cG9ydCB7cGFnZUNvbnRlbnRzTW9kZWx9O1xuIl19
//# sourceMappingURL=pageContents.model.js.map
