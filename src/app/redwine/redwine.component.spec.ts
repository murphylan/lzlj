import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwineComponent } from './redwine.component';

describe('RedwineComponent', () => {
  let component: RedwineComponent;
  let fixture: ComponentFixture<RedwineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedwineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedwineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
