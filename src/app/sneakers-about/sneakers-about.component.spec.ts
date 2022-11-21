import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersAboutComponent } from './sneakers-about.component';

describe('SneakersAboutComponent', () => {
  let component: SneakersAboutComponent;
  let fixture: ComponentFixture<SneakersAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
