import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
