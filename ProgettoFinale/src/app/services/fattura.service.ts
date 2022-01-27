import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';
import { FatturaData } from '../interfaces/fattura-data';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(private http: HttpClient) { }


  getAllFatture() {
    return this.http.get<FatturaData>(environment.base + 'api/fatture?page=0&size=20&sort=id,ASC');
  }

  getFatturaById(id: number) {
return this.http.get<Fattura>(environment.base + 'api/fatture/' + id);
  }

  updateFatture (fattura: Fattura){
    return this.http.put<Fattura>(environment.base + 'api/fatture/' +fattura.id, fattura)
  }

  removeFattura(fattura: Fattura) {
    return this.http.delete(environment.base + 'api/fatture/' + fattura.id)
  }

  createNewFattura(fattura: Fattura){
    return this.http.post<Fattura>(environment.base + 'api/fatture', fattura)
  }

  getStatoById (stato : Stato) {
    return this.http.get<Stato>(environment.base + 'api/statifattura/' + stato.id )
    
  }


}
