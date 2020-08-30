import { SalesGraphModule } from './sales-graph/sales-graph.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sales-graph', loadChildren: () => import('./sales-graph/sales-graph.module').then(m => m.SalesGraphModule) },
  { path: 'sales-list', component: SalesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
