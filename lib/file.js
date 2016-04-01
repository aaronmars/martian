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


var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7OztBQU9ULFdBUFMsSUFPVCxDQUFZLEVBQVosRUFBZ0IsUUFBaEIsRUFBMEI7MEJBUGpCLE1BT2lCOztBQUN0QixTQUFLLEtBQUwsR0FBYSxlQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsRUFBL0MsRUFBbUQsU0FBbkQsQ0FBNkQsT0FBN0QsRUFBc0UsSUFBdEUsQ0FBYixDQURzQjtHQUExQjs7Ozs7Ozs7ZUFQUzs7OEJBZUM7QUFDTixhQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxNQUFkLEVBQXNCLEdBQXRCLEdBQTRCLElBQTVCLENBQWlDLGdCQUFVLEtBQVYsQ0FBeEMsQ0FETTs7Ozs7Ozs7OzttQ0FRSztBQUNYLGFBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLFdBQWQsRUFBMkIsR0FBM0IsR0FBaUMsSUFBakMsQ0FBc0Msa0NBQW1CLEtBQW5CLENBQTdDLENBRFc7Ozs7Ozs7Ozs7O21DQVNBLGFBQWE7QUFDeEIsYUFBTyxLQUFLLEtBQUwsQ0FBVyxFQUFYLENBQWMsYUFBZCxFQUE2QixHQUE3QixDQUFpQyxXQUFqQyxFQUE4QyxpQkFBUSxlQUFSLENBQTlDLENBQXVFLElBQXZFLENBQTRFLGdCQUFVLEtBQVYsQ0FBbkYsQ0FEd0I7Ozs7Ozs7Ozs7OEJBUW5CO0FBQ0wsYUFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQVAsQ0FESzs7OztTQXhDQSIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi91dGlsaXR5L3BsdWcnO1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL3V0aWxpdHkvdXRpbGl0eSc7XG5pbXBvcnQge2ZpbGVNb2RlbH0gZnJvbSAnLi9tb2RlbHMvZmlsZS5tb2RlbCc7XG5pbXBvcnQge2ZpbGVSZXZpc2lvbnNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvZmlsZVJldmlzaW9ucy5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3Igd29ya2luZyB3aXRoIGZpbGUgYXR0YWNobWVudHMgd2l0aGluIHRoZSBNaW5kVG91Y2ggc2l0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGUge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IEZpbGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZCAtIFRoZSByZXNvdXJjZSBJRCBvZiB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2ZpbGVzJywgaWQpLndpdGhQYXJhbSgnZHJhZnQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpbGUgYXR0YWNobWVudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48ZmlsZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGZpbGVNb2RlbH0gY29udGFpbmluZyB0aGUgYXR0YWNobWVudCBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGx1Zy5hdCgnaW5mbycpLmdldCgpLnRoZW4oZmlsZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJldmlzaW9uIGxpc3Qgb2YgdGhlIGZpbGUgYXR0YWNobWVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48ZmlsZVJldmlzaW9uc01vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGZpbGVSZXZpc2lvbnNNb2RlbH0gY29udGFpbmluZyB0aGUgcmV2aXNpb24gbGlzdGluZy5cbiAgICAgKi9cbiAgICBnZXRSZXZpc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdyZXZpc2lvbnMnKS5nZXQoKS50aGVuKGZpbGVSZXZpc2lvbnNNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc2NyaXB0aW9uIC0gVGhlIG5ldyBmaWxlIGRlc2NyaXB0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxmaWxlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZmlsZU1vZGVsfSBjb250YWluaW5nIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdkZXNjcmlwdGlvbicpLnB1dChkZXNjcmlwdGlvbiwgdXRpbGl0eS50ZXh0UmVxdWVzdFR5cGUpLnRoZW4oZmlsZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgdGhlIGZpbGUgZnJvbSB0aGUgTWluZFRvdWNoIHNpdGUuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIGluZGljYXRlcyBhIHN1Y2Nlc3NmdWwgZmlsZSBkZWxldGlvbi5cbiAgICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmRlbGV0ZSgpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=file.js.map
