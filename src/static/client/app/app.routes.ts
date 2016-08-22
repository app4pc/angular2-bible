/**
 * Created by akhilesh.kumar on 7/26/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {Login} from '../login/login';
import {Dashboard} from '../dashboard/dashboard';
import {Admin} from '../admin/admin';

const routes: RouterConfig = [
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard},
    {path: 'admin', component: Admin },
    { path: '**', component: Dashboard }
];

export const appRouterProviders = [
    provideRouter(routes)
];
