import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginUserPage } from './login-user.page';

describe('LoginUserPage', () => {
  let component: LoginUserPage;
  let fixture: ComponentFixture<LoginUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
