/**
 * Created by akhilesh.kumar on 7/26/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {AddUsrCat} from './addUsrCat/addUsrCat';
import {AllUsr} from './allUsr/allUsr';

const routes: RouterConfig = [
    {path: 'addUsrCat', component: AddUsrCat},
    {path: 'allUsr', component: AllUsr},
    { path: '**', component: AddUsrCat }
];

export const adminRouterProviders = [
    provideRouter(routes)
];
