import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client : Client = new Client();
tipoCliente : string[] = [];
comuni: Comune [] = []
prova : Client = {
  "ragioneSociale": "LUCIA TEST PROVA AIUTO",
  "partitaIva": "14812266616",
  "tipoCliente": "SRL",
  "email": "rosalino.caruso@gmail.com",
  "pec": "antonio.damico@gmail.com",
  "telefono": "+38 855 62 44 5685",
  "nomeContatto": "Sarita",
  "cognomeContatto": "Serr",
  "telefonoContatto": "380.260.3225",
  "emailContatto": "armando.martinelli@hotmail.com",
  "indirizzoSedeOperativa": {
      "via": "Contrada Gastone 4, Piano 4",
      "civico": "698",
      "cap": "38615",
      "localita": "Vania del friuli",
      "comune": {
          "id": 1,
          "nome": "LASTRA A SIGNA",
          "provincia": {
              "id": 1,
              "nome": "FIRENZE",
              "sigla": "FI"
          }
      }
  },
  "indirizzoSedeLegale": {
      "via": "Strada Ricci 55, Appartamento 58",
      "civico": "925",
      "cap": "65995",
      "localita": "Ivonne umbro",
      "comune": {
          "id": 1,
          "nome": "LASTRA A SIGNA",
          "provincia": {
              "id": 1,
              "nome": "FIRENZE",
              "sigla": "FI"
          }
      }
  },
  
}



  constructor(
    private clientService : ClientServiceService,
    private router : Router) { }

  ngOnInit(): void {
    this.clientService.getTipoClient().subscribe(data=> {
      this.tipoCliente = data;
    })
    this.clientService.getAllComuni().subscribe(data => {
      this.comuni = data.content;
    })
 
  }

  addNewClient() {
this.clientService.createNewClient(this.prova).subscribe(response=> {
  console.log(this.prova);
  this.router.navigate(['Clients'])
});


  }



}
