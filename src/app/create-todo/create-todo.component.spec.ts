import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';

import {AngularFireDatabase} from 'angularfire2/database';

import {CreateTodoComponent} from './create-todo.component';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
