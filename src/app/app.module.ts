import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './Components/home/swiper/swiper.component';
import { HomeInfoComponent } from './Components/home/home-info/home-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SwiperComponent,
    HomeInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
