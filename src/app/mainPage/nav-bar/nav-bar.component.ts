import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { QueryParamsService } from '../../services/query-params.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  done = false;
  days=[];
  constructor(private getW:SearchService,private qu : QueryParamsService) { 
    qu.statusUpdated.subscribe((q)=>{
      getW.getW(q).subscribe((res)=>{
          this.days[0]=res.temperature.substring(21, res.temperature.len);
          this.days[1]=res.forecast.Day2
          this.days[2]=res.forecast.Day3
          console.log(res);
          this.done = true;
      })
    })
 
  }



  ngOnInit() { 
  }

}
