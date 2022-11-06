import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardListComponent} from './pages/card-list/card-list.component';
import {CardDetailsComponent} from './pages/card-details/card-details.component';
import {CardComponent} from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardDetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
