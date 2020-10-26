import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TricepsbarPage } from './tricepsbar.page';

describe('TricepsbarPage', () => {
  let component: TricepsbarPage;
  let fixture: ComponentFixture<TricepsbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepsbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TricepsbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
