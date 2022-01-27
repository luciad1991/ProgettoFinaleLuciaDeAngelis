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





fattura = {"data":"2019-07-31T16:09:43.763+00:00","numero":0,"anno":2019,"importo":1692.16,"stato":{
  "id": 2,
  "nome": "NON PAGATA"
},
"cliente":{"id":1}}


  constructor(
    private fatturaService : FatturaService,
    private router: Router,
    private route : ActivatedRoute,
   ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
    this.fattura.cliente.id = data['id']; 
     })

  }

  addNewFattura(){
    this.fatturaService.createNewFattura(this.fattura).subscribe();
      this.router.navigate(['Fatture'])
      console.log(this.fattura);

  }
}
