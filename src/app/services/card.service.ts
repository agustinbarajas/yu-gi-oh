import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../interfaces/card.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly CARD_ENDPOINT =
    'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private readonly http: HttpClient) {}

  searchCards({ searchValue = '', offset = 0, num = 10 }): Observable<Card[]> {
    const params: any = { num, offset };
    if (searchValue) {
      params['fname'] = searchValue;
    }
    return this.http
      .get<{ data: Card[] }>(this.CARD_ENDPOINT, { params })
      .pipe(map(({ data }: { data: Card[] }) => data));
  }

  getCard(cardId: string): Observable<Card> {
    return this.http
      .get<{ data: Card[] }>(this.CARD_ENDPOINT, { params: { id: cardId } })
      .pipe(map(({ data }: { data: Card[] }) => data[0]));
  }
}
