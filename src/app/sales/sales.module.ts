import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { SalesRoutingModule } from "./sales-routing.module";

import { CapitalLettersPipe } from "./pipes/capitalLetters.pipe";
import { EnumPipe } from "./pipes/enum.pipe";
import { FlyPipe } from "./pipes/fly.pipe";

import { CommonsComponent } from "./pages/commons/commons.component";
import { NotCommonsComponent } from "./pages/not-commons/not-commons.component";
import { NumbersComponent } from "./pages/numbers/numbers.component";
import { SortComponent } from "./pages/sort/sort.component";
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    CapitalLettersPipe,
    CommonsComponent,
    NotCommonsComponent,
    NumbersComponent,
    SortComponent,
    EnumPipe,
    FlyPipe,
    SortPipe,
  ],
  imports: [CommonModule, PrimeNgModule, SalesRoutingModule],
})
export class SalesModule {}
