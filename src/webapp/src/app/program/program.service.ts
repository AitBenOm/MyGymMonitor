import { Injectable } from '@angular/core';
import {ProgramModel} from "./program-model";
import {getTemplate} from "codelyzer/util/ngQuery";
import {ExerciseModel} from "../exercise/exercise-model";
import {LoadsModel} from "../exercise/loads-model";

@Injectable()
export class ProgramService {

  constructor() { }

  showDetail: boolean=false;

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
    new ProgramModel(1,'Pec',this.getToDayString(),this.getToDayString(), [
      new ExerciseModel(1,'Halter',[
        new LoadsModel(1,'10'),
        new LoadsModel(1,'15'),
        new LoadsModel(1,'20')]),
        new ExerciseModel(1,"developpé couché",[
        new LoadsModel(1,'30'),
        new LoadsModel(1,'40')]),
        new ExerciseModel(1,"developpé incliné",[
        new LoadsModel(1,'40'),
        new LoadsModel(1,'60'),
        new LoadsModel(1,'50')])
    ]),

    new ProgramModel(2,'Deck',this.getToDayString(),this.getToDayString(), [
      new ExerciseModel(1,"peck fly",[
      new LoadsModel(1,'40'),
      new LoadsModel(1,'50')])
    ]),
    new ProgramModel(3,'Biceps',this.getToDayString(),this.getToDayString(), [new ExerciseModel(1,"tirage biceps",[
      new LoadsModel(1,'18'),
      new LoadsModel(1,'20'),
      new LoadsModel(1,'23')])
    ]),



  ];

  getProgramById(id: number){
    return this.programs[id];
  }

}
