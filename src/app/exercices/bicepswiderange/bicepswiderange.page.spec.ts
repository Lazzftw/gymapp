import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BicepswiderangePage } from './bicepswiderange.page';

describe('BicepswiderangePage', () => {
  let component: BicepswiderangePage;
  let fixture: ComponentFixture<BicepswiderangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepswiderangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BicepswiderangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
