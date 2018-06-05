import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import '../../../assets/charts/echart/echarts-all.js';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public datas: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
sendingObject;
  constructor(public http: Http,private router: Router,private companyService: CompanyService,private route: ActivatedRoute) { }

  ngOnInit() {
     this.populateCompanies();
  }

  populateCompanies(){
    console.log("gets into fetch")
    this.sendingObject = {
  }

  this.companyService.searchForCompanies(this.sendingObject).subscribe(
      (res: any) => {
          this.datas = res;
          console.log(this.datas)
      },
      err =>{
          
      },
      () =>{
         
          
      }
      
  );
  }

}
