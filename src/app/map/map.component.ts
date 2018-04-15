import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { QueryParamsService } from '../services/query-params.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom = 12;
  results =[ {location:[44.43,26.1]}];
  constructor(private search:SearchService,private queryParams:QueryParamsService) { 
    queryParams.statusUpdated.subscribe( 
      (query) =>{
        this.renderResults(query);
      } 
    )
  }

  
  renderResults(q){
  
    console.log(q);
    
   this.search.getResults(q).subscribe(resp => {
     // console.log("new");
      //resp.json;
     // JSON.parse(resp)
     this.results = resp;
      console.log(resp);
      this.zoom = 14;
     
    
   })
    
  }
  ngOnInit() {
  }


}
