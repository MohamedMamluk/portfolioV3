import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWrapperComponent } from './contact-wrapper.component';

describe('ContactWrapperComponent', () => {
  let component: ContactWrapperComponent;
  let fixture: ComponentFixture<ContactWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
