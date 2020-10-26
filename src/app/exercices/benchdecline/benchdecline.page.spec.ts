import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenchdeclinePage } from './benchdecline.page';

describe('BenchdeclinePage', () => {
  let component: BenchdeclinePage;
  let fixture: ComponentFixture<BenchdeclinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchdeclinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenchdeclinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
