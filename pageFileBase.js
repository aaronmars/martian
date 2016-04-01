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
import {utility} from './utility/utility';
import {fileModel} from './models/file.model';

/**
 * A base class for managing file attachments on both published pages and drafts.  This class can not be instantiated directly.
 */
export class PageFileBase {
    constructor(pageId, filename) {
        if(this.constructor.name === 'PageFileBase') {
            throw new TypeError('PageFileBase must not be constructed directly.  Use one of PageFile() or DraftFile()');
        }
        this._pageId = utility.getResourceId(pageId, 'home');
        this._filename = utility.getFilenameId(filename);
    }

    /**
     * Get the URI for direct access to the file attachment.
     * @returns {String} - The file URI.
     */
    getFileUri() {
        return this._plug.getUrl();
    }

    /**
     * Gets the information for the file attachment.
     * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the file information.
     */
    getInfo() {
        return this._plug.at('info').get().then(fileModel.parse);
    }

    /**
     * Delete the file attachment fron the page.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful delete operation.
     */
    delete() {
        return this._plug.del();
    }

    /**
     * Get the description of the file attachment.
     * @returns {Promise.<String>} - A Promise that, when resolved, yields the file description.
     */
    getDescription() {
        return this._plug.at('description').get();
    }

    /**
     * Remove the description from the file attachment.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful removal.
     */
    clearDescription() {
        return this._plug.at('description').del();
    }

    /**
     * Update the description of the file attachment.
     * @param {String} [description=''] - The new description to set.
     * @returns {Promise.<fileModel>} - A Promise that, when resolved, yields a {@link fileModel} containing the file information.
     */
    updateDescription(description = '') {
        return this._plug.at('description').put(description, utility.textRequestType).then(fileModel.parse);
    }
}
