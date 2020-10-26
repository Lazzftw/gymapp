import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeatedliftPage } from './seatedlift.page';

describe('SeatedliftPage', () => {
  let component: SeatedliftPage;
  let fixture: ComponentFixture<SeatedliftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatedliftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeatedliftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
