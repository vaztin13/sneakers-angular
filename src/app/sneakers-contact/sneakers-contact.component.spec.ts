import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersContactComponent } from './sneakers-contact.component';

describe('SneakersContactComponent', () => {
  let component: SneakersContactComponent;
  let fixture: ComponentFixture<SneakersContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
