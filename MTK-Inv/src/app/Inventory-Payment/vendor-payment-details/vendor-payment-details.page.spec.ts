import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorPaymentDetailsPage } from './vendor-payment-details.page';

describe('VendorPaymentDetailsPage', () => {
  let component: VendorPaymentDetailsPage;
  let fixture: ComponentFixture<VendorPaymentDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPaymentDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorPaymentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
