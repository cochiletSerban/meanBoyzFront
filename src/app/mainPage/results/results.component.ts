import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private places: PlacesService) { }
  results = [];
  renderResults(){
    let query= {
      tip : true,
      address: "bucuresti",
      types:'restaurant',
      radius:'500',
      name:'pub'
    }
    this.results = this.places.updateResults(query);
    
  }
  ngOnInit() {
  }

}
