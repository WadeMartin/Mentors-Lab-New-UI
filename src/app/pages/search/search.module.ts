import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './Search.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {AngularEchartsModule} from 'ngx-echarts';
import { SearchPipe } from './search.search-pipe';


export const SearchRoutes: Routes = [{
  path: '',
  component: SearchComponent,
  data: {
    breadcrumb: 'Search',
    icon: 'icofont icofont-file-document bg-c-pink',
    status: false
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule,
    CalendarModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    AngularEchartsModule
  ],
  declarations: [SearchComponent,SearchPipe]
})
export class SearchModule { }
