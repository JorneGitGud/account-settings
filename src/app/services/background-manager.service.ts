import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApplicationManagerService } from './application-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundManagerService {

  constructor(private _applicationManagerService : ApplicationManagerService, private _router :Router, ) {
    this._router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url == '/home'){
          this.setBackGround(this._applicationManagerService.application, 'home');
        }
        else{
          this.setBackGround(this._applicationManagerService.application, 'guard');
        }
      }
    }
    );
  }

  setBackGround(applicationType:number, page:string){
    document.body.classList.add('background-image-'+page+applicationType)
    console.log('background-image-'+page+applicationType);
  }
}
