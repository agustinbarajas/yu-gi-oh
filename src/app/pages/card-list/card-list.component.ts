import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../interfaces/card.interface";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  searchControl = new FormControl();

  constructor(private readonly cardService: CardService) {
  }

  ngOnInit(): void {
    this.searchControl
      .valueChanges
      .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        this.cards = [];
        this.searchCards(searchValue);
      });
    this.searchCards();
  }

  private searchCards(searchValue?: string) {
    this.cardService.searchCards(searchValue)
      .subscribe((cards: Card[]) => {
        this.cards = cards;
      });
  }
}
