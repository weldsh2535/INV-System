import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxesPage } from './taxes.page';

describe('TaxesPage', () => {
  let component: TaxesPage;
  let fixture: ComponentFixture<TaxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
