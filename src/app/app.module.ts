import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
 /* BrowserAnimationsModule cannot be found */
/* import { BrowserAnimationsModule} from '@angular/platform-browser-animations'; */

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { DefaultCompComponent } from './default-comp/default-comp.component';
import { PeopleComponent } from './people/people.component';
import { CompBobComponent } from './comp-bob/comp-bob.component';
import { CompJoeComponent } from './comp-joe/comp-joe.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DefaultCompComponent,
    PeopleComponent,
    CompBobComponent,
    CompJoeComponent,
    PersonEditorComponent,
    PersonDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
