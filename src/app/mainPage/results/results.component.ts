import { Component, OnInit } from '@angular/core';

import { QueryParamsService } from '../../services/query-params.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private search:SearchService,private queryParams:QueryParamsService) { 
    queryParams.statusUpdated.subscribe( 
      (query) =>{
        this.renderResults(query);
      } 
    )
  }
  results;
  
  renderResults(q){

    console.log(q);
    
   this.search.getResults(q).subscribe(resp => {
     // console.log("new");
      //resp.json;
     // JSON.parse(resp)
     this.results = resp;
      //console.log(resp);
     
    
   })
    
  }
  ngOnInit() {
  }

}
