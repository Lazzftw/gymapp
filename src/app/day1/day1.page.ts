import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html',
  styleUrls: ['./day1.page.scss'],
})
export class Day1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  bench() {
    this.router.navigate(['bench']);
  }
}
