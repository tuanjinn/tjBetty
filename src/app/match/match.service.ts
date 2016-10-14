import { Injectable } from '@angular/core';
import { Match } from './match';

export const MOCKMATCHES: Match[] = [
  { id: 1, teamA: 'Manchester United', teamB: 'Man Shitty' },
  { id: 2, teamA: 'Barcelona', teamB: 'Real Madrid' }];

@Injectable()
export class MatchService {
  constructor(){

  }

  getMatches() : Match[] {
    return MOCKMATCHES;
  }
}
