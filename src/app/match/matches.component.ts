import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { Match } from './match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  providers: [MatchService]
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.matches = this.matchService.getMatches();
  }
}
