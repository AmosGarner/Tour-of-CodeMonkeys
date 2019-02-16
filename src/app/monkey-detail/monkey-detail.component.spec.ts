import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyDetailComponent } from './monkey-detail.component';

describe('MonkeyDetailComponent', () => {
  let component: MonkeyDetailComponent;
  let fixture: ComponentFixture<MonkeyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
