'use client'

import { 
  X, 
  ChefHat, 
  Apple, 
  CheckCircle, 
  Heart, 
  Star,
  Timer,
  Utensils,
  Award,
  Info
} from 'lucide-react'
import { Recipe } from '../types/recipe'

interface RecipeModalProps {
  recipe: Recipe | null
  isOpen: boolean
  onClose: () => void
}

export default function RecipeModal({ recipe, isOpen, onClose }: RecipeModalProps) {
  if (!isOpen || !recipe) return null

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }

  const difficultyNames = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return <CheckCircle className="w-4 h-4" />
      case 'medium': return <Award className="w-4 h-4" />
      case 'hard': return <Star className="w-4 h-4" />
      default: return <Info className="w-4 h-4" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              {recipe.difficulty && (
                <span className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 ${difficultyColors[recipe.difficulty]}`}>
                  {getDifficultyIcon(recipe.difficulty)}
                  {difficultyNames[recipe.difficulty]}
                </span>
              )}
              {recipe.cookingTime && (
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex items-center gap-1">
                  <Timer className="w-4 h-4" />
                  {recipe.cookingTime}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Apple className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-800">食材准备</h3>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 border border-gray-100">
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">制作步骤</h3>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
              </div>
            </div>

            {recipe.nutrition && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-800">营养价值</h3>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                  <p className="text-green-700">{recipe.nutrition}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <X className="w-4 h-4" />
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 