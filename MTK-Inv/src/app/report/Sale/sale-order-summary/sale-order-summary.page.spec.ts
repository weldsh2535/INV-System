import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleOrderSummaryPage } from './sale-order-summary.page';

describe('SaleOrderSummaryPage', () => {
  let component: SaleOrderSummaryPage;
  let fixture: ComponentFixture<SaleOrderSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrderSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleOrderSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
