import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerPaymentsPage } from './customer-payments.page';

describe('CustomerPaymentsPage', () => {
  let component: CustomerPaymentsPage;
  let fixture: ComponentFixture<CustomerPaymentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
