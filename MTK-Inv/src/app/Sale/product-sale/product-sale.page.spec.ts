import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSalePage } from './product-sale.page';

describe('ProductSalePage', () => {
  let component: ProductSalePage;
  let fixture: ComponentFixture<ProductSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
