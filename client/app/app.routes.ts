import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register/register.component';

/**
 * @author: Shoukath Mohammed
 */

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }
];


