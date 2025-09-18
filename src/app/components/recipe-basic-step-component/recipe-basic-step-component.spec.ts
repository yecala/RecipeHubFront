import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBasicStepComponent } from './recipe-basic-step-component';

describe('RecipeBasicStepComponent', () => {
  let component: RecipeBasicStepComponent;
  let fixture: ComponentFixture<RecipeBasicStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeBasicStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeBasicStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
