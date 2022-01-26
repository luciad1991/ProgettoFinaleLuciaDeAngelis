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
    this.client.dataInserimento = "2019-06-01T08:11:01.911+00:00";
    this.client.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00";
    this.clientService.createNewClient(this.client).subscribe(data=> {
    this.client = data;
    this.router.navigate(['Clients'])

});

  }



}
