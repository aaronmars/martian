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
//# sourceMappingURL=data:application/json;base64,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SUFBTCxHQUFZLFVBQVUsQ0FBVixDQUFaLENBRHFCO2FBQXpCLE1BRU87QUFDSCxxQkFBSyxJQUFMLEdBQVksRUFBWixDQURHO2FBRlA7Ozs7NEJBTVM7QUFDVCxtQkFBVSxLQUFLLFFBQUwsVUFBa0IsS0FBSyxJQUFMLENBRG5COzs7OzRCQUdNO0FBQ2YsbUJBQU8sS0FBSyxNQUFMLENBRFE7OzBCQUdGLEtBQUs7QUFDbEIsaUJBQUssTUFBTCxHQUFjLEdBQWQsQ0FEa0I7QUFFbEIsaUJBQUssS0FBTCxDQUFXLE1BQVgsU0FBd0IsSUFBSSxRQUFKLEVBQXhCLENBRmtCOzs7O1dBbkdiIiwiZmlsZSI6ImxpYi91cmlQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1hcnRpYW4gLSBDb3JlIEphdmFTY3JpcHQgQVBJIGZvciBNaW5kVG91Y2hcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgTWluZFRvdWNoIEluYy5cbiAqIHd3dy5taW5kdG91Y2guY29tICBvc3NAbWluZHRvdWNoLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgdXJpUGFyc2VyID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoW146XFwvPyMuXSs6KSk/KD86XFwvXFwvKT8oPzooW146QFxcL10qKSg/OjooW146QFxcL10qKSk/QCk/KFxcW1swLTlhLWZBLUYuXStcXF18W146XFwvPyNdKikoPzo6KFxcZCt8KD89OikpKT8oKD86W14/I10oPyFbXj8jXFwvXSpcXC4oPzpbPyNdfCQpKSkqXFwvPyk/W14/I1xcL10qKD86KFxcP1teI10qKSk/KD86KCMuKikpPy87XG5mdW5jdGlvbiBfcGFyc2VVcmkoc3RyKSB7XG4gICAgdmFyIHBhcnNlcktleXMgPSBbICdocmVmJywgJ3Byb3RvY29sJywgJ3VzZXJuYW1lJywgJ3Bhc3N3b3JkJywgJ2hvc3RuYW1lJywgJ3BvcnQnLCAncGF0aG5hbWUnLCAnc2VhcmNoJywgJ2hhc2gnIF07XG4gICAgdmFyIG0gPSB1cmlQYXJzZXIuZXhlYyhzdHIpO1xuICAgIHZhciBwYXJ0cyA9IHt9O1xuICAgIHBhcnNlcktleXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGkpIHtcbiAgICAgICAgcGFydHNba2V5XSA9IG1baV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzO1xufVxuZnVuY3Rpb24gX3NlYXJjaFN0cmluZ1RvUGFyYW1zKHNlYXJjaCkge1xuICAgIGxldCBwYXJhbXMgPSBbXTtcbiAgICBsZXQgcXVlcnlFbnRyaWVzID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgcXVlcnlFbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGxldCBrdnAgPSBlbnRyeS5zcGxpdCgnPScpO1xuICAgICAgICBwYXJhbXMucHVzaChbIGt2cFswXSwga3ZwWzFdIF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG5leHBvcnQgY2xhc3MgVXJpU2VhcmNoUGFyYW1zIHtcbiAgICBjb25zdHJ1Y3RvcihzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBbXTtcbiAgICAgICAgaWYoc2VhcmNoU3RyaW5nICYmIHNlYXJjaFN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmKHNlYXJjaFN0cmluZ1swXSA9PT0gJz8nKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSBfc2VhcmNoU3RyaW5nVG9QYXJhbXMoc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMucHVzaChbIG5hbWUsIHZhbHVlIF0pO1xuICAgIH1cbiAgICBkZWxldGUobmFtZSkge1xuICAgICAgICBsZXQgbmV3UGFyYW1zID0gW107XG4gICAgICAgIHRoaXMucGFyYW1zLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgICAgIGlmKHBhaXJbMF0gIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdQYXJhbXMucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGFyYW1zID0gbmV3UGFyYW1zO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGFyYW1zW2ldWzBdID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnBhcmFtc1tpXVsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuICAgIGdldEFsbChuYW1lKSB7XG4gICAgICAgIGxldCBmb3VuZCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgaWYocGFyYW1bMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKHBhcmFtWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG4gICAgaGFzKG5hbWUpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5wYXJhbXNbaV1bMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbXMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICAgICAgaWYocGFpclswXSA9PT0gbmFtZSAmJiAhZm91bmQpIHtcbiAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHBhaXJbMF0gIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcmVzdWx0O1xuICAgIH1cbiAgICBnZXQgZW50cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cHJldmlvdXN9JHtpbmRleCA9PT0gMCA/ICcnIDogJyYnfSR7Y3VycmVudFswXX09JHtjdXJyZW50WzFdfWA7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVXJpUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmxTdHJpbmcgPSAnJykge1xuICAgICAgICBpZih0eXBlb2YgdXJsU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdVUkxcXCc6IFRoZSBzdXBwbGllZCBVUkwgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJ0cyA9IF9wYXJzZVVyaSh1cmxTdHJpbmcpO1xuICAgICAgICBsZXQgcHJvdG9jb2xFeGlzdHMgPSB0eXBlb2YgcGFydHMucHJvdG9jb2wgIT09ICd1bmRlZmluZWQnICYmIHBhcnRzLnByb3RvY29sICE9PSAnJztcbiAgICAgICAgbGV0IGhvc3RFeGlzdHMgPSB0eXBlb2YgcGFydHMuaG9zdG5hbWUgIT09ICd1bmRlZmluZWQnICYmIHBhcnRzLmhvc3RuYW1lICE9PSAnJztcbiAgICAgICAgaWYoKHByb3RvY29sRXhpc3RzICYmICFob3N0RXhpc3RzKSB8fCAoIXByb3RvY29sRXhpc3RzICYmIGhvc3RFeGlzdHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1VSTFxcJzogUHJvdG9jb2wgYW5kIGhvc3RuYW1lIG11c3QgYmUgc3VwcGxpZWQgdG9nZXRoZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZighcHJvdG9jb2xFeGlzdHMgJiYgIWhvc3RFeGlzdHMpIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdGxlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBuZXcgVXJpU2VhcmNoUGFyYW1zKHRoaXMucGFydHMuc2VhcmNoKTtcbiAgICB9XG5cbiAgICAvLyBQcm9wZXJ0aWVzIHRoYXQgY29tZSBkaXJlY3RseSBmcm9tIHRoZSByZWdleFxuICAgIGdldCBwcm90b2NvbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMucHJvdG9jb2wudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgc2V0IHByb3RvY29sKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLnByb3RvY29sID0gdmFsO1xuICAgIH1cbiAgICBnZXQgaG9zdG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLmhvc3RuYW1lO1xuICAgIH1cbiAgICBzZXQgaG9zdG5hbWUodmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMuaG9zdG5hbWUgPSB2YWw7XG4gICAgfVxuICAgIGdldCBwb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy5wb3J0IHx8ICcnO1xuICAgIH1cbiAgICBzZXQgcG9ydCh2YWwpIHtcbiAgICAgICAgdGhpcy5wYXJ0cy5wb3J0ID0gdmFsO1xuICAgIH1cbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLnBhdGhuYW1lIHx8ICcvJztcbiAgICB9XG4gICAgc2V0IHBhdGhuYW1lKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLnBhdGhuYW1lID0gdmFsO1xuICAgIH1cbiAgICBnZXQgc2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXMuZW50cmllcy5sZW5ndGggPT09IDAgPyAnJyA6IGA/JHt0aGlzLnBhcmFtcy50b1N0cmluZygpfWA7XG4gICAgfVxuICAgIHNldCBzZWFyY2godmFsKSB7XG4gICAgICAgIHRoaXMucGFydHMuc2VhcmNoID0gdmFsO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IG5ldyBVcmlTZWFyY2hQYXJhbXModmFsKTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLmhhc2ggfHwgJyc7XG4gICAgfVxuICAgIHNldCBoYXNoKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLmhhc2ggPSB2YWw7XG4gICAgfVxuICAgIGdldCB1c2VybmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMudXNlcm5hbWUgfHwgJyc7XG4gICAgfVxuICAgIHNldCB1c2VybmFtZSh2YWwpIHtcbiAgICAgICAgdGhpcy5wYXJ0cy51c2VybmFtZSA9IHZhbDtcbiAgICB9XG4gICAgZ2V0IHBhc3N3b3JkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy5wYXNzd29yZCB8fCAnJztcbiAgICB9XG4gICAgc2V0IHBhc3N3b3JkKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzLnBhc3N3b3JkID0gdmFsO1xuICAgIH1cblxuICAgIC8vIFByb3BlcnRpZXMgY29tcHV0ZWQgZnJvbSB2YXJpb3VzIHJlZ2V4IHBhcnRzXG4gICAgZ2V0IGhyZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHNldCBocmVmKHZhbCkge1xuICAgICAgICB0aGlzLnBhcnRzID0gX3BhcnNlVXJpKHZhbCk7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gdGhpcy5wYXJ0cy5zZWFyY2g7XG4gICAgfVxuICAgIGdldCBob3N0KCkge1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYodGhpcy5wb3J0KSB7XG4gICAgICAgICAgICBob3N0ID0gYCR7aG9zdH06JHt0aGlzLnBvcnR9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG9zdDtcbiAgICB9XG4gICAgc2V0IGhvc3QodmFsKSB7XG4gICAgICAgIGxldCBob3N0UGFydHMgPSB2YWwuc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IGhvc3RQYXJ0c1swXTtcbiAgICAgICAgaWYoaG9zdFBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydCA9IGhvc3RQYXJ0c1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9ydCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfS8vJHt0aGlzLmhvc3R9YDtcbiAgICB9XG4gICAgZ2V0IHNlYXJjaFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbiAgICBzZXQgc2VhcmNoUGFyYW1zKHZhbCkge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHZhbDtcbiAgICAgICAgdGhpcy5wYXJ0cy5zZWFyY2ggPSBgPyR7dmFsLnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBocmVmU3RyaW5nID0gJyc7XG4gICAgICAgIGlmKCF0aGlzLmhvc3RsZXNzKSB7XG4gICAgICAgICAgICBocmVmU3RyaW5nID0gYCR7dGhpcy5wcm90b2NvbH0vL2A7XG4gICAgICAgICAgICBpZih0aGlzLnVzZXJuYW1lICYmIHRoaXMudXNlcm5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaHJlZlN0cmluZyA9IGAke2hyZWZTdHJpbmd9JHt0aGlzLnVzZXJuYW1lfWA7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wYXNzd29yZCAmJiB0aGlzLnBhc3N3b3JkICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBocmVmU3RyaW5nID0gYCR7aHJlZlN0cmluZ306JHt0aGlzLnBhc3N3b3JkfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhyZWZTdHJpbmcgPSBgJHtocmVmU3RyaW5nfUBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhyZWZTdHJpbmcgPSBgJHtocmVmU3RyaW5nfSR7dGhpcy5ob3N0fSR7dGhpcy5wYXRobmFtZX1gO1xuICAgICAgICBpZih0aGlzLnNlYXJjaCAmJiB0aGlzLnNlYXJjaCAhPT0gJycpIHtcbiAgICAgICAgICAgIGhyZWZTdHJpbmcgPSBgJHtocmVmU3RyaW5nfSR7dGhpcy5zZWFyY2h9YDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhhc2ggJiYgdGhpcy5oYXNoICE9PSAnJykge1xuICAgICAgICAgICAgaHJlZlN0cmluZyA9IGAke2hyZWZTdHJpbmd9JHt0aGlzLmhhc2h9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHJlZlN0cmluZztcbiAgICB9XG59XG4iXX0=
//# sourceMappingURL=uriParser.js.map
