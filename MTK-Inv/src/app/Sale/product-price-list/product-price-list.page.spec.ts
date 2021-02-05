import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductPriceListPage } from './product-price-list.page';

describe('ProductPriceListPage', () => {
  let component: ProductPriceListPage;
  let fixture: ComponentFixture<ProductPriceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPriceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
