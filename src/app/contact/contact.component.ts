import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: [ '#ffffff', '#ffffff' ]
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
