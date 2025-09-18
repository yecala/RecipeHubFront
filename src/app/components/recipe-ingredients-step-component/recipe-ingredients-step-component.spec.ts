import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsStepComponent } from './recipe-ingredients-step-component';

describe('RecipeIngredientsStepComponent', () => {
  let component: RecipeIngredientsStepComponent;
  let fixture: ComponentFixture<RecipeIngredientsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeIngredientsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeIngredientsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
