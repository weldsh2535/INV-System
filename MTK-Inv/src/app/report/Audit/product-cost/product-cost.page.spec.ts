import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductCostPage } from './product-cost.page';

describe('ProductCostPage', () => {
  let component: ProductCostPage;
  let fixture: ComponentFixture<ProductCostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
