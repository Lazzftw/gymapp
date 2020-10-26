import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlternativcurlPage } from './alternativcurl.page';

describe('AlternativcurlPage', () => {
  let component: AlternativcurlPage;
  let fixture: ComponentFixture<AlternativcurlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativcurlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlternativcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
