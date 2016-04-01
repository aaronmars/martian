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


var _plug = require('./utility/plug');

var _utility = require('./utility/utility');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJFdmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUthOzs7Ozs7O0FBTVQsV0FOUyxVQU1ULENBQVksUUFBWixFQUFzQjswQkFOYixZQU1hOztBQUNsQixTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FEa0I7QUFFbEIsU0FBSyxJQUFMLEdBQVksZUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLFFBQXRDLENBQVosQ0FGa0I7R0FBdEI7Ozs7Ozs7OztlQU5TOztnQ0FnQkcsV0FBVztBQUNuQixhQUFPLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxlQUFiLEVBQThCLFNBQTlCLEVBQXlDLEdBQXpDLEdBQStDLElBQS9DLENBQW9ELGdDQUFrQixLQUFsQixDQUEzRCxDQURtQjs7Ozs7Ozs7Ozs7K0JBU1osUUFBUTtBQUNmLGFBQU8sS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLFdBQWIsRUFBMEIsaUJBQVEsYUFBUixDQUFzQixNQUF0QixFQUE4QixTQUE5QixDQUExQixFQUFvRSxHQUFwRSxHQUEwRSxJQUExRSxDQUErRSwwQkFBZSxLQUFmLENBQXRGLENBRGU7Ozs7Ozs7Ozs7OztxQ0FVRixRQUFRLFVBQVU7QUFDL0IsYUFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsV0FBYixFQUEwQixpQkFBUSxhQUFSLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCLENBQTFCLEVBQW9FLFFBQXBFLEVBQThFLEdBQTlFLEdBQW9GLElBQXBGLENBQXlGLDhCQUFpQixLQUFqQixDQUFoRyxDQUQrQjs7Ozs7Ozs7Ozs7OzhCQVV6QixRQUFRLFdBQVc7QUFDekIsYUFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QixpQkFBUSxhQUFSLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCLENBQXZCLEVBQWlFLElBQWpFLENBQXNFLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBdEUsRUFBaUcsaUJBQVEsZUFBUixDQUF4RyxDQUR5Qjs7OztTQTdDcEIiLCJmaWxlIjoidXNlckV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1BsdWd9IGZyb20gJy4vdXRpbGl0eS9wbHVnJztcbmltcG9ydCB7dXRpbGl0eX0gZnJvbSAnLi91dGlsaXR5L3V0aWxpdHknO1xuaW1wb3J0IHt1c2VyQWN0aXZpdHlNb2RlbH0gZnJvbSAnLi9tb2RlbHMvdXNlckFjdGl2aXR5Lm1vZGVsJztcbmltcG9ydCB7ZXZlbnRMaXN0TW9kZWx9IGZyb20gJy4vbW9kZWxzL2V2ZW50TGlzdC5tb2RlbCc7XG5pbXBvcnQge2V2ZW50RGV0YWlsTW9kZWx9IGZyb20gJy4vbW9kZWxzL2V2ZW50RGV0YWlsLm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIGZvciBmZXRjaGluZyBhbmQgbWFuYWdpbmcgZXZlbnRzIHRyaWdnZXJlZCBieSB1c2Vycy5cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJFdmVudHMge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IFVzZXJFdmVudHMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5wbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAnZXZlbnRzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdXNlclRva2VuIC0gQSB0b2tlbiB0aGF0IGlkZW50aWZpZXMgdGhlIHVzZXIgZnJvbSBhbiBldmVudCBwZXJzcGVjdGl2ZS4gIEl0IGNhbiBiZSB0aGUgdXNlcidzIG51bWVyaWMgSUQsIHVzZXJuYW1lLCBvciBhbm90aGVyIHN5c3RlbS1kZWZpbmVkIHRva2VuLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjx1c2VyQWN0aXZpdHlNb2RlbD59IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayB1c2VyQWN0aXZpdHlNb2RlbH0gY29udGFpbmluZyB0aGUgdXNlcidzIGFjdGl2aXR5IGV2ZW50cy5cbiAgICAgKi9cbiAgICBnZXRBY3Rpdml0eSh1c2VyVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5hdCgnc3VwcG9ydC1hZ2VudCcsIHVzZXJUb2tlbikuZ2V0KCkudGhlbih1c2VyQWN0aXZpdHlNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyJ3MgaGlzdG9yeSBldmVudHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbdXNlcklkPSdjdXJyZW50J10gLSBUaGUgdXNlcidzIG51bWVyaWMgSUQgb3IgdXNlcm5hbWUuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGV2ZW50TGlzdE1vZGVsPn0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGV2ZW50TGlzdE1vZGVsfSB0aGF0IGNvbnRhaW5zIHRoZSBsaXN0aW5nIG9mIHRoZSB1c2VyJ3MgZXZlbnRzLlxuICAgICAqL1xuICAgIGdldEhpc3RvcnkodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuYXQoJ3VzZXItcGFnZScsIHV0aWxpdHkuZ2V0UmVzb3VyY2VJZCh1c2VySWQsICdjdXJyZW50JykpLmdldCgpLnRoZW4oZXZlbnRMaXN0TW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGV0YWlscyBvZiBhIHNwZWNpZmljIHVzZXIgZXZlbnQuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbdXNlcklkPSdjdXJyZW50J10gLSBUaGUgdXNlcidzIG51bWVyaWMgSUQgb3IgdXNlcm5hbWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRldGFpbElkIC0gVGhlIGRldGFpbCBJRCBvZiB0aGUgZXZlbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGV2ZW50RGV0YWlsTW9kZWw+fSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgZXZlbnREZXRhaWxNb2RlbH0gdGhhdCBjb250YWlucyB0aGUgZXZlbnQgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0SGlzdG9yeURldGFpbCh1c2VySWQsIGRldGFpbElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuYXQoJ3VzZXItcGFnZScsIHV0aWxpdHkuZ2V0UmVzb3VyY2VJZCh1c2VySWQsICdjdXJyZW50JyksIGRldGFpbElkKS5nZXQoKS50aGVuKGV2ZW50RGV0YWlsTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIHNlYXJjaCBldmVudCB0aGF0IGlzIHBlcmZvcm1lZCBieSBhIHNwZWNpZmljIHVzZXIuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbdXNlcklkPSdjdXJyZW50J10gLSBUaGUgdXNlcidzIG51bWVyaWMgSUQgb3IgdXNlcm5hbWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YSAtIFNwZWNpZmljIGRhdGEgYWJvdXQgdGhlIHNlYXJjaCB0aGF0IHdhcyBwZXJmb3JtZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIGluZGljYXRlcyBhIHN1Y2Nlc3NmdWwgcG9zdGluZyBvZiB0aGUgc2VhcmNoIGV2ZW50LlxuICAgICAqL1xuICAgIGxvZ1NlYXJjaCh1c2VySWQsIGV2ZW50RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmF0KCdzZWFyY2gnLCB1dGlsaXR5LmdldFJlc291cmNlSWQodXNlcklkLCAnY3VycmVudCcpKS5wb3N0KEpTT04uc3RyaW5naWZ5KGV2ZW50RGF0YSksIHV0aWxpdHkuanNvblJlcXVlc3RUeXBlKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=userEvents.js.map
