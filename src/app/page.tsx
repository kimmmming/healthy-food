'use client'

import { useState } from 'react'
import { 
  Utensils, 
  Coffee, 
  Sun, 
  Moon, 
  Shuffle, 
  Eye, 
  RotateCcw, 
  Sparkles,
  Clock,
  ChefHat,
  Heart,
  Star,
  Zap,
  Apple
} from 'lucide-react'
import { recipes } from './data/recipes'
import { Recipe } from './types/recipe'
import RecipeModal from './components/RecipeModal'
import NutritionSummary from './components/NutritionSummary'
import ShoppingList from './components/ShoppingList'

export default function Home() {
  const [selectedRecipes, setSelectedRecipes] = useState<{
    breakfast: Recipe | null
    lunch: Recipe | null
    dinner: Recipe | null
  }>({
    breakfast: null,
    lunch: null,
    dinner: null
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [modalRecipe, setModalRecipe] = useState<Recipe | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getRandomRecipe = (mealType: 'breakfast' | 'lunch' | 'dinner'): Recipe => {
    const mealRecipes = recipes.filter(recipe => recipe.mealType === mealType)
    return mealRecipes[Math.floor(Math.random() * mealRecipes.length)]
  }

  const generateRandomMeals = async () => {
    setIsGenerating(true)
    
    // 添加一些动画效果
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setSelectedRecipes({
      breakfast: getRandomRecipe('breakfast'),
      lunch: getRandomRecipe('lunch'),
      dinner: getRandomRecipe('dinner')
    })
    
    setIsGenerating(false)
  }

  const generateSingleMeal = (mealType: 'breakfast' | 'lunch' | 'dinner') => {
    setSelectedRecipes(prev => ({
      ...prev,
      [mealType]: getRandomRecipe(mealType)
    }))
  }

  const openModal = (recipe: Recipe) => {
    setModalRecipe(recipe)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalRecipe(null)
    setIsModalOpen(false)
  }

  const getMealIcon = (mealType: 'breakfast' | 'lunch' | 'dinner') => {
    switch(mealType) {
      case 'breakfast': return <Coffee className="w-6 h-6 text-amber-500" />
      case 'lunch': return <Sun className="w-6 h-6 text-yellow-500" />
      case 'dinner': return <Moon className="w-6 h-6 text-indigo-500" />
    }
  }

  const MealCard = ({ recipe, mealType, onRegenerate }: { 
    recipe: Recipe | null, 
    mealType: 'breakfast' | 'lunch' | 'dinner',
    onRegenerate: () => void 
  }) => {
    const mealNames = {
      breakfast: '早餐',
      lunch: '午餐', 
      dinner: '晚餐'
    }

    if (!recipe) {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            {getMealIcon(mealType)}
            <h3 className="text-xl font-bold text-gray-400">{mealNames[mealType]}</h3>
          </div>
          <div className="text-center py-8">
            <ChefHat className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400">点击生成随机食谱</p>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            {getMealIcon(mealType)}
            <h3 className="text-xl font-bold text-gray-800">{mealNames[mealType]}</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => openModal(recipe)}
              className="flex items-center gap-1 text-green-500 hover:text-green-700 text-sm font-medium hover:bg-green-50 px-2 py-1 rounded-md transition-colors"
            >
              <Eye className="w-4 h-4" />
              查看详情
            </button>
            <button
              onClick={onRegenerate}
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm font-medium hover:bg-blue-50 px-2 py-1 rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              重新生成
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <h4 className="text-lg font-semibold text-green-600">{recipe.name}</h4>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Apple className="w-4 h-4 text-red-500" />
            <h5 className="font-medium text-gray-700">食材准备：</h5>
          </div>
          <ul className="space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <h5 className="font-medium text-gray-700">制作方法：</h5>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{recipe.instructions}</p>
        </div>
        
        {recipe.nutrition && (
          <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-red-500" />
              <h5 className="font-medium text-gray-700">营养信息：</h5>
            </div>
            <p className="text-gray-600 text-sm">{recipe.nutrition}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Utensils className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-800">健康食谱生成器</h1>
            <Sparkles className="w-10 h-10 text-blue-600" />
          </div>
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            让我们为你随机选择今天的健康饮食搭配
            <Zap className="w-5 h-5 text-yellow-500" />
          </p>
        </div>

        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={generateRandomMeals}
            disabled={isGenerating}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <Sparkles className="w-5 h-5 animate-pulse" />
                生成中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Shuffle className="w-5 h-5" />
                随机生成今日食谱
              </div>
            )}
          </button>
          
          <ShoppingList 
            breakfast={selectedRecipes.breakfast}
            lunch={selectedRecipes.lunch}
            dinner={selectedRecipes.dinner}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <MealCard 
            recipe={selectedRecipes.breakfast} 
            mealType="breakfast"
            onRegenerate={() => generateSingleMeal('breakfast')}
          />
          <MealCard 
            recipe={selectedRecipes.lunch} 
            mealType="lunch"
            onRegenerate={() => generateSingleMeal('lunch')}
          />
          <MealCard 
            recipe={selectedRecipes.dinner} 
            mealType="dinner"
            onRegenerate={() => generateSingleMeal('dinner')}
          />
        </div>

        {(selectedRecipes.breakfast || selectedRecipes.lunch || selectedRecipes.dinner) && (
          <div className="mt-8">
            <NutritionSummary 
              breakfast={selectedRecipes.breakfast}
              lunch={selectedRecipes.lunch}
              dinner={selectedRecipes.dinner}
            />
          </div>
        )}

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Sparkles className="w-4 h-4" />
            <p>可以点击单个卡片的&ldquo;重新生成&rdquo;来替换特定餐次</p>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <RecipeModal 
          recipe={modalRecipe}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  )
}
