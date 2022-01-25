import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
 client!: Client;
  constructor(private clientService: ClientServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.clientService.getClientById(data['id']).subscribe(response=> this.client = response)
    })
  }
  editClient(client: Client) {
    this.router.navigate(['Clients', client.id ,'edit'])
  }

}
