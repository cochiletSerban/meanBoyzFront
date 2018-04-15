import { Component, OnInit } from '@angular/core';
import { QueryParamsService } from '../../services/query-params.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})


export class MainpageComponent implements OnInit {
  colMap="col-md-12";
  colApp="noNo";
  clicked = false;
  l = false;
  constructor(private query:QueryParamsService, private log : SearchService) {
    query.statusUpdated.subscribe((cacat)=>{
      setTimeout(()=>{
        this.clicked = true;
        this.colApp = "yesYes col-md-4";
        this.colMap = "col-md-8";},800);

    })
    log.log.subscribe((l)=>this.log=l);
  }

  ngOnInit() {
  }

}
