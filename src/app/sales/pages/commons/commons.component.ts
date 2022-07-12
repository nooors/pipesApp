import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-commons",
  templateUrl: "./commons.component.html",
  styles: [],
})
export class CommonsComponent implements OnInit {
  dateVar: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
