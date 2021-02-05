import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchasingTaxPage } from './purchasing-tax.page';

describe('PurchasingTaxPage', () => {
  let component: PurchasingTaxPage;
  let fixture: ComponentFixture<PurchasingTaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingTaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingTaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
