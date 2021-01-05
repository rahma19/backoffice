
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';
import {TableModule} from 'primeng/table';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {InputSwitchModule} from 'primeng/inputswitch';
import { ListeUniteComponent } from './liste-unite/liste-unite.component';

import {FormsModule} from '@angular/forms';
import { GlobalHttpInterceptorService } from './GlobalHttpInterceptorService';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeUniteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,FormsModule,
    HttpClientModule,
    InputSwitchModule
  ],
  providers: [DataService, { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
 }