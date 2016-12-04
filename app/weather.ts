/**
 * Created by ashimkhadka on 9/28/16.
 */

import {IWeather} from "./iweather";

export class Weather implements IWeather {

    constructor(public id:number, public main:string, public city:string, public description:string) {

    }
}