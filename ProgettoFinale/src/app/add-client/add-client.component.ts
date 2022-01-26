import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
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
this.clientService.createNewClient(this.client).subscribe(response=> {
  console.log(response);
  this.router.navigate(['Clients'])
});

  }



}
