import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private primeNgConfig: PrimeNGConfig) {
    this.primeNgConfig.ripple = true;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: "Angular Pipes",
        icon: "pi pi-desktop",
        items: [
          {
            label: "Texts and Dates",
            icon: "pi pi-align-left",
            routerLink: "/",
          },
          {
            label: "Numbers",
            icon: "pi pi-dollar",
            routerLink: "numbers",
          },
          {
            label: "Not Commons",
            icon: "pi pi-globe",
            routerLink: "not-commons",
          },
        ],
      },
      {
        label: "Custom Pipes",
        icon: "pi pi-cog",
        routerLink: "sort",
      },
    ];
  }
}
