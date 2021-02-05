import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationsPage } from './operations.page';

describe('OperationsPage', () => {
  let component: OperationsPage;
  let fixture: ComponentFixture<OperationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
