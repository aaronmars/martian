'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageMoveModel = undefined;

var _modelHelper = require('./modelHelper');

var _page = require('./page.model');

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

var pageMoveModel = {
    parse: function parse(data) {
        var obj = _modelHelper.modelHelper.fromJson(data);
        var parsed = {
            count: obj['@count'],
            pages: []
        };
        if ('page' in obj) {
            var pages = _modelHelper.modelHelper.getArray(obj.page);
            pages.forEach(function (page) {
                parsed.pages.push(_page.pageModel.parse(page));
            });
        }
        return parsed;
    }
};
exports.pageMoveModel = pageMoveModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWdlTW92ZS5tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLGdCQUFnQjtBQUNoQiwwQkFBTSxNQUFNO0FBQ1IsWUFBSSxNQUFNLHlCQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBTixDQURJO0FBRVIsWUFBSSxTQUFTO0FBQ1QsbUJBQU8sSUFBSSxRQUFKLENBQVA7QUFDQSxtQkFBTyxFQUFQO1NBRkEsQ0FGSTtBQU1SLFlBQUcsVUFBVSxHQUFWLEVBQWU7QUFDZCxnQkFBSSxRQUFRLHlCQUFZLFFBQVosQ0FBcUIsSUFBSSxJQUFKLENBQTdCLENBRFU7QUFFZCxrQkFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsdUJBQU8sS0FBUCxDQUFhLElBQWIsQ0FBa0IsZ0JBQVUsS0FBVixDQUFnQixJQUFoQixDQUFsQixFQURvQjthQUFWLENBQWQsQ0FGYztTQUFsQjtBQU1BLGVBQU8sTUFBUCxDQVpRO0tBREk7Q0FBaEI7UUFnQkkiLCJmaWxlIjoibW9kZWxzL3BhZ2VNb3ZlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7bW9kZWxIZWxwZXJ9IGZyb20gJy4vbW9kZWxIZWxwZXInO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vcGFnZS5tb2RlbCc7XG5sZXQgcGFnZU1vdmVNb2RlbCA9IHtcbiAgICBwYXJzZShkYXRhKSB7XG4gICAgICAgIGxldCBvYmogPSBtb2RlbEhlbHBlci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHtcbiAgICAgICAgICAgIGNvdW50OiBvYmpbJ0Bjb3VudCddLFxuICAgICAgICAgICAgcGFnZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmKCdwYWdlJyBpbiBvYmopIHtcbiAgICAgICAgICAgIGxldCBwYWdlcyA9IG1vZGVsSGVscGVyLmdldEFycmF5KG9iai5wYWdlKTtcbiAgICAgICAgICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGFnZXMucHVzaChwYWdlTW9kZWwucGFyc2UocGFnZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG59O1xuZXhwb3J0IHtwYWdlTW92ZU1vZGVsfTtcbiJdfQ==
//# sourceMappingURL=pageMove.model.js.map
