import { Component, OnInit, Input } from "@angular/core";
import { CodeMonkey } from "../models/codemonkey";

@Component({
  selector: "app-monkey-detail",
  templateUrl: "./monkey-detail.component.html",
  styleUrls: ["./monkey-detail.component.css"]
})

export class MonkeyDetailComponent implements OnInit {
  @Input() monkey: CodeMonkey;
  constructor() {}
  ngOnInit() {}
}
