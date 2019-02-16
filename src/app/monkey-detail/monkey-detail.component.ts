import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Monkey } from '../models/monkey';
import { MonkeyService } from '../services/monkey.service';

@Component({
  selector: 'app-monkey-detail',
  templateUrl: './monkey-detail.component.html',
  styleUrls: [ './monkey-detail.component.css' ]
})
export class MonkeyDetailComponent implements OnInit {
  monkey: Monkey;

  constructor(
    private route: ActivatedRoute,
    private monkeyService: MonkeyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMonkey();
  }

  getMonkey(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.monkeyService.getMonkey(id)
      .subscribe(monkey => this.monkey = monkey);
  }

  goBack(): void {
    this.location.back();
  }
}