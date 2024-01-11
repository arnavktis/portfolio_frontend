import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
}

@Input() scrolled: boolean = false;

scrollToTop(){
  window.scrollTo(0,0);
  console.log("hello");
}
}