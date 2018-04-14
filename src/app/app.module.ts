import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './mainPage/search-bar/search-bar.component';
import { ResultsComponent } from './mainPage/results/results.component';
import { MainpageComponent } from './mainPage/mainpage/mainpage.component';
import { SearchService } from './services/search.service';
import { PlacesService } from './services/places.service';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './mainPage/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchBarComponent,
    ResultsComponent,
    MainpageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [SearchService,PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
