import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routing';
import {HttpModule} from '@angular/http';
import { HttpClientModule , HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import {AgmCoreModule} from '@agm/core'


//#region PrimeNG Imports
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {DataListModule} from 'primeng/components/datalist/datalist';
import{FileUploadModule} from 'primeng/components/fileupload/fileupload';
import{MultiSelectModule}from 'primeng/components/multiselect/multiselect';
import {GalleriaModule} from 'primeng/components/galleria/galleria';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SpinnerModule } from 'primeng/components/spinner/spinner';
import {NgxCarouselModule} from 'ngx-carousel';
import { NgxGalleryModule } from 'ngx-gallery';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {MessageModule} from 'primeng/components/message/message';
import {MessagesModule} from 'primeng/components/messages/messages';

//import {ScrollPanelModule} from 'primeng/components/scrollpanel/scrollpanel';
//#endregion

//#region User Created Services

import { LoginService } from'../app/services/login.service';
import { UserService } from './services/user.service';
import { RatingService } from './services/rating.service';
import { FileService } from './services/file.service';
import { SubscriberService } from './services/subscriber.service';
import { StartUpStatService } from './services/startup-stats.service';
import { CompanyService } from './services/company.service';
import { ReportService } from './services/report.service';
import { MemberRequestService } from './services/member-request.service';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    AgmCoreModule,
    HttpModule,
    TooltipModule,
    DialogModule,
    DataListModule,
    MultiSelectModule,
    GalleriaModule,
    NgxCarouselModule,
    NgxGalleryModule,
    InputTextareaModule,
    SpinnerModule,
    CheckboxModule,
    MessageModule,
    MessagesModule
    //ScrollPanelModule
  ],
  providers: [
    LoginService,
    UserService,
    RatingService,
    FileService,
    SubscriberService,
    StartUpStatService,
    CompanyService,
    ReportService,
    StartUpStatService,
    MemberRequestService,
    { provide: 'BASE_URL', useFactory: getBaseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return 'http://mentorapi20180603090749.azurewebsites.net'//'//'http://mentorapi20180407113508.azurewebsites.net' // change this to api port
}

// "ngx-quill": "^1.6.0",
// "ngx-quill-editor": "^2.2.2",
