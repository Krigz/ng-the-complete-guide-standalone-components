import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  // declarations: [AppComponent, WelcomeComponent, DetailsComponent], // if it's not standalone, declare the cmp
  declarations: [AppComponent, WelcomeComponent], // if it's standalone, don't declare
  imports: [BrowserModule, DetailsComponent], // add it in imports instead
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
