import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersManagementComponent } from './members-management.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {SpinnerModule} from 'primeng/components/spinner/spinner';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';


export const MembersManagementRoutes: Routes = [{
  path: '',
  component: MembersManagementComponent,
  data: {
    breadcrumb: 'Members Management',
    icon: 'icofont icofont-ui-user-group bg-c-blue'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MembersManagementRoutes),
    SharedModule,
    CalendarModule,
    TooltipModule,
    DialogModule,
    InputTextareaModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot()
  ],
  declarations: [MembersManagementComponent]
})
export class MembersManagementModule { }
