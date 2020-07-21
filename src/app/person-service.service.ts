import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonServiceService {

  private peopleUrl = 'api/people';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
  	private http: HttpClient) { }


  async delay(ms: number) {
 	await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  /** GET people from the server */
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl)
      .pipe(
        catchError(this.handleError<Person[]>('getPeople', []))
      );
  }


    /** GET person by id. Return `undefined` when id not found */
  getPersonNo404<Data>(id: number): Observable<Person> {
  	this.delay(4000);
    const url = `${this.peopleUrl}/?id=${id}`;
    return this.http.get<Person[]>(url)
      .pipe(
        map(people => people[0]), // returns a {0|1} element array
        tap(p => {
          const outcome = p ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getPerson(id: number): Observable<Person> {
  	this.delay(4000);
    const url = `${this.peopleUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
    );
  }


  /* GET people whose name contains search term */
  searchPeople(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty person array.
      return of([]);
    }
    return this.http.get<Person[]>(`${this.peopleUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Person[]>('searchPeople', []))
    );
  }


   /** POST: add a new person to the server */
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person, this.httpOptions).pipe();
  }

  /** PUT: update person on the server */
  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.peopleUrl, person, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatePerson'))
    );
  }


   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}
