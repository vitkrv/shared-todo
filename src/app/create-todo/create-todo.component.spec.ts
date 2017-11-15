import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';

import {CreateTodoComponent} from './create-todo.component';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

  const AngularFireAuthMocks = {
    auth: {
      signInAnonymously: jasmine.createSpy('signInAnonymously')
    }
  };

  const AngularFireDatabaseMocks = {
    app: {
      database: () => {
        return {ref: jasmine.createSpy('ref')};
      }
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodoComponent],
      providers: [
        {
          provide: AngularFireAuth,
          useValue: AngularFireAuthMocks
        },
        {
          provide: AngularFireDatabase,
          useValue: AngularFireDatabaseMocks
        },
        {
          provide: Router,
          useValue: mockRouter
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(function () {
    AngularFireAuthMocks.auth.signInAnonymously.calls.reset();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should sign in as anonymous', () => {
    expect(AngularFireAuthMocks.auth.signInAnonymously).toHaveBeenCalledTimes(1);
  });
});
