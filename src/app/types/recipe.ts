export interface Recipe {
  id: string
  name: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  ingredients: string[]
  instructions: string
  nutrition?: string
  cookingTime?: string
  difficulty?: 'easy' | 'medium' | 'hard'
} 