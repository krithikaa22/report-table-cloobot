import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = "http://universities.hipolabs.com/search?country=United+Kingdom"


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow': "PUT",
      'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
  }


  constructor(private http: HttpClient) { 
  }

  getData (){
    return this.http.get<any>(this.url)
  }
}
