import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CommonsComponent } from "./pages/commons/commons.component";
import { NotCommonsComponent } from "./pages/not-commons/not-commons.component";
import { NumbersComponent } from "./pages/numbers/numbers.component";
import { SortComponent } from "./pages/sort/sort.component";

const routes: Routes = [
  { path: "", component: CommonsComponent },
  { path: "numbers", component: NumbersComponent },
  { path: "not-commons", component: NotCommonsComponent },
  { path: "sort", component: SortComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
