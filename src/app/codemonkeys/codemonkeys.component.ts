import { Component, OnInit } from "@angular/core";
import { CodeMonkey } from "../models/codemonkey";

@Component({
  selector: "app-codemonkeys",
  templateUrl: "./codemonkeys.component.html",
  styleUrls: ["./codemonkeys.component.css"]
})
export class CodemonkeysComponent implements OnInit {
  codeMonkey: CodeMonkey = {
    id: 1,
    name: "Amos"
  };

  constructor() {}
  ngOnInit() {}
}
