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


var _plug = require('./utility/plug');

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
//# sourceMappingURL=data:application/json;base64,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QUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsVUFBdEMsQ0FBdkIsQ0FGa0I7QUFHbEIsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBSGtCO0tBQXRCOzs7Ozs7OztpQkFOUzs7a0NBZ0JDO0FBQ04sbUJBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxHQUFvQixJQUFwQixDQUF5Qiw4QkFBaUIsS0FBakIsQ0FBaEMsQ0FETTs7Ozs7Ozs7Ozt5Q0FRTztBQUNiLG1CQUFPLEtBQUssZUFBTCxDQUFxQixHQUFyQixHQUEyQixJQUEzQixDQUFnQyw0QkFBZ0IsS0FBaEIsQ0FBdkMsQ0FEYTs7Ozs7Ozs7Ozs7O3NDQVVILElBQXNCO2dCQUFsQixvRUFBYyxrQkFBSTs7QUFDaEMsZ0JBQUcsQ0FBQyxFQUFELEVBQUs7QUFDSix1QkFBTyxRQUFRLE1BQVIsQ0FBZSxJQUFJLEtBQUosQ0FBVSw0Q0FBVixDQUFmLENBQVAsQ0FESTthQUFSO0FBR0EsZ0JBQUkseUNBQXVDLDRCQUF1QixtREFBOUQsQ0FKNEI7QUFLaEMsbUJBQU8sS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLFVBQTFCLEVBQXNDLGdDQUF0QyxFQUF3RSxJQUF4RSxDQUE2RSwwQkFBZSxLQUFmLENBQXBGLENBTGdDOzs7Ozs7Ozs7OztzQ0FhdEIsSUFBSTtBQUNkLG1CQUFPLElBQUksaUJBQUosQ0FBc0IsRUFBdEIsRUFBMEIsS0FBSyxRQUFMLENBQWpDLENBRGM7Ozs7Ozs7Ozs7OzsrQkFVWCxVQUFVLElBQUk7QUFDakIsbUJBQU8sSUFBSSxVQUFKLENBQWUsUUFBZixFQUF5QixFQUF6QixFQUE2QixLQUFLLFFBQUwsQ0FBcEMsQ0FEaUI7Ozs7V0F6RFoiLCJmaWxlIjoiY29udGV4dElkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXJ0aWFuIC0gQ29yZSBKYXZhU2NyaXB0IEFQSSBmb3IgTWluZFRvdWNoXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IE1pbmRUb3VjaCBJbmMuXG4gKiB3d3cubWluZHRvdWNoLmNvbSAgb3NzQG1pbmR0b3VjaC5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7UGx1Z30gZnJvbSAnLi91dGlsaXR5L3BsdWcnO1xuaW1wb3J0IHtjb250ZXh0SWRzTW9kZWx9IGZyb20gJy4vbW9kZWxzL2NvbnRleHRJZHMubW9kZWwnO1xuaW1wb3J0IHtjb250ZXh0SWRNb2RlbH0gZnJvbSAnLi9tb2RlbHMvY29udGV4dElkLm1vZGVsJztcbmltcG9ydCB7Y29udGV4dE1hcHNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvY29udGV4dE1hcHMubW9kZWwnO1xuaW1wb3J0IHtjb250ZXh0TWFwTW9kZWx9IGZyb20gJy4vbW9kZWxzL2NvbnRleHRNYXAubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gbWFuYWdlIGluZGl2aWR1YWwgQ29udGV4dCBJRHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0RGVmaW5pdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBDb250ZXh0RGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBUaGUgSUQgb2YgdGhlIGNvbnRleHQgZGVmaW5pdGlvbi5cbiAgICAgKiBAcGFyYW0ge1NldHRpbmdzfSBbc2V0dGluZ3NdIC0gVGhlIHtAbGluayBTZXR0aW5nc30gaW5mb3JtYXRpb24gdG8gdXNlIGluIGNvbnN0cnVjdGlvbi4gSWYgbm90IHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBzZXR0aW5ncyBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYoIWlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIElEIG11c3QgYmUgc3VwcGxpZWQgdG8gY3JlYXRlIGEgbmV3IENvbnRleHREZWZpbml0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnBsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdjb250ZXh0cycsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIENvbnRleHQgSUQgaW5mb3JtYXRpb24gZnJvbSB0aGUgQVBJLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxjb250ZXh0SWRNb2RlbD59IC0gQSBwcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBjb250ZXh0SWRNb2RlbH0gb2JqZWN0LlxuICAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuZ2V0KCkudGhlbihjb250ZXh0SWRNb2RlbC5wYXJzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG9yIG92ZXJ3cml0ZSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIENvbnRleHQgSURcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzY3JpcHRpb24gLSBUaGUgbmV3XG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGNvbnRleHRJZE1vZGVsPn0gLSBBIHByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEgY29udGV4dElkTW9kZWwgb2JqZWN0LlxuICAgICAqL1xuICAgIHVwZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICAgICAgbGV0IHVwZGF0ZVJlcXVlc3QgPSBgPGNvbnRleHQ+PGlkPiR7dGhpcy5pZH08L2lkPjxkZXNjcmlwdGlvbj4ke2Rlc2NyaXB0aW9ufTwvZGVzY3JpcHRpb24+PC9jb250ZXh0PmA7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcucHV0KHVwZGF0ZVJlcXVlc3QsICdhcHBsaWNhdGlvbi94bWw7IGNoYXJzZXQ9dXRmLTgnKS50aGVuKGNvbnRleHRJZE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhpcyBDb250ZXh0IElEIGZyb20gdGhlIHN5c3RlbS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSBBIFByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgaW5kaWNhdGVzIGEgc3VjY2Vzc2Z1bCBkZWxldGlvbiBvZiB0aGUgQ29udGV4dCBJRC5cbiAgICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuZGVsZXRlKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgY2xhc3MgdG8gbWFuYWdlIGEgbWFwcGluZyBiZXR3ZWVuIGEge0BsaW5rIENvbnRleHREZWZpbml0aW9ufSBhbmQgYSBwYWdlIG9uIGEgTWluZFRvdWNoIHNpdGU7IHRha2luZyBsYW5ndWFnZSBpbnRvIGFjY291bnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWFwIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBDb250ZXh0TWFwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlIC0gVGhlIGxhbmd1YWdlIG9mIHRoZSBtYXBwaW5nLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCB7QGxpbmsgQ29udGV4dERlZmluaXRpb259LlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxhbmd1YWdlLCBpZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYoIWlkIHx8ICFsYW5ndWFnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBJRCBhbmQgbGFuZ3VhZ2UgbXVzdCBiZSBzdXBwbGllZCB0byBjcmVhdGUgYSBuZXcgQ29udGV4dE1hcCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICB0aGlzLnBsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdjb250ZXh0bWFwcycsIGxhbmd1YWdlLCBpZCkud2l0aFBhcmFtKCd2ZXJib3NlJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpbmZvcm1hdGlvbiBmb3IgdGhlIENvbnRleHQgTWFwcGluZy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Y29udGV4dE1hcE1vZGVsPn0gLSBBIHByb21pc2UgdGhhdCwgd2hlbiByZXNvbHZlZCwgeWllbGRzIGEge0BsaW5rIGNvbnRleHRNYXBNb2RlbH0gb2JqZWN0LlxuICAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWcuZ2V0KCkudGhlbihjb250ZXh0TWFwTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgb3IgY2hhbmdlcyB0aGUgcGFnZSBJRCBmb3IgdGhlIENvbnRleHQgSUQgbWFwcGluZy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZUlkIC0gVGhlIHBhZ2UgSUQgdG8gdXNlIGZvciB0aGUgQ29udGV4dCBJRCBtYXBwaW5nLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxjb250ZXh0TWFwTW9kZWw+fSAtIEEgcHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgY29udGV4dE1hcE1vZGVsfSBvYmplY3QuXG4gICAgICovXG4gICAgdXBkYXRlKHBhZ2VJZCkge1xuICAgICAgICBpZighcGFnZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdhIHBhZ2UgSUQgbXVzdCBiZSBzdXBwbGllZCBpbiBvcmRlciB0byB1cGRhdGUgYSBtYXBwaW5nJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cGRhdGVSZXF1ZXN0ID0gYDxjb250ZXh0bWFwPjxpZD4ke3RoaXMuaWR9PC9pZD48cGFnZWlkPiR7cGFnZUlkfTwvcGFnZWlkPjxsYW5ndWFnZT4ke3RoaXMubGFuZ3VhZ2V9PC9sYW5ndWFnZT48L2NvbnRleHRtYXA+YDtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Zy5wdXQodXBkYXRlUmVxdWVzdCwgJ2FwcGxpY2F0aW9uL3htbDsgY2hhcnNldD11dGYtOCcpLnRoZW4oY29udGV4dE1hcE1vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbWFwcGluZyBiZXR3ZWVuIGEgQ29udGV4dCBJRCBhbmQgYW4gYXNzb2NpYXRlZCBwYWdlLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIEEgUHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCBpbmRpY2F0ZXMgYSBzdWNjZXNzZnVsIHJlbW92YWwgb2YgdGhlIG1hcHBpbmcuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnLmRlbGV0ZSgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIGNsYXNzIHRvIG1hbmFnZSB0aGUgQ29udGV4dCBJRCBzdWJzeXN0ZW0gZm9yIGFjY2VzcyB0byB0aGUgQ29udGV4dCBJRHMgYW5kIENvbnRleHQgSUQgTWFwcGluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0SWRNYW5hZ2VyIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBDb250ZXh0SWRNYW5hZ2VyLlxuICAgICAqIEBwYXJhbSB7U2V0dGluZ3N9IFtzZXR0aW5nc10gLSBUaGUge0BsaW5rIFNldHRpbmdzfSBpbmZvcm1hdGlvbiB0byB1c2UgaW4gY29uc3RydWN0aW9uLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IHNldHRpbmdzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMubWFwc1BsdWcgPSBuZXcgUGx1ZyhzZXR0aW5ncykuYXQoJ0BhcGknLCAnZGVraScsICdjb250ZXh0bWFwcycpLndpdGhQYXJhbSgndmVyYm9zZScsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnNQbHVnID0gbmV3IFBsdWcoc2V0dGluZ3MpLmF0KCdAYXBpJywgJ2Rla2knLCAnY29udGV4dHMnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgb2YgdGhlIENvbnRleHQgSUQgTWFwcGluZ3MgdGhhdCBhcmUgZGVmaW5lZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Y29udGV4dE1hcHNNb2RlbD59IC0gQSBwcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBjb250ZXh0TWFwc01vZGVsfSBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0TWFwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwc1BsdWcuZ2V0KCkudGhlbihjb250ZXh0TWFwc01vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9mIHRoZSBDb250ZXh0IElEIERlZmluaXRpb25zIHRoYXQgYXJlIGRlZmluZWQuXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPGNvbnRleHRJZHNNb2RlbD59IC0gQSBwcm9taXNlIHRoYXQsIHdoZW4gcmVzb2x2ZWQsIHlpZWxkcyBhIHtAbGluayBjb250ZXh0SWRzTW9kZWx9IG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXREZWZpbml0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnNQbHVnLmdldCgpLnRoZW4oY29udGV4dElkc01vZGVsLnBhcnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgQ29udGV4dCBJRCBEZWZpbml0aW9uIHRvIHRoZSBzeXN0ZW0uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gVGhlIElEIHRvIHVzZSBmb3IgdGhlIG5ldyBkZWZpbml0aW9uLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVzY3JpcHRpb249JyddIC0gVGhlIGluaXRpYWwgZGVzY3JpcHRpb24gdG8gc2V0IGZvciB0aGUgZGVmaW5pdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48Y29udGV4dElkTW9kZWw+fSAtIEEgcHJvbWlzZSB0aGF0LCB3aGVuIHJlc29sdmVkLCB5aWVsZHMgYSB7QGxpbmsgY29udGV4dElkTW9kZWx9IG9iamVjdC5cbiAgICAgKi9cbiAgICBhZGREZWZpbml0aW9uKGlkLCBkZXNjcmlwdGlvbiA9ICcnKSB7XG4gICAgICAgIGlmKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignYW4gSUQgbXVzdCBiZSBzdXBwbGllZCB0byBhZGQgYSBkZWZpbml0aW9uJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZGRSZXF1ZXN0ID0gYDxjb250ZXh0cz48Y29udGV4dD48aWQ+JHtpZH08L2lkPjxkZXNjcmlwdGlvbj4ke2Rlc2NyaXB0aW9ufTwvZGVzY3JpcHRpb24+PC9jb250ZXh0PjwvY29udGV4dHM+YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnNQbHVnLnBvc3QoYWRkUmVxdWVzdCwgJ2FwcGxpY2F0aW9uL3htbDsgY2hhcnNldD11dGYtOCcpLnRoZW4oY29udGV4dElkTW9kZWwucGFyc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIG5ldyB7QGxpbmsgQ29udGV4dERlZmluaXRpb259IG9iamVjdCBmb3IgdGhlIHN1cHBsaWVkIElELlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBJRCBvZiB0aGUgQ29udGV4dCBEZWZpbml0aW9uIHRvIGNyZWF0ZS5cbiAgICAgKiBAcmV0dXJucyB7Q29udGV4dERlZmluaXRpb259IC0gQSBuZXcge0BsaW5rIENvbnRleHREZWZpbml0aW9ufSBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0RGVmaW5pdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRleHREZWZpbml0aW9uKGlkLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBuZXcge0BsaW5rIENvbnRleHRNYXB9IG9iamVjdCBmb3IgdGhlIHN1cHBsaWVkIGxhbmd1YWdlIGFuZCBJRCBjb21iaW5hdGlvbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgLSBUaGUgbGFuZ3VhZ2UgY29kZSB0byB1c2UgdG8gaWRlbnRpZnkgdGhlIG1hcHBpbmcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gVGhlIENvbnRleHQgSUQgaWRlbnRpZmllciB0byB1c2UgdG8gaWRlbnRpZnkgdGhlIG1hcHBpbmcuXG4gICAgICogQHJldHVybnMge0NvbnRleHRNYXB9IC0gQSBuZXcge0BsaW5rIENvbnRleHRNYXB9IG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRNYXAobGFuZ3VhZ2UsIGlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dE1hcChsYW5ndWFnZSwgaWQsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=contextId.js.map
