import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDataComponent } from './graph-data/graph-data.component';
import { GraphplotComponent } from './graphplot/graphplot.component';


const routes: Routes = [
  { path: '' , redirectTo: 'gData' , pathMatch: "full"},
  { path: 'gData' , component: GraphDataComponent },
  { path: 'gplot' , component: GraphplotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
