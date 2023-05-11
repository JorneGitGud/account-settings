import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskCalculatorComponent } from './risk-calculator/risk-calculator.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


const components : any = [
  RiskCalculatorComponent,
  FormCreatorComponent,
  AccountManagerComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
