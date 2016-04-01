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
//# sourceMappingURL=data:application/json;base64,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QUFYLENBQWdCLElBQWhCLEVBQXNCLEVBQUUsTUFBTSxNQUFOLEVBQWMsT0FBTyxLQUFQLEVBQWMsTUFBTSxJQUFOLEVBQXBELENBQVAsQ0FEaUI7Ozs7NEJBR2pCLE9BQU8sTUFBTTtBQUNiLG1CQUFPLEtBQUssVUFBTCxDQUFnQix3QkFBaEIsRUFBMEMsS0FBMUMsRUFBaUQsSUFBakQsQ0FBc0QsS0FBdEQsRUFBNkQsSUFBN0QsQ0FBUCxDQURhOzs7OytCQUdWLE9BQU8sTUFBTTtBQUNoQixtQkFBTyxLQUFLLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDLEtBQTFDLEVBQWlELE9BQWpELENBQXlELEtBQXpELEVBQWdFLElBQWhFLENBQVAsQ0FEZ0I7Ozs7K0JBR2I7QUFDSCxtQkFBTyxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQVAsQ0FERzs7OztrQ0FHRztBQUNOLG1CQUFPLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBUCxDQURNOzs7O2tDQUdBO0FBQ04sbUJBQU8sS0FBSyxHQUFMLENBQVMsU0FBVCxDQUFQLENBRE07Ozs7cUNBR0c7QUFDVCxtQkFBTyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQVAsQ0FEUzs7Ozs4QkFHUDtBQUNGLG1CQUFPLEtBQUssVUFBTCxDQUFnQix3QkFBaEIsRUFBMEMsUUFBMUMsRUFBb0QsSUFBcEQsQ0FBeUQsSUFBekQsRUFBK0QsSUFBL0QsQ0FBUCxDQURFOzs7O2lDQUdHO0FBQ0wsbUJBQU8sS0FBSyxVQUFMLENBQWdCLHdCQUFoQixFQUEwQyxRQUExQyxFQUFvRCxPQUFwRCxDQUE0RCxJQUE1RCxFQUFrRSxJQUFsRSxDQUFQLENBREs7Ozs7a0NBR0E7QUFDTCxtQkFBTyxLQUFLLEdBQUwsRUFBUCxDQURLOzs7O1dBeklBIiwiZmlsZSI6InV0aWxpdHkvcGx1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7VXJpfSBmcm9tICcuL3VyaSc7XG5pbXBvcnQge1hockVycm9yfSBmcm9tICcuLi9lcnJvcnMveGhyRXJyb3InO1xuZnVuY3Rpb24gX2hhbmRsZUh0dHBFcnJvcih4aHIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgIC8vIFRocm93IGZvciBhbGwgbm9uLTJ4eCBzdGF0dXMgY29kZXMsIGV4Y2VwdCBmb3IgMzA0XG4gICAgICAgIGlmKCh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSAmJiB4aHIuc3RhdHVzICE9PSAzMDQpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgWGhyRXJyb3IoeGhyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHhocik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIF9nZXRUZXh0KHhocikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCB8fCAnJyk7XG59XG5mdW5jdGlvbiBfZG9SZXF1ZXN0KHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAvLyBzZXJ2ZXIgd2lsbCBvbmx5IHJlc3BvbmQgd2l0aCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyBpZiB2YWxpZCBkZXZlbG9wZXIgdG9rZW4gaXMgcHJvdmlkZWRcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIGxldCByZXF1ZXN0UGFyYW1zID0ge1xuICAgICAgICAgICAgXzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIG9yaWdpbjogJ210LXdlYicgLy8gVE9ETzogRjEgcmVxIGZyb20gc2V0dGluZ3MgbW9kdWxlIGFmdGVyIDIwMTUwODIwXG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMucGFyc2VKc29uKSB7XG4gICAgICAgICAgICByZXF1ZXN0UGFyYW1zWydkcmVhbS5vdXQuZm9ybWF0J10gPSAnanNvbic7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybCA9IG5ldyBVcmkodGhpcy53aXRoUGFyYW1zKHJlcXVlc3RQYXJhbXMpLmdldFVybCgpKTtcbiAgICAgICAgeGhyLm9wZW4ocGFyYW1zLnZlcmIsIHVybC50b1N0cmluZygpKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtRGVraS1DbGllbnQnLCAnbWluZHRvdWNoLW1hcnRpYW4nKTtcblxuICAgICAgICAvLyBYLURla2ktUmVxdWVzdGVkLVdpdGggKHJlcXVpcmVkIGZvciB3ZWIgd2lkZ2V0cyBzYW1lLW9yaWdpbiB4aHIpXG4gICAgICAgIGxldCBvcmlnaW5VcmxTdHJpbmcgPSB0aGlzLnNldHRpbmdzLmdldCgnb3JpZ2luJyk7XG4gICAgICAgIGlmKG9yaWdpblVybFN0cmluZyAmJiBvcmlnaW5VcmxTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICBsZXQgb3JpZ2luVXJpID0gbmV3IFVyaShvcmlnaW5VcmxTdHJpbmcpO1xuICAgICAgICAgICAgaWYodXJsLm9yaWdpbiA9PT0gb3JpZ2luVXJpLm9yaWdpbikge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLURla2ktUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB0aGlzLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZignbWltZScgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgcGFyYW1zLm1pbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgfVxuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh4aHIpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHhocik7XG4gICAgICAgIH07XG4gICAgICAgIGlmKCd2YWx1ZScgaW4gcGFyYW1zICYmIHBhcmFtcy52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgeGhyLnNlbmQocGFyYW1zLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBQbHVnIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpLCBwYXJhbXMgPSB7fSkge1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHNldHRpbmdzXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuc2V0dGluZ3MuZ2V0KCdob3N0Jyk7XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMuc2V0dGluZ3MuZ2V0KCd0b2tlbicpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHVybCBmb3IgdGhpcyBpbnN0YW5jZVxuICAgICAgICBsZXQgX3VybCA9IG5ldyBVcmkodXJsKTtcbiAgICAgICAgaWYoJ2NvbnN0cnVjdGlvblBhcmFtcycgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZignc2VnbWVudHMnIGluIHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBfdXJsLmFkZFNlZ21lbnRzKHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMuc2VnbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJ3F1ZXJ5JyBpbiBwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgX3VybC5hZGRRdWVyeVBhcmFtcyhwYXJhbXMuY29uc3RydWN0aW9uUGFyYW1zLnF1ZXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCdleGNsdWRlUXVlcnknIGluIHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBfdXJsLnJlbW92ZVF1ZXJ5UGFyYW0ocGFyYW1zLmNvbnN0cnVjdGlvblBhcmFtcy5leGNsdWRlUXVlcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJ3RpbWVvdXQnIGluIHBhcmFtcy5jb25zdHJ1Y3Rpb25QYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gcGFyYW1zLmNvbnN0cnVjdGlvblBhcmFtcy50aW1lb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdGlvblBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXJsID0gX3VybDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gcGFyYW1zLmhlYWRlcnMgfHwge307XG4gICAgICAgIGlmKHRva2VuICYmIHRva2VuICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJzWydYLURla2ktVG9rZW4nXSA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyc2VKc29uID0gcGFyYW1zLnJhdyAhPT0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycztcbiAgICB9XG5cbiAgICBhdCguLi5zZWdtZW50cykge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goc2VnbWVudC50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuY2xvbmUoeyBob3N0OiB0aGlzLnVybC50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFBsdWcobmV3U2V0dGluZ3MsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdGlvblBhcmFtczogeyBzZWdtZW50czogc2VnbWVudHMgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2l0aFBhcmFtKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3Rpb25QYXJhbXM6IHsgcXVlcnk6IHBhcmFtcyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB3aXRoUGFyYW1zKHZhbHVlcyA9IHt9KSB7XG4gICAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuY2xvbmUoeyBob3N0OiB0aGlzLnVybC50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFBsdWcobmV3U2V0dGluZ3MsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdGlvblBhcmFtczogeyBxdWVyeTogdmFsdWVzIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHdpdGhvdXRQYXJhbShrZXkpIHtcbiAgICAgICAgbGV0IG5ld1NldHRpbmdzID0gdGhpcy5zZXR0aW5ncy5jbG9uZSh7IGhvc3Q6IHRoaXMudXJsLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUGx1ZyhuZXdTZXR0aW5ncywge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgY29uc3RydWN0aW9uUGFyYW1zOiB7IGV4Y2x1ZGVRdWVyeToga2V5IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9jb3B5SGVhZGVycygpIHtcbiAgICAgICAgbGV0IG5ld0hlYWRlcnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5oZWFkZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIG5ld0hlYWRlcnNba2V5XSA9IHRoaXMuaGVhZGVyc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0hlYWRlcnM7XG4gICAgfVxuICAgIHdpdGhIZWFkZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbmV3SGVhZGVycyA9IHRoaXMuX2NvcHlIZWFkZXJzKCk7XG4gICAgICAgIG5ld0hlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7IGhlYWRlcnM6IG5ld0hlYWRlcnMgfSk7XG4gICAgfVxuICAgIHdpdGhIZWFkZXJzKHZhbHVlcykge1xuICAgICAgICBsZXQgbmV3SGVhZGVycyA9IHRoaXMuX2NvcHlIZWFkZXJzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBuZXdIZWFkZXJzW2tleV0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBuZXdTZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuY2xvbmUoeyBob3N0OiB0aGlzLnVybC50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFBsdWcobmV3U2V0dGluZ3MsIHsgaGVhZGVyczogbmV3SGVhZGVycyB9KTtcbiAgICB9XG4gICAgd2l0aG91dEhlYWRlcihrZXkpIHtcbiAgICAgICAgbGV0IG5ld0hlYWRlcnMgPSB0aGlzLl9jb3B5SGVhZGVycygpO1xuICAgICAgICBkZWxldGUgbmV3SGVhZGVyc1trZXldO1xuICAgICAgICBsZXQgbmV3U2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLmNsb25lKHsgaG9zdDogdGhpcy51cmwudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQbHVnKG5ld1NldHRpbmdzLCB7IGhlYWRlcnM6IG5ld0hlYWRlcnMgfSk7XG4gICAgfVxuICAgIGdldCh2ZXJiID0gJ0dFVCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmF3KHZlcmIpLnRoZW4oX2hhbmRsZUh0dHBFcnJvcikudGhlbihfZ2V0VGV4dCk7XG4gICAgfVxuICAgIGdldFJhdyh2ZXJiID0gJ0dFVCcpIHtcbiAgICAgICAgcmV0dXJuIF9kb1JlcXVlc3QuY2FsbCh0aGlzLCB7IHZlcmI6IHZlcmIgfSk7XG4gICAgfVxuICAgIHBvc3QodmFsdWUsIG1pbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFJhdyh2YWx1ZSwgbWltZSkudGhlbihfaGFuZGxlSHR0cEVycm9yKS50aGVuKF9nZXRUZXh0KTtcbiAgICB9XG4gICAgcG9zdFJhdyh2YWx1ZSwgbWltZSkge1xuICAgICAgICByZXR1cm4gX2RvUmVxdWVzdC5jYWxsKHRoaXMsIHsgdmVyYjogJ1BPU1QnLCB2YWx1ZTogdmFsdWUsIG1pbWU6IG1pbWUgfSk7XG4gICAgfVxuICAgIHB1dCh2YWx1ZSwgbWltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy53aXRoSGVhZGVyKCdYLUhUVFAtTWV0aG9kLU92ZXJyaWRlJywgJ1BVVCcpLnBvc3QodmFsdWUsIG1pbWUpO1xuICAgIH1cbiAgICBwdXRSYXcodmFsdWUsIG1pbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aEhlYWRlcignWC1IVFRQLU1ldGhvZC1PdmVycmlkZScsICdQVVQnKS5wb3N0UmF3KHZhbHVlLCBtaW1lKTtcbiAgICB9XG4gICAgaGVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdIRUFEJyk7XG4gICAgfVxuICAgIGhlYWRSYXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJhdygnSEVBRCcpO1xuICAgIH1cbiAgICBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ09QVElPTlMnKTtcbiAgICB9XG4gICAgb3B0aW9uc1JhdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmF3KCdPUFRJT05TJyk7XG4gICAgfVxuICAgIGRlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aEhlYWRlcignWC1IVFRQLU1ldGhvZC1PdmVycmlkZScsICdERUxFVEUnKS5wb3N0KG51bGwsIG51bGwpO1xuICAgIH1cbiAgICBkZWxSYXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhIZWFkZXIoJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnLCAnREVMRVRFJykucG9zdFJhdyhudWxsLCBudWxsKTtcbiAgICB9XG4gICAgZGVsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWwoKTtcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=plug.js.map
