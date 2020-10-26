import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Dev {
  id: number,
  name: string,
  skills: string,
  set1: number,
  set2: number,
  set3: number,
  set4: number,
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  exercices = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'exercices.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('./../../assets/data.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadExercices();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getDevs(): Observable<Dev[]> {
    return this.exercices.asObservable();
  }
 
  loadExercices() {
    return this.database.executeSql('SELECT * FROM exercices', []).then(data => {
      let exercices: Dev[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
 
          exercices.push({ 
            id: data.rows.item(i).id,
            name: data.rows.item(i).name, 
            set1: data.rows.item(i).set1,
            set2: data.rows.item(i).set2,
            set3: data.rows.item(i).set3,
            set4: data.rows.item(i).set4,
            skills: data.rows.item(i).skills 
           });
        }
      }
      this.exercices.next(exercices);
    });
  }
 
  addExercice(name,set1,set2,set3,set4, skills) {
    let data = [name,set1,set2,set3,set4, skills];
    return this.database.executeSql('INSERT INTO exercices (name, set1, set2, set3, set4, skills) VALUES (?, ?, ?, ?, ?, ?)', data).then(data => {
      this.loadExercices();
    });
  }
 
  getExercice(id): Promise<Dev> {
    return this.database.executeSql('SELECT * FROM exercices WHERE id = ?', [id]).then(data => {

      return {
        id: data.rows.item(0).id,
        name: data.rows.item(0).name,
        set1: data.rows.item(0).set1,
        set2: data.rows.item(0).set2,
        set3: data.rows.item(0).set3,
        set4: data.rows.item(0).set4,
        skills: data.rows.item(0).skills, 
      }
    });
  }
 
  deleteExercice(id) {
    return this.database.executeSql('DELETE FROM exercices WHERE id = ?', [id]).then(_ => {
      this.loadExercices();
    });
  }
 
  updateExercice(dev: Dev) {
    let data = [dev.name,dev.set1,dev.set2,dev.set3,dev.set4, dev.skills];
    return this.database.executeSql(`UPDATE exercices SET name = ?, set1 = ?, set2 = ?, set3 = ?, set4 = ?, skills = ?, WHERE id = ${dev.id}`, data).then(data => {
      this.loadExercices();
    })
  }
}
