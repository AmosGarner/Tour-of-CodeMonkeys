import { Component, OnInit, Input } from "@angular/core";
import { Monkey } from '../models/monkey';

@Component({
  selector: "app-monkey-detail",
  templateUrl: "./monkey-detail.component.html",
  styleUrls: ["./monkey-detail.component.css"]
})

export class MonkeyDetailComponent implements OnInit {
  @Input() monkey: Monkey;
  constructor() {}
  ngOnInit() {}
}
