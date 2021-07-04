import { Component, OnInit } from '@angular/core';
import { PackData } from '../common/service/pack-data';
import { PackService } from '../common/service/pack.service';
import { CardInputData } from '../common/card/card-input-data';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  
  cards: CardInputData[] = [];

  constructor(private packService: PackService) { }

  ngOnInit(): void {
    this.setCards();
  }

  setCards(): void {
    this.cards = this.packService.shuffleCards().cardsData;
  }

}
