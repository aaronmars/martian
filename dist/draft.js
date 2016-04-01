'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraftManager = exports.Draft = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plug = require('./lib/plug');

var _utility = require('./lib/utility');

var _pageBase = require('./pageBase');

var _page = require('./models/page.model');

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
 * A class for managing a single unpublished draft page.
 */

var Draft = exports.Draft = function (_PageBase) {
  _inherits(Draft, _PageBase);

  /**
   * Construct a Draft object.
   * @param {Number|String} [id=home] - The id of the draft to construct.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function Draft() {
    var id = arguments.length <= 0 || arguments[0] === undefined ? 'home' : arguments[0];
    var settings = arguments[1];

    _classCallCheck(this, Draft);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Draft).call(this, id));

    _this._plug = new _plug.Plug(settings).at('@api', 'deki', 'drafts', _this._id);
    return _this;
  }

  /**
   * Deactivate the current draft and revert to the published page.
   * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the deactivated page.
   */


  _createClass(Draft, [{
    key: 'deactivate',
    value: function deactivate() {
      return this._plug.at('deactivate').post().then(_page.pageModel.parse);
    }

    /**
     * Publish the draft.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful publish operation.
     */

  }, {
    key: 'publish',
    value: function publish() {
      return this._plug.at('publish').post();
    }
  }]);

  return Draft;
}(_pageBase.PageBase);

/**
 * A class for managing unpublished draft pages.
 */


var DraftManager = exports.DraftManager = function () {

  /**
   * Create a new DraftManager.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function DraftManager(settings) {
    _classCallCheck(this, DraftManager);

    this._settings = settings;
  }

  /**
   * Create a new draft on the site where a page does not already exist.
   * @param {String} newPath - The path of the new draft.
   * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the newly-created draft.
   */


  _createClass(DraftManager, [{
    key: 'createDraft',
    value: function createDraft(newPath) {
      var plug = new _plug.Plug(this._settings).at('@api', 'deki', 'drafts', _utility.utility.getResourceId(newPath), 'create');
      return plug.post().then(_page.pageModel.parse);
    }

    /**
     * Fetch a new Draft object by ID.
     * @param {Number|String} [id=home] - The id of the draft to return.
     * @returns {Draft} - A new {@link Draft} object.
     */

  }, {
    key: 'getDraft',
    value: function getDraft(id) {
      return new Draft(id, this._settings);
    }
  }]);

  return DraftManager;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS2E7Ozs7Ozs7OztBQU9ULFdBUFMsS0FPVCxHQUFtQztRQUF2QiwyREFBSyxzQkFBa0I7UUFBVix3QkFBVTs7MEJBUDFCLE9BTzBCOzt1RUFQMUIsa0JBUUMsS0FEeUI7O0FBRS9CLFVBQUssS0FBTCxHQUFhLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxRQUF0QyxFQUFnRCxNQUFLLEdBQUwsQ0FBN0QsQ0FGK0I7O0dBQW5DOzs7Ozs7OztlQVBTOztpQ0FnQkk7QUFDVCxhQUFPLEtBQUssS0FBTCxDQUFXLEVBQVgsQ0FBYyxZQUFkLEVBQTRCLElBQTVCLEdBQW1DLElBQW5DLENBQXdDLGdCQUFVLEtBQVYsQ0FBL0MsQ0FEUzs7Ozs7Ozs7Ozs4QkFRSDtBQUNOLGFBQU8sS0FBSyxLQUFMLENBQVcsRUFBWCxDQUFjLFNBQWQsRUFBeUIsSUFBekIsRUFBUCxDQURNOzs7O1NBeEJEOzs7Ozs7OztJQWdDQTs7Ozs7OztBQU1ULFdBTlMsWUFNVCxDQUFZLFFBQVosRUFBc0I7MEJBTmIsY0FNYTs7QUFDbEIsU0FBSyxTQUFMLEdBQWlCLFFBQWpCLENBRGtCO0dBQXRCOzs7Ozs7Ozs7ZUFOUzs7Z0NBZUcsU0FBUztBQUNqQixVQUFJLE9BQU8sZUFBUyxLQUFLLFNBQUwsQ0FBVCxDQUF5QixFQUF6QixDQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0QyxRQUE1QyxFQUFzRCxpQkFBUSxhQUFSLENBQXNCLE9BQXRCLENBQXRELEVBQXNGLFFBQXRGLENBQVAsQ0FEYTtBQUVqQixhQUFPLEtBQUssSUFBTCxHQUFZLElBQVosQ0FBaUIsZ0JBQVUsS0FBVixDQUF4QixDQUZpQjs7Ozs7Ozs7Ozs7NkJBVVosSUFBSTtBQUNULGFBQU8sSUFBSSxLQUFKLENBQVUsRUFBVixFQUFjLEtBQUssU0FBTCxDQUFyQixDQURTOzs7O1NBekJKIiwiZmlsZSI6ImRyYWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vbGliL3V0aWxpdHknO1xuaW1wb3J0IHtQYWdlQmFzZX0gZnJvbSAnLi9wYWdlQmFzZSc7XG5pbXBvcnQge3BhZ2VNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZS5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgbWFuYWdpbmcgYSBzaW5nbGUgdW5wdWJsaXNoZWQgZHJhZnQgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERyYWZ0IGV4dGVuZHMgUGFnZUJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgRHJhZnQgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW2lkPWhvbWVdIC0gVGhlIGlkIG9mIHRoZSBkcmFmdCB0byBjb25zdHJ1Y3QuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQgPSAnaG9tZScsIHNldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKGlkKTtcbiAgICAgICAgdGhpcy5fcGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2RyYWZ0cycsIHRoaXMuX2lkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIHRoZSBjdXJyZW50IGRyYWZ0IGFuZCByZXZlcnQgdG8gdGhlIHB1Ymxpc2hlZCBwYWdlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxwYWdlTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgcGFnZU1vZGVsfSBmb3IgdGhlIGRlYWN0aXZhdGVkIHBhZ2UuXG4gICAgICovXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWcuYXQoJ2RlYWN0aXZhdGUnKS5wb3N0KCkudGhlbihwYWdlTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2ggdGhlIGRyYWZ0LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIHB1Ymxpc2ggb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIHB1Ymxpc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnLmF0KCdwdWJsaXNoJykucG9zdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIGZvciBtYW5hZ2luZyB1bnB1Ymxpc2hlZCBkcmFmdCBwYWdlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIERyYWZ0TWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRHJhZnRNYW5hZ2VyLlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGRyYWZ0IG9uIHRoZSBzaXRlIHdoZXJlIGEgcGFnZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdQYXRoIC0gVGhlIHBhdGggb2YgdGhlIG5ldyBkcmFmdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZU1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIHBhZ2VNb2RlbH0gZm9yIHRoZSBuZXdseS1jcmVhdGVkIGRyYWZ0LlxuICAgICAqL1xuICAgIGNyZWF0ZURyYWZ0KG5ld1BhdGgpIHtcbiAgICAgICAgbGV0IHBsdWcgPSBuZXcgUGx1Zyh0aGlzLl9zZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdkcmFmdHMnLCB1dGlsaXR5LmdldFJlc291cmNlSWQobmV3UGF0aCksICdjcmVhdGUnKTtcbiAgICAgICAgcmV0dXJuIHBsdWcucG9zdCgpLnRoZW4ocGFnZU1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBhIG5ldyBEcmFmdCBvYmplY3QgYnkgSUQuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbaWQ9aG9tZV0gLSBUaGUgaWQgb2YgdGhlIGRyYWZ0IHRvIHJldHVybi5cbiAgICAgKiBAcmV0dXJucyB7RHJhZnR9IC0gQSBuZXcge0BsaW5rIERyYWZ0fSBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0RHJhZnQoaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEcmFmdChpZCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=draft.js.map
