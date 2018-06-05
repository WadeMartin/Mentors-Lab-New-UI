import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
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
export class ProfileComponent implements OnInit {
  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';
  @Input() public spinner = Spinkit.skWave;
  editProfile = true;
  editProfileIcon = 'icofont-ui-edit';
  editProfileText = " Edit";

  editorToolbar: any;


  public editor;
  public isSpinnerVisible = true;
  public Spinkit = Spinkit;

  public editorContent;
  public editorConfig : any;


//#region Form Builder Properties
userform: FormGroup = this.fb.group({});
experteses: SelectItem[];
ownerProfile = false;
private searchInput;
//#endregion

//#region User Details
public loggedInUsername = localStorage.getItem('currentUser');
user:any;
public selectedExpertese: any;
public displayUsername;
public username;
public firstName;
public lastName;
public title;
public currentEmployer;
public country;
public location;
public expertese;
public experience;
public description;

//#endregion
//#region Ratings

public ratings:any;
hasRecievedRatings = false;
//#endregion


//#region Image Details
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



  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor(private fileService: FileService,private ratingService: RatingService,public http: Http,private fb: FormBuilder,private userService: UserService,private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe( params => this.searchInput = params );
    this.router.routerState
    this.loadUserInformation(this.searchInput);
    
  }

  ngOnInit() {



  }

  toggleEditProfile() {
    this.editProfileText = (this.editProfileIcon === 'icofont-close') ? ' Edit' : 'Cancel Changes';
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }



buildForm(){
  this.userform = this.fb.group({
    'firstName': new FormControl(this.user.firstName, Validators.required),
    'lastName': new FormControl(this.user.lastName, Validators.required),
    'title': new FormControl(this.user.title),
    'description': new FormControl(this.editorContent),
    'location': new FormControl(this.user.location, Validators.required),
    'currentEmployer': new FormControl(this.user.currentEmployer, Validators.required),
    'expertises': new FormControl(this.user.expertises, Validators.required),
    'country': new FormControl(this.user.country, Validators.required),
    'experience': new FormControl(this.user.experience, Validators.required),
    'username': new FormControl(this.user.username)
});

this.experteses = [
  {label: 'Admin', value: 'Admin'},
  {label: 'Coaching', value: 'Coaching'},
  {label: 'Communication', value: 'Communication'},
  {label: 'Digital', value: 'Digital'},
  {label: 'Design', value: 'Design'},
  {label: 'Finance', value: 'Finance'},
  {label: 'Fundraising', value: 'Fundraising'},
  {label: 'Human Resources', value: 'Human Resources'},
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
}


onSubmit(value: string) {

  let sendingValue:any = value;
  sendingValue.profilePicLoc = this.imgURL;
  sendingValue.cvDocLoc = this.docUrl;

  this.userService.updateUserDetails(value).subscribe(
    (res: any) =>{
       // this.showSuccess("User updated Successfully");
       console.log("updated user details")
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
  let usernameObject = {
    "Username": username.SearchInput
  }

  console.log(usernameObject);
  this.userService.getUserDetails(usernameObject).subscribe(
    (res: any) =>{
      this.user = res;
      if(this.user == null){
        this.router.navigate(['home']);
      }
      else{
        this.displayUsername = this.user.username,
        this.selectedExpertese = this.user.expertises,
        this.editorContent = this.user.description,
        this.imgURL = this.user.profilePicLoc;
        this.docUrl = this.user.cvDocLoc;
        if(this.user.cvDocLoc === null || this.user.cvDocLoc === undefined){
          this.cvDocButtonClass = "btn btn-danger m-b-10 m-r-10"
          this.cvDoc = "Click to upload CV Document"
        }
        else{
          this.cvDocButtonClass = "btn btn-warning m-b-10 m-r-10"
          this.cvDoc = "Click to change CV Document"
        }
        if(this.user.username == localStorage.getItem('currentUser')){
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
      this.router.navigate(['dashboard']);
    },
    () =>{
      this.populateReviews();
    }

  )
}

populateReviews(){
  let sendingObject = {
    "SearchInput":this.user.username
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


}
