import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrapezPage } from './trapez.page';

describe('TrapezPage', () => {
  let component: TrapezPage;
  let fixture: ComponentFixture<TrapezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrapezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
