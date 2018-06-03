import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {ChartModule} from 'angular2-chartjs';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {AngularEchartsModule} from 'ngx-echarts';
import { DashboardSearchPipe } from './dashboard.search-pipe';

export const DashboardDefaultRoutes: Routes = [
  {
    path: '',
    component: DashboardDefaultComponent,
    data: {
      breadcrumb: 'Default',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardDefaultRoutes),
    SharedModule,
    ChartModule,
    DataListModule,
    TooltipModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule
  ],
  declarations: [DashboardDefaultComponent,DashboardSearchPipe]
})
export class DashboardDefaultModule { }
