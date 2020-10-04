import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedTheme: string;
  themeCurrent: string;

  defaultTheme() {
    this.themeCurrent = localStorage.getItem('theme');
    if (this.themeCurrent == null) {
      localStorage.setItem('theme', 'indigo-pink');
      this.selectedTheme = 'indigo-pink';
    } else {
      this.selectedTheme = localStorage.getItem('theme');
    }
  }

  gettheme(data: string) {
    localStorage.setItem('theme', data);
    console.log(localStorage.getItem('theme'));
    this.selectedTheme = data;
  }

  ngOnInit() {
    this.defaultTheme();
  }
}
