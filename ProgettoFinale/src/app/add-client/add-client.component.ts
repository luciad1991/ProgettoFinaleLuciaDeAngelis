import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client : Client = new Client()
  constructor(private clientService : ClientServiceService) { }

  ngOnInit(): void {
  }

  addNewClient() {
this.clientService.createNewClient(this.client).subscribe(response=> console.log(response));

  }

}
