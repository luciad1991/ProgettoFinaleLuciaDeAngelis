import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';

const routes: Routes = [
  {path: 'Clients', component: ClientsTableComponent},
  {path: 'Clients/:id/detail' ,component: ClientDetailsComponent},
  {path: 'Clients/:id/edit', component : EditClientsComponent},
  {path: 'AddClient', component: AddClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
