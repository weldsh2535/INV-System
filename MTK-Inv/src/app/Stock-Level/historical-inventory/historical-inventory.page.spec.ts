import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoricalInventoryPage } from './historical-inventory.page';

describe('HistoricalInventoryPage', () => {
  let component: HistoricalInventoryPage;
  let fixture: ComponentFixture<HistoricalInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricalInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
