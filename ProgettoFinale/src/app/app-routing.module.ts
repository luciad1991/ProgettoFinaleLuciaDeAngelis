import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from './clients-table/clients-table.component';

const routes: Routes = [
  {path: 'Clients', component: ClientsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
