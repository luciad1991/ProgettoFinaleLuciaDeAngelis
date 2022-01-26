import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FatturaData } from '../interfaces/fattura-data';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(private http: HttpClient) { }


  getAllFatture() {
    return this.http.get<FatturaData>(environment.base + 'api/fatture?page=0&size=20&sort=id,ASC');
  }
}
