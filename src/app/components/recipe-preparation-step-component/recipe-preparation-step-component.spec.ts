import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePreparationStepComponent } from './recipe-preparation-step-component';

describe('RecipePreparationStepComponent', () => {
  let component: RecipePreparationStepComponent;
  let fixture: ComponentFixture<RecipePreparationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePreparationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePreparationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
