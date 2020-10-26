import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShouldersbarliftPage } from './shouldersbarlift.page';

describe('ShouldersbarliftPage', () => {
  let component: ShouldersbarliftPage;
  let fixture: ComponentFixture<ShouldersbarliftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldersbarliftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShouldersbarliftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
