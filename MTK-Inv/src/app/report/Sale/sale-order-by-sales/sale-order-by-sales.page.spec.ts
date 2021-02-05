import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleOrderBySalesPage } from './sale-order-by-sales.page';

describe('SaleOrderBySalesPage', () => {
  let component: SaleOrderBySalesPage;
  let fixture: ComponentFixture<SaleOrderBySalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrderBySalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleOrderBySalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
