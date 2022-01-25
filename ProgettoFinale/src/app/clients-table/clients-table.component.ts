import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(client=>{
      this.client = client.content;
    })
  }

  detailClient(item: Client){
this.router.navigate(['Clients', item.id ,'detail'])
  }

  

}
