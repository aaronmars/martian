'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftFile = undefined;

var _plug = require('./lib/plug');

var _pageFileBase = require('./pageFileBase');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


/**
 * A class for managing a file attachment on an unpublished page.
 */

var DraftFile = exports.DraftFile = function (_PageFileBase) {
  _inherits(DraftFile, _PageFileBase);

  /**
   * Construct a new DraftFile
   * @param {Number|String} [pageId='home'] - The ID of the unpublished page.
   * @param {String} filename - The filename of the file to manage.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function DraftFile(pageId, filename, settings) {
    _classCallCheck(this, DraftFile);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DraftFile).call(this, pageId, filename));

    _this._plug = new _plug.Plug(settings).at('@api', 'deki', 'drafts', _this._pageId, 'files', _this._filename);
    return _this;
  }

  return DraftFile;
}(_pageFileBase.PageFileBase);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWZ0RmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLYTs7Ozs7Ozs7OztBQVFULFdBUlMsU0FRVCxDQUFZLE1BQVosRUFBb0IsUUFBcEIsRUFBOEIsUUFBOUIsRUFBd0M7MEJBUi9CLFdBUStCOzt1RUFSL0Isc0JBU0MsUUFBUSxXQURzQjs7QUFFcEMsVUFBSyxLQUFMLEdBQWEsZUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLFFBQXRDLEVBQWdELE1BQUssT0FBTCxFQUFjLE9BQTlELEVBQXVFLE1BQUssU0FBTCxDQUFwRixDQUZvQzs7R0FBeEM7O1NBUlMiLCJmaWxlIjoiZHJhZnRGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge1BhZ2VGaWxlQmFzZX0gZnJvbSAnLi9wYWdlRmlsZUJhc2UnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIG1hbmFnaW5nIGEgZmlsZSBhdHRhY2htZW50IG9uIGFuIHVucHVibGlzaGVkIHBhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEcmFmdEZpbGUgZXh0ZW5kcyBQYWdlRmlsZUJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IERyYWZ0RmlsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3BhZ2VJZD0naG9tZSddIC0gVGhlIElEIG9mIHRoZSB1bnB1Ymxpc2hlZCBwYWdlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBmaWxlbmFtZSBvZiB0aGUgZmlsZSB0byBtYW5hZ2UuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFnZUlkLCBmaWxlbmFtZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIocGFnZUlkLCBmaWxlbmFtZSk7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdkcmFmdHMnLCB0aGlzLl9wYWdlSWQsICdmaWxlcycsIHRoaXMuX2ZpbGVuYW1lKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=draftFile.js.map
