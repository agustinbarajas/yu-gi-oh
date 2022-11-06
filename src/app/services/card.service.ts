import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Card} from "../interfaces/card.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly CARD_ENDPOINT = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private readonly http: HttpClient,) {
  }

  searchCards(): Observable<Card[]> {
    return this.http.get<{ data: Card[] }>(
      this.CARD_ENDPOINT,
      {params: {num: 10, offset: 0}}
    ).pipe(map(({data}: { data: Card[] }) => data));
  }
}
