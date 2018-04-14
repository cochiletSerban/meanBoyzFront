import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class SearchService {
  url = 'http://find-me-some-hoes.herokuapp.com/mizerii'
  constructor(private http: Http) { }

  getResults(query){

    return this.http.post(this.url,query).map(res => res.json());
  
  
  }
}
