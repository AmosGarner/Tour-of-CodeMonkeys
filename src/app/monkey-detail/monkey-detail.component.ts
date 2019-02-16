import { Component, OnInit, Input } from "@angular/core";
import { Monkey } from "../models/monkey";
import { ActivatedRoute } from "@angular/router";
import { MonkeyService } from "../services/monkey.service";

@Component({
  selector: "app-monkey-detail",
  templateUrl: "./monkey-detail.component.html",
  styleUrls: ["./monkey-detail.component.css"]
})
export class MonkeyDetailComponent implements OnInit {
  @Input() monkey: Monkey;
  constructor(
    private route: ActivatedRoute,
    private monkeyService: MonkeyService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getMonkey();
  }
  getMonkey() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.monkeyService
      .getMonkey(id)
      .subscribe(monkey => (this.monkey = monkey));
  }
  goBack(): void {
    this.location.back();
  }
}
