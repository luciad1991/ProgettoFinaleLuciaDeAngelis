import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-details',
  templateUrl: './fattura-details.component.html',
  styleUrls: ['./fattura-details.component.css']
})
export class FatturaDetailsComponent implements OnInit {
fattura!: Fattura
  constructor(
    private fatturaService : FatturaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.fatturaService.getFatturaById(data['id']).subscribe(response=> this.fattura = response)
    })
  }

  editFattura(item : Fattura){
this.router.navigate(['Fatture', item.id, 'edit'])
  }

}
