import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { AjaxComponent } from './ajax/ajax.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiplesThreeAndFiveComponent } from './multiples-three-and-five/multiples-three-and-five.component';
import { CoffeeOrderingComponent } from './coffee-ordering/coffee-ordering.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    AjaxComponent,
    MultiplesThreeAndFiveComponent,
    CoffeeOrderingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
