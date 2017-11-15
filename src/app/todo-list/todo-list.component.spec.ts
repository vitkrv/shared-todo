import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';

import {TodoListComponent} from './todo-list.component';
import {FormsModule} from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const AngularFireAuthMocks = {
    auth: {
      signInAnonymously: jasmine.createSpy('signInAnonymously')
    }
  };

  const AngularFireDatabaseMocks = {
    database: {
      ref: jasmine.createSpy('ref')
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockActivatedRouter = {
    params: {
      subscribe: jasmine.createSpy('subscribe')
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule],
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
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRouter
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
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
