import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {
client!: Client;
comuni: Comune [] = []
tipoCliente : string[] = []
  constructor(private route: ActivatedRoute,
    private clientService : ClientServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
     this.clientService.getClientById(data['id']).subscribe(response => this.client = response);
    })
    this.clientService.getTipoClient().subscribe(data=> {
      this.tipoCliente = data;
    })
    this.clientService.getAllComuni().subscribe(data => {
      this.comuni = data.content;
    })
 
  }

  Save() {
    this.client.dataInserimento = "2019-06-01T08:11:01.911+00:00";
    this.client.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00";
    this.clientService.updateClient(this.client).subscribe(data=>{
      this.client = data;
      this.router.navigate(['Clients'])
    })

  }

}
