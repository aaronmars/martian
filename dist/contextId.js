'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContextIdManager = exports.ContextMap = exports.ContextDefinition = undefined;

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

var _contextIds = require('./models/contextIds.model');

var _contextId = require('./models/contextId.model');

var _contextMaps = require('./models/contextMaps.model');

var _contextMap = require('./models/contextMap.model');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class to manage individual Context IDs.
 */

var ContextDefinition = exports.ContextDefinition = function () {

    /**
     * Create a ContextDefinition.
     * @param {String} id - The ID of the context definition.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function ContextDefinition(id, settings) {
        _classCallCheck(this, ContextDefinition);

        if (!id) {
            throw new Error('an ID must be supplied to create a new ContextDefinition');
        }
        this.id = id;
        this.plug = new _plug.Plug(settings).at('@api', 'deki', 'contexts', id);
    }

    /**
     * Get the Context ID information from the API.
     * @returns {Promise.<contextIdModel>} - A promise that, when resolved, yields a {@link contextIdModel} object.
     */


    _createClass(ContextDefinition, [{
        key: 'getInfo',
        value: function getInfo() {
            return this.plug.get().then(_contextId.contextIdModel.parse);
        }

        /**
         * Set or overwrite the description of the Context ID
         * @param {String} description - The new
         * @returns {Promise.<contextIdModel>} - A promise that, when resolved, yields a contextIdModel object.
         */

    }, {
        key: 'updateDescription',
        value: function updateDescription() {
            var description = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            var updateRequest = '<context><id>' + this.id + '</id><description>' + description + '</description></context>';
            return this.plug.put(updateRequest, 'application/xml; charset=utf-8').then(_contextId.contextIdModel.parse);
        }

        /**
         * Remove this Context ID from the system.
         * @returns {Promise} - A Promise that, when resolved, indicates a successful deletion of the Context ID.
         */

    }, {
        key: 'delete',
        value: function _delete() {
            return this.plug.delete();
        }
    }]);

    return ContextDefinition;
}();

/**
 * A class to manage a mapping between a {@link ContextDefinition} and a page on a MindTouch site; taking language into account.
 */


var ContextMap = exports.ContextMap = function () {

    /**
     * Construct a new ContextMap
     * @param {String} language - The language of the mapping.
     * @param {String} id - The ID of the associated {@link ContextDefinition}.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function ContextMap(language, id, settings) {
        _classCallCheck(this, ContextMap);

        if (!id || !language) {
            throw new Error('an ID and language must be supplied to create a new ContextMap');
        }
        this.id = id;
        this.language = language;
        this.plug = new _plug.Plug(settings).at('@api', 'deki', 'contextmaps', language, id).withParam('verbose', 'true');
    }

    /**
     * Gets the information for the Context Mapping.
     * @returns {Promise.<contextMapModel>} - A promise that, when resolved, yields a {@link contextMapModel} object.
     */


    _createClass(ContextMap, [{
        key: 'getInfo',
        value: function getInfo() {
            return this.plug.get().then(_contextMap.contextMapModel.parse);
        }

        /**
         * Sets or changes the page ID for the Context ID mapping.
         * @param {Number} pageId - The page ID to use for the Context ID mapping.
         * @returns {Promise.<contextMapModel>} - A promise that, when resolved, yields a {@link contextMapModel} object.
         */

    }, {
        key: 'update',
        value: function update(pageId) {
            if (!pageId) {
                return Promise.reject(new Error('a page ID must be supplied in order to update a mapping'));
            }
            var updateRequest = '<contextmap><id>' + this.id + '</id><pageid>' + pageId + '</pageid><language>' + this.language + '</language></contextmap>';
            return this.plug.put(updateRequest, 'application/xml; charset=utf-8').then(_contextMap.contextMapModel.parse);
        }

        /**
         * Removes a mapping between a Context ID and an associated page.
         * @returns {Promise} - A Promise that, when resolved, indicates a successful removal of the mapping.
         */

    }, {
        key: 'remove',
        value: function remove() {
            return this.plug.delete();
        }
    }]);

    return ContextMap;
}();

/**
 * A class to manage the Context ID subsystem for access to the Context IDs and Context ID Mappings.
 */


var ContextIdManager = exports.ContextIdManager = function () {

    /**
     * Construct a new ContextIdManager.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */

    function ContextIdManager(settings) {
        _classCallCheck(this, ContextIdManager);

        this.mapsPlug = new _plug.Plug(settings).at('@api', 'deki', 'contextmaps').withParam('verbose', 'true');
        this.definitionsPlug = new _plug.Plug(settings).at('@api', 'deki', 'contexts');
        this.settings = settings;
    }

    /**
     * Get all of the Context ID Mappings that are defined.
     * @returns {Promise.<contextMapsModel>} - A promise that, when resolved, yields a {@link contextMapsModel} object.
     */


    _createClass(ContextIdManager, [{
        key: 'getMaps',
        value: function getMaps() {
            return this.mapsPlug.get().then(_contextMaps.contextMapsModel.parse);
        }

        /**
         * Get all of the Context ID Definitions that are defined.
         * @returns {Promise.<contextIdsModel>} - A promise that, when resolved, yields a {@link contextIdsModel} object.
         */

    }, {
        key: 'getDefinitions',
        value: function getDefinitions() {
            return this.definitionsPlug.get().then(_contextIds.contextIdsModel.parse);
        }

        /**
         * Add a new Context ID Definition to the system.
         * @param {String} id - The ID to use for the new definition.
         * @param {String} [description=''] - The initial description to set for the definition.
         * @returns {Promise.<contextIdModel>} - A promise that, when resolved, yields a {@link contextIdModel} object.
         */

    }, {
        key: 'addDefinition',
        value: function addDefinition(id) {
            var description = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

            if (!id) {
                return Promise.reject(new Error('an ID must be supplied to add a definition'));
            }
            var addRequest = '<contexts><context><id>' + id + '</id><description>' + description + '</description></context></contexts>';
            return this.definitionsPlug.post(addRequest, 'application/xml; charset=utf-8').then(_contextId.contextIdModel.parse);
        }

        /**
         * Get a new {@link ContextDefinition} object for the supplied ID.
         * @param {String} id - The ID of the Context Definition to create.
         * @returns {ContextDefinition} - A new {@link ContextDefinition} object.
         */

    }, {
        key: 'getDefinition',
        value: function getDefinition(id) {
            return new ContextDefinition(id, this.settings);
        }

        /**
         * Get a new {@link ContextMap} object for the supplied language and ID combination.
         * @param {String} language - The language code to use to identify the mapping.
         * @param {String} id - The Context ID identifier to use to identify the mapping.
         * @returns {ContextMap} - A new {@link ContextMap} object.
         */

    }, {
        key: 'getMap',
        value: function getMap(language, id) {
            return new ContextMap(language, id, this.settings);
        }
    }]);

    return ContextIdManager;
}();
//# sourceMappingURL=data:application/json;base64,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QUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsVUFBdEMsQ0FBdkIsQ0FGa0I7QUFHbEIsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBSGtCO0tBQXRCOzs7Ozs7OztpQkFOUzs7a0NBZ0JDO0FBQ04sbUJBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxHQUFvQixJQUFwQixDQUF5Qiw4QkFBaUIsS0FBakIsQ0FBaEMsQ0FETTs7Ozs7Ozs7Ozt5Q0FRTztBQUNiLG1CQUFPLEtBQUssZUFBTCxDQUFxQixHQUFyQixHQUEyQixJQUEzQixDQUFnQyw0QkFBZ0IsS0FBaEIsQ0FBdkMsQ0FEYTs7Ozs7Ozs7Ozs7O3NDQVVILElBQXNCO2dCQUFsQixvRUFBYyxrQkFBSTs7QUFDaEMsZ0JBQUcsQ0FBQyxFQUFELEVBQUs7QUFDSix1QkFBTyxRQUFRLE1BQVIsQ0FBZSxJQUFJLEtBQUosQ0FBVSw0Q0FBVixDQUFmLENBQVAsQ0FESTthQUFSO0FBR0EsZ0JBQUkseUNBQXVDLDRCQUF1QixtREFBOUQsQ0FKNEI7QUFLaEMsbUJBQU8sS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLFVBQTFCLEVBQXNDLGdDQUF0QyxFQUF3RSxJQUF4RSxDQUE2RSwwQkFBZSxLQUFmLENBQXBGLENBTGdDOzs7Ozs7Ozs7OztzQ0FhdEIsSUFBSTtBQUNkLG1CQUFPLElBQUksaUJBQUosQ0FBc0IsRUFBdEIsRUFBMEIsS0FBSyxRQUFMLENBQWpDLENBRGM7Ozs7Ozs7Ozs7OzsrQkFVWCxVQUFVLElBQUk7QUFDakIsbUJBQU8sSUFBSSxVQUFKLENBQWUsUUFBZixFQUF5QixFQUF6QixFQUE2QixLQUFLLFFBQUwsQ0FBcEMsQ0FEaUI7Ozs7V0F6RFoiLCJmaWxlIjoiY29udGV4dElkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi9saWIvcGx1Zyc7XG5pbXBvcnQge2NvbnRleHRJZHNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvY29udGV4dElkcy5tb2RlbCc7XG5pbXBvcnQge2NvbnRleHRJZE1vZGVsfSBmcm9tICcuL21vZGVscy9jb250ZXh0SWQubW9kZWwnO1xuaW1wb3J0IHtjb250ZXh0TWFwc01vZGVsfSBmcm9tICcuL21vZGVscy9jb250ZXh0TWFwcy5tb2RlbCc7XG5pbXBvcnQge2NvbnRleHRNYXBNb2RlbH0gZnJvbSAnLi9tb2RlbHMvY29udGV4dE1hcC5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyB0byBtYW5hZ2UgaW5kaXZpZHVhbCBDb250ZXh0IElEcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHREZWZpbml0aW9uIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIENvbnRleHREZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBJRCBvZiB0aGUgY29udGV4dCBkZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlkLCBzZXR0aW5ncykge1xuICAgICAgICBpZighaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSUQgbXVzdCBiZSBzdXBwbGllZCB0byBjcmVhdGUgYSBuZXcgQ29udGV4dERlZmluaXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2NvbnRleHRzJywgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgQ29udGV4dCBJRCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBBUEkuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGNvbnRleHRJZE1vZGVsPn0gLSBBIHByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGNvbnRleHRJZE1vZGVsfSBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5nZXQoKS50aGVuKGNvbnRleHRJZE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3Igb3ZlcndyaXRlIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQ29udGV4dCBJRFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiAtIFRoZSBuZXdcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Y29udGV4dElkTW9kZWw+fSAtIEEgcHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSBjb250ZXh0SWRNb2RlbCBvYmplY3QuXG4gICAgICovXG4gICAgdXBkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24gPSAnJykge1xuICAgICAgICBsZXQgdXBkYXRlUmVxdWVzdCA9IGA8Y29udGV4dD48aWQ+JHt0aGlzLmlkfTwvaWQ+PGRlc2NyaXB0aW9uPiR7ZGVzY3JpcHRpb259PC9kZXNjcmlwdGlvbj48L2NvbnRleHQ+YDtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5wdXQodXBkYXRlUmVxdWVzdCwgJ2FwcGxpY2F0aW9uL3htbDsgY2hhcnNldD11dGYtOCcpLnRoZW4oY29udGV4dElkTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGlzIENvbnRleHQgSUQgZnJvbSB0aGUgc3lzdGVtLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIGRlbGV0aW9uIG9mIHRoZSBDb250ZXh0IElELlxuICAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5kZWxldGUoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBjbGFzcyB0byBtYW5hZ2UgYSBtYXBwaW5nIGJldHdlZW4gYSB7QGxpbmsgQ29udGV4dERlZmluaXRpb259IGFuZCBhIHBhZ2Ugb24gYSBNaW5kVG91Y2ggc2l0ZTsgdGFraW5nIGxhbmd1YWdlIGludG8gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRNYXAge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IENvbnRleHRNYXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgLSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIG1hcHBpbmcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIHtAbGluayBDb250ZXh0RGVmaW5pdGlvbn0uXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGFuZ3VhZ2UsIGlkLCBzZXR0aW5ncykge1xuICAgICAgICBpZighaWQgfHwgIWxhbmd1YWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIElEIGFuZCBsYW5ndWFnZSBtdXN0IGJlIHN1cHBsaWVkIHRvIGNyZWF0ZSBhIG5ldyBDb250ZXh0TWFwJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMucGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2NvbnRleHRtYXBzJywgbGFuZ3VhZ2UsIGlkKS53aXRoUGFyYW0oJ3ZlcmJvc2UnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgQ29udGV4dCBNYXBwaW5nLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxjb250ZXh0TWFwTW9kZWw+fSAtIEEgcHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgY29udGV4dE1hcE1vZGVsfSBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5nZXQoKS50aGVuKGNvbnRleHRNYXBNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBvciBjaGFuZ2VzIHRoZSBwYWdlIElEIGZvciB0aGUgQ29udGV4dCBJRCBtYXBwaW5nLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlSWQgLSBUaGUgcGFnZSBJRCB0byB1c2UgZm9yIHRoZSBDb250ZXh0IElEIG1hcHBpbmcuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGNvbnRleHRNYXBNb2RlbD59IC0gQSBwcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBjb250ZXh0TWFwTW9kZWx9IG9iamVjdC5cbiAgICAgKi9cbiAgICB1cGRhdGUocGFnZUlkKSB7XG4gICAgICAgIGlmKCFwYWdlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2EgcGFnZSBJRCBtdXN0IGJlIHN1cHBsaWVkIGluIG9yZGVyIHRvIHVwZGF0ZSBhIG1hcHBpbmcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVwZGF0ZVJlcXVlc3QgPSBgPGNvbnRleHRtYXA+PGlkPiR7dGhpcy5pZH08L2lkPjxwYWdlaWQ+JHtwYWdlSWR9PC9wYWdlaWQ+PGxhbmd1YWdlPiR7dGhpcy5sYW5ndWFnZX08L2xhbmd1YWdlPjwvY29udGV4dG1hcD5gO1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLnB1dCh1cGRhdGVSZXF1ZXN0LCAnYXBwbGljYXRpb24veG1sOyBjaGFyc2V0PXV0Zi04JykudGhlbihjb250ZXh0TWFwTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBtYXBwaW5nIGJldHdlZW4gYSBDb250ZXh0IElEIGFuZCBhbiBhc3NvY2lhdGVkIHBhZ2UuXG4gICAgICogQHJldHVybnMge1Byb21pc2V9IC0gQSBQcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIGluZGljYXRlcyBhIHN1Y2Nlc3NmdWwgcmVtb3ZhbCBvZiB0aGUgbWFwcGluZy5cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuZGVsZXRlKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgdG8gbWFuYWdlIHRoZSBDb250ZXh0IElEIHN1YnN5c3RlbSBmb3IgYWNjZXNzIHRvIHRoZSBDb250ZXh0IElEcyBhbmQgQ29udGV4dCBJRCBNYXBwaW5ncy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRJZE1hbmFnZXIge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IENvbnRleHRJZE1hbmFnZXIuXG4gICAgICogQHBhcmFtIHtTZXR0aW5nc30gW3NldHRpbmdzXSAtIFRoZSB7QGxpbmsgU2V0dGluZ3N9IGluZm9ybWF0aW9uIHRvIHVzZSBpbiBjb25zdHJ1Y3Rpb24uIElmIG5vdCBzdXBwbGllZCwgdGhlIGRlZmF1bHQgc2V0dGluZ3MgYXJlIHVzZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5tYXBzUGx1ZyA9IG5ldyBQbHVnKHNldHRpbmdzKS5hdCgnQGFwaScsICdkZWtpJywgJ2NvbnRleHRtYXBzJykud2l0aFBhcmFtKCd2ZXJib3NlJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uc1BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdjb250ZXh0cycpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBvZiB0aGUgQ29udGV4dCBJRCBNYXBwaW5ncyB0aGF0IGFyZSBkZWZpbmVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxjb250ZXh0TWFwc01vZGVsPn0gLSBBIHByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGNvbnRleHRNYXBzTW9kZWx9IG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRNYXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBzUGx1Zy5nZXQoKS50aGVuKGNvbnRleHRNYXBzTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgb2YgdGhlIENvbnRleHQgSUQgRGVmaW5pdGlvbnMgdGhhdCBhcmUgZGVmaW5lZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Y29udGV4dElkc01vZGVsPn0gLSBBIHByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGNvbnRleHRJZHNNb2RlbH0gb2JqZWN0LlxuICAgICAqL1xuICAgIGdldERlZmluaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uc1BsdWcuZ2V0KCkudGhlbihjb250ZXh0SWRzTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBDb250ZXh0IElEIERlZmluaXRpb24gdG8gdGhlIHN5c3RlbS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBUaGUgSUQgdG8gdXNlIGZvciB0aGUgbmV3IGRlZmluaXRpb24uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZXNjcmlwdGlvbj0nJ10gLSBUaGUgaW5pdGlhbCBkZXNjcmlwdGlvbiB0byBzZXQgZm9yIHRoZSBkZWZpbml0aW9uLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxjb250ZXh0SWRNb2RlbD59IC0gQSBwcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBjb250ZXh0SWRNb2RlbH0gb2JqZWN0LlxuICAgICAqL1xuICAgIGFkZERlZmluaXRpb24oaWQsIGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICAgICAgaWYoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdhbiBJRCBtdXN0IGJlIHN1cHBsaWVkIHRvIGFkZCBhIGRlZmluaXRpb24nKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkZFJlcXVlc3QgPSBgPGNvbnRleHRzPjxjb250ZXh0PjxpZD4ke2lkfTwvaWQ+PGRlc2NyaXB0aW9uPiR7ZGVzY3JpcHRpb259PC9kZXNjcmlwdGlvbj48L2NvbnRleHQ+PC9jb250ZXh0cz5gO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uc1BsdWcucG9zdChhZGRSZXF1ZXN0LCAnYXBwbGljYXRpb24veG1sOyBjaGFyc2V0PXV0Zi04JykudGhlbihjb250ZXh0SWRNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbmV3IHtAbGluayBDb250ZXh0RGVmaW5pdGlvbn0gb2JqZWN0IGZvciB0aGUgc3VwcGxpZWQgSUQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gVGhlIElEIG9mIHRoZSBDb250ZXh0IERlZmluaXRpb24gdG8gY3JlYXRlLlxuICAgICAqIEByZXR1cm5zIHtDb250ZXh0RGVmaW5pdGlvbn0gLSBBIG5ldyB7QGxpbmsgQ29udGV4dERlZmluaXRpb259IG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXREZWZpbml0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dERlZmluaXRpb24oaWQsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIG5ldyB7QGxpbmsgQ29udGV4dE1hcH0gb2JqZWN0IGZvciB0aGUgc3VwcGxpZWQgbGFuZ3VhZ2UgYW5kIElEIGNvbWJpbmF0aW9uLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSAtIFRoZSBsYW5ndWFnZSBjb2RlIHRvIHVzZSB0byBpZGVudGlmeSB0aGUgbWFwcGluZy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBUaGUgQ29udGV4dCBJRCBpZGVudGlmaWVyIHRvIHVzZSB0byBpZGVudGlmeSB0aGUgbWFwcGluZy5cbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dE1hcH0gLSBBIG5ldyB7QGxpbmsgQ29udGV4dE1hcH0gb2JqZWN0LlxuICAgICAqL1xuICAgIGdldE1hcChsYW5ndWFnZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZXh0TWFwKGxhbmd1YWdlLCBpZCwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=contextId.js.map
