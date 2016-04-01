'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEvents = undefined;

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

var _userActivity = require('./models/userActivity.model');

var _eventList = require('./models/eventList.model');

var _eventDetail = require('./models/eventDetail.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class for fetching and managing events triggered by users.
 */

var UserEvents = exports.UserEvents = function () {

  /**
   * Construct a new UserEvents object.
   * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
   */

  function UserEvents(settings) {
    _classCallCheck(this, UserEvents);

    this.settings = settings;
    this.plug = new _plug.Plug(settings).at('@api', 'deki', 'events');
  }

  /**
   * Get the user activity.
   * @param {Number|String} userToken - A token that identifies the user from an event perspective.  It can be the user's numeric ID, username, or another system-defined token.
   * @returns {Promise.<userActivityModel>} - A Promise that, when resolved, yields a {@link userActivityModel} containing the user's activity events.
   */


  _createClass(UserEvents, [{
    key: 'getActivity',
    value: function getActivity(userToken) {
      return this.plug.at('support-agent', userToken).get().then(_userActivity.userActivityModel.parse);
    }

    /**
     * Get the user's history events.
     * @param {Number|String} [userId='current'] - The user's numeric ID or username.
     * @returns {Promise.<eventListModel>} - A Promise that, when resolved, yields a {@link eventListModel} that contains the listing of the user's events.
     */

  }, {
    key: 'getHistory',
    value: function getHistory(userId) {
      return this.plug.at('user-page', _utility.utility.getResourceId(userId, 'current')).get().then(_eventList.eventListModel.parse);
    }

    /**
     * Get the details of a specific user event.
     * @param {Number|String} [userId='current'] - The user's numeric ID or username.
     * @param {String} detailId - The detail ID of the event.
     * @returns {Promise.<eventDetailModel>} - A Promise that, when resolved, yields a {@link eventDetailModel} that contains the event information.
     */

  }, {
    key: 'getHistoryDetail',
    value: function getHistoryDetail(userId, detailId) {
      return this.plug.at('user-page', _utility.utility.getResourceId(userId, 'current'), detailId).get().then(_eventDetail.eventDetailModel.parse);
    }

    /**
     * Log a search event that is performed by a specific user.
     * @param {Number|String} [userId='current'] - The user's numeric ID or username.
     * @param {Object} eventData - Specific data about the search that was performed.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful posting of the search event.
     */

  }, {
    key: 'logSearch',
    value: function logSearch(userId, eventData) {
      return this.plug.at('search', _utility.utility.getResourceId(userId, 'current')).post(JSON.stringify(eventData), _utility.utility.jsonRequestType);
    }
  }]);

  return UserEvents;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJFdmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7O0FBTVQsV0FOUyxVQU1ULENBQVksUUFBWixFQUFzQjswQkFOYixZQU1hOztBQUNsQixTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FEa0I7QUFFbEIsU0FBSyxJQUFMLEdBQVksZUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLFFBQXRDLENBQVosQ0FGa0I7R0FBdEI7Ozs7Ozs7OztlQU5TOztnQ0FnQkcsV0FBVztBQUNuQixhQUFPLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxlQUFiLEVBQThCLFNBQTlCLEVBQXlDLEdBQXpDLEdBQStDLElBQS9DLENBQW9ELGdDQUFrQixLQUFsQixDQUEzRCxDQURtQjs7Ozs7Ozs7Ozs7K0JBU1osUUFBUTtBQUNmLGFBQU8sS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLFdBQWIsRUFBMEIsaUJBQVEsYUFBUixDQUFzQixNQUF0QixFQUE4QixTQUE5QixDQUExQixFQUFvRSxHQUFwRSxHQUEwRSxJQUExRSxDQUErRSwwQkFBZSxLQUFmLENBQXRGLENBRGU7Ozs7Ozs7Ozs7OztxQ0FVRixRQUFRLFVBQVU7QUFDL0IsYUFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsV0FBYixFQUEwQixpQkFBUSxhQUFSLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCLENBQTFCLEVBQW9FLFFBQXBFLEVBQThFLEdBQTlFLEdBQW9GLElBQXBGLENBQXlGLDhCQUFpQixLQUFqQixDQUFoRyxDQUQrQjs7Ozs7Ozs7Ozs7OzhCQVV6QixRQUFRLFdBQVc7QUFDekIsYUFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QixpQkFBUSxhQUFSLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCLENBQXZCLEVBQWlFLElBQWpFLENBQXNFLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBdEUsRUFBaUcsaUJBQVEsZUFBUixDQUF4RyxDQUR5Qjs7OztTQTdDcEIiLCJmaWxlIjoidXNlckV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1BsdWd9IGZyb20gJy4vbGliL3BsdWcnO1xuaW1wb3J0IHt1dGlsaXR5fSBmcm9tICcuL2xpYi91dGlsaXR5JztcbmltcG9ydCB7dXNlckFjdGl2aXR5TW9kZWx9IGZyb20gJy4vbW9kZWxzL3VzZXJBY3Rpdml0eS5tb2RlbCc7XG5pbXBvcnQge2V2ZW50TGlzdE1vZGVsfSBmcm9tICcuL21vZGVscy9ldmVudExpc3QubW9kZWwnO1xuaW1wb3J0IHtldmVudERldGFpbE1vZGVsfSBmcm9tICcuL21vZGVscy9ldmVudERldGFpbC5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgZmV0Y2hpbmcgYW5kIG1hbmFnaW5nIGV2ZW50cyB0cmlnZ2VyZWQgYnkgdXNlcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyRXZlbnRzIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBVc2VyRXZlbnRzIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMucGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2V2ZW50cycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdXNlciBhY3Rpdml0eS5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHVzZXJUb2tlbiAtIEEgdG9rZW4gdGhhdCBpZGVudGlmaWVzIHRoZSB1c2VyIGZyb20gYW4gZXZlbnQgcGVyc3BlY3RpdmUuICBJdCBjYW4gYmUgdGhlIHVzZXIncyBudW1lcmljIElELCB1c2VybmFtZSwgb3IgYW5vdGhlciBzeXN0ZW0tZGVmaW5lZCB0b2tlbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48dXNlckFjdGl2aXR5TW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgdXNlckFjdGl2aXR5TW9kZWx9IGNvbnRhaW5pbmcgdGhlIHVzZXIncyBhY3Rpdml0eSBldmVudHMuXG4gICAgICovXG4gICAgZ2V0QWN0aXZpdHkodXNlclRva2VuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuYXQoJ3N1cHBvcnQtYWdlbnQnLCB1c2VyVG9rZW4pLmdldCgpLnRoZW4odXNlckFjdGl2aXR5TW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdXNlcidzIGhpc3RvcnkgZXZlbnRzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3VzZXJJZD0nY3VycmVudCddIC0gVGhlIHVzZXIncyBudW1lcmljIElEIG9yIHVzZXJuYW1lLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxldmVudExpc3RNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBldmVudExpc3RNb2RlbH0gdGhhdCBjb250YWlucyB0aGUgbGlzdGluZyBvZiB0aGUgdXNlcidzIGV2ZW50cy5cbiAgICAgKi9cbiAgICBnZXRIaXN0b3J5KHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCd1c2VyLXBhZ2UnLCB1dGlsaXR5LmdldFJlc291cmNlSWQodXNlcklkLCAnY3VycmVudCcpKS5nZXQoKS50aGVuKGV2ZW50TGlzdE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRldGFpbHMgb2YgYSBzcGVjaWZpYyB1c2VyIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3VzZXJJZD0nY3VycmVudCddIC0gVGhlIHVzZXIncyBudW1lcmljIElEIG9yIHVzZXJuYW1lLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXRhaWxJZCAtIFRoZSBkZXRhaWwgSUQgb2YgdGhlIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxldmVudERldGFpbE1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGV2ZW50RGV0YWlsTW9kZWx9IHRoYXQgY29udGFpbnMgdGhlIGV2ZW50IGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldEhpc3RvcnlEZXRhaWwodXNlcklkLCBkZXRhaWxJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCd1c2VyLXBhZ2UnLCB1dGlsaXR5LmdldFJlc291cmNlSWQodXNlcklkLCAnY3VycmVudCcpLCBkZXRhaWxJZCkuZ2V0KCkudGhlbihldmVudERldGFpbE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBzZWFyY2ggZXZlbnQgdGhhdCBpcyBwZXJmb3JtZWQgYnkgYSBzcGVjaWZpYyB1c2VyLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3VzZXJJZD0nY3VycmVudCddIC0gVGhlIHVzZXIncyBudW1lcmljIElEIG9yIHVzZXJuYW1lLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudERhdGEgLSBTcGVjaWZpYyBkYXRhIGFib3V0IHRoZSBzZWFyY2ggdGhhdCB3YXMgcGVyZm9ybWVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIHBvc3Rpbmcgb2YgdGhlIHNlYXJjaCBldmVudC5cbiAgICAgKi9cbiAgICBsb2dTZWFyY2godXNlcklkLCBldmVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5hdCgnc2VhcmNoJywgdXRpbGl0eS5nZXRSZXNvdXJjZUlkKHVzZXJJZCwgJ2N1cnJlbnQnKSkucG9zdChKU09OLnN0cmluZ2lmeShldmVudERhdGEpLCB1dGlsaXR5Lmpzb25SZXF1ZXN0VHlwZSk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=userEvents.js.map
