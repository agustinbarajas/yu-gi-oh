import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CardListComponent} from "./pages/card-list/card-list.component";
import {CardDetailsComponent} from "./pages/card-details/card-details.component";

const routes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'card/:id', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
