import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatpulldownPage } from './latpulldown.page';

describe('LatpulldownPage', () => {
  let component: LatpulldownPage;
  let fixture: ComponentFixture<LatpulldownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatpulldownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatpulldownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
