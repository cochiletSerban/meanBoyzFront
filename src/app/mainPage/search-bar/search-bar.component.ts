import { Component, OnInit, ElementRef } from '@angular/core';
import { QueryParamsService } from '../../services/query-params.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  query:string="";
  constructor(private sendQuery: QueryParamsService) { }

  ngOnInit() {
  }

  passQuery() {
    //console.log(this.query);
    let q = {address:this.query}
    this.sendQuery.statusUpdated.emit(q);
  }

}
