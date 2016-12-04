/**
 * Created by ashimkhadka on 10/1/16.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WeatherDetailComponent} from "./weather-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {WeatherListComponent} from "./weather-list.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'weather-list',
        component: WeatherListComponent
    },
    {
        path: 'weather-detail',
        component: WeatherDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);