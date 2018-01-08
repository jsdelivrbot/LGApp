import { Component, OnInit } from '@angular/core';
import { CHALLENGES } from './challenge/challenge.component';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  title = 'Challenges';
  challenges = CHALLENGES;
  dispToc = true;

  constructor() { }

  ngOnInit() {
  }

}
