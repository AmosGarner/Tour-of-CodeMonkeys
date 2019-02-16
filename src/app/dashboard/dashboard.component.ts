import { Component, OnInit } from "@angular/core";
import { Monkey } from "../models/monkey";
import { MonkeyService } from "../services/monkey.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  monkeys: Monkey[] = [];

  constructor(private monkeyService: MonkeyService) {}

  ngOnInit() {
    this.getMonkeys();
  }

  getMonkeys(): void {
    this.monkeyService
      .getMonkeys()
      .subscribe(monkeys => (this.monkeys = monkeys.slice(1, 5)));
  }
}
