import { Component, OnInit, Input, Output, EventEmitter,ElementRef, NgZone, ViewChild, AfterViewInit } from '@angular/core';
import {Http} from '@angular/http';
import {animate, style, transition, trigger} from '@angular/animations';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import '../../../../assets/charts/echart/echarts-all.js';
import {Message,SelectItem} from 'primeng/components/common/api';
import{UserService} from '../../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model.js';
import {Spinkit} from '../../../shared/spinner/spinkits';
import { RatingService } from '../../../services/rating.service';
import { FileService } from '../../../services/file.service';
import {DomSanitizer} from '@angular/platform-browser';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
import { } from 'googlemaps';
import { NgxCarousel,NgxCarouselStore } from 'ngx-carousel';
import { MapsAPILoader } from '@agm/core';
import { CompanyService } from '../../../services/company.service';
import { SubscriberService } from '../../../services/subscriber.service';
import { StartUpStatService } from '../../../services/startup-stats.service';
import { MemberRequestService } from '../../../services/member-request.service';


@Component({
  selector: 'app-profile',
  templateUrl: './startup-profile.component.html',
  styleUrls: ['./startup-profile.component.css',
  '../../../shared/spinner/spinner.component.css',
  '../../../shared/spinner/spinkit-css/sk-double-bounce.css',
  '../../../shared/spinner/spinkit-css/sk-chasing-dots.css',
  '../../../shared/spinner/spinkit-css/sk-cube-grid.css',
  '../../../shared/spinner/spinkit-css/sk-rotating-plane.css',
  '../../../shared/spinner/spinkit-css/sk-spinner-pulse.css',
  '../../../shared/spinner/spinkit-css/sk-three-bounce.css',
  '../../../shared/spinner/spinkit-css/sk-wandering-cubes.css',
  '../../../shared/spinner/spinkit-css/sk-wave.css',
  '../../../shared/spinner/spinkit-css/sk-line-material.css'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class StartupProfileComponent implements OnInit,AfterViewInit {
  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';
  @Input() public spinner = Spinkit.skWave;
  editProfile = true;
  editProfileIcon = 'icofont-ui-edit';
  editProfileText = " Edit";

  editorToolbar: any;

  checkMsg: Message[] = [];
  
  isValid = true;
ownerProfile = false;
  public editor;
  public isSpinnerVisible = true;
  public Spinkit = Spinkit;

  public editorContent;
  public editorConfig : any;
  uploadedFiles: any[] = [];
  industrese: SelectItem[];
//#region Form Builder Properties
userform: FormGroup = this.fb.group({});
experteses: SelectItem[];
displayUsername;
selectedExpertese;
selectedIndustries;
private searchInput;
carouselTile;
//#endregion

isLoggedIn = localStorage.getItem("currentUser")
loginDisplay = false;
proposeDialog = false;
agreementAccepted;
//#region SubsriberProperties
subType;
maxSelectedItems;
maxAmountOfImages;
videoLinks;


//#endregion

//#region Location Lookup
public completedLoading = false;
public latitude: number;
  public longitude: number;
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  lat = 21.1591857;
  lng = 72.7522563;
  latA = 21.7613308;
  lngA = 71.6753074;
  zoom = 8;

//#endregion

//#region User Details
public loggedInUsername = localStorage.getItem('currentUser');
user:any;

public videos;
checkBoxMsg: Message[] = [];
//#endregion
//#region Ratings

public ratings:any;
hasRecievedRatings = false;
//#endregion


//#region Image Details
images: any[] = [];
public photos: string[] = [];


docUrl = null;
cvDocButtonClass = "btn btn-success m-b-10 m-r-10"
cvDoc = "Click to upload CV Document"
permissionToEditPic = false;
imgURL = "http://192.168.1.2:8080/pp.png";
errors: Array<string> =[];
dragAreaClass: string = 'dragarea';
@Input() projectId: number = 0;
@Input() sectionId: number = 0;
@Input() fileExt: string = "JPG, GIF, PNG, PDF, DOCX";
@Input() maxFiles: number = 1;
@Input() maxSize: number = 5; // 5MB
@Output() uploadStatus = new EventEmitter();

//#endregion


galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor(private memberRequestService: MemberRequestService,private stat:StartUpStatService, private subs: SubscriberService,private sanitizer:DomSanitizer,private mapsAPILoader: MapsAPILoader,private ngZone: NgZone,private fileService: FileService,private ratingService: RatingService,public http: Http,private fb: FormBuilder,private userService: UserService,private startupService: CompanyService ,private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe( params => this.searchInput = params );
   
    
  }

  ngOnInit() {

    this.loadUserInformation(this.searchInput);
    

    

  }

  selectPropose(event: Event) {
    if(localStorage.getItem("currentUser") !== null && localStorage.getItem("currentUser") !== undefined){
      this.proposeDialog = true;
      event.preventDefault();
    }
    else{
      this.loginDisplay = true;
    }
  
}

sendRequest(){
  if(this.agreementAccepted){


  let usernameObject = {
    "Username":localStorage.getItem("currentUser")
  };
  this.userService.getUserDetails(usernameObject).subscribe(
    (res: any) =>{
     let user = res;

     let request = {
       "Username":localStorage.getItem("currentUser"),
       "Reason":user.description,
       "StartupName":this.user.companyName
     }
     this.memberRequestService.sendRequest(request).subscribe(
      (output: any)=>{
        console.log(output);
       // this.showSuccess('Member Request was sent Successfully');
      },
      err =>{
        //this.showError();
    }
     )

    },
    err =>{

    },
    () =>{
            let update = { // come back and fix this
              "AmountOfMembersIncrease":1,
              "Username": this.user.OwningUsername
            }
            this.stat.updateStartUpStat(update).subscribe((res:any) =>{
        
            });
    }
  )
}
else{
  this.showCheckboxError();
}
}


showCheckboxError() {
  this.checkBoxMsg = [];
  this.checkBoxMsg.push({severity:'error', summary:'Error Message', detail:'Ensure that you agree to the terms and conditions in order to submit request'});
}

  mySelect(event) {
    console.log(event);
      for(let file of event.files) {
        const index: number = this.uploadedFiles.indexOf(this.uploadedFiles.find( c => c.name === file.name));
    console.log(index)
     if (index === -1) {
      this.uploadedFiles.push(file);
      } 
          
      }
      console.log(this.uploadedFiles);
    }
    myRemove(event) {
      const index: number = this.uploadedFiles.indexOf(this.uploadedFiles.find( c => c.name === event.file.name));
      console.log(index)
  if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
  }
  console.log(this.uploadedFiles);
     
      ;
      }

ngAfterViewInit(){

}

  toggleEditProfile() {
    this.editProfileText = (this.editProfileIcon === 'icofont-close') ? ' Edit' : 'Cancel Changes';
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }



  async buildForm(){
  this.userform = this.fb.group({
    'companyName': new FormControl(this.user.companyName, Validators.required),
    'numberOfEmployees': new FormControl(this.user.numberOfEmployees, Validators.required),
    'industries': new FormControl(this.user.industries, Validators.required),
    'description': new FormControl(this.editorContent),
    'location': new FormControl(this.user.location, Validators.required),
    'websiteURL': new FormControl(this.user.websiteURL),
    'expertises': new FormControl(this.user.expertises, Validators.required),
    'linkdenURL': new FormControl(this.user.linkdenURL),
    'instagramURL': new FormControl(this.user.instagramURLd),
    'facebookURL': new FormControl(this.user.facebookURL),
    'twitterURL': new FormControl(this.user.twitterURL),
    'OwningUsername': new FormControl(this.user.owningUsername)
});

this.experteses = [
  {label: 'Admin', value: 'Admin'},
  {label: 'Coaching', value: 'Coaching'},
  {label: 'Communication', value: 'Communication'},
  {label: 'Digital', value: 'Digital'},
  {label: 'Design', value: 'Design'},
  {label: 'Finance', value: 'Finance'},
  {label: 'Fundraising', value: 'Fundraising'},
  {label: 'IT Infustracture', value: 'IT Infustracture'},
  {label: 'Manufacturing', value: 'Manufacturing'},
  {label: 'Marketing', value: 'Marketing'},
  {label: 'Purchasing', value: 'Purchasing'},
  {label: 'Sales', value: 'Sales'},
  {label: 'Supply Chain', value: 'Supply Chain'},
  {label: 'Social Networks', value: 'Social Networks'},
  {label: 'Software Development', value: 'Software Development'},
  {label: 'Strategy', value: 'Strategy'}
];

this.industrese = [
  {label: 'Admin', value: 'Admin'},
  {label: 'Coaching', value: 'Coaching'},
  {label: 'Communication', value: 'Communication'},
  {label: 'Digital', value: 'Digital'},
  {label: 'Design', value: 'Design'},
  {label: 'Finance', value: 'Finance'},
  {label: 'Fundraising', value: 'Fundraising'},
  {label: 'IT Infustracture', value: 'IT Infustracture'},
  {label: 'Manufacturing', value: 'Manufacturing'},
  {label: 'Marketing', value: 'Marketing'},
  {label: 'Purchasing', value: 'Purchasing'},
  {label: 'Sales', value: 'Sales'},
  {label: 'Supply Chain', value: 'Supply Chain'},
  {label: 'Social Networks', value: 'Social Networks'},
  {label: 'Software Development', value: 'Software Development'},
  {label: 'Strategy', value: 'Strategy'}
];


this.editorConfig = {
  placeholder: "Description about yourself",
    modules: {
      toolbar: '#toolbar'
    }
}
this.isSpinnerVisible = false;
console.log("starts the timeout")
this.startLocationLookup();

}


onSubmits(value: string) {

  let sendingValue:any = value;
  sendingValue.profilePicLoc = this.imgURL;
  sendingValue.photos = this.user.photos;
  sendingValue.members = this.user.members;
  sendingValue.videos = this.user.videos;

  this.startupService.createOrUpdateCompany(value).subscribe(
    (res: any) =>{
       // this.showSuccess("User updated Successfully");
       console.log("updated startup details")
    }
    ,
    err => {
       // this.showError();editProfileIcon
    },
    () =>{
      //  this.updateLoading = true;
      this.toggleEditProfile();
    });
  // this.submitted = true;
  // this.msgs = [];
  // this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
}



loadUserInformation(username: any){
if(localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined){
  if(username.searchInput == localStorage.getItem('currentUser')){
    this.populateMembershipDetails();
  }
}
  
  let usernameObject = {
    "SearchInput": username.SearchInput
  }

  console.log(usernameObject);
  this.startupService.searchForCompany(usernameObject).subscribe(
    (res: any) =>{
      this.user = res[0];
      console.log(this.user);
      if(this.user == undefined){
        //this.router.navigate(['home']);
      }
      else{
        this.displayUsername = this.user.companyName,
        this.selectedExpertese = this.user.expertises,
        this.selectedIndustries = this.user.industries,
        this.editorContent = this.user.description,
        this.imgURL = this.user.logoLoc;
        if(this.user.owningUsername == localStorage.getItem('currentUser')){
          this.ownerProfile = true;
        }
      }
         
        // this.username,
        // this.firstName = res.firstName,
        // this.lastName= res.lastName,
        // this.title= res.title,
        // this.description= res.description,
        // this.currentEmployer= res.currentEmployer,
        // this.expertese= res.expertises;
        // this.experience= res.experience;
        // this.location = res.location;
        // this.country = res.country;
        // this.editorContent = res.description;
    },
    (err) =>{
      console.log('err occured')
      this.router.navigate(['home']);
    },
    () =>{
      if(this.user === null || this.user === undefined){
        console.log("goes into this too")
        let usernameObject = {
          "SearchInput": username.SearchInput
        }
      
        console.log(usernameObject);
        this.startupService.searchForCompanyByOwner(usernameObject).subscribe(
          (res: any) =>{
            this.user = res;
            console.log(this.user);
            if(this.user == undefined){
              this.router.navigate(['home']);
            }
            else{
              this.displayUsername = this.user.companyName,
              this.selectedExpertese = this.user.expertises,
              this.selectedIndustries = this.user.industries,
              this.editorContent = this.user.description,
              this.imgURL = this.user.logoLoc;
              if(this.user.owningUsername == localStorage.getItem('currentUser')){
                this.ownerProfile = true;
              }
            }
               
              // this.username,
              // this.firstName = res.firstName,
              // this.lastName= res.lastName,
              // this.title= res.title,
              // this.description= res.description,
              // this.currentEmployer= res.currentEmployer,
              // this.expertese= res.expertises;
              // this.experience= res.experience;
              // this.location = res.location;
              // this.country = res.country;
              // this.editorContent = res.description;
          },
          (err) =>{
            console.log('err occured')
            this.router.navigate(['home']);
          },
          () =>{
            if(this.user !== undefined){
              this.populateReviews();
            this.declareImageCarousel();
            // if(this.ownerProfile == false){
            //   const monthNames = ["January", "February", "March", "April", "May", "June",
            //   "July", "August", "September", "October", "November", "December"
            // ];
            //         let update = { // come back and fix this
            //           "View":{
            //             "ViewKey": monthNames[new Date().getMonth()]
            //           },
            //           "Username": this.user.OwningUsername
            //         }
            //         this.stat.updateStartUpStat(update).subscribe((res:any) =>{
                
            //         });
            // }
            // }else{
            //   this.router.navigate(['home']);
            // }
          }}
      )
      }
      else{
        this.populateReviews();
        this.declareImageCarousel();
      //  if(this.ownerProfile == false){
      //   const monthNames = ["January", "February", "March", "April", "May", "June",
      //   "July", "August", "September", "October", "November", "December"
      // ];
      //         let update = { // come back and fix this
      //           "View":{
      //             "ViewKey": monthNames[new Date().getMonth()]
      //           },
      //           "Username": this.user.OwningUsername
      //         }
      //         this.stat.updateStartUpStat(update).subscribe((res:any) =>{
          
      //         });
      //  }
      // }
      }
    }
  )

}

populateReviews(){
  let sendingObject = {
    "SearchInput":this.searchInput,

  }

  this.ratingService.searchForRatings(sendingObject).subscribe(
    (res: any) => {
      this.ratings = res;
      console.log(res)
      if(this.ratings !== null && this.ratings.length > 0){
        this.hasRecievedRatings = true;
        for(let rate of this.ratings){
          console.log("getting inside the ratings")
          let usernameObject = {
            "Username":rate.raterUsername
          };
          this.userService.getUserDetails(usernameObject).subscribe(
            (res: any) =>{
              this.ratings[this.ratings.indexOf(rate)].raterProfile  = res.profilePicLoc;
              console.log("assigned pro-pic")
            }
          )
    } 
  }
    },
  err =>{

  },
() =>{
  this.buildForm();
})
}

onFileChange(event){
  let files = event.target.files; 
  this.saveFiles(files);
}

onDocChange(event){
  let files = event.target.files; 
  this.saveDocs(files);
}

saveFiles(files){
  this.errors = []; // Clear error
  // Validate file size and allowed extensions
  if (files.length > 0 && (!this.isValidFiles(files))) {
      this.uploadStatus.emit(false);
      return;
  }       
  if (files.length > 0) {
        let formData: FormData = new FormData();
        for (var j = 0; j < files.length; j++) {
            formData.append("file[]", files[j], files[j].name);
        }
        var parameters = {
            projectId: this.projectId,
            sectionId: this.sectionId
        }
        this.fileService.upload(formData, parameters)
            .subscribe(
            success => {
              this.imgURL = success._body
              this.uploadStatus.emit(true);

              
            },
            err => {

            },
            () =>{

            }
        ) 
    } 
}

saveDocs(files){
    
  this.errors = []; // Clear error
  // Validate file size and allowed extensions
  if (files.length > 0 && (!this.isValidFiles(files))) {
      console.log("uplaodingDoc");
      this.uploadStatus.emit(false);
      return;
  }       
  if (files.length > 0) {
        let formData: FormData = new FormData();
        for (var j = 0; j < files.length; j++) {
            formData.append("file[]", files[j], files[j].name);
        }
        var parameters = {
            projectId: this.projectId,
            sectionId: this.sectionId
        }
        this.fileService.upload(formData, parameters)
            .subscribe(
            success => {
              this.docUrl = success._body
              this.uploadStatus.emit(true);
              this.cvDocButtonClass = "btn btn-warning m-b-10 m-r-10"
              this.cvDoc = "Click to change CV Document"
            },
            err => {

            },
            () =>{
               
            }
        ) 
    } 
}


private isValidFiles(files){
  // Check Number of files
   if (files.length > this.maxFiles) {
       this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
       return;
   }        
   this.isValidFileExtension(files);
   return this.errors.length === 0;
}

private isValidFileExtension(files){
  // Make array of file extensions
  var extensions = (this.fileExt.split(','))
                  .map(function (x) { return x.toLocaleUpperCase().trim() });
  for (var i = 0; i < files.length; i++) {
      // Get file extension
      var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
      // Check the extension exists
      var exists = extensions.includes(ext);
      if (!exists) {
          this.errors.push("Error (Extension): " + files[i].name);
      }
      // Check file size
      this.isValidFileSize(files[i]);
  }
}

private isValidFileSize(file) {
  var fileSizeinMB = file.size / (1024 * 1000);
  var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
  if (size > this.maxSize)
      this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
}


declareImageCarousel(){
  this.galleryOptions = [
    {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];
if(this.user.photos !== null && this.user.photos !== undefined){
  for(let photo of this.user.photos){
    //this.images.push(this.sanitizer.bypassSecurityTrustResourceUrl(photo));
    let pic = {
      small: photo,
      medium: photo,
      big: photo
    }
    if(this.galleryImages === undefined){
      this.galleryImages = [pic];
    }
    else{
      this.galleryImages.push(pic);
    }
   console.log(this.images)
    
  }
}

this.carouselTile = {
  grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
  slide: 1,
  speed: 400,
  animation: 'lazy',
  point: {
    visible: true
  },
  load: 5,
  touch: true,
  easing: 'ease'
}

if(this.user.videos !== null && this.user.videos !== undefined){
  for(let vid of this.user.videos){

    if(this.videos === undefined){
      this.videos = [this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+vid)];
    }
    else{
      this.videos.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+vid));
    }
      
    
  }
}

}

populateMembershipDetails(){
  let user = {
    "username" : localStorage.getItem("currentUser")
  }
  this.subs.getSubscription(user).subscribe(
    (res:any) =>{
      console.log(res);
      if(res === undefined || res === null){
        this.router.navigateByUrl('/subscribe');
      }
      else{
        if(res.planName === "firstplan"){
            this.subType = "starter";
            this.maxSelectedItems = 4;
            this.maxAmountOfImages = 0; 
            this.videoLinks = null;
        }
        else if(res.planName === "secondplan"){
            this.subType = "seed";
            this.maxSelectedItems = 6;
            this.maxAmountOfImages = 1; 
            this.videoLinks = [""];
        }
        else if(res.planName === "thirdplan"){
            this.subType = "growing";
            this.maxSelectedItems = 6;
            this.maxAmountOfImages = 4; 
            this.videoLinks = ["",""];
        }
        else{
            this.router.navigateByUrl('/home');
        }
      }
      
    },
  err=>{
  },
() =>{
});
}




onSubmit(value: string){
  this.checkMsg = [];
    this.isValid = true;
    let files = this.uploadedFiles;
    console.log(this.maxSelectedItems);
    console.log(this.maxAmountOfImages);
    
    if(this.selectedExpertese.length > this.maxSelectedItems){
        this.isValid = false;
        this.checkMsg.push({severity:'error', summary:'Error Message', detail:'You may only select '+this.maxSelectedItems+' areas of expertise your startup is looking for'});
    }
    if(this.selectedIndustries.length > 3){
      this.isValid = false;
      this.checkMsg.push({severity:'error', summary:'Error Message', detail:'You may only select 3 areas of industry your startup is apart of'});
  }
    if(files.length > this.maxAmountOfImages && files !== undefined){
        this.isValid = false;
        this.checkMsg.push({severity:'error', summary:'Error Message', detail:'You may only select '+this.maxAmountOfImages+' amount of images for your startup'});
    }
    
    else{
        if (files.length > 0) {
            if(this.isValid){
            let formData: FormData = new FormData();
            for (var j = 0; j < files.length; j++) {
                formData.append("file[]", files[j], files[j].name);
            }
            var parameters = {
                projectId: this.projectId,
                sectionId: this.sectionId
            }
            
            this.fileService.UploadBulk(formData, parameters)
                .subscribe(
                success => {
                  console.log(success._body);
                   let workingString = success._body.replace("[","");
                  workingString = workingString.replace("]","");
                  workingString = workingString.replace(/"/g,'');
                  this.photos = workingString.split('^');

                  console.log(this.photos)
                  
                  this.uploadStatus.emit(true);
                  let sendingValue:any = value;
                  sendingValue.profilePicLoc = this.imgURL;
                  sendingValue.photos = this.photos;
                  console.log(sendingValue);
                
                
                    this.startupService.createOrUpdateCompany(sendingValue).subscribe(
                    (res: any) => {
                    });
                  
                  
                },
                error => {
                    this.uploadStatus.emit(true);
                    this.errors.push(error.ExceptionMessage);
                },() =>{
                  //  this.updateLoading = true;
                  this.toggleEditProfile();
                })
            } 
        }
        else{
            console.log(files);
            this.errors = []; // Clear error
            // Validate file size and allowed extensions      
           
              if(this.isValid){
                
                this.uploadStatus.emit(true);
                  let sendingValue:any = value;
                  sendingValue.profilePicLoc = this.imgURL;
                  sendingValue.photos = this.photos;
                  console.log(sendingValue);
              
                  this.startupService.createOrUpdateCompany(sendingValue).subscribe(
                  (res: any) => {
                  },()=>{},() =>{
                    //  this.updateLoading = true;
                    this.toggleEditProfile();
                  });
              } 
        }
    }
}




 delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

  async startLocationLookup(){

  this.latitude = 39.8282;
  this.longitude = -98.5795;
  this.zoom = 4;

  //create search FormControl
  this.searchControl = new FormControl();

  //set current position
  console.log(this.searchControl)

  //load Places Autocomplete
 
      this.mapsAPILoader.load().then(() => {
        console.log(this.searchElementRef)
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["(cities)"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
    
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    
    
    this.completedLoading = true;
    }

    AddSocialMediaClick(event){
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
            let update = { // come back and fix this
              "SocialMedia":{
                "SocialKey": event,
                "SocialMonth": monthNames[new Date().getMonth()]
              },
              "Username": this.user.owningUsername
            }
            this.stat.updateStartUpStat(update).subscribe((res:any) =>{
        
            },
          (err) =>{
    
          },
        () =>{
          if(event == 'Twitter'){
            this.router.navigateByUrl(this.user.twitterURL);
          }
          else if(event == 'Facebook'){
            this.router.navigateByUrl(this.user.facebookURL);
          }
          else if(event == 'Instagram'){
            this.router.navigateByUrl(this.user.instagramURL);
          }
          else if(event == 'Linkden'){
            this.router.navigateByUrl(this.user.linkdenURL);
          }
          
        });
    }



  }
