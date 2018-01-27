import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from "./task/tasks.component";
import {MatchesComponent} from "./match/matches.component";
import {LangportComponent} from "./langport/langport.component";

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent },
  { path: 'matches', component: MatchesComponent }
  { path: 'langport', component: LangportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
