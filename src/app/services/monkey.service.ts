import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";
import { MONKEYS } from "../data/mock-monkeys";
import { Monkey } from "../models/monkey";

@Injectable({
  providedIn: "root"
})
export class MonkeyService {
  constructor(private messageService: MessageService) {}
  getMonkey(id: number): Observable<Monkey> {
    this.messageService.add(`MonkeyService: fetched code monkey id=${id}`);
    return of(MONKEYS.find(monkey => monkey.id === id));
  }
  getMonkeys(): Observable<Monkey[]> {
    this.messageService.add("MonkeyService: fetched code monkeys");
    return of(MONKEYS);
  }
}
