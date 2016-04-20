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
import { pageModel } from './page.model';
export let contextMapModel = [
    {
        field: '@default',
        name: 'default',
        transform: 'boolean'
    },
    {
        field: '@exists',
        name: 'exists',
        transform: 'boolean'
    },
    {
        field: 'description'
    },
    {
        field: 'id'
    },
    {
        field: 'language'
    },
    {
        field: 'page',
        model: pageModel
    },
    {
        field: [ 'pageid', '#text' ],
        transform: 'number'
    }
];
