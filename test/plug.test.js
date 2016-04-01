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
import {Plug} from 'utility/plug';
import {Settings} from 'utility/settings';
describe('Plug', () => {
    describe('constructor', () => {
        it('will construct a Plug with no URL provided', () => {
            let p = new Plug();
            expect(p).toBeDefined();
            expect(p.at('@api').getUrl()).toBe('/@api');
        });
        it('can create a Plug', () => {
            let settings = new Settings({ host: 'https://www.example.com' });
            let p = new Plug(settings);
            expect(p.getUrl()).toBe('https://www.example.com/');
        });
        it('can create a Plug from a complicated URL', () => {
            let settings = new Settings({ host: 'https://www.example.com/foo/bar/baz?a=b&c=d&e=f#1=2&3=4' });
            let p = new Plug(settings);
            expect(p.getUrl()).toBe('https://www.example.com/foo/bar/baz?a=b&c=d&e=f#1=2&3=4');
        });
        it('can construct a Plug with supplied headers', () => {
            let settings = new Settings({ host: 'https://www.example.com' });
            let headers = { foo: 'bar' };
            let p = new Plug(settings, { headers: headers });
            expect(p.getHeaders()).toEqual(headers);
        });
        it('can construct a Plug with extra construction parameters', () => {
            let settings = new Settings({ host: 'https://www.example.com/foo?a=b' });
            let params = {
                segments: [ 'bar', 'baz' ],
                query: { c: 'd', e: 'f' },
                excludeQuery: 'a'
            };
            let p = new Plug(settings, { constructionParams: params });
            expect(p.getUrl()).toBe('https://www.example.com/foo/bar/baz?c=d&e=f');
        });
        it('can construct a Plug with the host in the settings', () => {
            let settings = new Settings({ host: 'http://www.mindtouch.dev' });
            let p = new Plug(settings).at('foo');
            expect(p.getUrl()).toBe('http://www.mindtouch.dev/foo');
        });
        it('can construct a Plug with a token in the settings', () => {
            let settings = new Settings({ token: 'abcd1234' });
            let p = new Plug(settings);
            expect(p.headers['X-Deki-Token']).toBe('abcd1234');
        });
        it('can fail if the constructor is not called correctly', () => {
            expect(() => Plug()).toThrow();
        });
    });
    describe('constructor with global settings', () => {
        it('can use a global settings object', () => {
            Settings.defaults = {
                host: 'http://www.theonehost.org',
                token: 'theOneToken'
            };
            let gPlug = new Plug().at('@api', 'rad', 'endpoint').withParams({ foo: 'bar' });
            expect(gPlug.getUrl()).toBe('http://www.theonehost.org/@api/rad/endpoint?foo=bar');
            Settings.defaults = {};
        });
    });
    describe('URI manipulation', () => {
        let p = null;
        beforeEach(() => {
            let settings = new Settings({ host: 'https://www.example.com/foo?a=b' });
            p = new Plug(settings, {
                headers: { 'Cache-Control': 'no-cache' }
            });
        });
        afterEach(() => {
            p = null;
        });
        it('can add segments', () => {
            expect(p.at('bar', 'baz').getUrl()).toBe('https://www.example.com/foo/bar/baz?a=b');
            expect(p.getUrl()).toBe('https://www.example.com/foo?a=b');
        });
        it('can add a single query param', () => {
            expect(p.withParam('c', 'd').getUrl()).toBe('https://www.example.com/foo?a=b&c=d');
            expect(p.withParam('param', 'Hello, this is a query parameter!: A cool one worth $$').getUrl())
                .toBe('https://www.example.com/foo?a=b&param=Hello%2C%20this%20is%20a%20query%20parameter!%3A%20A%20cool%20one%20worth%20%24%24');
            expect(p.getUrl()).toBe('https://www.example.com/foo?a=b');
        });
        it('can add multiple query params', () => {
            expect(p.withParams().getUrl()).toBe('https://www.example.com/foo?a=b');
            expect(p.withParams({ c: 'd', e: 'f' }).getUrl()).toBe('https://www.example.com/foo?a=b&c=d&e=f');
            expect(p.getUrl()).toBe('https://www.example.com/foo?a=b');
        });
        it('can remove a query param', () => {
            expect(p.withoutParam('a').getUrl()).toBe('https://www.example.com/foo');
            expect(p.getUrl()).toBe('https://www.example.com/foo?a=b');
        });
        it('can do multiple manipulations at once', () => {
            var locPlug = p.at('localization', 'abcd.123');
            expect(locPlug.getUrl()).toBe('https://www.example.com/foo/localization/abcd.123?a=b');
            locPlug = locPlug.withParam('lang', 'en-us');
            expect(locPlug.getUrl()).toBe('https://www.example.com/foo/localization/abcd.123?a=b&lang=en-us');
        });
        it('can add a header', () => {
            expect(p.withHeader('Front-End-Https', 'On').getHeaders()).toEqual({ 'Cache-Control': 'no-cache', 'Front-End-Https': 'On' });
            expect(p.getHeaders()).toEqual({ 'Cache-Control': 'no-cache' });
        });
        it('can add multiple headers', () => {
            expect(p.withHeaders({
                'Front-End-Https': 'On',
                'Content-Type': 'text/javascript'
            }).getHeaders()).toEqual({
                'Front-End-Https': 'On',
                'Content-Type': 'text/javascript',
                'Cache-Control': 'no-cache'
            });
            expect(p.getHeaders()).toEqual({ 'Cache-Control': 'no-cache' });
        });
        it('can remove a header', () => {
            expect(p.withoutHeader('Cache-Control').getHeaders()).toEqual({});
            expect(p.withoutHeader('fakeHeader').getHeaders()).toEqual({ 'Cache-Control': 'no-cache' });
            expect(p.getHeaders()).toEqual({ 'Cache-Control': 'no-cache' });
        });
    });
    describe('special manipulation cases', () => {
        it('can add segments and query parameters', () => {
            let plug = new Plug();
            let segmentsPlug = plug.at('foo.hello', 'bar.baz');
            expect(segmentsPlug.getUrl()).toBe('/foo.hello/bar.baz');
            let bothPlug = segmentsPlug.withParam('dog', 'cat');
            expect(bothPlug.getUrl()).toBe('/foo.hello/bar.baz?dog=cat');
        });
    });
    describe('Ajax operations', () => {
        let p;
        let uri = 'https://www.example.com/foo';
        let uriMatcher = new RegExp(uri);
        beforeEach(() => {
            let settings = new Settings({ host: uri });
            p = new Plug(settings, { raw: true });
            jasmine.Ajax.install();
        });
        afterEach(() => {
            jasmine.Ajax.uninstall();
        });
        it('can do a GET request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.get().then((r) => {
                expect(r).toBe('Ajax Response');
                done();
            });
        });
        it('can do a raw GET request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.getRaw().then((xhr) => {
                expect(xhr.status).toBe(200);
                done();
            });
        });
        it('can handle a 304 GET request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 304, responseText: 'Ajax Response' });
            p.get().then(() => {
                done();
            });
        });
        it('can handle a failing GET request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 500, responseText: '{ \"message\": \"internal error\" }' });
            p.get().catch((r) => {
                expect(r).toBeDefined();
                expect(r.message).toBe('internal error');
                expect(r.errorCode).toBe(500);
                expect(r.response).not.toBeNull();
                done();
            });
        });
        it('can do a POST request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.post().then(() => {
                done();
            });
        });
        it('can do a raw POST request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.postRaw().then((xhr) => {
                expect(xhr.status).toBe(200);
                done();
            });
        });
        it('can handle a 304 POST request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 304 });
            p.post().then(() => {
                done();
            });
        });
        it('can handle a failing POST request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 500, responseText: '{ \"message\": \"internal error\" }' });
            p.post().catch((e) => {
                expect(e.message).toBe('internal error');
                expect(e.errorCode).toBe(500);
                done();
            });
        });
        it('can do a PUT request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.put().then(() => {
                done();
            });
        });
        it('can do a raw PUT request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.putRaw().then((xhr) => {
                expect(xhr.status).toBe(200);
                done();
            });
        });
        it('can handle a 304 PUT request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 304 });
            p.put().then(() => {
                done();
            });
        });
        it('can handle a failing PUT request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 500, responseText: '{ \"message\": \"internal error\" }' });
            p.put().catch((e) => {
                expect(e.message).toBe('internal error');
                expect(e.errorCode).toBe(500);
                done();
            });
        });
        it('can do a HEAD request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'HEAD').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.head().then(() => {
                done();
            });
        });
        it('can do a raw HEAD request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'HEAD').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.headRaw().then((xhr) => {
                expect(xhr.status).toBe(200);
                done();
            });
        });
        it('can handle a 304 HEAD request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'HEAD').andReturn({ status: 304, responseText: 'Ajax Response' });
            p.head().then(() => {
                done();
            });
        });
        it('can handle a failing HEAD request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'HEAD').andReturn({ status: 500, responseText: 'Ajax Response' });
            p.head().catch(() => {
                done();
            });
        });
        it('can do an OPTIONS request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'OPTIONS').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.options().then(() => {
                done();
            });
        });
        it('can do a raw OPTIONS request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'OPTIONS').andReturn({ status: 200, responseText: 'Ajax Response' });
            p.optionsRaw().then((xhr) => {
                expect(xhr.status).toBe(200);
                done();
            });
        });
        it('can handle a 304 OPTIONS request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'OPTIONS').andReturn({ status: 304, responseText: 'Ajax Response' });
            p.options().then(() => {
                done();
            });
        });
        it('can handle a failing OPTIONS request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'OPTIONS').andReturn({ status: 500, responseText: '{ \"message\": \"internal error\" }' });
            p.options().catch((e) => {
                expect(e.message).toBe('internal error');
                expect(e.errorCode).toBe(500);
                done();
            });
        });
        it('can do a DELETE request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.delete().then(() => {
                done();
            });
        });
        it('can do a raw DELETE request', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'POST').andReturn({ status: 200 });
            p.delRaw().then(() => {
                done();
            });
        });
    });
    describe('same origin tests', () => {
        let uri = 'https://www.example.com/foo';
        let uriMatcher = new RegExp(uri);
        beforeEach(() => {
            jasmine.Ajax.install();
        });
        afterEach(() => {
            jasmine.Ajax.uninstall();
        });
        it('can do a request with the origin the same as the request URI', (done) => {
            let settings = new Settings({ host: uri, origin: 'https://www.example.com' });
            let plug = new Plug(settings);
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 200, responseText: 'Ajax Response' });
            plug.get().then(() => {
                let headers = jasmine.Ajax.requests.mostRecent().requestHeaders;
                expect('X-Deki-Requested-With' in headers).toBe(true);
                expect(headers['X-Deki-Requested-With']).toBe('XMLHttpRequest');
                done();
            });
        });
        it('can do a request with the origin the same as the request URI (case insensitive)', (done) => {
            let settings = new Settings({ host: uri, origin: 'https://WWW.EXAMPLE.COM' });
            let plug = new Plug(settings);
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 200, responseText: 'Ajax Response' });
            plug.get().then(() => {
                let headers = jasmine.Ajax.requests.mostRecent().requestHeaders;
                expect('X-Deki-Requested-With' in headers).toBe(true);
                expect(headers['X-Deki-Requested-With']).toBe('XMLHttpRequest');
                done();
            });
        });
        it('can do a request with the origin different from the request URI', (done) => {
            let settings = new Settings({ host: uri, origin: 'https://www.example.org' });
            let plug = new Plug(settings);
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andReturn({ status: 200, responseText: 'Ajax Response' });
            plug.get().then(() => {
                let headers = jasmine.Ajax.requests.mostRecent().requestHeaders;
                expect('X-Deki-Requested-With' in headers).toBe(false);
                done();
            });
        });
    });
    describe('timeout tests', () => {
        let p = null;
        let uri = 'https://www.example.com/foo';
        let settings = new Settings({ host: uri });
        let uriMatcher = new RegExp(uri);
        beforeEach(() => {
            jasmine.Ajax.install();
        });
        afterEach(() => {
            jasmine.Ajax.uninstall();
            p = null;
        });
        it('can handle an XHR timeout', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andTimeout();
            p = new Plug(settings, { constructionParams: { timeout: 1 } });
            p.get().catch((e) => {
                expect(e).toBeDefined();
                done();
            });
        });
        it('can handle an XHR error', (done) => {
            jasmine.Ajax.stubRequest(uriMatcher, null, 'GET').andError();
            p = new Plug(settings);
            p.get().catch((e) => {
                expect(e).toBeDefined();
                done();
            });
        });
    });
});
