import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {
comune : Comune = new Comune();
provincia : Provincia[] = []

  constructor(
    private clientService : ClientServiceService,
    private router: Router ) { }

  ngOnInit(): void {
    this.clientService.getAllProvince().subscribe(data=>{
      this.provincia = data.content
    })
  }

  AddNewComune(){
    this.clientService.AddNuovoComune(this.comune).subscribe(data=> {
      this.comune = data;
      this.router.navigate(['AddClient'])
      })
  }
}

