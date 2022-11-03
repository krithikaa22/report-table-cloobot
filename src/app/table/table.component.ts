import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: any[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.httpClient.get<any[]>('data/data.json')
      .subscribe(data => {
        this.persons = (data as any).data;
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
