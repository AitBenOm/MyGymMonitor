import { Injectable } from '@angular/core';
import {ProgramModel} from "./program-model";
import {getTemplate} from "codelyzer/util/ngQuery";

@Injectable()
export class ProgramService {

  constructor() { }
  getToDayString(){
    let toDay = new Date();
    let dd: any = toDay.getDay();
    let mm: any= toDay.getMonth()+1;
    let yyyy: any= toDay.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if (mm<10){
      mm='0'+mm;
    }

    return mm+'/'+dd+'/'+yyyy;
  }

  programs: ProgramModel[]=[
    new ProgramModel(1,'Pec',this.getToDayString()),
    new ProgramModel(1,'Pec',this.getToDayString()),
    new ProgramModel(1,'Pec',this.getToDayString()),
    new ProgramModel(1,'Pec',this.getToDayString()),
    new ProgramModel(1,'Pec',this.getToDayString()),
    new ProgramModel(1,'Pec',this.getToDayString()),
  ];


}
