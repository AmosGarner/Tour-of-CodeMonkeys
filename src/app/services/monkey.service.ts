import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";
import { MONKEYS } from "../data/mock-monkeys";
import { Monkey } from '../models/monkey';

@Injectable({
  providedIn: "root"
})
export class MonkeyService {
  constructor(private messageService: MessageService) {}
  getMonkeys(): Observable<Monkey[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(MONKEYS);
  }
}
