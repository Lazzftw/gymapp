import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  day1() {
    this.router.navigate(['day1']);
  }
  day2() {
    this.router.navigate(['developers']);
  }
  day3() {
    this.router.navigate(['day3']);
  }

}
