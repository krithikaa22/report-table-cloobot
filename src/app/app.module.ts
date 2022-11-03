import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableRoutingModule } from './table/table-routing.module';

import {DataTablesModule} from 'angular-datatables'
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component'
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    DataTablesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
