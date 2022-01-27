import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-add-new-provincia',
  templateUrl: './add-new-provincia.component.html',
  styleUrls: ['./add-new-provincia.component.css']
})
export class AddNewProvinciaComponent implements OnInit {

  provincia : Provincia = new Provincia()
  
  constructor(
    private clientService : ClientServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  AddNewProvincia(){
    this.clientService.addNewProvincia(this.provincia).subscribe(data=> {
      this.provincia = data;
      })
      this.router.navigate(['AddComune'])
  }



}
