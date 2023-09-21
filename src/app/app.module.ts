import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route2Component } from './components/route2/route2.component';
import { FormsModule } from '@angular/forms';
import { Route1Component } from './components/route1/route1.component';

@NgModule({
  declarations: [AppComponent, Route1Component, Route2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
