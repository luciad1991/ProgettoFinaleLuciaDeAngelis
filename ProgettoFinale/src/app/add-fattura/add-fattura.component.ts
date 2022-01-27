import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-add-fattura',
  templateUrl: './add-fattura.component.html',
  styleUrls: ['./add-fattura.component.css']
})
export class AddFatturaComponent implements OnInit {
fattura: Fattura = new Fattura()
  constructor(private fatturaService : FatturaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addNewFattura(){
    this.fattura.data = "2019-07-31T16:09:43.763+00:00";
    this.fatturaService.createNewFattura(this.fattura).subscribe(data =>
      this.fattura = data);
      this.router.navigate(['Fatture'])

  }
}
