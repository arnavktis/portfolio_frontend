import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contacts', component: ContactsComponent}
  ]),
  RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
