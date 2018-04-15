import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class SearchService {
  url = 'http://find-me-some-hoes.herokuapp.com/mizerii'
  urlw = 'http://find-me-some-hoes.herokuapp.com/weather'
  constructor(private http: Http) { }

  getResults(query){
    return this.http.post(this.url,query).map(res => res.json());
  }

  
  getW(query){
    return this.http.post(this.urlw,query).map(res => res.json());
  }
}
