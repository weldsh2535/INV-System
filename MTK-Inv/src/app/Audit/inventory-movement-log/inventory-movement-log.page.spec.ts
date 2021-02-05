import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryMovementLogPage } from './inventory-movement-log.page';

describe('InventoryMovementLogPage', () => {
  let component: InventoryMovementLogPage;
  let fixture: ComponentFixture<InventoryMovementLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMovementLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryMovementLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
