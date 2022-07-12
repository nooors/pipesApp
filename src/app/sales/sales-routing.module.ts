import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NumbersComponent } from "./pages/numbers/numbers.component";
import { SortComponent } from "./pages/sort/sort.component";
import { CommonsComponent } from "./pages/commons/commons.component";

const routes: Routes = [
  { path: "", component: CommonsComponent },
  { path: "numbers", component: NumbersComponent },
  { path: "not-commons", component: SortComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
