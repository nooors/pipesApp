import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { SalesRoutingModule } from "./sales-routing.module";

import { CommonsComponent } from "./pages/commons/commons.component";
import { NotCommonsComponent } from "./pages/not-commons/not-commons.component";
import { NumbersComponent } from "./pages/numbers/numbers.component";
import { SortComponent } from "./pages/sort/sort.component";

@NgModule({
  declarations: [
    CommonsComponent,
    NotCommonsComponent,
    NumbersComponent,
    SortComponent,
  ],
  imports: [CommonModule, PrimeNgModule, SalesRoutingModule],
})
export class SalesModule {}
