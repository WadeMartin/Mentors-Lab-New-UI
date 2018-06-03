import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestingMembersComponent } from './requesting-members.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {AngularEchartsModule} from 'ngx-echarts';
import { RequestingMembersSearchPipe } from './requesting-members.search-pipe';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SpinnerModule } from 'primeng/components/spinner/spinner';
import { ToastyModule } from 'ng2-toasty';

export const RequestingMembersRoutes: Routes = [{
  path: '',
  component: RequestingMembersComponent,
  data: {
    breadcrumb: 'Requesting Members',
    icon: 'icofont icofont-user-alt-7 bg-c-green'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RequestingMembersRoutes),
    SharedModule,
    CalendarModule,
    TooltipModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule,
    DialogModule,
    InputTextareaModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  declarations: [RequestingMembersComponent,RequestingMembersSearchPipe]
})
export class RequestingMembersModule { }
