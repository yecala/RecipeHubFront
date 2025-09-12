import { Ingredient } from "./ingredient";

export interface RecipeIngredient {
  id: number;
  recipeId: number;
  ingredientId: number;
  quantity: string;
  ingredient?: Ingredient; // opcional si el backend devuelve join con el ingrediente
}
