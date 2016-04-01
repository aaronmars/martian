'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
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
var uriParser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+:))?(?:\/\/)?(?:([^:@\/]*)(?::([^:@\/]*))?@)?(\[[0-9a-fA-F.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?((?:[^?#](?![^?#\/]*\.(?:[?#]|$)))*\/?)?[^?#\/]*(?:(\?[^#]*))?(?:(#.*))?/;
function _parseUri(str) {
    var parserKeys = ['href', 'protocol', 'username', 'password', 'hostname', 'port', 'pathname', 'search', 'hash'];
    var m = uriParser.exec(str);
    var parts = {};
    parserKeys.forEach(function (key, i) {
        parts[key] = m[i];
    });
    return parts;
}
function _searchStringToParams(search) {
    var params = [];
    var queryEntries = search.split('&');
    queryEntries.forEach(function (entry) {
        var kvp = entry.split('=');
        params.push([kvp[0], kvp[1]]);
    });
    return params;
}

var UriSearchParams = exports.UriSearchParams = function () {
    function UriSearchParams(searchString) {
        _classCallCheck(this, UriSearchParams);

        this.params = [];
        if (searchString && searchString !== '') {
            if (searchString[0] === '?') {
                searchString = searchString.slice(1);
            }
            this.params = _searchStringToParams(searchString);
        }
    }

    _createClass(UriSearchParams, [{
        key: 'append',
        value: function append(name, value) {
            this.params.push([name, value]);
        }
    }, {
        key: 'delete',
        value: function _delete(name) {
            var newParams = [];
            this.params.forEach(function (pair) {
                if (pair[0] !== name) {
                    newParams.push(pair);
                }
            });
            this.params = newParams;
        }
    }, {
        key: 'get',
        value: function get(name) {
            var found = null;
            for (var i = 0; i < this.params.length; i++) {
                if (this.params[i][0] === name) {
                    found = this.params[i][1];
                    break;
                }
            }
            return found;
        }
    }, {
        key: 'getAll',
        value: function getAll(name) {
            var found = [];
            this.params.forEach(function (param) {
                if (param[0] === name) {
                    found.push(param[1]);
                }
            });
            return found;
        }
    }, {
        key: 'has',
        value: function has(name) {
            var found = false;
            for (var i = 0; i < this.params.length; i++) {
                if (this.params[i][0] === name) {
                    found = true;
                    break;
                }
            }
            return found;
        }
    }, {
        key: 'set',
        value: function set(name, value) {
            var found = false;
            var result = [];
            this.params.forEach(function (pair) {
                if (pair[0] === name && !found) {
                    pair[1] = value;
                    result.push(pair);
                    found = true;
                } else if (pair[0] !== name) {
                    result.push(pair);
                }
            });
            this.params = result;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.params.reduce(function (previous, current, index) {
                return '' + previous + (index === 0 ? '' : '&') + current[0] + '=' + current[1];
            }, '');
        }
    }, {
        key: 'entries',
        get: function get() {
            return this.params;
        }
    }]);

    return UriSearchParams;
}();

var UriParser = exports.UriParser = function () {
    function UriParser() {
        var urlString = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        _classCallCheck(this, UriParser);

        if (typeof urlString !== 'string') {
            throw new TypeError('Failed to construct \'URL\': The supplied URL must be a string');
        }
        var parts = _parseUri(urlString);
        var protocolExists = typeof parts.protocol !== 'undefined' && parts.protocol !== '';
        var hostExists = typeof parts.hostname !== 'undefined' && parts.hostname !== '';
        if (protocolExists && !hostExists || !protocolExists && hostExists) {
            throw new TypeError('Failed to construct \'URL\': Protocol and hostname must be supplied together');
        }
        if (!protocolExists && !hostExists) {
            this.hostless = true;
        }
        this.parts = parts;
        this.params = new UriSearchParams(this.parts.search);
    }

    // Properties that come directly from the regex


    _createClass(UriParser, [{
        key: 'toString',
        value: function toString() {
            var hrefString = '';
            if (!this.hostless) {
                hrefString = this.protocol + '//';
                if (this.username && this.username !== '') {
                    hrefString = '' + hrefString + this.username;
                    if (this.password && this.password !== '') {
                        hrefString = hrefString + ':' + this.password;
                    }
                    hrefString = hrefString + '@';
                }
            }
            hrefString = '' + hrefString + this.host + this.pathname;
            if (this.search && this.search !== '') {
                hrefString = '' + hrefString + this.search;
            }
            if (this.hash && this.hash !== '') {
                hrefString = '' + hrefString + this.hash;
            }
            return hrefString;
        }
    }, {
        key: 'protocol',
        get: function get() {
            return this.parts.protocol.toLowerCase();
        },
        set: function set(val) {
            this.parts.protocol = val;
        }
    }, {
        key: 'hostname',
        get: function get() {
            return this.parts.hostname;
        },
        set: function set(val) {
            this.parts.hostname = val;
        }
    }, {
        key: 'port',
        get: function get() {
            return this.parts.port || '';
        },
        set: function set(val) {
            this.parts.port = val;
        }
    }, {
        key: 'pathname',
        get: function get() {
            return this.parts.pathname || '/';
        },
        set: function set(val) {
            this.parts.pathname = val;
        }
    }, {
        key: 'search',
        get: function get() {
            return this.params.entries.length === 0 ? '' : '?' + this.params.toString();
        },
        set: function set(val) {
            this.parts.search = val;
            this.params = new UriSearchParams(val);
        }
    }, {
        key: 'hash',
        get: function get() {
            return this.parts.hash || '';
        },
        set: function set(val) {
            this.parts.hash = val;
        }
    }, {
        key: 'username',
        get: function get() {
            return this.parts.username || '';
        },
        set: function set(val) {
            this.parts.username = val;
        }
    }, {
        key: 'password',
        get: function get() {
            return this.parts.password || '';
        },
        set: function set(val) {
            this.parts.password = val;
        }

        // Properties computed from various regex parts

    }, {
        key: 'href',
        get: function get() {
            return this.toString();
        },
        set: function set(val) {
            this.parts = _parseUri(val);
            this.search = this.parts.search;
        }
    }, {
        key: 'host',
        get: function get() {
            var host = this.hostname.toLowerCase();
            if (this.port) {
                host = host + ':' + this.port;
            }
            return host;
        },
        set: function set(val) {
            var hostParts = val.split(':');
            this.hostname = hostParts[0];
            if (hostParts.length > 1) {
                this.port = hostParts[1];
            } else {
                this.port = '';
            }
        }
    }, {
        key: 'origin',
        get: function get() {
            return this.protocol + '//' + this.host;
        }
    }, {
        key: 'searchParams',
        get: function get() {
            return this.params;
        },
        set: function set(val) {
            this.params = val;
            this.parts.search = '?' + val.toString();
        }
    }]);

    return UriParser;
}();
//# sourceMappingURL=data:application/json;base64,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QUFLLElBQUwsR0FBWSxVQUFVLENBQVYsQ0FBWixDQURxQjthQUF6QixNQUVPO0FBQ0gscUJBQUssSUFBTCxHQUFZLEVBQVosQ0FERzthQUZQOzs7OzRCQU1TO0FBQ1QsbUJBQVUsS0FBSyxRQUFMLFVBQWtCLEtBQUssSUFBTCxDQURuQjs7Ozs0QkFHTTtBQUNmLG1CQUFPLEtBQUssTUFBTCxDQURROzswQkFHRixLQUFLO0FBQ2xCLGlCQUFLLE1BQUwsR0FBYyxHQUFkLENBRGtCO0FBRWxCLGlCQUFLLEtBQUwsQ0FBVyxNQUFYLFNBQXdCLElBQUksUUFBSixFQUF4QixDQUZrQjs7OztXQW5HYiIsImZpbGUiOiJ1dGlsaXR5L3VyaVBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFydGlhbiAtIENvcmUgSmF2YVNjcmlwdCBBUEkgZm9yIE1pbmRUb3VjaFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBNaW5kVG91Y2ggSW5jLlxuICogd3d3Lm1pbmR0b3VjaC5jb20gIG9zc0BtaW5kdG91Y2guY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCB1cmlQYXJzZXIgPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKzopKT8oPzpcXC9cXC8pPyg/OihbXjpAXFwvXSopKD86OihbXjpAXFwvXSopKT9AKT8oXFxbWzAtOWEtZkEtRi5dK1xcXXxbXjpcXC8/I10qKSg/OjooXFxkK3woPz06KSkpPygoPzpbXj8jXSg/IVtePyNcXC9dKlxcLig/Ols/I118JCkpKSpcXC8/KT9bXj8jXFwvXSooPzooXFw/W14jXSopKT8oPzooIy4qKSk/LztcbmZ1bmN0aW9uIF9wYXJzZVVyaShzdHIpIHtcbiAgICB2YXIgcGFyc2VyS2V5cyA9IFsgJ2hyZWYnLCAncHJvdG9jb2wnLCAndXNlcm5hbWUnLCAncGFzc3dvcmQnLCAnaG9zdG5hbWUnLCAncG9ydCcsICdwYXRobmFtZScsICdzZWFyY2gnLCAnaGFzaCcgXTtcbiAgICB2YXIgbSA9IHVyaVBhcnNlci5leGVjKHN0cik7XG4gICAgdmFyIHBhcnRzID0ge307XG4gICAgcGFyc2VyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaSkge1xuICAgICAgICBwYXJ0c1trZXldID0gbVtpXTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydHM7XG59XG5mdW5jdGlvbiBfc2VhcmNoU3RyaW5nVG9QYXJhbXMoc2VhcmNoKSB7XG4gICAgbGV0IHBhcmFtcyA9IFtdO1xuICAgIGxldCBxdWVyeUVudHJpZXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBxdWVyeUVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgbGV0IGt2cCA9IGVudHJ5LnNwbGl0KCc9Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKFsga3ZwWzBdLCBrdnBbMV0gXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cbmV4cG9ydCBjbGFzcyBVcmlTZWFyY2hQYXJhbXMge1xuICAgIGNvbnN0cnVjdG9yKHNlYXJjaFN0cmluZykge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IFtdO1xuICAgICAgICBpZihzZWFyY2hTdHJpbmcgJiYgc2VhcmNoU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgaWYoc2VhcmNoU3RyaW5nWzBdID09PSAnPycpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcuc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IF9zZWFyY2hTdHJpbmdUb1BhcmFtcyhzZWFyY2hTdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKFsgbmFtZSwgdmFsdWUgXSk7XG4gICAgfVxuICAgIGRlbGV0ZShuYW1lKSB7XG4gICAgICAgIGxldCBuZXdQYXJhbXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbXMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICAgICAgaWYocGFpclswXSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIG5ld1BhcmFtcy5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBuZXdQYXJhbXM7XG4gICAgfVxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5wYXJhbXNbaV1bMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMucGFyYW1zW2ldWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG4gICAgZ2V0QWxsKG5hbWUpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gW107XG4gICAgICAgIHRoaXMucGFyYW1zLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICBpZihwYXJhbVswXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kLnB1c2gocGFyYW1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgICBoYXMobmFtZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLnBhcmFtc1tpXVswXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuICAgIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgICAgICBpZihwYWlyWzBdID09PSBuYW1lICYmICFmb3VuZCkge1xuICAgICAgICAgICAgICAgIHBhaXJbMV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYocGFpclswXSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSByZXN1bHQ7XG4gICAgfVxuICAgIGdldCBlbnRyaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwcmV2aW91c30ke2luZGV4ID09PSAwID8gJycgOiAnJid9JHtjdXJyZW50WzBdfT0ke2N1cnJlbnRbMV19YDtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVcmlQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKHVybFN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmKHR5cGVvZiB1cmxTdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1VSTFxcJzogVGhlIHN1cHBsaWVkIFVSTCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnRzID0gX3BhcnNlVXJpKHVybFN0cmluZyk7XG4gICAgICAgIGxldCBwcm90b2NvbEV4aXN0cyA9IHR5cGVvZiBwYXJ0cy5wcm90b2NvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFydHMucHJvdG9jb2wgIT09ICcnO1xuICAgICAgICBsZXQgaG9zdEV4aXN0cyA9IHR5cGVvZiBwYXJ0cy5ob3N0bmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFydHMuaG9zdG5hbWUgIT09ICcnO1xuICAgICAgICBpZigocHJvdG9jb2xFeGlzdHMgJiYgIWhvc3RFeGlzdHMpIHx8ICghcHJvdG9jb2xFeGlzdHMgJiYgaG9zdEV4aXN0cykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnVVJMXFwnOiBQcm90b2NvbCBhbmQgaG9zdG5hbWUgbXVzdCBiZSBzdXBwbGllZCB0b2dldGhlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFwcm90b2NvbEV4aXN0cyAmJiAhaG9zdEV4aXN0cykge1xuICAgICAgICAgICAgdGhpcy5ob3N0bGVzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IG5ldyBVcmlTZWFyY2hQYXJhbXModGhpcy5wYXJ0cy5zZWFyY2gpO1xuICAgIH1cblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBjb21lIGRpcmVjdGx5IGZyb20gdGhlIHJlZ2V4XG4gICAgZ2V0IHByb3RvY29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy5wcm90b2NvbC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBzZXQgcHJvdG9jb2wodmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMucHJvdG9jb2wgPSB2YWw7XG4gICAgfVxuICAgIGdldCBob3N0bmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMuaG9zdG5hbWU7XG4gICAgfVxuICAgIHNldCBob3N0bmFtZSh2YWwpIHtcbiAgICAgICAgdGhpcy5wYXJ0cy5ob3N0bmFtZSA9IHZhbDtcbiAgICB9XG4gICAgZ2V0IHBvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLnBvcnQgfHwgJyc7XG4gICAgfVxuICAgIHNldCBwb3J0KHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLnBvcnQgPSB2YWw7XG4gICAgfVxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMucGF0aG5hbWUgfHwgJy8nO1xuICAgIH1cbiAgICBzZXQgcGF0aG5hbWUodmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMucGF0aG5hbWUgPSB2YWw7XG4gICAgfVxuICAgIGdldCBzZWFyY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5lbnRyaWVzLmxlbmd0aCA9PT0gMCA/ICcnIDogYD8ke3RoaXMucGFyYW1zLnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgc2V0IHNlYXJjaCh2YWwpIHtcbiAgICAgICAgdGhpcy5wYXJ0cy5zZWFyY2ggPSB2YWw7XG4gICAgICAgIHRoaXMucGFyYW1zID0gbmV3IFVyaVNlYXJjaFBhcmFtcyh2YWwpO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMuaGFzaCB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhhc2godmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMuaGFzaCA9IHZhbDtcbiAgICB9XG4gICAgZ2V0IHVzZXJuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy51c2VybmFtZSB8fCAnJztcbiAgICB9XG4gICAgc2V0IHVzZXJuYW1lKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLnVzZXJuYW1lID0gdmFsO1xuICAgIH1cbiAgICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLnBhc3N3b3JkIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgcGFzc3dvcmQodmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMucGFzc3dvcmQgPSB2YWw7XG4gICAgfVxuXG4gICAgLy8gUHJvcGVydGllcyBjb21wdXRlZCBmcm9tIHZhcmlvdXMgcmVnZXggcGFydHNcbiAgICBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgc2V0IGhyZWYodmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBfcGFyc2VVcmkodmFsKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSB0aGlzLnBhcnRzLnNlYXJjaDtcbiAgICB9XG4gICAgZ2V0IGhvc3QoKSB7XG4gICAgICAgIGxldCBob3N0ID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZih0aGlzLnBvcnQpIHtcbiAgICAgICAgICAgIGhvc3QgPSBgJHtob3N0fToke3RoaXMucG9ydH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3N0O1xuICAgIH1cbiAgICBzZXQgaG9zdCh2YWwpIHtcbiAgICAgICAgbGV0IGhvc3RQYXJ0cyA9IHZhbC5zcGxpdCgnOicpO1xuICAgICAgICB0aGlzLmhvc3RuYW1lID0gaG9zdFBhcnRzWzBdO1xuICAgICAgICBpZihob3N0UGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wb3J0ID0gaG9zdFBhcnRzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3J0ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9Ly8ke3RoaXMuaG9zdH1gO1xuICAgIH1cbiAgICBnZXQgc2VhcmNoUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxuICAgIHNldCBzZWFyY2hQYXJhbXModmFsKSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0gdmFsO1xuICAgICAgICB0aGlzLnBhcnRzLnNlYXJjaCA9IGA/JHt2YWwudG9TdHJpbmcoKX1gO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgdmFyIGhyZWZTdHJpbmcgPSAnJztcbiAgICAgICAgaWYoIXRoaXMuaG9zdGxlc3MpIHtcbiAgICAgICAgICAgIGhyZWZTdHJpbmcgPSBgJHt0aGlzLnByb3RvY29sfS8vYDtcbiAgICAgICAgICAgIGlmKHRoaXMudXNlcm5hbWUgJiYgdGhpcy51c2VybmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBocmVmU3RyaW5nID0gYCR7aHJlZlN0cmluZ30ke3RoaXMudXNlcm5hbWV9YDtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBhc3N3b3JkICYmIHRoaXMucGFzc3dvcmQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWZTdHJpbmcgPSBgJHtocmVmU3RyaW5nfToke3RoaXMucGFzc3dvcmR9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaHJlZlN0cmluZyA9IGAke2hyZWZTdHJpbmd9QGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHJlZlN0cmluZyA9IGAke2hyZWZTdHJpbmd9JHt0aGlzLmhvc3R9JHt0aGlzLnBhdGhuYW1lfWA7XG4gICAgICAgIGlmKHRoaXMuc2VhcmNoICYmIHRoaXMuc2VhcmNoICE9PSAnJykge1xuICAgICAgICAgICAgaHJlZlN0cmluZyA9IGAke2hyZWZTdHJpbmd9JHt0aGlzLnNlYXJjaH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaGFzaCAmJiB0aGlzLmhhc2ggIT09ICcnKSB7XG4gICAgICAgICAgICBocmVmU3RyaW5nID0gYCR7aHJlZlN0cmluZ30ke3RoaXMuaGFzaH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBocmVmU3RyaW5nO1xuICAgIH1cbn1cbiJdfQ==
//# sourceMappingURL=uriParser.js.map
