import { Component, Input, OnInit } from '@angular/core';

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


}