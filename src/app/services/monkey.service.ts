import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Monkey } from "../models/monkey";
import { MONKEYS } from "../data/mock-monkeys";
import { MessageService } from "./message.service";

@Injectable({ providedIn: "root" })
export class MonkeyService {
  constructor(private messageService: MessageService) {}

  getMonkeys(): Observable<Monkey[]> {
    this.messageService.add("MonkeyService: fetch all code monkeys");
    return of(MONKEYS);
  }

  getMonkey(id: number): Observable<Monkey> {
    this.messageService.add(`MonkeyService: fetch code monkey id: ${id}`);
    return of(MONKEYS.find(monkey => monkey.id === id));
  }
}
