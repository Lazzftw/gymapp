import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeadliftPage } from './deadlift.page';

describe('DeadliftPage', () => {
  let component: DeadliftPage;
  let fixture: ComponentFixture<DeadliftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadliftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeadliftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
