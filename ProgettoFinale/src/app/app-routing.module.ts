import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { AddFatturaComponent } from './add-fattura/add-fattura.component';
import { AddNewProvinciaComponent } from './add-new-provincia/add-new-provincia.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { FatturaClienteComponent } from './fattura-cliente/fattura-cliente.component';
import { FatturaDetailsComponent } from './fattura-details/fattura-details.component';
import { FatturaTableComponent } from './fattura-table/fattura-table.component';

const routes: Routes = [
  {path: 'Clients', component: ClientsTableComponent},
  {path: 'Clients/:id/detail' ,component: ClientDetailsComponent},
  {path: 'Clients/:id/edit', component : EditClientsComponent},
  {path: 'AddClient', component: AddClientComponent},
  {path: 'Fatture', component: FatturaTableComponent},
  {path: 'Fatture/:id/detail', component:FatturaDetailsComponent},
  {path: 'Fatture/:id/edit' ,component: EditFattureComponent},
  {path: 'Clients/:id/addFattura', component:AddFatturaComponent},
  {path: 'AddComune', component: AddComuneComponent},
  {path: 'AddProvincia', component: AddNewProvinciaComponent},
  {path: 'Fattura/:id/fatturaCliente', component: FatturaClienteComponent}
  //{path: 'AddFattura', component: AddFatturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
