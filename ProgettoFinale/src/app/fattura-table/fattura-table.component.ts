import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-table',
  templateUrl: './fattura-table.component.html',
  styleUrls: ['./fattura-table.component.css']
})
export class FatturaTableComponent implements OnInit {

  fattura : Fattura [] = []

  constructor(
    private fatturaService : FatturaService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.fatturaService.getAllFatture().subscribe(fattura=>{
      this.fattura = fattura.content;
    })
  }

}
