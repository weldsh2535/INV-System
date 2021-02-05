import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesOrderProfitPage } from './sales-order-profit.page';

describe('SalesOrderProfitPage', () => {
  let component: SalesOrderProfitPage;
  let fixture: ComponentFixture<SalesOrderProfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderProfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesOrderProfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
