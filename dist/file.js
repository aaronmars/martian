'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.File = undefined;

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

var _utility = require('./lib/utility');

var _file = require('./models/file.model');

var _fileRevisions = require('./models/fileRevisions.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for working with file attachments within the MindTouch site.
 */

var File = exports.File = function () {

  /**
   * Construct a new File object.
   * @param {Number} id - The resource ID of the file.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function File(id, settings) {
    _classCallCheck(this, File);

    this._plug = new _plug.Plug(settings).at('@api', 'deki', 'files', id).withParam('draft', true);
  }

  /**
   * Get the file attachment information.
   * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the attachment information.
   */


  _createClass(File, [{
    key: 'getInfo',
    value: function getInfo() {
      return this._plug.at('info').get().then(_file.fileModel.parse);
    }

    /**
     * Get the revision list of the file attachment.
     * @returns {Promise.<fileRevisionsModel>} - A Promise that, when resolved, yields a {@link fileRevisionsModel} containing the revision listing.
     */

  }, {
    key: 'getRevisions',
    value: function getRevisions() {
      return this._plug.at('revisions').get().then(_fileRevisions.fileRevisionsModel.parse);
    }

    /**
     * Set the description for the file.
     * @param {String} description - The new file description.
     * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the file information.
     */

  }, {
    key: 'setDescription',
    value: function setDescription(description) {
      return this._plug.at('description').put(description, _utility.utility.textRequestType).then(_file.fileModel.parse);
    }

    /**
     * Delete the file from the MindTouch site.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful file deletion.
     */

  }, {
    key: 'delete',
    value: function _delete() {
      return this._plug.delete();
    }
  }]);

  return File;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7OztBQU9ULFdBUFMsSUFPVCxDQUFZLEVBQVosRUFBZ0IsUUFBaEIsRUFBMEI7MEJBUGpCLE1BT2lCOztBQUN0QixTQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsRUFBL0MsRUFBbUQsU0FBbkQsQ0FBNkQsT0FBN0QsRUFBc0UsSUFBdEUsQ0FBYixDQURzQjtHQUExQjs7Ozs7Ozs7ZUFQUzs7OEJBZUM7QUFDTixhQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxNQUFkLEVBQXNCLEdBQXRCLEdBQTRCLElBQTVCLENBQWlDLGdCQUFVLEtBQVYsQ0FBeEMsQ0FETTs7Ozs7Ozs7OzttQ0FRSztBQUNYLGFBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLFdBQWQsRUFBMkIsR0FBM0IsR0FBaUMsSUFBakMsQ0FBc0Msa0NBQW1CLEtBQW5CLENBQTdDLENBRFc7Ozs7Ozs7Ozs7O21DQVNBLGFBQWE7QUFDeEIsYUFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsYUFBZCxFQUE2QixHQUE3QixDQUFpQyxXQUFqQyxFQUE4QyxpQkFBUSxlQUFSLENBQTlDLENBQXVFLElBQXZFLENBQTRFLGdCQUFVLEtBQVYsQ0FBbkYsQ0FEd0I7Ozs7Ozs7Ozs7OEJBUW5CO0FBQ0wsYUFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQVAsQ0FESzs7OztTQXhDQSIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vbGliL3V0aWxpdHknO1xuaW1wb3J0IHtmaWxlTW9kZWx9IGZyb20gJy4vbW9kZWxzL2ZpbGUubW9kZWwnO1xuaW1wb3J0IHtmaWxlUmV2aXNpb25zTW9kZWx9IGZyb20gJy4vbW9kZWxzL2ZpbGVSZXZpc2lvbnMubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBmaWxlIGF0dGFjaG1lbnRzIHdpdGhpbiB0aGUgTWluZFRvdWNoIHNpdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBGaWxlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWQgLSBUaGUgcmVzb3VyY2UgSUQgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdmaWxlcycsIGlkKS53aXRoUGFyYW0oJ2RyYWZ0JywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmaWxlIGF0dGFjaG1lbnQgaW5mb3JtYXRpb24uXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGZpbGVNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBmaWxlTW9kZWx9IGNvbnRhaW5pbmcgdGhlIGF0dGFjaG1lbnQgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2luZm8nKS5nZXQoKS50aGVuKGZpbGVNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByZXZpc2lvbiBsaXN0IG9mIHRoZSBmaWxlIGF0dGFjaG1lbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGZpbGVSZXZpc2lvbnNNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBmaWxlUmV2aXNpb25zTW9kZWx9IGNvbnRhaW5pbmcgdGhlIHJldmlzaW9uIGxpc3RpbmcuXG4gICAgICovXG4gICAgZ2V0UmV2aXNpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgncmV2aXNpb25zJykuZ2V0KCkudGhlbihmaWxlUmV2aXNpb25zTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVzY3JpcHRpb24gZm9yIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiAtIFRoZSBuZXcgZmlsZSBkZXNjcmlwdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48ZmlsZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGZpbGVNb2RlbH0gY29udGFpbmluZyB0aGUgZmlsZSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnZGVzY3JpcHRpb24nKS5wdXQoZGVzY3JpcHRpb24sIHV0aWxpdHkudGV4dFJlcXVlc3RUeXBlKS50aGVuKGZpbGVNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHRoZSBmaWxlIGZyb20gdGhlIE1pbmRUb3VjaCBzaXRlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIGZpbGUgZGVsZXRpb24uXG4gICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5kZWxldGUoKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=file.js.map
