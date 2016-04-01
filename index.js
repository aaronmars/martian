import * as cidLib from './contextId';
import * as draftLib from './draft';
import {DraftFile} from './draftFile';
import {FeedbackManager} from './feedback';
import {File} from './file';
import * as groupLib from './group';
import * as lpLib from './learningPath';
import {Page} from './page';
import {PageFile} from './pageFile';
import {PageProperty} from './pageProperty';
import {Site} from './site';
import * as userLib from './user';
import {UserEvents} from './userEvents';
export let martian = {
    ContextDefinition: cidLib.ContextDefinition,
    ContextMap: cidLib.ContextMap,
    ContextIdManager: cidLib.ContextIdManager,
    Draft: draftLib.Draft,
    DraftManager: draftLib.DraftManager,
    DraftFile: DraftFile,
    FeedbackManager: FeedbackManager,
    File: File,
    Group: groupLib.Group,
    GroupManager: groupLib.GroupManager,
    LearningPath: lpLib.LearningPath,
    LearningPathManager: lpLib.LearningPathManager,
    Page: Page,
    PageFile: PageFile,
    PageProperty: PageProperty,
    Site: Site,
    User: userLib.User,
    UserManager: userLib.UserManager,
    UserEvents: UserEvents
};
