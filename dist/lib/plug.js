'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Plug = undefined;

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


var _settings = require('./settings');

var _uri = require('./uri');

var _xhrError = require('../errors/xhrError');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _handleHttpError(xhr) {
    return new Promise(function (resolve, reject) {

        // Throw for all non-2xx status codes, except for 304
        if ((xhr.status < 200 || xhr.status >= 300) && xhr.status !== 304) {
            reject(new _xhrError.XhrError(xhr));
        } else {
            resolve(xhr);
        }
    });
}
function _getText(xhr) {
    return Promise.resolve(xhr.responseText || '');
}
function _doRequest(params) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        // server will only respond with Access-Control-Allow-Credentials if valid developer token is provided
        xhr.withCredentials = true;
        var requestParams = {
            _: Date.now(),
            origin: 'mt-web' // TODO: F1 req from settings module after 20150820
        };
        if (_this.parseJson) {
            requestParams['dream.out.format'] = 'json';
        }
        var url = new _uri.Uri(_this.withParams(requestParams).getUrl());
        xhr.open(params.verb, url.toString());
        xhr.setRequestHeader('X-Deki-Client', 'mindtouch-martian');

        // X-Deki-Requested-With (required for web widgets same-origin xhr)
        var originUrlString = _this.settings.get('origin');
        if (originUrlString && originUrlString !== '') {
            var originUri = new _uri.Uri(originUrlString);
            if (url.origin === originUri.origin) {
                xhr.setRequestHeader('X-Deki-Requested-With', 'XMLHttpRequest');
            }
        }
        Object.keys(_this.headers).forEach(function (key) {
            xhr.setRequestHeader(key, _this.headers[key]);
        });
        if ('mime' in params) {
            xhr.setRequestHeader('Content-Type', params.mime);
        }
        if (_this._timeout) {
            xhr.timeout = _this._timeout;
        }
        xhr.onload = function () {
            resolve(xhr);
        };
        xhr.onerror = function () {
            reject(xhr);
        };
        xhr.ontimeout = function () {
            reject(xhr);
        };
        if ('value' in params && params.value !== null) {
            xhr.send(params.value);
        } else {
            xhr.send();
        }
    });
}

var Plug = exports.Plug = function () {
    function Plug() {
        var settings = arguments.length <= 0 || arguments[0] === undefined ? new _settings.Settings() : arguments[0];
        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, Plug);

        // Initialize the settings
        this.settings = settings;
        var url = this.settings.get('host');
        var token = this.settings.get('token');

        // Initialize the url for this instance
        var _url = new _uri.Uri(url);
        if ('constructionParams' in params) {
            if ('segments' in params.constructionParams) {
                _url.addSegments(params.constructionParams.segments);
            }
            if ('query' in params.constructionParams) {
                _url.addQueryParams(params.constructionParams.query);
            }
            if ('excludeQuery' in params.constructionParams) {
                _url.removeQueryParam(params.constructionParams.excludeQuery);
            }
            if ('timeout' in params.constructionParams) {
                this._timeout = params.constructionParams.timeout;
            }
        } else {
            params.constructionParams = {};
        }
        this.url = _url;
        this.headers = params.headers || {};
        if (token && token !== '') {
            this.headers['X-Deki-Token'] = token;
        }
        this.parseJson = params.raw !== true;
    }

    _createClass(Plug, [{
        key: 'getUrl',
        value: function getUrl() {
            return this.url.toString();
        }
    }, {
        key: 'getHeaders',
        value: function getHeaders() {
            return this.headers;
        }
    }, {
        key: 'at',
        value: function at() {
            for (var _len = arguments.length, segments = Array(_len), _key = 0; _key < _len; _key++) {
                segments[_key] = arguments[_key];
            }

            var values = [];
            segments.forEach(function (segment) {
                values.push(segment.toString());
            });
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, {
                headers: this.headers,
                constructionParams: { segments: segments }
            });
        }
    }, {
        key: 'withParam',
        value: function withParam(key, value) {
            var params = {};
            params[key] = value;
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, {
                headers: this.headers,
                constructionParams: { query: params }
            });
        }
    }, {
        key: 'withParams',
        value: function withParams() {
            var values = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, {
                headers: this.headers,
                constructionParams: { query: values }
            });
        }
    }, {
        key: 'withoutParam',
        value: function withoutParam(key) {
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, {
                headers: this.headers,
                constructionParams: { excludeQuery: key }
            });
        }
    }, {
        key: '_copyHeaders',
        value: function _copyHeaders() {
            var _this2 = this;

            var newHeaders = {};
            Object.keys(this.headers).forEach(function (key) {
                newHeaders[key] = _this2.headers[key];
            });
            return newHeaders;
        }
    }, {
        key: 'withHeader',
        value: function withHeader(key, value) {
            var newHeaders = this._copyHeaders();
            newHeaders[key] = value;
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, { headers: newHeaders });
        }
    }, {
        key: 'withHeaders',
        value: function withHeaders(values) {
            var newHeaders = this._copyHeaders();
            Object.keys(values).forEach(function (key) {
                newHeaders[key] = values[key];
            });
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, { headers: newHeaders });
        }
    }, {
        key: 'withoutHeader',
        value: function withoutHeader(key) {
            var newHeaders = this._copyHeaders();
            delete newHeaders[key];
            var newSettings = this.settings.clone({ host: this.url.toString() });
            return new Plug(newSettings, { headers: newHeaders });
        }
    }, {
        key: 'get',
        value: function get() {
            var verb = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];

            return this.getRaw(verb).then(_handleHttpError).then(_getText);
        }
    }, {
        key: 'getRaw',
        value: function getRaw() {
            var verb = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];

            return _doRequest.call(this, { verb: verb });
        }
    }, {
        key: 'post',
        value: function post(value, mime) {
            return this.postRaw(value, mime).then(_handleHttpError).then(_getText);
        }
    }, {
        key: 'postRaw',
        value: function postRaw(value, mime) {
            return _doRequest.call(this, { verb: 'POST', value: value, mime: mime });
        }
    }, {
        key: 'put',
        value: function put(value, mime) {
            return this.withHeader('X-HTTP-Method-Override', 'PUT').post(value, mime);
        }
    }, {
        key: 'putRaw',
        value: function putRaw(value, mime) {
            return this.withHeader('X-HTTP-Method-Override', 'PUT').postRaw(value, mime);
        }
    }, {
        key: 'head',
        value: function head() {
            return this.get('HEAD');
        }
    }, {
        key: 'headRaw',
        value: function headRaw() {
            return this.getRaw('HEAD');
        }
    }, {
        key: 'options',
        value: function options() {
            return this.get('OPTIONS');
        }
    }, {
        key: 'optionsRaw',
        value: function optionsRaw() {
            return this.getRaw('OPTIONS');
        }
    }, {
        key: 'del',
        value: function del() {
            return this.withHeader('X-HTTP-Method-Override', 'DELETE').post(null, null);
        }
    }, {
        key: 'delRaw',
        value: function delRaw() {
            return this.withHeader('X-HTTP-Method-Override', 'DELETE').postRaw(null, null);
        }
    }, {
        key: 'delete',
        value: function _delete() {
            return this.del();
        }
    }]);

    return Plug;
}();
//# sourceMappingURL=data:application/json;base64,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Q0FBZ0IsSUFBaEIsRUFBc0IsRUFBRSxNQUFNLE1BQU4sRUFBYyxPQUFPLEtBQVAsRUFBYyxNQUFNLElBQU4sRUFBcEQsQ0FBUCxDQURpQjs7Ozs0QkFHakIsT0FBTyxNQUFNO0FBQ2IsbUJBQU8sS0FBSyxVQUFMLENBQWdCLHdCQUFoQixFQUEwQyxLQUExQyxFQUFpRCxJQUFqRCxDQUFzRCxLQUF0RCxFQUE2RCxJQUE3RCxDQUFQLENBRGE7Ozs7K0JBR1YsT0FBTyxNQUFNO0FBQ2hCLG1CQUFPLEtBQUssVUFBTCxDQUFnQix3QkFBaEIsRUFBMEMsS0FBMUMsRUFBaUQsT0FBakQsQ0FBeUQsS0FBekQsRUFBZ0UsSUFBaEUsQ0FBUCxDQURnQjs7OzsrQkFHYjtBQUNILG1CQUFPLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBUCxDQURHOzs7O2tDQUdHO0FBQ04sbUJBQU8sS0FBSyxNQUFMLENBQVksTUFBWixDQUFQLENBRE07Ozs7a0NBR0E7QUFDTixtQkFBTyxLQUFLLEdBQUwsQ0FBUyxTQUFULENBQVAsQ0FETTs7OztxQ0FHRztBQUNULG1CQUFPLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBUCxDQURTOzs7OzhCQUdQO0FBQ0YsbUJBQU8sS0FBSyxVQUFMLENBQWdCLHdCQUFoQixFQUEwQyxRQUExQyxFQUFvRCxJQUFwRCxDQUF5RCxJQUF6RCxFQUErRCxJQUEvRCxDQUFQLENBREU7Ozs7aUNBR0c7QUFDTCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDLFFBQTFDLEVBQW9ELE9BQXBELENBQTRELElBQTVELEVBQWtFLElBQWxFLENBQVAsQ0FESzs7OztrQ0FHQTtBQUNMLG1CQUFPLEtBQUssR0FBTCxFQUFQLENBREs7Ozs7V0F6SUEiLCJmaWxlIjoibGliL3BsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQge1VyaX0gZnJvbSAnLi91cmknO1xuaW1wb3J0IHtYaHJFcnJvcn0gZnJvbSAnLi4vZXJyb3JzL3hockVycm9yJztcbmZ1bmN0aW9uIF9oYW5kbGVIdHRwRXJyb3IoeGhyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAvLyBUaHJvdyBmb3IgYWxsIG5vbi0yeHggc3RhdHVzIGNvZGVzLCBleGNlcHQgZm9yIDMwNFxuICAgICAgICBpZigoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDMwMCkgJiYgeGhyLnN0YXR1cyAhPT0gMzA0KSB7XG4gICAgICAgICAgICByZWplY3QobmV3IFhockVycm9yKHhocikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBfZ2V0VGV4dCh4aHIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHhoci5yZXNwb25zZVRleHQgfHwgJycpO1xufVxuZnVuY3Rpb24gX2RvUmVxdWVzdChwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgLy8gc2VydmVyIHdpbGwgb25seSByZXNwb25kIHdpdGggQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMgaWYgdmFsaWQgZGV2ZWxvcGVyIHRva2VuIGlzIHByb3ZpZGVkXG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICBsZXQgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgICAgICAgIF86IERhdGUubm93KCksXG4gICAgICAgICAgICBvcmlnaW46ICdtdC13ZWInIC8vIFRPRE86IEYxIHJlcSBmcm9tIHNldHRpbmdzIG1vZHVsZSBhZnRlciAyMDE1MDgyMFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLnBhcnNlSnNvbikge1xuICAgICAgICAgICAgcmVxdWVzdFBhcmFtc1snZHJlYW0ub3V0LmZvcm1hdCddID0gJ2pzb24nO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBuZXcgVXJpKHRoaXMud2l0aFBhcmFtcyhyZXF1ZXN0UGFyYW1zKS5nZXRVcmwoKSk7XG4gICAgICAgIHhoci5vcGVuKHBhcmFtcy52ZXJiLCB1cmwudG9TdHJpbmcoKSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLURla2ktQ2xpZW50JywgJ21pbmR0b3VjaC1tYXJ0aWFuJyk7XG5cbiAgICAgICAgLy8gWC1EZWtpLVJlcXVlc3RlZC1XaXRoIChyZXF1aXJlZCBmb3Igd2ViIHdpZGdldHMgc2FtZS1vcmlnaW4geGhyKVxuICAgICAgICBsZXQgb3JpZ2luVXJsU3RyaW5nID0gdGhpcy5zZXR0aW5ncy5nZXQoJ29yaWdpbicpO1xuICAgICAgICBpZihvcmlnaW5VcmxTdHJpbmcgJiYgb3JpZ2luVXJsU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgbGV0IG9yaWdpblVyaSA9IG5ldyBVcmkob3JpZ2luVXJsU3RyaW5nKTtcbiAgICAgICAgICAgIGlmKHVybC5vcmlnaW4gPT09IG9yaWdpblVyaS5vcmlnaW4pIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1EZWtpLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5oZWFkZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdGhpcy5oZWFkZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoJ21pbWUnIGluIHBhcmFtcykge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIHBhcmFtcy5taW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh4aHIpO1xuICAgICAgICB9O1xuICAgICAgICBpZigndmFsdWUnIGluIHBhcmFtcyAmJiBwYXJhbXMudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHhoci5zZW5kKHBhcmFtcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgY2xhc3MgUGx1ZyB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKSwgcGFyYW1zID0ge30pIHtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBzZXR0aW5nc1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnNldHRpbmdzLmdldCgnaG9zdCcpO1xuICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLnNldHRpbmdzLmdldCgndG9rZW4nKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSB1cmwgZm9yIHRoaXMgaW5zdGFuY2VcbiAgICAgICAgbGV0IF91cmwgPSBuZXcgVXJpKHVybCk7XG4gICAgICAgIGlmKCdjb25zdHJ1Y3Rpb25QYXJhbXMnIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYoJ3NlZ21lbnRzJyBpbiBwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgX3VybC5hZGRTZWdtZW50cyhwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zLnNlZ21lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCdxdWVyeScgaW4gcGFyYW1zLmNvbnN0cnVjdGlvblBhcmFtcykge1xuICAgICAgICAgICAgICAgIF91cmwuYWRkUXVlcnlQYXJhbXMocGFyYW1zLmNvbnN0cnVjdGlvblBhcmFtcy5xdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZignZXhjbHVkZVF1ZXJ5JyBpbiBwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgX3VybC5yZW1vdmVRdWVyeVBhcmFtKHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMuZXhjbHVkZVF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCd0aW1lb3V0JyBpbiBwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZW91dCA9IHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMudGltZW91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVybCA9IF91cmw7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHBhcmFtcy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICBpZih0b2tlbiAmJiB0b2tlbiAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyc1snWC1EZWtpLVRva2VuJ10gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcnNlSnNvbiA9IHBhcmFtcy5yYXcgIT09IHRydWU7XG4gICAgfVxuICAgIGdldFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnM7XG4gICAgfVxuXG4gICAgYXQoLi4uc2VnbWVudHMpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNlZ21lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3Rpb25QYXJhbXM6IHsgc2VnbWVudHM6IHNlZ21lbnRzIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdpdGhQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5jbG9uZSh7IGhvc3Q6IHRoaXMudXJsLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUGx1ZyhuZXdTZXR0aW5ncywge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgY29uc3RydWN0aW9uUGFyYW1zOiB7IHF1ZXJ5OiBwYXJhbXMgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2l0aFBhcmFtcyh2YWx1ZXMgPSB7fSkge1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3Rpb25QYXJhbXM6IHsgcXVlcnk6IHZhbHVlcyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3aXRob3V0UGFyYW0oa2V5KSB7XG4gICAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuY2xvbmUoeyBob3N0OiB0aGlzLnVybC50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFBsdWcobmV3U2V0dGluZ3MsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdGlvblBhcmFtczogeyBleGNsdWRlUXVlcnk6IGtleSB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfY29weUhlYWRlcnMoKSB7XG4gICAgICAgIGxldCBuZXdIZWFkZXJzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaGVhZGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBuZXdIZWFkZXJzW2tleV0gPSB0aGlzLmhlYWRlcnNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdIZWFkZXJzO1xuICAgIH1cbiAgICB3aXRoSGVhZGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IG5ld0hlYWRlcnMgPSB0aGlzLl9jb3B5SGVhZGVycygpO1xuICAgICAgICBuZXdIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5jbG9uZSh7IGhvc3Q6IHRoaXMudXJsLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUGx1ZyhuZXdTZXR0aW5ncywgeyBoZWFkZXJzOiBuZXdIZWFkZXJzIH0pO1xuICAgIH1cbiAgICB3aXRoSGVhZGVycyh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IG5ld0hlYWRlcnMgPSB0aGlzLl9jb3B5SGVhZGVycygpO1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbmV3SGVhZGVyc1trZXldID0gdmFsdWVzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7IGhlYWRlcnM6IG5ld0hlYWRlcnMgfSk7XG4gICAgfVxuICAgIHdpdGhvdXRIZWFkZXIoa2V5KSB7XG4gICAgICAgIGxldCBuZXdIZWFkZXJzID0gdGhpcy5fY29weUhlYWRlcnMoKTtcbiAgICAgICAgZGVsZXRlIG5ld0hlYWRlcnNba2V5XTtcbiAgICAgICAgbGV0IG5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5jbG9uZSh7IGhvc3Q6IHRoaXMudXJsLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUGx1ZyhuZXdTZXR0aW5ncywgeyBoZWFkZXJzOiBuZXdIZWFkZXJzIH0pO1xuICAgIH1cbiAgICBnZXQodmVyYiA9ICdHRVQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhdyh2ZXJiKS50aGVuKF9oYW5kbGVIdHRwRXJyb3IpLnRoZW4oX2dldFRleHQpO1xuICAgIH1cbiAgICBnZXRSYXcodmVyYiA9ICdHRVQnKSB7XG4gICAgICAgIHJldHVybiBfZG9SZXF1ZXN0LmNhbGwodGhpcywgeyB2ZXJiOiB2ZXJiIH0pO1xuICAgIH1cbiAgICBwb3N0KHZhbHVlLCBtaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3RSYXcodmFsdWUsIG1pbWUpLnRoZW4oX2hhbmRsZUh0dHBFcnJvcikudGhlbihfZ2V0VGV4dCk7XG4gICAgfVxuICAgIHBvc3RSYXcodmFsdWUsIG1pbWUpIHtcbiAgICAgICAgcmV0dXJuIF9kb1JlcXVlc3QuY2FsbCh0aGlzLCB7IHZlcmI6ICdQT1NUJywgdmFsdWU6IHZhbHVlLCBtaW1lOiBtaW1lIH0pO1xuICAgIH1cbiAgICBwdXQodmFsdWUsIG1pbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aEhlYWRlcignWC1IVFRQLU1ldGhvZC1PdmVycmlkZScsICdQVVQnKS5wb3N0KHZhbHVlLCBtaW1lKTtcbiAgICB9XG4gICAgcHV0UmF3KHZhbHVlLCBtaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhIZWFkZXIoJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnLCAnUFVUJykucG9zdFJhdyh2YWx1ZSwgbWltZSk7XG4gICAgfVxuICAgIGhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnSEVBRCcpO1xuICAgIH1cbiAgICBoZWFkUmF3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSYXcoJ0hFQUQnKTtcbiAgICB9XG4gICAgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdPUFRJT05TJyk7XG4gICAgfVxuICAgIG9wdGlvbnNSYXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhdygnT1BUSU9OUycpO1xuICAgIH1cbiAgICBkZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhIZWFkZXIoJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnLCAnREVMRVRFJykucG9zdChudWxsLCBudWxsKTtcbiAgICB9XG4gICAgZGVsUmF3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoSGVhZGVyKCdYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJywgJ0RFTEVURScpLnBvc3RSYXcobnVsbCwgbnVsbCk7XG4gICAgfVxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsKCk7XG4gICAgfVxufVxuIl19
//# sourceMappingURL=plug.js.map
