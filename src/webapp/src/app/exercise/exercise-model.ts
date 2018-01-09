import {LoadsModel} from "./loads-model";

export class ExerciseModel {
  private _id: number;
  private _name: string;
  private loads: LoadsModel[];


  constructor(id: number, name: string, loads: LoadsModel[]) {
    this._id = id;
    this._name = name;
    this.loads = loads;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
