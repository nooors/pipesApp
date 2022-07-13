import { Component } from "@angular/core";
import { Color, Hero } from "../../interfaces/Hero.interface";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styles: [],
})
export class SortComponent {
  transform: boolean = false;
  orderBy: string = "";
  heroes: Hero[] = [
    {
      name: "Superman",
      flies: true,
      color: Color.blue,
    },
    {
      name: "Batman",
      flies: false,
      color: Color.black,
    },
    { name: "Robin", flies: false, color: Color.green },
    {
      name: "Daredevil",
      flies: false,
      color: Color.red,
    },
    {
      name: "Green Lantern",
      flies: true,
      color: Color.green,
    },
  ];

  changeOrderBy(value: string) {
    this.orderBy = value;
  }
}
