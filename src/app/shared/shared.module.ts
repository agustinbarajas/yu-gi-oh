import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './directives/infinite-scroll/infinite-scroll.directive';

@NgModule({
  declarations: [InfiniteScrollDirective],
  imports: [CommonModule],
  exports: [InfiniteScrollDirective],
})
export class SharedModule {}
