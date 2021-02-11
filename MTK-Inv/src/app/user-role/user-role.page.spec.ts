import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRolePage } from './user-role.page';

describe('UserRolePage', () => {
  let component: UserRolePage;
  let fixture: ComponentFixture<UserRolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
