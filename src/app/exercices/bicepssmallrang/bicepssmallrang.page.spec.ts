import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BicepssmallrangPage } from './bicepssmallrang.page';

describe('BicepssmallrangPage', () => {
  let component: BicepssmallrangPage;
  let fixture: ComponentFixture<BicepssmallrangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepssmallrangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BicepssmallrangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
