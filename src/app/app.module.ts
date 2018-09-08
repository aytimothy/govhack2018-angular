import * as SocketsIO from 'socket.io-client';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { RedeemComponent } from './redeem/redeem.component';
import { SettingsComponent } from './settings/settings.component';
import { RecordComponent } from './record/record.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    RedeemComponent,
    SettingsComponent,
    RecordComponent,
    LoadingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
