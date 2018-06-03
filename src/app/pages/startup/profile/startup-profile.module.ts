import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupProfileComponent } from './startup-profile.component';
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
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';
import {GalleriaModule} from 'primeng/components/galleria/galleria';
import { NgxGalleryModule } from 'ngx-gallery';
import {AgmCoreModule} from '@agm/core';

import {AngularEchartsModule} from 'ngx-echarts';
import { NgxCarouselModule } from 'ngx-carousel';
import { MessageModule } from 'primeng/components/message/message';
import { MessagesModule } from 'primeng/components/messages/messages';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';

export const startupProfileRoutes: Routes = [
  {
    path: '',
    component: StartupProfileComponent,
    data: {

    }
  }
];

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk",
      libraries: ["places"]
    }),
    CommonModule,
    RouterModule.forChild(startupProfileRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule,
    ButtonModule,
    MultiSelectModule,
    EditorModule,
    FileUploadModule,
    GalleriaModule,
    DialogModule,
    NgxGalleryModule,
    NgxCarouselModule,
    MessageModule,
    CheckboxModule,
    MessagesModule 
  ],
  declarations: [StartupProfileComponent]
})
export class StartupProfileModule { }
