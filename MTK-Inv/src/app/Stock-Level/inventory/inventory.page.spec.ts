import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryPage } from './inventory.page';

describe('InventoryPage', () => {
  let component: InventoryPage;
  let fixture: ComponentFixture<InventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
