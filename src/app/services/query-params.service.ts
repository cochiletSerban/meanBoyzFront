import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class QueryParamsService {
  statusUpdated = new EventEmitter<any>();
  constructor() { }
}
