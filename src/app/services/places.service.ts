import { Injectable } from '@angular/core';
import { SearchService } from './search.service';

@Injectable()
export class PlacesService {

  results=[];
  constructor(private search:SearchService) { }

  updateResults(query){
    this.search.getResults(query).subscribe(
      response => this.results = response,
      err => console.log(err)
      )
      return this.results;
  }

}
