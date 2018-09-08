import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { RedeemComponent } from './redeem/redeem.component';
import { SettingsComponent } from './settings/settings.component';
import { RecordComponent } from './record/record.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'record', component: RecordComponent },
  { path: 'map', component: MapComponent },
  { path: 'redeem', component: RedeemComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
