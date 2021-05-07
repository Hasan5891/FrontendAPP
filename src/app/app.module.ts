import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldComponent } from './hello/hello.component';
import { Logger } from './hello/logger.service';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent

  ],
  imports: [
    HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MaterialModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
