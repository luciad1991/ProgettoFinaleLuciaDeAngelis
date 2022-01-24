import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';

const routes: Routes = [
  {path: 'Clients', component: ClientsTableComponent},
  {path: 'Client detail' ,component: ClientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
