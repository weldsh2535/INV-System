import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleOrderProfitPage } from './sale-order-profit.page';

describe('SaleOrderProfitPage', () => {
  let component: SaleOrderProfitPage;
  let fixture: ComponentFixture<SaleOrderProfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrderProfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleOrderProfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
