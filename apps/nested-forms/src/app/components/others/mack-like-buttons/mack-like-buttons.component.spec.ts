import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MackLikeButtonsComponent } from './mack-like-buttons.component';

describe('MackLikeButtonsComponent', () => {
  let component: MackLikeButtonsComponent;
  let fixture: ComponentFixture<MackLikeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MackLikeButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MackLikeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
