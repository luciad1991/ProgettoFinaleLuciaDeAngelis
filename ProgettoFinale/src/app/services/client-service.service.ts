import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { ClientData } from '../interfaces/client-data';


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
}