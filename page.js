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
import {Plug} from './utility/plug';
import {utility} from './utility/utility';
import {PageBase} from './pageBase';
import {pageModel} from './models/page.model';
import {subpagesModel} from './models/subpages.model';
import {pageContentsModel} from './models/pageContents.model';
import {pageTreeModel} from './models/pageTree.model';
import {pageRatingModel} from './models/pageRating.model';
import {pageMoveModel} from './models/pageMove.model';

/**
 * A class for managing a published page.
 */
export class Page extends PageBase {

    /**
     * Construct a new Page.
     * @param {Number|String} [id='home'] The numeric page ID or the page path.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(id = 'home', settings) {
        super(id);
        this._plug = new Plug(settings).at('@api', 'deki', 'pages', this._id);
    }

    /**
     * Gets the basic page information.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the basic page information.
     */
    getInfo(params = {}) {
        let infoParams = { exclude: 'revision' };
        Object.keys(params).forEach((key) => {
            infoParams[key] = params[key];
        });
        return this._plug.at('info').withParams(infoParams).get().then(pageModel.parse);
    }

    /**
     * Get the subpages of the page.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<subpagesModel>} - A Promise that, when resolved, yields a {@link subpagesModel} containing the basic page information.
     */
    getSubpages(params) {
        return this._plug.at('subpages').withParams(params).get().then(subpagesModel.parse);
    }

    /**
     * Get a hierarchy tree based on the current page.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<pageTreeModel>} - A Promise that, when resolved, yields a {@link pageTreeModel} containing the basic page information.
     */
    getTree(params) {
        return this._plug.at('tree').withParams(params).get().then(pageTreeModel.parse);
    }

    /**
     * Get the hierarchical list of pages IDs from the current page to the home page.
     * @returns {Promise.<Array>} - The array of hierarchical page IDs.
     */
    getTreeIds() {
        return this._plug.at('tree').withParam('format', 'ids').get().then((idString) => {
            return idString.split(',').map((id) => {
                let numId = parseInt(id, 10);
                if(isNaN(numId)) {
                    throw new Error('Unable to parse the tree IDs.');
                }
                return numId;
            });
        }).catch((e) => {
            return Promise.reject({ message: e.message });
        });
    }

    /**
     * Gets the rating information for the page.
     * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the rating information.
     */
    getRating() {
        return this._plug.at('ratings').get().then(pageRatingModel.parse);
    }

    /**
     * Set the rating for the page.
     * @param {String} [rating=''] - The new rating for the page.
     * @param {String} [oldRating=''] - The old rating for the page that is being replaced by {@see rating}.
     * @returns {Promise.<pageRatingModel>} - A Promise that, when resolved, yields a {@link pageRatingModel} containing the new rating information.
     */
    rate(rating = '', oldRating = '') {
        rating = rating.toString();
        oldRating = oldRating.toString();
        if(rating !== '1' && rating !== '0' && rating !== '') {
            throw new Error('Invalid rating supplied');
        }
        if(oldRating !== '1' && oldRating !== '0' && oldRating !== '') {
            throw new Error('Invalid rating supplied for the old rating');
        }
        return this._plug.at('ratings').withParams({ score: rating, previousScore: oldRating }).post(null, utility.textRequestType).then(pageRatingModel.parse);
    }

    /**
     * Gets a MindTouch template rendered in the context of the current page, as HTML.
     * @param {String} path - The template path.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<pageContentsModel>} - A Promise that, when resolved, yields the rendered HTML within a {@link pageContentsModel}.
     */
    getHtmlTemplate(path, params = {}) {
        params.pageid = this._id;

        // Double-URL-encode the path and add '=' to the beginning.  This makes
        //  it a proper page ID to be used in a URI segment.
        let templatePath = '=' + encodeURIComponent(encodeURIComponent(path));
        let contentsPlug = new Plug().at('@api', 'deki', 'pages', templatePath, 'contents').withParams(params);
        return contentsPlug.get().then(pageContentsModel.parse);
    }

    /**
     * Move a page to a new location in the hierarchy.
     * @param {Object} [params] - Additional parameters to direct the API request.
     * @returns {Promise.<pageMoveModel>} - A Promise that, when resolved, yields a {@link pageMoveModel} containing information regarding the move operation.
     */
    move(params = {}) {
        return this._plug.at('move').withParams(params).post(null, 'text/plain; charset=utf-8').then(pageMoveModel.parse);
    }

    /**
     * Using the current page, activates a draft; copying tghe page's content and attachments.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} containing the page information following the activation.
     */
    activateDraft() {
        return this._plug.at('activate-draft').post().then(pageModel.parse);
    }
}
