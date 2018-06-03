import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';
import {animate, style, transition, trigger} from '@angular/animations';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import '../../../assets/charts/echart/echarts-all.js';
import {Message,SelectItem} from 'primeng/components/common/api';
import{UserService} from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model.js';
import {Spinkit} from '../../shared/spinner/spinkits';
import { RatingService } from '../../services/rating.service';
import { FileService } from '../../services/file.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../shared/spinner/spinner.component.css',
  '../../shared/spinner/spinkit-css/sk-double-bounce.css',
  '../../shared/spinner/spinkit-css/sk-chasing-dots.css',
  '../../shared/spinner/spinkit-css/sk-cube-grid.css',
  '../../shared/spinner/spinkit-css/sk-rotating-plane.css',
  '../../shared/spinner/spinkit-css/sk-spinner-pulse.css',
  '../../shared/spinner/spinkit-css/sk-three-bounce.css',
  '../../shared/spinner/spinkit-css/sk-wandering-cubes.css',
  '../../shared/spinner/spinkit-css/sk-wave.css',
  '../../shared/spinner/spinkit-css/sk-line-material.css'],
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
export class HomeComponent implements OnInit {
  ngOnInit(){

  }
}
