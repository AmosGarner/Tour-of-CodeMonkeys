import { InMemoryDbService } from "angular-in-memory-web-api";
import { Monkey } from "../models/monkey";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const monkeys = [
      { id: 1, name: "Amos" },
      { id: 2, name: "David" },
      { id: 3, name: "Henry" },
      { id: 4, name: "Ryan" },
      { id: 5, name: "Adam" },
      { id: 6, name: "Paul" }
    ];
    return { monkeys };
  }

  genId(monkeys: Monkey[]): number {
    return monkeys.length > 0
      ? Math.max(...monkeys.map(monkey => monkey.id)) + 1
      : 1;
  }
}
