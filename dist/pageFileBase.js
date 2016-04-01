'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageFileBase = undefined;

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


var _utility = require('./lib/utility');

var _file = require('./models/file.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A base class for managing file attachments on both published pages and drafts.  This class can not be instantiated directly.
 */

var PageFileBase = exports.PageFileBase = function () {
    function PageFileBase(pageId, filename) {
        _classCallCheck(this, PageFileBase);

        if (this.constructor.name === 'PageFileBase') {
            throw new TypeError('PageFileBase must not be constructed directly.  Use one of PageFile() or DraftFile()');
        }
        this._pageId = _utility.utility.getResourceId(pageId, 'home');
        this._filename = _utility.utility.getFilenameId(filename);
    }

    /**
     * Get the URI for direct access to the file attachment.
     * @returns {String} - The file URI.
     */


    _createClass(PageFileBase, [{
        key: 'getFileUri',
        value: function getFileUri() {
            return this._plug.getUrl();
        }

        /**
         * Gets the information for the file attachment.
         * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the file information.
         */

    }, {
        key: 'getInfo',
        value: function getInfo() {
            return this._plug.at('info').get().then(_file.fileModel.parse);
        }

        /**
         * Delete the file attachment fron the page.
         * @returns {Promise} - A Promise that, when resolved, indicates a successful delete operation.
         */

    }, {
        key: 'delete',
        value: function _delete() {
            return this._plug.del();
        }

        /**
         * Get the description of the file attachment.
         * @returns {Promise.<String>} - A Promise that, when resolved, yields the file description.
         */

    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this._plug.at('description').get();
        }

        /**
         * Remove the description from the file attachment.
         * @returns {Promise} - A Promise that, when resolved, indicates a successful removal.
         */

    }, {
        key: 'clearDescription',
        value: function clearDescription() {
            return this._plug.at('description').del();
        }

        /**
         * Update the description of the file attachment.
         * @param {String} [description=''] - The new description to set.
         * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the file information.
         */

    }, {
        key: 'updateDescription',
        value: function updateDescription() {
            var description = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return this._plug.at('description').put(description, _utility.utility.textRequestType).then(_file.fileModel.parse);
        }
    }]);

    return PageFileBase;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VGaWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7Ozs7Ozs7O0lBS2E7QUFDVCxhQURTLFlBQ1QsQ0FBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCOzhCQURyQixjQUNxQjs7QUFDMUIsWUFBRyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsS0FBMEIsY0FBMUIsRUFBMEM7QUFDekMsa0JBQU0sSUFBSSxTQUFKLENBQWMsc0ZBQWQsQ0FBTixDQUR5QztTQUE3QztBQUdBLGFBQUssT0FBTCxHQUFlLGlCQUFRLGFBQVIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsQ0FBZixDQUowQjtBQUsxQixhQUFLLFNBQUwsR0FBaUIsaUJBQVEsYUFBUixDQUFzQixRQUF0QixDQUFqQixDQUwwQjtLQUE5Qjs7Ozs7Ozs7aUJBRFM7O3FDQWFJO0FBQ1QsbUJBQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFQLENBRFM7Ozs7Ozs7Ozs7a0NBUUg7QUFDTixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsTUFBZCxFQUFzQixHQUF0QixHQUE0QixJQUE1QixDQUFpQyxnQkFBVSxLQUFWLENBQXhDLENBRE07Ozs7Ozs7Ozs7a0NBUUQ7QUFDTCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQVAsQ0FESzs7Ozs7Ozs7Ozt5Q0FRUTtBQUNiLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLEdBQTdCLEVBQVAsQ0FEYTs7Ozs7Ozs7OzsyQ0FRRTtBQUNmLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLEdBQTdCLEVBQVAsQ0FEZTs7Ozs7Ozs7Ozs7NENBU2lCO2dCQUFsQixvRUFBYyxrQkFBSTs7QUFDaEMsbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLGFBQWQsRUFBNkIsR0FBN0IsQ0FBaUMsV0FBakMsRUFBOEMsaUJBQVEsZUFBUixDQUE5QyxDQUF1RSxJQUF2RSxDQUE0RSxnQkFBVSxLQUFWLENBQW5GLENBRGdDOzs7O1dBdEQzQiIsImZpbGUiOiJwYWdlRmlsZUJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL2xpYi91dGlsaXR5JztcbmltcG9ydCB7ZmlsZU1vZGVsfSBmcm9tICcuL21vZGVscy9maWxlLm1vZGVsJztcblxuLyoqXG4gKiBBIGJhc2UgY2xhc3MgZm9yIG1hbmFnaW5nIGZpbGUgYXR0YWNobWVudHMgb24gYm90aCBwdWJsaXNoZWQgcGFnZXMgYW5kIGRyYWZ0cy4gIFRoaXMgY2xhc3MgY2FuIG5vdCBiZSBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYWdlRmlsZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHBhZ2VJZCwgZmlsZW5hbWUpIHtcbiAgICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUGFnZUZpbGVCYXNlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFnZUZpbGVCYXNlIG11c3Qgbm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LiAgVXNlIG9uZSBvZiBQYWdlRmlsZSgpIG9yIERyYWZ0RmlsZSgpJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFnZUlkID0gdXRpbGl0eS5nZXRSZXNvdXJjZUlkKHBhZ2VJZCwgJ2hvbWUnKTtcbiAgICAgICAgdGhpcy5fZmlsZW5hbWUgPSB1dGlsaXR5LmdldEZpbGVuYW1lSWQoZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgVVJJIGZvciBkaXJlY3QgYWNjZXNzIHRvIHRoZSBmaWxlIGF0dGFjaG1lbnQuXG4gICAgICogQHJldHVybnMge1N0cmluZ30gLSBUaGUgZmlsZSBVUkkuXG4gICAgICovXG4gICAgZ2V0RmlsZVVyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuZ2V0VXJsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaW5mb3JtYXRpb24gZm9yIHRoZSBmaWxlIGF0dGFjaG1lbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGZpbGVNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBmaWxlTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGZpbGUgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2luZm8nKS5nZXQoKS50aGVuKGZpbGVNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHRoZSBmaWxlIGF0dGFjaG1lbnQgZnJvbiB0aGUgcGFnZS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgaW5kaWNhdGVzIGEgc3VjY2Vzc2Z1bCBkZWxldGUgb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuZGVsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZmlsZSBhdHRhY2htZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxTdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgdGhlIGZpbGUgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdkZXNjcmlwdGlvbicpLmdldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgZGVzY3JpcHRpb24gZnJvbSB0aGUgZmlsZSBhdHRhY2htZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIHJlbW92YWwuXG4gICAgICovXG4gICAgY2xlYXJEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2Rlc2NyaXB0aW9uJykuZGVsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZmlsZSBhdHRhY2htZW50LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVzY3JpcHRpb249JyddIC0gVGhlIG5ldyBkZXNjcmlwdGlvbiB0byBzZXQuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGZpbGVNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBmaWxlTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGZpbGUgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24gPSAnJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnZGVzY3JpcHRpb24nKS5wdXQoZGVzY3JpcHRpb24sIHV0aWxpdHkudGV4dFJlcXVlc3RUeXBlKS50aGVuKGZpbGVNb2RlbC5wYXJzZSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=pageFileBase.js.map
