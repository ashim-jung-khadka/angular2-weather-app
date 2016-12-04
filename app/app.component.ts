/**
 * Created by ashimkhadka on 9/27/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Weather App</h1>
        </header>
        <ul>
            <li>
                <a routerLink="/weather-list" routerLinkActive="active">Weather List</a>
            </li>
            <li>
                <a routerLink="/weather-detail" routerLinkActive="active">Weather Detail</a>
            </li>
        </ul>
        
        <router-outlet></router-outlet>
    `
})

export class AppComponent {}