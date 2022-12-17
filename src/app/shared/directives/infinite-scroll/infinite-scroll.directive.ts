import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { filter, fromEvent, map, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[infiniteScroll], [infinite-scroll]',
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
  @Output() scrolled = new EventEmitter<any>();
  @Input() fromRoot = false;

  private readonly unsubscribe$ = new Subject<any>();

  constructor(private readonly element: ElementRef) {}

  ngAfterViewInit(): void {
    this.setup();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete;
  }

  private setup() {
    fromEvent(this.fromRoot ? document : this.element.nativeElement, 'scroll')
      .pipe(
        takeUntil(this.unsubscribe$),
        map(() => this.isBottomScroll()),
        filter(Boolean)
      )
      .subscribe(() => {
        this.scrolled.emit();
      });
  }

  private isBottomScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = this.getScrollPosition();
    return scrollPosition === scrollHeight;
  }

  private getScrollPosition() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    return scrollTop + clientHeight;
  }
}
