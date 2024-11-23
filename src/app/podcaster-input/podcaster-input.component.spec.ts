import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcasterInputComponent } from './podcaster-input.component';

describe('PodcasterInputComponent', () => {
  let component: PodcasterInputComponent;
  let fixture: ComponentFixture<PodcasterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcasterInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcasterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
