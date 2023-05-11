import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationManagerService {

  private _application: applicationType = applicationType.accountManager;

  constructor() {

    console.log(this._application);

  }

  get application(): applicationType {
    return this._application;
  }

  set application(value: applicationType) {
    this._application = value;
  }
}

export enum applicationType {
  'riskCalculator',
  'formCreator',
  'accountManager',
}
