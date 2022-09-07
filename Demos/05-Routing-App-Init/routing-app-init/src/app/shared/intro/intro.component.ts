import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() img: string;
  @Input() isAuthenticated: boolean;

  constructor() {}
}