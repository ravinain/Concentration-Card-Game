import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition } from '@angular/animations';
import { CardInputData } from './card-input-data';

@Component({
  selector: 'app-card',
  animations: [
    trigger(
      'flipAnimation', [
        transition(':leave', [
          style({transform: 'rotateY(50deg)', transition: "transform 0.8s"}),
          animate('300ms', style({transform: 'rotateY(50deg)', transition: "transform 0.8s"}))
        ])
      ]
    )
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: CardInputData = {cardText: 'A', icon: { name: 'bi-suit-heart-fill', colorClass: 'red'}};
  frontFlag:boolean = true;
  

  constructor() {
  }

  ngOnInit(): void {
  }

  isFront() {
    return this.frontFlag;
  }

  isBack() {
    return !this.isFront();
  }

  flipCard() {
    if (this.isFront()) {
      this.frontFlag = !this.frontFlag;
    }
  }
}
