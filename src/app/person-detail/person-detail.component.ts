import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person }         from '../person';
import { PersonServiceService }  from '../person-service.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;

  constructor(
  	private route: ActivatedRoute,
  	private personServiceService: PersonServiceService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.personServiceService.getPerson(parseInt(id))
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.personServiceService.updatePerson(this.person)
      .subscribe(() => this.goBack());
  }


}
