import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleTaxesPage } from './sale-taxes.page';

describe('SaleTaxesPage', () => {
  let component: SaleTaxesPage;
  let fixture: ComponentFixture<SaleTaxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleTaxesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleTaxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
