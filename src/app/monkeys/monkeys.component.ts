import { Component, OnInit } from "@angular/core";
import { Monkey } from "../models/monkey";
import { MonkeyService } from "../services/monkey.service";

@Component({
  selector: "app-monkeys",
  templateUrl: "./monkeys.component.html",
  styleUrls: ["./monkeys.component.css"]
})
export class MonkeysComponent implements OnInit {
  monkeys: Monkey[];

  constructor(private monkeyService: MonkeyService) {}

  ngOnInit() {
    this.getMonkeys();
  }

  getMonkeys(): void {
    this.monkeyService
      .getMonkeys()
      .subscribe(monkeys => (this.monkeys = monkeys));
  }
}
