import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import '../../../assets/charts/echart/echarts-all.js';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MemberRequestService } from '../../services/member-request.service';
import { StartUpStatService } from '../../services/startup-stats.service';
import { UserService } from '../../services/user.service';
import { FileService } from '../../services/file.service';
import { Message } from 'primeng/components/common/message';
import { saveAs } from 'file-saver';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-requesting-members',
  templateUrl: './requesting-members.component.html',
  styleUrls: ['./requesting-members.component.css']
})
export class RequestingMembersComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  selectedUser: any;
  msgs: Message[] = [];
  memberRequests: any[];
  userProfiles: any[];

  doneLoading: boolean = false;
  
  displayDialog: boolean;

  constructor(private memberRequestService: MemberRequestService,private stat:StartUpStatService,private userService: UserService,private fileService:FileService) { }

  ngOnInit() {
    this.populateMembers();
  }



  populateMembers(){
    let sendingObject = {
      "SearchInput": localStorage.getItem("currentUser")
  }
   this.memberRequestService.searchForRequests(sendingObject).subscribe(
          (res: any) => {
              console.log(res)

            this.memberRequests = res;
            if(this.memberRequests !== undefined && this.memberRequests !== null){
            for(let req of this.memberRequests) {
                let userObj = {
                    "Username": req.username
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
                  
                        });
              }
            }
             
          },
          err =>{
 
        },
    () =>{
   });    
  }
  selectCar(event: Event, request: any) {
    this.selectedUser = request;
    this.displayDialog = true;
    event.preventDefault();
}


downloadCV(event){
  // let userObj = {
  //     "filePath": this.selectedUser.cvDocLoc
  // }
  var blob = new Blob([this.selectedUser.cvDocLoc], { type: 'application/pdf' });
  saveAs(blob,"CVDoc.pdf")
  // var url= window.URL.createObjectURL(blob);
  // window.open(url);
 //this.fileService.GetCVDocument(userObj);
}

addUser(event,request: any){
    let userObj = {
        "Username": localStorage.getItem("currentUser"),
        "RequestingUsername": request.username,
        "Response": true,
        "Id": this.memberRequests.find( i => i.username == request.username).id
    }

    this.memberRequestService.approveRequest(userObj).subscribe((use: any) => {
          console.log("Result from Adding ->" + use._body)
          this.showSuccess();
          
          this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
          this.selectedUser = null;
    },
    err =>{
        this.showError();
    },() =>{
      let update = { // come back and fix this
          "MembersApprovedIncrease":1,
          "Username": localStorage.getItem('currentUser')
        }
        this.stat.updateStartUpStat(update).subscribe((res:any) =>{
    
        });});
}

rejectUser(event,request: any){
  let userObj = {
      "Username": localStorage.getItem("currentUser"),
      "RequestingUsername": request.username,
      "Id": this.memberRequests.find( i => i.username == request.username).id,
      "Response": false,
  }

  this.memberRequestService.approveRequest(userObj).subscribe((use: any) => {
        console.log("Result from Adding ->" + use)
        this.showWarn();
        this.userProfiles = this.userProfiles.filter((val,i) => i!=this.userProfiles.indexOf(request));
          this.selectedUser = null;
  },
err =>{
  this.showError();
},() =>{
  let update = { // come back and fix this
      "MembersRejectedIncrease":1,
      "Username": localStorage.getItem('currentUser')
    }
    this.stat.updateStartUpStat(update).subscribe((res:any) =>{

    });
});
}

showSuccess() {
  this.msgs = [];
  this.msgs.push({severity:'success', summary:'Success Message', detail:'Member Request was Approved Successfully'});
  }

  showWarn() {
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Member Request was Rejected Successfully'});
  }

  showError() {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Unable to process action'});
  }


onDialogHide() {
    this.selectedUser = null;
}

}
