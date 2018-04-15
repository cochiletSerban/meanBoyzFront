import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './mainPage/search-bar/search-bar.component';
import { ResultsComponent } from './mainPage/results/results.component';
import { MainpageComponent } from './mainPage/mainpage/mainpage.component';
import { SearchService } from './services/search.service';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './mainPage/nav-bar/nav-bar.component';
import { QueryParamsService } from './services/query-params.service';

import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchBarComponent,
    ResultsComponent,
    MainpageComponent,
    NavBarComponent,
    MapComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCEywTsRa0eVB96afgSKg2_ceHtfgvlD3o'
    })
  ],
  providers: [SearchService,QueryParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
