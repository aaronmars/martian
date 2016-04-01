'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LearningPathManager = exports.LearningPath = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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


var _plug = require('./utility/plug');

var _learningPath = require('./models/learningPath.model');

var _page = require('./models/page.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maxSummaryCount = 500;
function getSaveXML(data) {
    var template = '<title>' + data.title + '</title>\n        <summary>' + data.summary + '</summary>\n        <category>' + data.category + '</category>';
    if (data.pages && Array.isArray(data.pages)) {
        data.pages.forEach(function (page) {
            template = template + '\n                <pages>' + page.id + '</pages>';
        });
    }
    template = '<learningpath>' + template + '</learningpath>';
    return template;
}

var LearningPath = exports.LearningPath = function () {

    // Constructor

    function LearningPath(name, settings) {
        _classCallCheck(this, LearningPath);

        this._name = name;
        this._plug = new _plug.Plug(settings).at('@api', 'deki', 'learningpaths', '' + name);
    }

    _createClass(LearningPath, [{
        key: 'getInfo',
        value: function getInfo() {
            return this._plug.get().then(_learningPath.learningPathModel.parse);
        }

        // learning path operations

    }, {
        key: 'update',
        value: function update(content) {
            if (content.summary && content.summary.length > maxSummaryCount) {
                content.summary = content.summary.substring(0, maxSummaryCount);
            }

            // Do this without mustache
            var XMLData = getSaveXML(content);
            return this._plug.at('=' + this._name).withParam('edittime', content.edittime).post(XMLData, 'application/xml').then(_learningPath.learningPathModel.parse);
        }
    }, {
        key: 'remove',
        value: function remove() {
            return this._plug.at('=' + this._name).del();
        }

        // Page operations

    }, {
        key: 'addPage',
        value: function addPage(pageId, editTime) {
            return this._plug.at('=' + this._name, 'pages', pageId).withParam('edittime', editTime).post().then(_page.pageModel.parse);
        }
    }, {
        key: 'removePage',
        value: function removePage(pageId, editTime) {
            return this._plug.at('=' + this._name, 'pages', pageId).withParam('edittime', editTime).del();
        }
    }, {
        key: 'reorderPage',
        value: function reorderPage(pageId, afterId, editTime) {
            return this._plug.at('=' + this._name, 'pages', pageId, 'order').withParams({ edittime: editTime, afterId: afterId }).post().then(_learningPath.learningPathModel.parse);
        }
    }]);

    return LearningPath;
}();

var LearningPathManager = exports.LearningPathManager = function () {
    function LearningPathManager(settings) {
        _classCallCheck(this, LearningPathManager);

        this.settings = settings;
        this._plug = new _plug.Plug(settings).at('@api', 'deki', 'learningpaths');
    }

    _createClass(LearningPathManager, [{
        key: 'getLearningPaths',
        value: function getLearningPaths() {
            return this._plug.get().then(_learningPath.learningPathModel.parse);
        }
    }, {
        key: 'getLearningPath',
        value: function getLearningPath(name) {
            return new LearningPath(name, this.settings);
        }
    }, {
        key: 'create',
        value: function create(data) {
            if (data.summary.length > maxSummaryCount) {
                data.summary = data.summary.substring(0, maxSummaryCount);
            }
            return this._plug.withParams(data).post().then(_learningPath.learningPathModel.parse);
        }
    }]);

    return LearningPathManager;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFJLGtCQUFrQixHQUFsQjtBQUNKLFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN0QixRQUFJLHVCQUFxQixLQUFLLEtBQUwsbUNBQ1YsS0FBSyxPQUFMLHNDQUNDLEtBQUssUUFBTCxnQkFGWixDQURrQjtBQUl0QixRQUFHLEtBQUssS0FBTCxJQUFjLE1BQU0sT0FBTixDQUFjLEtBQUssS0FBTCxDQUE1QixFQUF5QztBQUN4QyxhQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFVBQUMsSUFBRCxFQUFVO0FBQ3pCLHVCQUFjLHlDQUNELEtBQUssRUFBTCxhQURiLENBRHlCO1NBQVYsQ0FBbkIsQ0FEd0M7S0FBNUM7QUFNQSxrQ0FBNEIsNEJBQTVCLENBVnNCO0FBV3RCLFdBQU8sUUFBUCxDQVhzQjtDQUExQjs7SUFhYTs7OztBQUdULGFBSFMsWUFHVCxDQUFZLElBQVosRUFBa0IsUUFBbEIsRUFBNEI7OEJBSG5CLGNBR21COztBQUN4QixhQUFLLEtBQUwsR0FBYSxJQUFiLENBRHdCO0FBRXhCLGFBQUssS0FBTCxHQUFhLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxlQUF0QyxPQUEwRCxJQUExRCxDQUFiLENBRndCO0tBQTVCOztpQkFIUzs7a0NBT0M7QUFDTixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQWlCLElBQWpCLENBQXNCLGdDQUFrQixLQUFsQixDQUE3QixDQURNOzs7Ozs7OytCQUtILFNBQVM7QUFDWixnQkFBRyxRQUFRLE9BQVIsSUFBbUIsUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLGVBQXpCLEVBQTBDO0FBQzVELHdCQUFRLE9BQVIsR0FBa0IsUUFBUSxPQUFSLENBQWdCLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCLGVBQTdCLENBQWxCLENBRDREO2FBQWhFOzs7QUFEWSxnQkFNUixVQUFVLFdBQVcsT0FBWCxDQUFWLENBTlE7QUFPWixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLE9BQWtCLEtBQUssS0FBTCxDQUFsQixDQUFnQyxTQUFoQyxDQUEwQyxVQUExQyxFQUFzRCxRQUFRLFFBQVIsQ0FBdEQsQ0FBd0UsSUFBeEUsQ0FBNkUsT0FBN0UsRUFBc0YsaUJBQXRGLEVBQXlHLElBQXpHLENBQThHLGdDQUFrQixLQUFsQixDQUFySCxDQVBZOzs7O2lDQVNQO0FBQ0wsbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxPQUFrQixLQUFLLEtBQUwsQ0FBbEIsQ0FBZ0MsR0FBaEMsRUFBUCxDQURLOzs7Ozs7O2dDQUtELFFBQVEsVUFBVTtBQUN0QixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLE9BQWtCLEtBQUssS0FBTCxFQUFjLE9BQWhDLEVBQXlDLE1BQXpDLEVBQWlELFNBQWpELENBQTJELFVBQTNELEVBQXVFLFFBQXZFLEVBQWlGLElBQWpGLEdBQXdGLElBQXhGLENBQTZGLGdCQUFVLEtBQVYsQ0FBcEcsQ0FEc0I7Ozs7bUNBR2YsUUFBUSxVQUFVO0FBQ3pCLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsT0FBa0IsS0FBSyxLQUFMLEVBQWMsT0FBaEMsRUFBeUMsTUFBekMsRUFBaUQsU0FBakQsQ0FBMkQsVUFBM0QsRUFBdUUsUUFBdkUsRUFBaUYsR0FBakYsRUFBUCxDQUR5Qjs7OztvQ0FHakIsUUFBUSxTQUFTLFVBQVU7QUFDbkMsbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxPQUFrQixLQUFLLEtBQUwsRUFBYyxPQUFoQyxFQUF5QyxNQUF6QyxFQUFpRCxPQUFqRCxFQUEwRCxVQUExRCxDQUFxRSxFQUFFLFVBQVUsUUFBVixFQUFvQixTQUFTLE9BQVQsRUFBM0YsRUFBK0csSUFBL0csR0FBc0gsSUFBdEgsQ0FBMkgsZ0NBQWtCLEtBQWxCLENBQWxJLENBRG1DOzs7O1dBaEM5Qjs7O0lBb0NBO0FBQ1QsYUFEUyxtQkFDVCxDQUFZLFFBQVosRUFBc0I7OEJBRGIscUJBQ2E7O0FBQ2xCLGFBQUssUUFBTCxHQUFnQixRQUFoQixDQURrQjtBQUVsQixhQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsZUFBdEMsQ0FBYixDQUZrQjtLQUF0Qjs7aUJBRFM7OzJDQUtVO0FBQ2YsbUJBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxHQUFpQixJQUFqQixDQUFzQixnQ0FBa0IsS0FBbEIsQ0FBN0IsQ0FEZTs7Ozt3Q0FHSCxNQUFNO0FBQ2xCLG1CQUFPLElBQUksWUFBSixDQUFpQixJQUFqQixFQUF1QixLQUFLLFFBQUwsQ0FBOUIsQ0FEa0I7Ozs7K0JBR2YsTUFBTTtBQUNULGdCQUFHLEtBQUssT0FBTCxDQUFhLE1BQWIsR0FBc0IsZUFBdEIsRUFBdUM7QUFDdEMscUJBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsZUFBMUIsQ0FBZixDQURzQzthQUExQztBQUdBLG1CQUFPLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsR0FBbUMsSUFBbkMsQ0FBd0MsZ0NBQWtCLEtBQWxCLENBQS9DLENBSlM7Ozs7V0FYSiIsImZpbGUiOiJsZWFybmluZ1BhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL3V0aWxpdHkvcGx1Zyc7XG5pbXBvcnQge2xlYXJuaW5nUGF0aE1vZGVsfSBmcm9tICcuL21vZGVscy9sZWFybmluZ1BhdGgubW9kZWwnO1xuaW1wb3J0IHtwYWdlTW9kZWx9IGZyb20gJy4vbW9kZWxzL3BhZ2UubW9kZWwnO1xubGV0IG1heFN1bW1hcnlDb3VudCA9IDUwMDtcbmZ1bmN0aW9uIGdldFNhdmVYTUwoZGF0YSkge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGA8dGl0bGU+JHtkYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxzdW1tYXJ5PiR7ZGF0YS5zdW1tYXJ5fTwvc3VtbWFyeT5cbiAgICAgICAgPGNhdGVnb3J5PiR7ZGF0YS5jYXRlZ29yeX08L2NhdGVnb3J5PmA7XG4gICAgaWYoZGF0YS5wYWdlcyAmJiBBcnJheS5pc0FycmF5KGRhdGEucGFnZXMpKSB7XG4gICAgICAgIGRhdGEucGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSBgJHt0ZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICA8cGFnZXM+JHtwYWdlLmlkfTwvcGFnZXM+YDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRlbXBsYXRlID0gYDxsZWFybmluZ3BhdGg+JHt0ZW1wbGF0ZX08L2xlYXJuaW5ncGF0aD5gO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cbmV4cG9ydCBjbGFzcyBMZWFybmluZ1BhdGgge1xuXG4gICAgLy8gQ29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fcGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2xlYXJuaW5ncGF0aHMnLCBgJHtuYW1lfWApO1xuICAgIH1cbiAgICBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5nZXQoKS50aGVuKGxlYXJuaW5nUGF0aE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvLyBsZWFybmluZyBwYXRoIG9wZXJhdGlvbnNcbiAgICB1cGRhdGUoY29udGVudCkge1xuICAgICAgICBpZihjb250ZW50LnN1bW1hcnkgJiYgY29udGVudC5zdW1tYXJ5Lmxlbmd0aCA+IG1heFN1bW1hcnlDb3VudCkge1xuICAgICAgICAgICAgY29udGVudC5zdW1tYXJ5ID0gY29udGVudC5zdW1tYXJ5LnN1YnN0cmluZygwLCBtYXhTdW1tYXJ5Q291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG8gdGhpcyB3aXRob3V0IG11c3RhY2hlXG4gICAgICAgIGxldCBYTUxEYXRhID0gZ2V0U2F2ZVhNTChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoYD0ke3RoaXMuX25hbWV9YCkud2l0aFBhcmFtKCdlZGl0dGltZScsIGNvbnRlbnQuZWRpdHRpbWUpLnBvc3QoWE1MRGF0YSwgJ2FwcGxpY2F0aW9uL3htbCcpLnRoZW4obGVhcm5pbmdQYXRoTW9kZWwucGFyc2UpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KGA9JHt0aGlzLl9uYW1lfWApLmRlbCgpO1xuICAgIH1cblxuICAgIC8vIFBhZ2Ugb3BlcmF0aW9uc1xuICAgIGFkZFBhZ2UocGFnZUlkLCBlZGl0VGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdChgPSR7dGhpcy5fbmFtZX1gLCAncGFnZXMnLCBwYWdlSWQpLndpdGhQYXJhbSgnZWRpdHRpbWUnLCBlZGl0VGltZSkucG9zdCgpLnRoZW4ocGFnZU1vZGVsLnBhcnNlKTtcbiAgICB9XG4gICAgcmVtb3ZlUGFnZShwYWdlSWQsIGVkaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KGA9JHt0aGlzLl9uYW1lfWAsICdwYWdlcycsIHBhZ2VJZCkud2l0aFBhcmFtKCdlZGl0dGltZScsIGVkaXRUaW1lKS5kZWwoKTtcbiAgICB9XG4gICAgcmVvcmRlclBhZ2UocGFnZUlkLCBhZnRlcklkLCBlZGl0VGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdChgPSR7dGhpcy5fbmFtZX1gLCAncGFnZXMnLCBwYWdlSWQsICdvcmRlcicpLndpdGhQYXJhbXMoeyBlZGl0dGltZTogZWRpdFRpbWUsIGFmdGVySWQ6IGFmdGVySWQgfSkucG9zdCgpLnRoZW4obGVhcm5pbmdQYXRoTW9kZWwucGFyc2UpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZWFybmluZ1BhdGhNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdsZWFybmluZ3BhdGhzJyk7XG4gICAgfVxuICAgIGdldExlYXJuaW5nUGF0aHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmdldCgpLnRoZW4obGVhcm5pbmdQYXRoTW9kZWwucGFyc2UpO1xuICAgIH1cbiAgICBnZXRMZWFybmluZ1BhdGgobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IExlYXJuaW5nUGF0aChuYW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG4gICAgY3JlYXRlKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YS5zdW1tYXJ5Lmxlbmd0aCA+IG1heFN1bW1hcnlDb3VudCkge1xuICAgICAgICAgICAgZGF0YS5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5LnN1YnN0cmluZygwLCBtYXhTdW1tYXJ5Q291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLndpdGhQYXJhbXMoZGF0YSkucG9zdCgpLnRoZW4obGVhcm5pbmdQYXRoTW9kZWwucGFyc2UpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=learningPath.js.map
