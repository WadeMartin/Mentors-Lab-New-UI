import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {ButtonModule} from 'primeng/components/button/button';
import {EditorModule} from 'primeng/components/editor/editor';

import {AngularEchartsModule} from 'ngx-echarts';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {

    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule,
    ButtonModule,
    MultiSelectModule,
    EditorModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
