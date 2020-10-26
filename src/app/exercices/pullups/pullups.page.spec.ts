import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PullupsPage } from './pullups.page';

describe('PullupsPage', () => {
  let component: PullupsPage;
  let fixture: ComponentFixture<PullupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PullupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
