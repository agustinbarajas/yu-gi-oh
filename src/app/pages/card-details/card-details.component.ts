import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../../services/card.service";
import {Observable} from "rxjs";
import {Card} from "../../interfaces/card.interface";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  card$!: Observable<Card>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id') as string;
    this.card$ = this.cardService.getCard(cardId);
  }

}
