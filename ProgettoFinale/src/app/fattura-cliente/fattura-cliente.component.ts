import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fattura } from '../classes/fattura';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-fattura-cliente',
  templateUrl: './fattura-cliente.component.html',
  styleUrls: ['./fattura-cliente.component.css']
})
export class FatturaClienteComponent implements OnInit {


  constructor(
    private clientService : ClientServiceService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {


  
  }

}
