import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { BrowserModule } from '@angular/platform-browser';

import { TableRoutingModule } from './table-routing.module';

// import {DataTablesModule} from 'angular-datatables'
import { DataTablesModule } from "angular-datatables";
import { CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http';
 
@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    TableRoutingModule,
    HttpClientModule,
    DataTablesModule,
    CommonModule
  ],
})
export class AppModule { }
