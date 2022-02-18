import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  id:any
  constructor(private http:HttpClient) { }

  getParentData():Observable<any>{
    return this.http.get("assets/parent.json")
  }
  getChildData():Observable<any>{
    return this.http.get("assets/child.json")
  }
  getmsg(){
    return 'No data present'
  }
}
