import { DatabaseService, Dev } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
})
export class DevelopersPage implements OnInit {
 
  exercices: Dev[] = [];
  developer: Dev = null;
 
 
  exercice : {};
 
  selectedView = 'devs';
 
  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getExercice(2).then(devs => {
          this.exercice = devs;
        })
      }
    });
  }
 
  addExercices() {

    this.db.addExercice(this.exercice['name'],this.exercice['set1'],this.exercice['set2'],this.exercice['set3'],this.exercice['set4'], this.exercice['skills'])
    .then(_ => {
      this.exercice = {};
    });
  }
  updateDeveloper() {
    
 
    this.db.updateExercice(this.developer).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Developer updated',
        duration: 3000
      });
      toast.present();
    });
  }
 
}