import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
