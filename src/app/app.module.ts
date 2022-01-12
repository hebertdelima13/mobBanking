import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './pages/home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { SendMoneySliderComponent } from './components/send-money-slider/send-money-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendMoneySliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
