import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BacklowrowPage } from './backlowrow.page';

describe('BacklowrowPage', () => {
  let component: BacklowrowPage;
  let fixture: ComponentFixture<BacklowrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklowrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BacklowrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
