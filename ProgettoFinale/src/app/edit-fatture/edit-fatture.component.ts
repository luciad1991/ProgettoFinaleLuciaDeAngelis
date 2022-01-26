import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {
  fattura: Fattura= new Fattura();

  constructor(
    private route : ActivatedRoute,
    private fatturaService : FatturaService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.fatturaService.getFatturaById(data[('id')]).subscribe(response => this.fattura = response);
    });
  }

  updateFattura(fattura: Fattura){
    this.fatturaService.updateFatture(this.fattura).subscribe(data=>{
      this.fattura = data;
    })    
    this.router.navigate(['Fatture'])
  }

}
