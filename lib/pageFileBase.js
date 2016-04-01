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


var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VGaWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBQ0E7Ozs7Ozs7O0lBS2E7QUFDVCxhQURTLFlBQ1QsQ0FBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCOzhCQURyQixjQUNxQjs7QUFDMUIsWUFBRyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsS0FBMEIsY0FBMUIsRUFBMEM7QUFDekMsa0JBQU0sSUFBSSxTQUFKLENBQWMsc0ZBQWQsQ0FBTixDQUR5QztTQUE3QztBQUdBLGFBQUssT0FBTCxHQUFlLGlCQUFRLGFBQVIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsQ0FBZixDQUowQjtBQUsxQixhQUFLLFNBQUwsR0FBaUIsaUJBQVEsYUFBUixDQUFzQixRQUF0QixDQUFqQixDQUwwQjtLQUE5Qjs7Ozs7Ozs7aUJBRFM7O3FDQWFJO0FBQ1QsbUJBQU8sS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFQLENBRFM7Ozs7Ozs7Ozs7a0NBUUg7QUFDTixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsTUFBZCxFQUFzQixHQUF0QixHQUE0QixJQUE1QixDQUFpQyxnQkFBVSxLQUFWLENBQXhDLENBRE07Ozs7Ozs7Ozs7a0NBUUQ7QUFDTCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQVAsQ0FESzs7Ozs7Ozs7Ozt5Q0FRUTtBQUNiLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLEdBQTdCLEVBQVAsQ0FEYTs7Ozs7Ozs7OzsyQ0FRRTtBQUNmLG1CQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLEdBQTdCLEVBQVAsQ0FEZTs7Ozs7Ozs7Ozs7NENBU2lCO2dCQUFsQixvRUFBYyxrQkFBSTs7QUFDaEMsbUJBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLGFBQWQsRUFBNkIsR0FBN0IsQ0FBaUMsV0FBakMsRUFBOEMsaUJBQVEsZUFBUixDQUE5QyxDQUF1RSxJQUF2RSxDQUE0RSxnQkFBVSxLQUFWLENBQW5GLENBRGdDOzs7O1dBdEQzQiIsImZpbGUiOiJwYWdlRmlsZUJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL3V0aWxpdHkvdXRpbGl0eSc7XG5pbXBvcnQge2ZpbGVNb2RlbH0gZnJvbSAnLi9tb2RlbHMvZmlsZS5tb2RlbCc7XG5cbi8qKlxuICogQSBiYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBmaWxlIGF0dGFjaG1lbnRzIG9uIGJvdGggcHVibGlzaGVkIHBhZ2VzIGFuZCBkcmFmdHMuICBUaGlzIGNsYXNzIGNhbiBub3QgYmUgaW5zdGFudGlhdGVkIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgUGFnZUZpbGVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwYWdlSWQsIGZpbGVuYW1lKSB7XG4gICAgICAgIGlmKHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gJ1BhZ2VGaWxlQmFzZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhZ2VGaWxlQmFzZSBtdXN0IG5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS4gIFVzZSBvbmUgb2YgUGFnZUZpbGUoKSBvciBEcmFmdEZpbGUoKScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhZ2VJZCA9IHV0aWxpdHkuZ2V0UmVzb3VyY2VJZChwYWdlSWQsICdob21lJyk7XG4gICAgICAgIHRoaXMuX2ZpbGVuYW1lID0gdXRpbGl0eS5nZXRGaWxlbmFtZUlkKGZpbGVuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIFVSSSBmb3IgZGlyZWN0IGFjY2VzcyB0byB0aGUgZmlsZSBhdHRhY2htZW50LlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gVGhlIGZpbGUgVVJJLlxuICAgICAqL1xuICAgIGdldEZpbGVVcmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmdldFVybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgZmlsZSBhdHRhY2htZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxmaWxlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZmlsZU1vZGVsfSBjb250YWluaW5nIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdpbmZvJykuZ2V0KCkudGhlbihmaWxlTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgZmlsZSBhdHRhY2htZW50IGZyb24gdGhlIHBhZ2UuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIGluZGljYXRlcyBhIHN1Y2Nlc3NmdWwgZGVsZXRlIG9wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmRlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGZpbGUgYXR0YWNobWVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48U3RyaW5nPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIHRoZSBmaWxlIGRlc2NyaXB0aW9uLlxuICAgICAqL1xuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnZGVzY3JpcHRpb24nKS5nZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGRlc2NyaXB0aW9uIGZyb20gdGhlIGZpbGUgYXR0YWNobWVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgaW5kaWNhdGVzIGEgc3VjY2Vzc2Z1bCByZW1vdmFsLlxuICAgICAqL1xuICAgIGNsZWFyRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdkZXNjcmlwdGlvbicpLmRlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGZpbGUgYXR0YWNobWVudC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2Rlc2NyaXB0aW9uPScnXSAtIFRoZSBuZXcgZGVzY3JpcHRpb24gdG8gc2V0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxmaWxlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZmlsZU1vZGVsfSBjb250YWluaW5nIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHVwZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2Rlc2NyaXB0aW9uJykucHV0KGRlc2NyaXB0aW9uLCB1dGlsaXR5LnRleHRSZXF1ZXN0VHlwZSkudGhlbihmaWxlTW9kZWwucGFyc2UpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=pageFileBase.js.map
