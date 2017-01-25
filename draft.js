import { Plug } from 'mindtouch-http.js/plug.js';
import { Settings } from './lib/settings.js';
import { utility } from './lib/utility.js';
import { modelParser } from './lib/modelParser.js';
import { PageBase } from './pageBase.js';
import { pageModel } from './models/page.model.js';

/**
 * A class for managing a single unpublished draft page.
 */
export class Draft extends PageBase {

    /**
     * Construct a Draft object.
     * @param {Number|String} [id=home] - The id of the draft to construct.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(id = 'home', settings = new Settings()) {
        super(id);
        this._settings = settings;
        this._plug = new Plug(settings.host, settings.plugConfig).at('@api', 'deki', 'drafts', this._id);
    }

    /**
     * Deactivate the current draft and revert to the published page.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the deactivated page.
     */
    deactivate() {
        let pageModelParser = modelParser.createParser(pageModel);
        return this._plug.at('deactivate').post().then((r) => r.json()).then(pageModelParser);
    }

    /**
     * Publish the draft.
     * @returns {Promise} - A Promise that, when resolved, indicates a successful publish operation.
     */
    publish() {
        return this._plug.at('publish').post();
    }

    /**
     * Unpublish a live page and create a draft out of it.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the unpublished page.
     */
    unpublish() {
        return this._plug.at('unpublish').post().then((r) => r.json()).then(modelParser.createParser(pageModel));
    }

    /**
     * Update display title for a draft
     * @param {String} title - The new title for the draft
     */
    setTitle(title) {
        if(!title) {
            return Promise.reject(new Error('A valid title must be supplied for the draft.'));
        }
        return this._plug.at('title').put(title, utility.textRequestType).then((r) => r.json()).then(modelParser.createParser(pageModel));
    }
}

/**
 * A class for managing unpublished draft pages.
 */
export class DraftManager {

    /**
     * Create a new DraftManager.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(settings = new Settings()) {
        this._settings = settings;
        this._plug = new Plug(this._settings.host, this._settings.plugConfig).at('@api', 'deki', 'drafts');
    }

    /**
     * Create a new draft on the site where a page does not already exist.
     * @param {String} newPath - The path of the new draft.
     * @returns {Promise.<pageModel>} - A Promise that, when resolved, yields a {@link pageModel} for the newly-created draft.
     */
    createDraft(newPath) {
        return this._plug.at(utility.getResourceId(newPath), 'create')
            .post()
            .then((r) => r.json())
            .then(modelParser.createParser(pageModel));
    }

    /**
     * Get a list of drafts filtered by options.
     * @param {Object} [options] - The options that will filter the resulting list of drafts.
     * @param {Number|String} [options.parentId] - Only return pages that live under this page id.
     * @param {Array} [options.tags] - An array of tags to filter the pages by.
     * @param {Number} [options.limit=10] - The maximum number of pages to return (not to exceed 1000)
     * @param {Array} [options.include] - An array of elements to include. Currently, only 'tags' is allowed.
     */
    getDrafts(options = {}) {
        const params = {};
        if(options.parentId) {
            params.parentid = utility.getResourceId(options.parentId, 'home');
        }
        if(options.tags) {
            if(!Array.isArray(options.tags)) {
                return Promise.reject(new Error('The `tags` parameter must be an array.'));
            }
            params.tags = options.tags.join(',');
        }
        if('limit' in options) {
            if(typeof options.limit !== 'number') {
                return Promise.reject(new Error('The `limit` parameter must be an number.'));
            }
            params.limit = options.limit;
        }
        if(options.include) {
            if(!Array.isArray(options.include)) {
                return Promise.reject(new Error('The `include` parameter must be an array.'));
            }
            params.include = options.include.join(',');
        }
        return this._plug.withParams(params)
            .get()
            .then((r) => r.json())
            .then(modelParser.createParser([ { field: [ 'pages', 'page' ], name: 'pages', isArray: true, transform: pageModel } ]));
    }

    /**
     * Fetch a new Draft object by ID.
     * @param {Number|String} [id=home] - The id of the draft to return.
     * @returns {Draft} - A new {@link Draft} object.
     */
    getDraft(id) {
        return new Draft(id, this._settings);
    }
}
