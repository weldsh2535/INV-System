import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockTransferPage } from './stock-transfer.page';

describe('StockTransferPage', () => {
  let component: StockTransferPage;
  let fixture: ComponentFixture<StockTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
