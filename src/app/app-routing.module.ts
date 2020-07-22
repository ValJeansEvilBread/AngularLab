import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultCompComponent } from './default-comp/default-comp.component';
import { PeopleComponent} from './people/people.component';
import { CompBobComponent} from './comp-bob/comp-bob.component';
import { CompJoeComponent} from './comp-joe/comp-joe.component';
import { PersonDetailComponent} from './person-detail/person-detail.component';
import { PersonEditorComponent} from './person-editor/person-editor.component';


const routes: Routes = [
	{ path: '', redirectTo: '/default-comp', pathMatch: 'full' },
	{ path: "default-comp", component: DefaultCompComponent},
	{ path: "people", component: PeopleComponent},
	{ path: "comp-bob", component: CompBobComponent},
	{ path: "comp-joe", component: CompJoeComponent},
	{ path: 'detail/:id', component: PersonDetailComponent },
	{ path: 'editor/:id', component: PersonEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
