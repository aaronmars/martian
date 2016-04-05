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
import {modelHelper} from './modelHelper';
let subpagesModel = {
    parse(data) {
        let obj = modelHelper.fromJson(data);
        let parsed = {
            totalcount: modelHelper.getInt(obj['@totalcount']),
            count: modelHelper.getInt(obj['@count']),
            href: obj['@href'],
            subpages: []
        };
        if('page.subpage' in obj) {
            let subpages = modelHelper.getArray(obj['page.subpage']);
            parsed.subpages = subpages.map((sp) => {
                return {
                    id: modelHelper.getInt(sp['@id']),
                    href: sp['@href'],
                    deleted: modelHelper.getBool(sp['@deleted']),
                    hasSubpages: modelHelper.getBool(sp['@subpages']),
                    dateCreated: modelHelper.getDate(sp['date.created']),
                    language: sp.language,
                    namespace: sp.namespace,
                    path: modelHelper.getString(sp.path),
                    title: sp.title,
                    uriUi: sp['uri.ui']
                };
            });
        }
        return parsed;
    }
};
export {subpagesModel};
