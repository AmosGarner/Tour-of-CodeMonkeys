import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Monkey } from "../models/monkey";
import { MessageService } from "./message.service";

@Injectable({ providedIn: "root" })
export class MonkeyService {
  private monkeysURL = "api/monkeys";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getMonkeys(): Observable<Monkey[]> {
    return this.http.get<Monkey[]>(this.monkeysURL).pipe(
      tap(_ => this.log("fetched code monkeys")),
      catchError(this.handleError("getMonkeys", []))
    );
  }

  getMonkey(id: number): Observable<Monkey> {
    const url = `${this.monkeysURL}/${id}`;
    return this.http.get<Monkey>(url).pipe(
      tap(_ => this.log(`fetched code monkey: ${id}`)),
      catchError(this.handleError<Monkey>(`getMonkey id=${id}`))
    );
  }

  updateMonkey(monkey: Monkey): Observable<Monkey> {
    return this.http.put(this.monkeysURL, monkey, this.httpOptions).pipe(
      tap(_ => this.log(`updated codemonkey id: ${monkey.id}`)),
      catchError(this.handleError<any>("updateMonkey"))
    );
  }

  addMonkey(monkey: Monkey): Observable<Monkey> {
    return this.http
      .post<Monkey>(this.monkeysURL, monkey, this.httpOptions)
      .pipe(
        tap((newMonkey: Monkey) =>
          this.log(`added codemonkey w/id: ${newMonkey.id} `)
        ),
        catchError(this.handleError<Monkey>("addMonkey"))
      );
  }

  deleteMonkey(monkey: Monkey | number): Observable<Monkey> {
    const id = typeof monkey === 'number' ? monkey : monkey.id;
    const url = `${this.monkeysURL}/${id}`;

    return this.http.delete<Monkey>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted monkey id: ${id}`)),
      catchError(this.handleError<Monkey>('deleteMonkey'))
    );
  }

  searchMonkeys(term: string): Observable<Monkey[]> {
    if (!term.trim()) return of([]);
    
    return this.http.get<Monkey[]>(`${this.monkeysURL}/?name=${term}`).pipe(
      tap(_ => this.log(`found code monkeys matching "${term}"`)),
      catchError(this.handleError<Monkey[]>('searchMonkeys', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`MonkeyService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
