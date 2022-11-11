import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { DataServiceService } from './table.service';

import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
@ViewChild(DataTableDirective, {static: false})
export class TableComponent implements OnInit {
  datatableElement: any = DataTableDirective;

  dtOptions: DataTables.Settings = {};
  data : any = []


  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: DataServiceService) { 
    this.http.getData().subscribe((data: any) => {
      console.log(data)
      this.data = data
    })
  }
  min: any = 0;
  max: any = 0;
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      paging: true,
    };
    // this.http.get<[]>('data/data.json')
    // .subscribe(data => {
    //   this.data = (data as any).data;
    //   // Calling the DT trigger to manually render the table
    //   // this.dtTrigger.next();
    // });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
