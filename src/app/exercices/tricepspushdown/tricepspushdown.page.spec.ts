import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TricepspushdownPage } from './tricepspushdown.page';

describe('TricepspushdownPage', () => {
  let component: TricepspushdownPage;
  let fixture: ComponentFixture<TricepspushdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepspushdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TricepspushdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
