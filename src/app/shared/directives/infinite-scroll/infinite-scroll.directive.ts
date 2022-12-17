import { Directive } from '@angular/core';

@Directive({
  selector: '[infiniteScroll], [infinite-scroll]',
})
export class InfiniteScrollDirective {
  constructor() {}
}
