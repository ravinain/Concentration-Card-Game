import { Injectable } from '@angular/core';
import { PackData } from './pack-data';
import { CardInputData, Icon } from '../card/card-input-data';
import { IconDefinition, faHeart } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  cardTexts: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  icons: Icon[] = [
    { name: 'bi-suit-heart-fill', colorClass: 'red' },
    { name: 'bi-suit-diamond-fill', colorClass: 'red' },
    { name: 'bi-suit-club-fill', colorClass: 'black' },
    { name: 'bi-suit-spade-fill', colorClass: 'black' }
  ];
  cardPack: PackData;

  constructor() { 
    const cardsData: CardInputData[] = [];

    this.cardTexts.forEach((cardText):void => {
      this.icons.forEach((icon): void => {
        cardsData.push({cardText, icon});
      });
    });

    this.cardPack = { 
      cardsData
    };

  }

  getCardPack(): PackData {
    return this.cardPack;
  }

  shuffleCards(): PackData {
    const cardsData = this.cardPack.cardsData;
    for (let i = cardsData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cardsData[i];
      cardsData[i] = cardsData[j];
      cardsData[j] = temp;
    }

    return this.cardPack;
  }
  
}
