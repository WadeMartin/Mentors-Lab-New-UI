import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const googleRoutes: Routes = [
  {
    path: '',
    component: GoogleMapComponent,
    data: {
      breadcrumb: 'Google Map',
      icon: 'icofont-map bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(googleRoutes),
    SharedModule,
    CommonModule
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
