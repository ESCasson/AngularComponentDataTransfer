import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleColourChildComponent } from './toggle-colour-child.component';

describe('ToggleColourChildComponent', () => {
  let component: ToggleColourChildComponent;
  let fixture: ComponentFixture<ToggleColourChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleColourChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleColourChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
