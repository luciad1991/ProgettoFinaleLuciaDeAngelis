import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';
import { ClientServiceService } from '../services/client-service.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-add-fattura',
  templateUrl: './add-fattura.component.html',
  styleUrls: ['./add-fattura.component.css']
})
export class AddFatturaComponent implements OnInit {
fattura: Fattura = new Fattura()
client: Client = new Client();
stato : Stato = new Stato();

/*prova : Fattura = {"data":"2019-07-31T16:09:43.763+00:00","numero":0,"anno":2019,"importo":1692.16,"stato":{
  "id": 1,
  "nome": "PAGATA"
},
"cliente":{"id":1}}*/


  constructor(
    private fatturaService : FatturaService,
    private router: Router,
    private route : ActivatedRoute,
    private clientService : ClientServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
      this.clientService.getClientById(data['id']).subscribe(response => this.client = response);
     })
     this.fatturaService.getStatoById(this.stato).subscribe(data => {
       this.stato = data;
    })
     

  }

  addNewFattura(){
    this.fattura.data = "2019-07-31T16:09:43.763+00:00";
    this.fattura.stato.nome= 'Non pagata';
    this.fatturaService.createNewFattura(this.fattura).subscribe(data =>
      this.fattura = data);
      this.router.navigate(['Fatture'])
      console.log(this.fattura);

  }
}
