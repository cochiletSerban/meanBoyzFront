import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QueryParamsService } from '../../services/query-params.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('r') r:ElementRef;
  query:string="";

  Restaurants:boolean = false;
  Bar: boolean = false;
  Hotel: boolean = false;
  Museum: boolean = false;
  Establishments: boolean = false;

  constructor(private sendQuery: QueryParamsService) { }

  ngOnInit() {
  }

  passQuery() {
    let name;
    if(this.Restaurants)  name = "restaurant";
    if(this.Bar) name = "bar";
    if(this.Hotel) name = "hotel";
    if(this.Establishments) name = "establishment";
    if(this.Museum) name = "museum";


    let q= {
      tip : true,
      address:this.query,
      types:name,
      radius:'500',
      name:this.query +" " +name
    }

    this.sendQuery.statusUpdated.emit(q);
  }

}
