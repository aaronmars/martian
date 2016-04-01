'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
var utility = exports.utility = {
    xmlRequestType: 'application/xml; charset=utf-8',
    textRequestType: 'text/plain; charset=utf-8',
    jsonRequestType: 'application/json; charset=utf-8',
    searchEscape: function searchEscape(query) {
        var result = query.toString();
        var charArr = ['\\', '+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':'];
        charArr.forEach(function (c) {
            var regex = new RegExp('\\' + c, 'g');
            result = result.replace(regex, '\\' + c);
        });
        return result;
    },
    getResourceId: function getResourceId(id) {
        var defaultId = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var resourceId = null;
        if (typeof id === 'string' && id !== defaultId) {
            resourceId = '=' + encodeURIComponent(encodeURIComponent(id));
        } else {
            resourceId = id;
        }
        return resourceId;
    },
    getFilenameId: function getFilenameId(filename) {
        if (typeof filename !== 'string') {
            throw new Error('The filename must be a string');
        }
        var encodedName = encodeURIComponent(encodeURIComponent(filename));
        if (filename.indexOf('.') <= 0) {

            // File name has no dot (or the dot is at the first position).
            // Assume that means it doesn't have an extension.
            encodedName = '=' + encodedName;
        }
        return encodedName;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkvdXRpbGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxJQUFJLDRCQUFVO0FBQ2pCLG9CQUFnQixnQ0FBaEI7QUFDQSxxQkFBaUIsMkJBQWpCO0FBQ0EscUJBQWlCLGlDQUFqQjtBQUNBLHdDQUFhLE9BQU87QUFDaEIsWUFBSSxTQUFTLE1BQU0sUUFBTixFQUFULENBRFk7QUFFaEIsWUFBSSxVQUFVLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDLEVBQXNDLEdBQXRDLEVBQTJDLEdBQTNDLEVBQWdELEdBQWhELEVBQXFELEdBQXJELEVBQTBELEdBQTFELEVBQStELEdBQS9ELEVBQW9FLEdBQXBFLEVBQXlFLEdBQXpFLEVBQThFLEdBQTlFLEVBQW1GLEdBQW5GLEVBQXdGLEdBQXhGLENBQVYsQ0FGWTtBQUdoQixnQkFBUSxPQUFSLENBQWdCLFVBQUMsQ0FBRCxFQUFPO0FBQ25CLGdCQUFJLFFBQVEsSUFBSSxNQUFKLENBQVcsT0FBTyxDQUFQLEVBQVUsR0FBckIsQ0FBUixDQURlO0FBRW5CLHFCQUFTLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsT0FBTyxDQUFQLENBQS9CLENBRm1CO1NBQVAsQ0FBaEIsQ0FIZ0I7QUFPaEIsZUFBTyxNQUFQLENBUGdCO0tBSkg7QUFhakIsMENBQWMsSUFBc0I7WUFBbEIsa0VBQVksb0JBQU07O0FBQ2hDLFlBQUksYUFBYSxJQUFiLENBRDRCO0FBRWhDLFlBQUcsT0FBTyxFQUFQLEtBQWMsUUFBZCxJQUEwQixPQUFPLFNBQVAsRUFBa0I7QUFDM0MsK0JBQWlCLG1CQUFtQixtQkFBbUIsRUFBbkIsQ0FBbkIsQ0FBakIsQ0FEMkM7U0FBL0MsTUFFTztBQUNILHlCQUFhLEVBQWIsQ0FERztTQUZQO0FBS0EsZUFBTyxVQUFQLENBUGdDO0tBYm5CO0FBc0JqQiwwQ0FBYyxVQUFVO0FBQ3BCLFlBQUcsT0FBTyxRQUFQLEtBQW9CLFFBQXBCLEVBQThCO0FBQzdCLGtCQUFNLElBQUksS0FBSixDQUFVLCtCQUFWLENBQU4sQ0FENkI7U0FBakM7QUFHQSxZQUFJLGNBQWMsbUJBQW1CLG1CQUFtQixRQUFuQixDQUFuQixDQUFkLENBSmdCO0FBS3BCLFlBQUcsU0FBUyxPQUFULENBQWlCLEdBQWpCLEtBQXlCLENBQXpCLEVBQTRCOzs7O0FBSTNCLGdDQUFrQixXQUFsQixDQUoyQjtTQUEvQjtBQU1BLGVBQU8sV0FBUCxDQVhvQjtLQXRCUDtDQUFWIiwiZmlsZSI6InV0aWxpdHkvdXRpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgbGV0IHV0aWxpdHkgPSB7XG4gICAgeG1sUmVxdWVzdFR5cGU6ICdhcHBsaWNhdGlvbi94bWw7IGNoYXJzZXQ9dXRmLTgnLFxuICAgIHRleHRSZXF1ZXN0VHlwZTogJ3RleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgnLFxuICAgIGpzb25SZXF1ZXN0VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIHNlYXJjaEVzY2FwZShxdWVyeSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcXVlcnkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGNoYXJBcnIgPSBbICdcXFxcJywgJysnLCAnLScsICcmJywgJ3wnLCAnIScsICcoJywgJyknLCAneycsICd9JywgJ1snLCAnXScsICdeJywgJ1wiJywgJ34nLCAnKicsICc/JywgJzonIF07XG4gICAgICAgIGNoYXJBcnIuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXFxcXCcgKyBjLCAnZycpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UocmVnZXgsICdcXFxcJyArIGMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGdldFJlc291cmNlSWQoaWQsIGRlZmF1bHRJZCA9IG51bGwpIHtcbiAgICAgICAgbGV0IHJlc291cmNlSWQgPSBudWxsO1xuICAgICAgICBpZih0eXBlb2YgaWQgPT09ICdzdHJpbmcnICYmIGlkICE9PSBkZWZhdWx0SWQpIHtcbiAgICAgICAgICAgIHJlc291cmNlSWQgPSBgPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudChpZCkpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvdXJjZUlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlSWQ7XG4gICAgfSxcbiAgICBnZXRGaWxlbmFtZUlkKGZpbGVuYW1lKSB7XG4gICAgICAgIGlmKHR5cGVvZiBmaWxlbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpbGVuYW1lIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVuYW1lKSk7XG4gICAgICAgIGlmKGZpbGVuYW1lLmluZGV4T2YoJy4nKSA8PSAwKSB7XG5cbiAgICAgICAgICAgIC8vIEZpbGUgbmFtZSBoYXMgbm8gZG90IChvciB0aGUgZG90IGlzIGF0IHRoZSBmaXJzdCBwb3NpdGlvbikuXG4gICAgICAgICAgICAvLyBBc3N1bWUgdGhhdCBtZWFucyBpdCBkb2Vzbid0IGhhdmUgYW4gZXh0ZW5zaW9uLlxuICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBgPSR7ZW5jb2RlZE5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5jb2RlZE5hbWU7XG4gICAgfVxufTtcbiJdfQ==
//# sourceMappingURL=utility.js.map
