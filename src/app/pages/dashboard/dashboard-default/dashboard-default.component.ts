import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import '../../../../assets/charts/echart/echarts-all.js';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SubscriberService } from '../../../services/subscriber.service';
import { StartUpStatService } from '../../../services/startup-stats.service';
import { Message } from 'primeng/components/common/message';

declare const AmCharts: any;
declare const $: any;

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: [
    './dashboard-default.component.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {

  constructor(private subs: SubscriberService,private stat:StartUpStatService,public http: Http,private router: Router,private loginService:LoginService) { }
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  permission = false;
  blockContent = true;
  doneLoading = false;
  startupViews: any;
  managementStats: any;
  followers= [];
  expertiseSearches: any;
  msgs: Message[];

  twitterIncrease = false;
  facebookInrease= false;
  websiteIncrease= false;
  instagramIncrease= false;
  linkdenIncrease= false;

  twitterValue: number;
  facebookValue: number;
  instagramValue: number;
  websiteValue: number;
  linkdenValue: number;

  totalNumberOfMemberRequests = 0;
  totalNumberOfMemberRejects = 0;
  totalNumberOfMemberAccepts = 0;

   currentMonth: any;
   lastMonth: any;
   months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  ngOnInit() {

 this.populateMembershipDetails();
    this.http.get(`assets/data/data.json`)
      .subscribe((data) => {
        this.data = data.json();
      });
      
   // this.checkAccountType();
    // AmCharts.makeChart('statistics-chart', {
    //   type: 'serial',
    //   marginTop: 0,
    //   hideCredits: true,
    //   marginRight: 80,
    //   dataProvider: [{
    //     year: 'Jan',
    //     value: 0.98
    //   }, {
    //     year: 'Feb',
    //     value: 1.87
    //   }, {
    //     year: 'Mar',
    //     value: 0.97
    //   }, {
    //     year: 'Apr',
    //     value: 1.64
    //   }, {
    //     year: 'May',
    //     value: 0.4
    //   }, {
    //     year: 'Jun',
    //     value: 2.9
    //   }, {
    //     year: 'Jul',
    //     value: 5.2
    //   }, {
    //     year: 'Aug',
    //     value: 0.77
    //   }, {
    //     year: 'Sap',
    //     value: 3.1
    //   }],
    //   valueAxes: [{
    //     axisAlpha: 0,
    //     dashLength: 6,
    //     gridAlpha: 0.1,
    //     position: 'left'
    //   }],
    //   graphs: [{
    //     id: 'g1',
    //     bullet: 'round',
    //     bulletSize: 9,
    //     lineColor: '#4680ff',
    //     lineThickness: 2,
    //     negativeLineColor: '#4680ff',
    //     type: 'smoothedLine',
    //     valueField: 'value'
    //   }],
    //   chartCursor: {
    //     cursorAlpha: 0,
    //     valueLineEnabled: false,
    //     valueLineBalloonEnabled: true,
    //     valueLineAlpha: false,
    //     color: '#fff',
    //     cursorColor: '#FC6180',
    //     fullWidth: true
    //   },
    //   categoryField: 'year',
    //   categoryAxis: {
    //     gridAlpha: 0,
    //     axisAlpha: 0,
    //     fillAlpha: 1,
    //     fillColor: '#FAFAFA',
    //     minorGridAlpha: 0,
    //     minorGridEnabled: true
    //   },
    //   'export': {
    //     enabled: true
    //   }
    // });
  }

  checkAccountType(){
    console.log("checking login Type")
      let loginObject = {
        "Username": localStorage.getItem("currentUser"),
      }
      this.loginService.checkLogin(loginObject).subscribe(
        (res: any) =>{
          if(res !== null){
            if(res !== "startup"){
              console.log("it is valid")
              this.router.navigateByUrl("/members-management");
            }
          }
          else{
            console.log("its not valid")
          }
        },
        err => { console.log("login check broke")},
        () =>{
  
          
          }
      )
    
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }


  populateData(){
    let searchParams = {
        "Username": localStorage.getItem("currentUser")
    }
    this.stat.getStartupStats(searchParams).subscribe(
      (res:any) =>{
          let totalAmountOfClicks = []; 


          let twitterCurrentData = 0;
          let facebookCurrentData = 0;
          let googlePlusCurrentData = 0;
          let linkdenCurrentData= 0;
          let youtubeCurrentData = 0;
          let instagramCurrentData = 0;
          let websiteCurrentData = 0;

          let twitterPastData = 0;
          let facebookPastData = 0;
          let googlePlusPastData = 0;
          let linkdenPastData= 0;
          let youtubePastData = 0;
          let instagramPastData = 0;
          let websitePastData = 0;

          let addedTwitter = false;
          let addedFacebook = false;
          let addedGooglePlus = false;
          let addedYoutube= false;
          let addedLinkden = false;
          let addedInstagram = false;
          console.log(res)

          if(res.followers !== undefined && res.followers !== null){
              
              for(var isss of res.followers){
                  this.followers.push(isss);
              }

          }
          this.populateMonths();
          for(var i of this.months){
              console.log(i)
              if (res.views[i] !== undefined && res.views[i] !== null) {
                  totalAmountOfClicks.push(res.views[i]);
              }
              else {
                  totalAmountOfClicks.push(0);
              }
              
              if(res.socialMediaClicks[i] !== undefined && res.socialMediaClicks[i] !== null && i === this.currentMonth){
                  
                  for(var is in res.socialMediaClicks[i]){ 
                      if(is === "Twitter"){
                          twitterCurrentData= res.socialMediaClicks[i][is];
                          addedTwitter = true;
                      }
                      if(is === "Facebook"){
                       facebookCurrentData = res.socialMediaClicks[i][is];
                          addedFacebook = true;
                      }
                      if(is === "Google Plus"){
                        googlePlusCurrentData= res.socialMediaClicks[i][is];
                          addedGooglePlus = true;
                      }
                      if(is === "Youtube"){
                       youtubeCurrentData = res.socialMediaClicks[i][is];
                          addedYoutube = true;
                      }
                      if(is === "Linkden"){
                       linkdenCurrentData = res.socialMediaClicks[i][is];
                          addedLinkden = true;
                      }
                      if(is === "Instagram"){
                        instagramCurrentData= res.socialMediaClicks[i][is];
                          addedInstagram = true;
                      }
                      if(is === "Website"){
                        websiteCurrentData= res.socialMediaClicks[i][is];

                      }
                  }
              }

              if(res.socialMediaClicks[i] !== undefined && res.socialMediaClicks[i] !== null && i === this.lastMonth){
                  
                for(var is in res.socialMediaClicks[i]){ 
                    if(is === "Twitter"){
                        twitterPastData= res.socialMediaClicks[i][is];
                        addedTwitter = true;
                    }
                    if(is === "Facebook"){
                     facebookPastData = res.socialMediaClicks[i][is];
                        addedFacebook = true;
                    }
                    if(is === "Google Plus"){
                      googlePlusPastData= res.socialMediaClicks[i][is];
                        addedGooglePlus = true;
                    }
                    if(is === "Youtube"){
                     youtubePastData = res.socialMediaClicks[i][is];
                        addedYoutube = true;
                    }
                    if(is === "Linkden"){
                     linkdenPastData = res.socialMediaClicks[i][is];
                        addedLinkden = true;
                    }
                    if(is === "Instagram"){
                      instagramPastData= res.socialMediaClicks[i][is];
                        addedInstagram = true;
                    }
                    if(is === "Website"){
                      websitePastData= res.socialMediaClicks[i][is];
                    }
                }
            }
              
          }
          if(twitterCurrentData > twitterPastData){
            this.twitterIncrease = true;
          }
          if(instagramCurrentData > instagramPastData){
            this.instagramIncrease = true;
          }
          if(facebookCurrentData > facebookPastData){
            this.facebookInrease = true;
          }
          if(linkdenCurrentData > linkdenPastData){
            this.linkdenIncrease = true;
          }
          if(twitterCurrentData > twitterPastData){
            this.twitterIncrease = true;
          }
          if(websiteCurrentData > websitePastData){
            this.websiteIncrease = true;
          }
          this.twitterValue = twitterCurrentData;
          this.facebookValue = facebookCurrentData;
          this.instagramValue = instagramCurrentData;
          this.linkdenValue = linkdenCurrentData;
          this.websiteValue = websiteCurrentData;

          if(res.amountOfMembers !== undefined && res.amountOfMembers !== null){
            this.totalNumberOfMemberRequests = res.amountOfMembers;
          }
          if(res.amountOfMembersApproved !== undefined && res.amountOfMembersApproved !== null){
            this.totalNumberOfMemberAccepts = res.amountOfMembersApproved;
          }
          if(res.amountOfMembersRejected !== undefined && res.amountOfMembersRejected !== null){
            this.totalNumberOfMemberRejects = res.amountOfMembersRejected;
          }
        

          this.populateGraph(totalAmountOfClicks);
      });
}

populateMonths(){
  let x = (new Date().getMonth());
  if(x > 0) {
    this.currentMonth = this.months[x];
  }
  else{
    this.currentMonth = this.months[1];
  }
x =new Date().getMonth() - 1;
  if( x> 0) {
    this.lastMonth = this.months[x];
  }
  else{
    this.lastMonth = this.months[12];
  }
  

}


populateGraph(arr:any){
  console.log(arr);
  AmCharts.makeChart('statistics-chart', {
    type: 'serial',
    marginTop: 0,
    hideCredits: true,
    marginRight: 80,
    dataProvider: [{
          year: 'Jan',
          value: arr[0]
        }, {
          year: 'Feb',
          value: arr[1]
        }, {
          year: 'Mar',
          value: arr[2]
        }, {
          year: 'Apr',
          value: arr[3]
        }, {
          year: 'May',
          value: arr[4]
        }, {
          year: 'Jun',
          value: arr[5]
        }, {
          year: 'Jul',
          value: arr[6]
        }, {
          year: 'Aug',
          value: arr[7]
        }, {
          year: 'Sep',
          value: arr[8]
        },
        {
          year: 'Oct',
          value: arr[9]
        },
        {
          year: 'Nov',
          value: arr[10]
        },
        {
          year: 'Dec',
          value: arr[11]
        },
      ],
    valueAxes: [{
      axisAlpha: 0,
      dashLength: 6,
      gridAlpha: 0.1,
      position: 'left'
    }],
    graphs: [{
      id: 'g1',
      bullet: 'round',
      bulletSize: 9,
      lineColor: '#4680ff',
      lineThickness: 2,
      negativeLineColor: '#4680ff',
      type: 'smoothedLine',
      valueField: 'value'
    }],
    chartCursor: {
      cursorAlpha: 0,
      valueLineEnabled: false,
      valueLineBalloonEnabled: true,
      valueLineAlpha: false,
      color: '#fff',
      cursorColor: '#FC6180',
      fullWidth: true
    },
    categoryField: 'year',
    categoryAxis: {
      gridAlpha: 0,
      axisAlpha: 0,
      fillAlpha: 1,
      fillColor: '#FAFAFA',
      minorGridAlpha: 0,
      minorGridEnabled: true
    },
    'export': {
      enabled: true
    }
  });
}

populateMembershipDetails(){
  let user = {
    "username" : localStorage.getItem("currentUser")
  }
  this.subs.getSubscription(user).subscribe(
    (res:any) =>{
      console.log(res);
      if(res === undefined || res === null){
        this.router.navigateByUrl('/home');
      }
      else{
         if(res.planName === "thirdplan"){
           this.permission = true;
           this.populateData();
        }
        else{
           
        }
      }
      
    },
  err=>{
    this.router.navigateByUrl('/home');
  },
() =>{
});
}



}







function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}
