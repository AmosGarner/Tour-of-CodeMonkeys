import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Monkey } from '../models/monkey';
import { MonkeyService } from '../services/monkey.service';


@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit {
  monkeys$: Observable<Monkey[]>;
  private searchTerms = new Subject<string>();

  constructor(private monkeyService: MonkeyService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.monkeys$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.monkeyService.searchMonkeys(term))
    );
  }
}
