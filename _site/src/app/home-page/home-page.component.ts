import { Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    const options = {
      strings: ['Frontend Developer.', 'Backend Developer.', 'Machine Learning Enthusiast.'],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true
  };
  const typed = new Typed('.typed-element', options);
  }
}
