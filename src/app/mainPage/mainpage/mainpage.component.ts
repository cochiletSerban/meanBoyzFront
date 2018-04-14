import { Component, OnInit } from '@angular/core';
import { QueryParamsService } from '../../services/query-params.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  clicked = false;
  constructor(private query:QueryParamsService) { 
    query.statusUpdated.subscribe((cacat)=>{
      setTimeout(() => {
        this.clicked = true;
      },800);
      
    })
  }

  ngOnInit() {
  }

}
