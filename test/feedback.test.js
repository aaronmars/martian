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
import {pageRatingsModel} from 'models/pageRatings.model';
import {FeedbackManager} from 'feedback';
describe('Feedback API', () => {
    describe('constructor', () => {
        it('can construct a FeedbackManager', () => {
            expect(() => new FeedbackManager()).not.toThrow();
            expect(() => FeedbackManager()).toThrow();
        });
    });
    describe('instance functions', () => {
        let fm = null;
        beforeEach(() => {
            fm = new FeedbackManager();
        });
        afterEach(() => {
            fm = null;
        });
        it('can submit page feedback', (done) => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            fm.submit({}).then(() => {
                done();
            });
        });
        it('can fetch the ratings for a set of pages', (done) => {
            spyOn(Plug.prototype, 'get').and.returnValue(Promise.resolve({}));
            spyOn(pageRatingsModel, 'parse').and.returnValue({});
            fm.getRatingsForPages([ 440, 441 ]).then((r) => {
                expect(r).toBeDefined();
                done();
            });
        });
    });
});
