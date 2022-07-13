import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { interval } from "rxjs";

@Component({
  selector: "app-not-commons",
  templateUrl: "./not-commons.component.html",
  styles: [],
})
export class NotCommonsComponent {
  // i18nSelect
  name: string = "Fernando";
  gender: string = "male";
  invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  };

  // i18nPlural
  customers: string[] = ["Maria", "Pedro", "Hernando", "Eduardo", "Fernando"];
  customersMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos 2 clientes esperando.",
    other: "tenemos # clientes esperando.",
  };

  constructor(private primeNgConfig: PrimeNGConfig) {
    this.primeNgConfig.ripple = true;
  }

  changeCustomer() {
    this.name = "Melissa";
    this.gender = "female";
  }

  deleteCustomer() {
    this.customers.pop();
  }

  // KeyValue Pipe
  persona = {
    name: "Fernando",
    age: 35,
    address: "Ottawa, Canadá",
  };

  // JsonPipe
  heroes = [
    {
      name: "Superman",
      flies: true,
    },
    {
      name: "Robin",
      flies: false,
    },
    {
      name: "Aquaman",
      flies: false,
    },
  ];

  // Async Pipe
  myObservable = interval(2000); // 0,1,2,3,4,5,6,

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Have promise data");
    }, 3500);
  });
}
