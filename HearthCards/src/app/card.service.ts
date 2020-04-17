import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public API = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  getCards(classname: string): Observable<any> {
    return this.http.get( this.API + "cards/" + classname);
  }
}
