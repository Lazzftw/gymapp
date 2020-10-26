import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenchinclinePage } from './benchincline.page';

describe('BenchinclinePage', () => {
  let component: BenchinclinePage;
  let fixture: ComponentFixture<BenchinclinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchinclinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenchinclinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
