import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { SpinnerModule } from 'primeng/components/spinner/spinner';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox'
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {MessageModule} from 'primeng/components/message/message';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const SubscribeRoutes: Routes = [{
  path: '',
  component: SubscribeComponent,
  data: {
    breadcrumb: 'Subscribe',
    icon: 'icofont icofont-file-document bg-c-pink'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SubscribeRoutes),
    SharedModule,
    CalendarModule,
    DialogModule,
    InputTextareaModule,
    SpinnerModule,
    FormsModule,
    CheckboxModule,
    MessageModule
  ],
  declarations: [SubscribeComponent]
})
export class SubscribeModule { }
