import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isSidebarOpen = false;
  mainMargin = '0';
  sidebarWidth = '0';
  constructor(){}

  ngOnInit(): void {
}
@Input() scrolled: boolean = false;
scrollToTop(){
  window.scrollTo(0,0);
}
isHeaderVisible = false;
toggleHeader() {
  this.isHeaderVisible = !this.isHeaderVisible;
}
toHome(){
  document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
}
toAbout(){
  document.getElementById("about-section")?.scrollIntoView({behavior:"smooth"});
}
toSkills(){
  document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
}

toCertificate(){
  document.getElementById("certificate")?.scrollIntoView({behavior:"smooth"});
}

toContacts(){
  document.getElementById("contacts")?.scrollIntoView({behavior:"smooth"});
}

}