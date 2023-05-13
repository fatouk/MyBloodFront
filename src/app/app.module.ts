
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],
  imports: [


BrowserModule, IonicModule.forRoot(), AppRoutingModule, OrderModule,Ng2OrderModule,

    IonicModule,ToastrModule,BrowserAnimationsModule,ToastrModule.forRoot(), ReactiveFormsModule,FormsModule, HttpClientModule,HttpClientJsonpModule,
    NgbModule],
  providers: [ StatusBar, ToastrService, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
