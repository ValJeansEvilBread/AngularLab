import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  constructor() { }

  name = new FormControl('');

  ngOnInit(): void {
  }

}
