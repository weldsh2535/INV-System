import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryAgingPage } from './inventory-aging.page';

describe('InventoryAgingPage', () => {
  let component: InventoryAgingPage;
  let fixture: ComponentFixture<InventoryAgingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAgingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryAgingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
