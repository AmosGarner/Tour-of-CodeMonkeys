import { Component, OnInit } from "@angular/core";
import { Monkey } from "../models/monkey";
import { MessageService } from "../services/message.service";
import { MonkeyService } from "../services/monkey.service";

@Component({
  selector: "app-monkeys",
  templateUrl: "./monkeys.component.html",
  styleUrls: ["./monkeys.component.css"]
})
export class MonkeysComponent implements OnInit {
  selectedMonkey: Monkey;
  monkeys: Monkey[];

  constructor(
    private monkeyService: MonkeyService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getMonkeys();
  }
  onSelect(monkey: Monkey): void {
    this.selectedMonkey = monkey;
  }
  getMonkeys(): void {
    this.messageService.add('HeroService: fetched heroes');
    this.monkeyService
      .getMonkeys()
      .subscribe(monkeys => (this.monkeys = monkeys));
  }
}
