import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { Provincia } from '../classes/provincia';
import { ClientData } from '../interfaces/client-data';
import { ComuniData } from '../interfaces/comuni-data';
import { ProvinciaData } from '../interfaces/provincia-data';



@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  //tentantID='fe_0621';
  //bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNSwiZXhwIjoxNjQzOTA1MTI1fQ.okXPBLbUly1c99vo7e6LUfDGFcD708Kx1zd-m5vuSIjvtSomHRlAsIpTPslJgTFQFVA86tHRg3HuDKDg6Pklow';
  //headers= new HttpHeaders();
  
  constructor(private http:HttpClient) { 
    /*this.headers=this.headers
    .set("Authorization",this.bearerToken)
    .set("X-TENANT-ID", this.tentantID)*/
  }

  getAllClients() {
    //return this.http.get<ClientData>(environment.base +'api/clienti?page=0&size=20&sort=id,ASC',{headers:this.headers})
  //}
  return this.http.get<ClientData>(environment.base+'api/clienti?page=0&size=20&sort=id,DESC');
}


createNewClient(client: Client) {
  return this.http.post<Client>(environment.base + 'api/clienti', client);
}


getClientById (id: number) {
  return this.http.get<Client>(environment.base + 'api/clienti/' + id)
}


getTipoClient() {
  return this.http.get<string[]>(environment.base + 'api/clienti/tipicliente')
}


updateClient(client : Client) {
  return this.http.put<Client>(environment.base + 'api/clienti/' + client.id , client)
}


removeClient(client: Client) {
  return this.http.delete(environment.base + 'api/clienti/' + client.id)
}

getAllComuni () {
  return this.http.get<ComuniData>(environment.base + 'api/comuni?page=0&size=20&sort=id,DESC')
}


getAllProvince() {
  return this.http.get<ProvinciaData>(environment.base + 'api/province?page=0&size=20&sort=id,DESC')
}

AddNuovoComune (comune : Comune) {
  return this.http.post<Comune>(environment.base + 'api/comuni' , comune)
}

addNewProvincia (provincia : Provincia) {
  return this.http.post<Provincia>(environment.base + 'api/province' , provincia)
}

getFatturaByCliente(client: any){
  return this.http.get<Fattura>(environment.base + 'api/fatture/cliente/' +client.id + '?page=0&size=20&sort=id,ASC')
}

}