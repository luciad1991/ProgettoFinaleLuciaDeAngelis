import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {
client: Client []= [];
  constructor(
    private clientService: ClientServiceService,
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(client=>{
      this.client = client.content;
    })
  }

  

}
