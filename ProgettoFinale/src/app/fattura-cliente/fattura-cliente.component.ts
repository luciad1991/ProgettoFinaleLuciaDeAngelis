import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { ClientServiceService } from '../services/client-service.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-cliente',
  templateUrl: './fattura-cliente.component.html',
  styleUrls: ['./fattura-cliente.component.css']
})
export class FatturaClienteComponent implements OnInit {
fattura: Fattura [] = []

  constructor(
    private fatturaservice : FatturaService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
this.route.params.subscribe(data=> {
  this.fatturaservice.getFatturaByCliente(data['id']).subscribe(response => {
    this.fattura = response.content
  })
})

  
  }

}
