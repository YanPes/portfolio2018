import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DeepSpaceImagesComponent } from './deep-space-images/deep-space-images.component';
import { ProjectFilter } from './work/project-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    DeepSpaceImagesComponent,
    ProjectFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
