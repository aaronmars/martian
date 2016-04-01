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


var _plug = require('./lib/plug');

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
//# sourceMappingURL=data:application/json;base64,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Q1QsYUFEUyxtQkFDVCxDQUFZLFFBQVosRUFBc0I7OEJBRGIscUJBQ2E7O0FBQ2xCLGFBQUssUUFBTCxHQUFnQixRQUFoQixDQURrQjtBQUVsQixhQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsZUFBdEMsQ0FBYixDQUZrQjtLQUF0Qjs7aUJBRFM7OzJDQUtVO0FBQ2YsbUJBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxHQUFpQixJQUFqQixDQUFzQixnQ0FBa0IsS0FBbEIsQ0FBN0IsQ0FEZTs7Ozt3Q0FHSCxNQUFNO0FBQ2xCLG1CQUFPLElBQUksWUFBSixDQUFpQixJQUFqQixFQUF1QixLQUFLLFFBQUwsQ0FBOUIsQ0FEa0I7Ozs7K0JBR2YsTUFBTTtBQUNULGdCQUFHLEtBQUssT0FBTCxDQUFhLE1BQWIsR0FBc0IsZUFBdEIsRUFBdUM7QUFDdEMscUJBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsZUFBMUIsQ0FBZixDQURzQzthQUExQztBQUdBLG1CQUFPLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsR0FBbUMsSUFBbkMsQ0FBd0MsZ0NBQWtCLEtBQWxCLENBQS9DLENBSlM7Ozs7V0FYSiIsImZpbGUiOiJsZWFybmluZ1BhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQbHVnfSBmcm9tICcuL2xpYi9wbHVnJztcbmltcG9ydCB7bGVhcm5pbmdQYXRoTW9kZWx9IGZyb20gJy4vbW9kZWxzL2xlYXJuaW5nUGF0aC5tb2RlbCc7XG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZS5tb2RlbCc7XG5sZXQgbWF4U3VtbWFyeUNvdW50ID0gNTAwO1xuZnVuY3Rpb24gZ2V0U2F2ZVhNTChkYXRhKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gYDx0aXRsZT4ke2RhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPHN1bW1hcnk+JHtkYXRhLnN1bW1hcnl9PC9zdW1tYXJ5PlxuICAgICAgICA8Y2F0ZWdvcnk+JHtkYXRhLmNhdGVnb3J5fTwvY2F0ZWdvcnk+YDtcbiAgICBpZihkYXRhLnBhZ2VzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5wYWdlcykpIHtcbiAgICAgICAgZGF0YS5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IGAke3RlbXBsYXRlfVxuICAgICAgICAgICAgICAgIDxwYWdlcz4ke3BhZ2UuaWR9PC9wYWdlcz5gO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGVtcGxhdGUgPSBgPGxlYXJuaW5ncGF0aD4ke3RlbXBsYXRlfTwvbGVhcm5pbmdwYXRoPmA7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNsYXNzIExlYXJuaW5nUGF0aCB7XG5cbiAgICAvLyBDb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAnbGVhcm5pbmdwYXRocycsIGAke25hbWV9YCk7XG4gICAgfVxuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmdldCgpLnRoZW4obGVhcm5pbmdQYXRoTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8vIGxlYXJuaW5nIHBhdGggb3BlcmF0aW9uc1xuICAgIHVwZGF0ZShjb250ZW50KSB7XG4gICAgICAgIGlmKGNvbnRlbnQuc3VtbWFyeSAmJiBjb250ZW50LnN1bW1hcnkubGVuZ3RoID4gbWF4U3VtbWFyeUNvdW50KSB7XG4gICAgICAgICAgICBjb250ZW50LnN1bW1hcnkgPSBjb250ZW50LnN1bW1hcnkuc3Vic3RyaW5nKDAsIG1heFN1bW1hcnlDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEbyB0aGlzIHdpdGhvdXQgbXVzdGFjaGVcbiAgICAgICAgbGV0IFhNTERhdGEgPSBnZXRTYXZlWE1MKGNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdChgPSR7dGhpcy5fbmFtZX1gKS53aXRoUGFyYW0oJ2VkaXR0aW1lJywgY29udGVudC5lZGl0dGltZSkucG9zdChYTUxEYXRhLCAnYXBwbGljYXRpb24veG1sJykudGhlbihsZWFybmluZ1BhdGhNb2RlbC5wYXJzZSk7XG4gICAgfVxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoYD0ke3RoaXMuX25hbWV9YCkuZGVsKCk7XG4gICAgfVxuXG4gICAgLy8gUGFnZSBvcGVyYXRpb25zXG4gICAgYWRkUGFnZShwYWdlSWQsIGVkaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KGA9JHt0aGlzLl9uYW1lfWAsICdwYWdlcycsIHBhZ2VJZCkud2l0aFBhcmFtKCdlZGl0dGltZScsIGVkaXRUaW1lKS5wb3N0KCkudGhlbihwYWdlTW9kZWwucGFyc2UpO1xuICAgIH1cbiAgICByZW1vdmVQYWdlKHBhZ2VJZCwgZWRpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoYD0ke3RoaXMuX25hbWV9YCwgJ3BhZ2VzJywgcGFnZUlkKS53aXRoUGFyYW0oJ2VkaXR0aW1lJywgZWRpdFRpbWUpLmRlbCgpO1xuICAgIH1cbiAgICByZW9yZGVyUGFnZShwYWdlSWQsIGFmdGVySWQsIGVkaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KGA9JHt0aGlzLl9uYW1lfWAsICdwYWdlcycsIHBhZ2VJZCwgJ29yZGVyJykud2l0aFBhcmFtcyh7IGVkaXR0aW1lOiBlZGl0VGltZSwgYWZ0ZXJJZDogYWZ0ZXJJZCB9KS5wb3N0KCkudGhlbihsZWFybmluZ1BhdGhNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExlYXJuaW5nUGF0aE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fcGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2xlYXJuaW5ncGF0aHMnKTtcbiAgICB9XG4gICAgZ2V0TGVhcm5pbmdQYXRocygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuZ2V0KCkudGhlbihsZWFybmluZ1BhdGhNb2RlbC5wYXJzZSk7XG4gICAgfVxuICAgIGdldExlYXJuaW5nUGF0aChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGVhcm5pbmdQYXRoKG5hbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbiAgICBjcmVhdGUoZGF0YSkge1xuICAgICAgICBpZihkYXRhLnN1bW1hcnkubGVuZ3RoID4gbWF4U3VtbWFyeUNvdW50KSB7XG4gICAgICAgICAgICBkYXRhLnN1bW1hcnkgPSBkYXRhLnN1bW1hcnkuc3Vic3RyaW5nKDAsIG1heFN1bW1hcnlDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcud2l0aFBhcmFtcyhkYXRhKS5wb3N0KCkudGhlbihsZWFybmluZ1BhdGhNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=learningPath.js.map
