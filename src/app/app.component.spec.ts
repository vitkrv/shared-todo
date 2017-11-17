import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {AngularFireAuth} from 'angularfire2/auth';

const AngularFireAuthMocks = {
  auth: {
    signInAnonymously: jasmine.createSpy('signInAnonymously')
  }
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: AngularFireAuth,
          useValue: AngularFireAuthMocks
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(function () {
    AngularFireAuthMocks.auth.signInAnonymously.calls.reset();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should sign in as anonymous', () => {
    expect(AngularFireAuthMocks.auth.signInAnonymously).toHaveBeenCalledTimes(1);
  });

  it(`should have as title 'Shared Todo'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Shared Todo');
  }));

  it('should render title in a navbar h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Shared Todo');
  }));
});
