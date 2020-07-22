import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


import { Person }         from '../person';
import { PersonServiceService }  from '../person-service.service';


@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})

export class PersonEditorComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  personForm =  this.builder.group({
    name: ['', Validators.required],
  });

  ngOnInit() { }

  updatePerson() {
    this.personForm.patchValue({
      name: '',
    })
  };

  onSubmit() { 
  	console.log(this.personForm.controls["name"].value);
  }




}
