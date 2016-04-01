'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedbackManager = undefined;

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

var _stringUtility = require('./lib/stringUtility');

var _pageRatings = require('./models/pageRatings.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class to manage the page feedback and ratings for pages.
 */

var FeedbackManager = exports.FeedbackManager = function () {

  /**
   * Construct a new FeedbackManager.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function FeedbackManager(settings) {
    _classCallCheck(this, FeedbackManager);

    this.plug = new _plug.Plug(settings).at('@api', 'deki');
  }

  /**
   * Submit feedback for a page.
   * @param {Object} options - Parameters to send along with the feedback.
   * @param {String} options.userEmail - The email of the user sending feedback.
   * @param {String} options.pageTitle - The display title of the page the feedback is in reference to.
   * @param {String} options.siteUrl - The URL of the MindTouch site.
   * @param {String} options.content - The body text ofd the feedback message input by the user.
   * @param {Boolean} options.contactAllowed - Notifies the API whether or not the user grants permission to contact them.
   * @returns {Promise} - A Promise that, when resolved, indicates a successful feedback submission.
   */


  _createClass(FeedbackManager, [{
    key: 'submit',
    value: function submit(options) {
      var path = options.path || _stringUtility.stringUtility.leftTrim(window.location.pathname, '/');
      var request = JSON.stringify({
        _path: encodeURIComponent(path),
        userEmail: options.userEmail,
        pageTitle: options.pageTitle,
        siteUrl: options.siteUrl,
        content: options.content,
        contactAllowed: options.contactAllowed
      });
      var plug = this.plug.at('workflow', 'submit-feedback');
      return plug.post(request, _utility.utility.jsonRequestType);
    }

    /**
     * Get the ratings that have been set for a series of pages.
     * @param {Array} pageIds - The list of pages for which ratings data is fetched.
     * @returns {Promise.<pageRatingsModel>} - A Promise that, when resolved, yields a {@link pageRatingsModel} object with the ratings information.
     */

  }, {
    key: 'getRatingsForPages',
    value: function getRatingsForPages(pageIds) {
      var ratingsPlug = this.plug.at('pages', 'ratings').withParams({ pageids: pageIds.join(',') });
      return ratingsPlug.get().then(_pageRatings.pageRatingsModel.parse);
    }
  }]);

  return FeedbackManager;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFLYTs7Ozs7OztBQU1ULFdBTlMsZUFNVCxDQUFZLFFBQVosRUFBc0I7MEJBTmIsaUJBTWE7O0FBQ2xCLFNBQUssSUFBTCxHQUFZLGVBQVMsUUFBVCxFQUFtQixFQUFuQixDQUFzQixNQUF0QixFQUE4QixNQUE5QixDQUFaLENBRGtCO0dBQXRCOzs7Ozs7Ozs7Ozs7OztlQU5TOzsyQkFvQkYsU0FBUztBQUNaLFVBQUksT0FBTyxRQUFRLElBQVIsSUFBZ0IsNkJBQWMsUUFBZCxDQUF1QixPQUFPLFFBQVAsQ0FBZ0IsUUFBaEIsRUFBMEIsR0FBakQsQ0FBaEIsQ0FEQztBQUVaLFVBQUksVUFBVSxLQUFLLFNBQUwsQ0FBZTtBQUN6QixlQUFPLG1CQUFtQixJQUFuQixDQUFQO0FBQ0EsbUJBQVcsUUFBUSxTQUFSO0FBQ1gsbUJBQVcsUUFBUSxTQUFSO0FBQ1gsaUJBQVMsUUFBUSxPQUFSO0FBQ1QsaUJBQVMsUUFBUSxPQUFSO0FBQ1Qsd0JBQWdCLFFBQVEsY0FBUjtPQU5OLENBQVYsQ0FGUTtBQVVaLFVBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsVUFBYixFQUF5QixpQkFBekIsQ0FBUCxDQVZRO0FBV1osYUFBTyxLQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLGlCQUFRLGVBQVIsQ0FBMUIsQ0FYWTs7Ozs7Ozs7Ozs7dUNBbUJHLFNBQVM7QUFDeEIsVUFBSSxjQUFjLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFNBQXRCLEVBQWlDLFVBQWpDLENBQTRDLEVBQUUsU0FBUyxRQUFRLElBQVIsQ0FBYSxHQUFiLENBQVQsRUFBOUMsQ0FBZCxDQURvQjtBQUV4QixhQUFPLFlBQVksR0FBWixHQUFrQixJQUFsQixDQUF1Qiw4QkFBaUIsS0FBakIsQ0FBOUIsQ0FGd0I7Ozs7U0F2Q25CIiwiZmlsZSI6ImZlZWRiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge3V0aWxpdHl9IGZyb20gJy4vbGliL3V0aWxpdHknO1xuaW1wb3J0IHtzdHJpbmdVdGlsaXR5fSBmcm9tICcuL2xpYi9zdHJpbmdVdGlsaXR5JztcbmltcG9ydCB7cGFnZVJhdGluZ3NNb2RlbH0gZnJvbSAnLi9tb2RlbHMvcGFnZVJhdGluZ3MubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gbWFuYWdlIHRoZSBwYWdlIGZlZWRiYWNrIGFuZCByYXRpbmdzIGZvciBwYWdlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZlZWRiYWNrTWFuYWdlciB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgRmVlZGJhY2tNYW5hZ2VyLlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMucGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGZlZWRiYWNrIGZvciBhIHBhZ2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQYXJhbWV0ZXJzIHRvIHNlbmQgYWxvbmcgd2l0aCB0aGUgZmVlZGJhY2suXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudXNlckVtYWlsIC0gVGhlIGVtYWlsIG9mIHRoZSB1c2VyIHNlbmRpbmcgZmVlZGJhY2suXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMucGFnZVRpdGxlIC0gVGhlIGRpc3BsYXkgdGl0bGUgb2YgdGhlIHBhZ2UgdGhlIGZlZWRiYWNrIGlzIGluIHJlZmVyZW5jZSB0by5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5zaXRlVXJsIC0gVGhlIFVSTCBvZiB0aGUgTWluZFRvdWNoIHNpdGUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuY29udGVudCAtIFRoZSBib2R5IHRleHQgb2ZkIHRoZSBmZWVkYmFjayBtZXNzYWdlIGlucHV0IGJ5IHRoZSB1c2VyLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5jb250YWN0QWxsb3dlZCAtIE5vdGlmaWVzIHRoZSBBUEkgd2hldGhlciBvciBub3QgdGhlIHVzZXIgZ3JhbnRzIHBlcm1pc3Npb24gdG8gY29udGFjdCB0aGVtLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIGZlZWRiYWNrIHN1Ym1pc3Npb24uXG4gICAgICovXG4gICAgc3VibWl0KG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHBhdGggPSBvcHRpb25zLnBhdGggfHwgc3RyaW5nVXRpbGl0eS5sZWZ0VHJpbSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICcvJyk7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgX3BhdGg6IGVuY29kZVVSSUNvbXBvbmVudChwYXRoKSxcbiAgICAgICAgICAgIHVzZXJFbWFpbDogb3B0aW9ucy51c2VyRW1haWwsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IG9wdGlvbnMucGFnZVRpdGxlLFxuICAgICAgICAgICAgc2l0ZVVybDogb3B0aW9ucy5zaXRlVXJsLFxuICAgICAgICAgICAgY29udGVudDogb3B0aW9ucy5jb250ZW50LFxuICAgICAgICAgICAgY29udGFjdEFsbG93ZWQ6IG9wdGlvbnMuY29udGFjdEFsbG93ZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwbHVnID0gdGhpcy5wbHVnLmF0KCd3b3JrZmxvdycsICdzdWJtaXQtZmVlZGJhY2snKTtcbiAgICAgICAgcmV0dXJuIHBsdWcucG9zdChyZXF1ZXN0LCB1dGlsaXR5Lmpzb25SZXF1ZXN0VHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByYXRpbmdzIHRoYXQgaGF2ZSBiZWVuIHNldCBmb3IgYSBzZXJpZXMgb2YgcGFnZXMuXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGFnZUlkcyAtIFRoZSBsaXN0IG9mIHBhZ2VzIGZvciB3aGljaCByYXRpbmdzIGRhdGEgaXMgZmV0Y2hlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48cGFnZVJhdGluZ3NNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBwYWdlUmF0aW5nc01vZGVsfSBvYmplY3Qgd2l0aCB0aGUgcmF0aW5ncyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXRSYXRpbmdzRm9yUGFnZXMocGFnZUlkcykge1xuICAgICAgICB2YXIgcmF0aW5nc1BsdWcgPSB0aGlzLnBsdWcuYXQoJ3BhZ2VzJywgJ3JhdGluZ3MnKS53aXRoUGFyYW1zKHsgcGFnZWlkczogcGFnZUlkcy5qb2luKCcsJykgfSk7XG4gICAgICAgIHJldHVybiByYXRpbmdzUGx1Zy5nZXQoKS50aGVuKHBhZ2VSYXRpbmdzTW9kZWwucGFyc2UpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=feedback.js.map
