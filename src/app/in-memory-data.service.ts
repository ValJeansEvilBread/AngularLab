import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
	    const people = [
	      { id: 1111, name: 'Robin Banks' },
	      { id: 1112, name: 'Sasha Paine' },
	    ];
	    return {people};
  	}

  genId(people: Person[]): number {
    return people.length > 0 ? Math.max(...people.map(person => person.id)) + 1 : 1111;
  }
}
