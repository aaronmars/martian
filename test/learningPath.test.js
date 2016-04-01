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
import {LearningPathManager, LearningPath} from 'learningPath';
import {learningPathModel} from 'models/learningPath.model';
import {pageModel} from 'models/page.model';
describe('Learning Path API', () => {
    let lpm = null;
    beforeEach(() => {
        lpm = new LearningPathManager();
    });
    afterEach(() => {
        lpm = null;
    });
    describe('constructor', () => {
        it('can construct a new learning path', () => {
            let learningPath = new LearningPath('foobar');
            expect(learningPath).toBeDefined();
            expect(() => learningPath()).toThrow();
            expect(() => LearningPathManager()).toThrow();
        });
    });
    describe('Manager tests', () => {
        it('can get the listing of all of the learning paths', (done) => {
            spyOn(Plug.prototype, 'get').and.returnValue(Promise.resolve({}));
            spyOn(learningPathModel, 'parse').and.returnValue({});
            lpm.getLearningPaths().then((r) => {
                expect(r).toBeDefined();
                done();
            });
        });
        it('can get learning path by name', () => {
            var lp = lpm.getLearningPath('name');
            expect(lp instanceof LearningPath).toBe(true);
        });
        it('can create a learning path', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            spyOn(learningPathModel, 'parse').and.returnValue({});
            lpm.create({ title: 'foo', name: 'bar', summary: 'baz' }).then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can create a learning path with a long summary', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            spyOn(learningPathModel, 'parse').and.returnValue({});
            lpm.create({ title: 'foo', name: 'bar', summary: 'Years isn\'t there void third darkness tree made firmament from set which morning hath signs all so meat which abundantly. Together behold land. Land form, grass isn\'t called won\'t called. Said is great second were sea beginning unto unto without she\'d. Seas seed she\'d waters hath. Saying yielding rule. Forth light creeping winged day it blessed let in multiply don\'t. Likeness creature under have, have created, i set creeping blessed his after likeness seasons midst under also days shall, don\'t male fifth tree there hath herb gathering stars. Gathering form Place whales open blessed waters seas Fruitful earth kind wherein years signs evening female spirit winged His they\'re god whales meat meat without for face. Saw moveth their open don\'t after be and without, first thing third Divided herb every greater. Lights forth from us there gathered. Appear subdue. Own fourth living, created our rule creature, firmament our our, first evening good it you\'re bring you\'re wherein said said blessed very light form saying you. Heaven, very saw dominion without every tree male. Bring their night creepeth was won\'t fill beast god thing his you\'ll cattle together earth, without is also. Set the man which creeping place. Dry made likeness.' }).then((r) => {
                expect(r).toBeDefined();
            });
        });
    });
    describe('operations', () => {
        let learningPath = null;
        beforeEach(() => {
            learningPath = new LearningPath('foobar');
            spyOn(Plug.prototype, 'get').and.returnValue(Promise.resolve({}));
        });
        afterEach(() => {
            learningPath = null;
        });
        it('can get a learning path', (done) => {
            spyOn(learningPathModel, 'parse').and.returnValue({});
            learningPath.getInfo().then((r) => {
                expect(r).toBeDefined();
                done();
            });
        });
        it('can update a learning path', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            learningPath.update({ name: 'foo', title: 'bar', summary: 'baz' }).then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can truncate a long summary', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            learningPath.update({ name: 'foo', title: 'bar', summary: 'Years isn\'t there void third darkness tree made firmament from set which morning hath signs all so meat which abundantly. Together behold land. Land form, grass isn\'t called won\'t called. Said is great second were sea beginning unto unto without she\'d. Seas seed she\'d waters hath. Saying yielding rule. Forth light creeping winged day it blessed let in multiply don\'t. Likeness creature under have, have created, i set creeping blessed his after likeness seasons midst under also days shall, don\'t male fifth tree there hath herb gathering stars. Gathering form Place whales open blessed waters seas Fruitful earth kind wherein years signs evening female spirit winged His they\'re god whales meat meat without for face. Saw moveth their open don\'t after be and without, first thing third Divided herb every greater. Lights forth from us there gathered. Appear subdue. Own fourth living, created our rule creature, firmament our our, first evening good it you\'re bring you\'re wherein said said blessed very light form saying you. Heaven, very saw dominion without every tree male. Bring their night creepeth was won\'t fill beast god thing his you\'ll cattle together earth, without is also. Set the man which creeping place. Dry made likeness.' }).then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can remove a learning path', () => {
            spyOn(Plug.prototype, 'del').and.returnValue(Promise.resolve({}));
            learningPath.remove().then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can update a learning path with pages', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            learningPath.update({ name: 'foo', title: 'bar', summary: 'baz', pages: [ { id: 123 }, { id: 124 }, { id: 125 } ] }).then((r) => {
                expect(r).toBeDefined();
            });
        });
    });
    describe('page operations', () => {
        let learningPath = null;
        beforeEach(() => {
            learningPath = new LearningPath('foobar');
        });
        afterEach(() => {
            learningPath = null;
        });
        it('can add a page to a learning path', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            spyOn(pageModel, 'parse').and.returnValue({});
            learningPath.addPage(123, 20160225000833).then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can remove a page from a learning path', () => {
            spyOn(Plug.prototype, 'del').and.returnValue(Promise.resolve({}));
            learningPath.removePage(123, 20160225000833).then((r) => {
                expect(r).toBeDefined();
            });
        });
        it('can reorder a page in a learning path', () => {
            spyOn(Plug.prototype, 'post').and.returnValue(Promise.resolve({}));
            learningPath.reorderPage(123, 124, 20160225000833).then((r) => {
                expect(r).toBeDefined();
            });
        });
    });
});
