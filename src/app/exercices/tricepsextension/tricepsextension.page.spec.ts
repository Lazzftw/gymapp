import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TricepsextensionPage } from './tricepsextension.page';

describe('TricepsextensionPage', () => {
  let component: TricepsextensionPage;
  let fixture: ComponentFixture<TricepsextensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepsextensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TricepsextensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
