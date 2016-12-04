import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {routing} from "./app.routing";

import {DashboardComponent} from "./dashboard.component";
import {WeatherListComponent} from "./weather-list.component";
import {WeatherDetailComponent} from "./weather-detail.component";
import {WeatherService} from "./weather.service";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WeatherListComponent,
        WeatherDetailComponent
    ],
    providers: [
        WeatherService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}