import { ApplicationManagerService, applicationType } from './../../services/application-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{


  applicationType: applicationType = applicationType.formCreator;

  constructor(private _applicationManagerService: ApplicationManagerService) {
    this.applicationType = this._applicationManagerService.application;
   }

  ngOnInit() {
  }

}
