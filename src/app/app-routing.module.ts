import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { EducationComponent } from './pages/education/education.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkexpComponent } from './pages/workexp/workexp.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'education', component: EducationComponent},
  { path: 'workexp', component: WorkexpComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contactme', component: ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
