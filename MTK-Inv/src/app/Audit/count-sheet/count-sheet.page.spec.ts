import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountSheetPage } from './count-sheet.page';

describe('CountSheetPage', () => {
  let component: CountSheetPage;
  let fixture: ComponentFixture<CountSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
