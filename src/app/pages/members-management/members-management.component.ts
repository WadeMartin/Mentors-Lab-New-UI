import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DialogModule} from 'primeng/components/dialog/dialog';
import{InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {SpinnerModule} from 'primeng/components/spinner/spinner';
import { FileService } from '../../services/file.service';
import { RatingService } from '../../services/rating.service';
import { ReportService } from '../../services/report.service';
import { CompanyService } from '../../services/company.service';
import { MemberRequestService } from '../../services/member-request.service';
import { UserService } from '../../services/user.service';
import { Message } from 'primeng/components/common/api';
import { saveAs } from 'file-saver';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-members-management',
  templateUrl: './members-management.component.html',
  styleUrls: ['./members-management.component.css']
})
export class MembersManagementComponent implements OnInit {

  //#region Properties
  infoDialog: boolean;
  reportDialog: boolean = false;
  ratingDialog: boolean = false;
  removeDialog: boolean = false;
  memberRequests: any[];
  selectedUser: any;
  msgs: Message[] = [];

  userProfiles: any[];

  doneLoading: boolean = false;
  //#endregion

  data:any;

  //#region RatingProperties
  rateValue;
  rateReason;
  //#endregion

  //#region ReportingProperties
  reportReason;

  //#endregion
  
  //#region 

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  //#endregion

  constructor(private toastyService: ToastyService,private ratingService:RatingService, private reportService:ReportService,private companyService:CompanyService,private memberRequestService: MemberRequestService,private userService: UserService,private fileService:FileService) { }

  ngOnInit() {

    this.populateInformation();
  }


  populateInformation(){
    let sendingObject = {
      "SearchInput": localStorage.getItem("currentUser")
    }
    this.companyService.searchForCompanyByOwner(sendingObject).subscribe(
        (res: any) => {

            this.memberRequests = res.members;
            
            if(this.memberRequests !== undefined && this.memberRequests !== null){
                for(let req of this.memberRequests) {
                    let userObj = {
                        "Username": req
                    }
    
                        this.userService.getUserDetails(userObj).subscribe(
                            (use: any) => {
                                console.log(use);
                                if(this.userProfiles === undefined || this.userProfiles === null){
                                    console.log("gets here");
                                    this.userProfiles = [use];
                                    console.log(this.userProfiles)
                                }
                                else{
                                    console.log("gets here to");
                                    this.userProfiles.push(use);
                                    console.log(this.userProfiles)
                                }
    
                                
                            },
                            err =>{
                             //   this.showError("Error","Unable to process the transaction");
                            });
                  }
            }
          },
          err =>{
           // this.showError("Error","Unable to process the transaction");
        },
        () =>{
            this.doneLoading = true;
        });
  }

  //#region Methods relating to dialogs

  selectInfo(event: Event, request: any) {
    this.selectedUser = request;
    console.log(this.selectedUser)
    this.infoDialog = true;
    event.preventDefault();
}

selectReport(event: Event, request: any) {
  this.selectedUser = request;
  this.reportDialog = true;
  event.preventDefault();
}

selectRating(event: Event, request: any) {
  this.selectedUser = request;
  this.ratingDialog = true;
  event.preventDefault();
}

selectRemove(event: Event, request: any) {
  this.selectedUser = request;
  this.removeDialog = true;
  event.preventDefault();
}

removeUser(event,request: any){
  this.addToast({title:'Processing Action', msg:'Processing your current action, please wait', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'});
  let userObj = {
      "Username": localStorage.getItem("currentUser"),
      "MemberName": this.selectedUser.username,
  }

  this.companyService.removeUserFromMembers(userObj).subscribe((use: any) => {
        console.log("Result from Adding ->" + use._body)
        //this.showError("Success","Member removed Successful");
        
        this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(this.selectedUser));
        this.selectedUser = null;
        this.removeDialog = false;
  },
  err =>{
     // this.showError("Error","Unable to process the transaction");
    this.addToast({title:'An Error Occured', msg:'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})
  },
() =>{
  this.addToast({title:'Successful Removed User', msg:'You have successfully removed the current user', timeout: 8000, theme:'default', position:'bottom-right', type:'success'})
});
}

reportUser(event,request: any){
  this.addToast({title:'Processing Action', msg:'Processing your current action, please wait', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'});
  let userObj = {
      "Reporter": localStorage.getItem("currentUser"),
      "Reported": this.selectedUser.username,
      "Description": this.reportReason
      
  }

  this.reportService.submitReport(userObj).subscribe((use: any) => {
        console.log("Result from Reporting ->" + use._body)
       // this.showWarn();
        
       // this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
        this.selectedUser = null;
  },
  err =>{
    //  this.showError("Error","Unable to process the transaction");
    this.addToast({title:'An Error Occured', msg:'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})
  },
  () =>{
    this.addToast({title:'Successful Reported User', msg:'You have successfully reported the current user', timeout: 8000, theme:'default', position:'bottom-right', type:'success'})
  });

  this.reportReason = "";
  this.reportDialog = false;

}

addToast(options) {
  if (options.closeOther) {
    this.toastyService.clearAll();
  }
  this.position = options.position ? options.position : this.position;
  const toastOptions: ToastOptions = {
    title: options.title,
    msg: options.msg,
    showClose: options.showClose,
    timeout: options.timeout,
    theme: options.theme,
    onAdd: (toast: ToastData) => {
      /* added */
    },
    onRemove: (toast: ToastData) => {
      /* removed */
    }
  };

  switch (options.type) {
    case 'default': this.toastyService.default(toastOptions); break;
    case 'info': this.toastyService.info(toastOptions); break;
    case 'success': this.toastyService.success(toastOptions); break;
    case 'wait': this.toastyService.wait(toastOptions); break;
    case 'error': this.toastyService.error(toastOptions); break;
    case 'warning': this.toastyService.warning(toastOptions); break;
  }
}

rateUser(event,request: any){
this.addToast({title:'Processing Action', msg:'Processing your current action, please wait', timeout: 5000, theme:'default', position:'bottom-right', type:'wait'});
let userObj = {
  "RaterUsername": localStorage.getItem("currentUser"),
  "For": this.selectedUser.username,
  "Rate": this.rateValue,
  "Comment":this.rateReason,
}

this.ratingService.submitRating(userObj).subscribe((use: any) => {
    console.log("Result from Reporting ->" + use._body)
   // this.showSuccess();
    
   // this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
    this.selectedUser = null;
},
err =>{
  //this.showError("Error","Unable to process the transaction");
  this.addToast({title:'An Error Occured', msg:'an Error occured, please ensure all information is correct and try again', timeout: 5000, theme:'material', position:'bottom-right', type:'error'})
},
() =>{
  this.addToast({title:'Successful Rated User', msg:'You have successfully rated the current user', timeout: 8000, theme:'default', position:'bottom-right', type:'success'})
});

this.rateReason = "";
this.ratingDialog = false;
this.rateValue = 1;

}

downloadCV(event){
  // let userObj = {
  //     "filePath": this.selectedUser.cvDocLoc
  // }

  // this.fileService.GetCVDocument(userObj);
  var blob = new Blob([this.selectedUser.cvDocLoc], { type: 'application/pdf' });//
  saveAs(blob,"CVDoc.pdf")
}

  //#endregion

}
