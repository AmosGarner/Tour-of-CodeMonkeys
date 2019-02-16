import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CodemonkeysComponent } from "./codemonkeys.component";

describe("CodemonkeysComponent", () => {
  let component: CodemonkeysComponent;
  let fixture: ComponentFixture<CodemonkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodemonkeysComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemonkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
