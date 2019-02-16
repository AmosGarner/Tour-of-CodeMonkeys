import { Component, OnInit } from "@angular/core";
import { CodeMonkey } from "../models/codemonkey";
import { MONKEYS } from "../data/mock-monkeys";

@Component({
  selector: "app-codemonkeys",
  templateUrl: "./codemonkeys.component.html",
  styleUrls: ["./codemonkeys.component.css"]
})
export class CodemonkeysComponent implements OnInit {
  monkeys = MONKEYS;
  selectedMonkey: CodeMonkey;
  onSelect(monkey: CodeMonkey): void {
    this.selectedMonkey = monkey;
  }

  constructor() {}
  ngOnInit() {}
}
