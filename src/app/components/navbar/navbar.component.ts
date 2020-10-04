import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  selectedTheme: string = 'indigo-pink';
  isClicked = false;
  @Output() public selTheme = new EventEmitter();

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }

  onItemClick(event, item: string) {
    this.selTheme.emit(item);
  }
  constructor() {}

  ngOnInit(): void {}
}
