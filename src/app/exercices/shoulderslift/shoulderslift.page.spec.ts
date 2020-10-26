import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShouldersliftPage } from './shoulderslift.page';

describe('ShouldersliftPage', () => {
  let component: ShouldersliftPage;
  let fixture: ComponentFixture<ShouldersliftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldersliftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShouldersliftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
