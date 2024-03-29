import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalvesPage } from './calves.page';

describe('CalvesPage', () => {
  let component: CalvesPage;
  let fixture: ComponentFixture<CalvesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalvesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalvesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
