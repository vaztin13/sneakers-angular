import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersHomeComponent } from './sneakers-home.component';

describe('SneakersHomeComponent', () => {
  let component: SneakersHomeComponent;
  let fixture: ComponentFixture<SneakersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
