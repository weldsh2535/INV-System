import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersViewPage } from './orders-view.page';

describe('OrdersViewPage', () => {
  let component: OrdersViewPage;
  let fixture: ComponentFixture<OrdersViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
