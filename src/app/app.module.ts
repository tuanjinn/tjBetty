import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { MatchesComponent } from './match/matches.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import {AppRoutingModule} from "./app-routing.module";
import {TasksComponent} from "./task/tasks.component";
import {ProgressBarComponent} from "./shared/progressbar/progressbar.component";


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    MatchesComponent,
    DashboardComponent,
    TaskComponent,
    TasksComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
