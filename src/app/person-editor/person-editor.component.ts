import { Component, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


import { Person }         from '../person';
import { PersonServiceService }  from '../person-service.service';


@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent {

  profileForm =  this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  updatePerson() {
    this.profileForm.patchValue({
      name: '',
    })
  };

  onSubmit() {
    console.warn(this.profileForm.value);
  }




}
