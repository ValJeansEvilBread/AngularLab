import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[];

  constructor(private personServiceService: PersonServiceService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.personServiceService.getPeople()
    .subscribe(people => this.people = people);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personServiceService.addPerson({ name } as Person)
      .subscribe(person => {
        this.people.push(person);
      });
  }

}