'use client'

import { useState } from 'react'
import { 
  ShoppingCart, 
  Copy, 
  ChevronUp, 
  ChevronDown, 
  Check, 
  Square, 
  CheckSquare,
  Lightbulb,
  Clock,
  Apple,
  Carrot,
  Fish,
  Beef,
  Milk,
  Wheat
} from 'lucide-react'
import { Recipe } from '../types/recipe'

interface ShoppingListProps {
  breakfast: Recipe | null
  lunch: Recipe | null
  dinner: Recipe | null
}

export default function ShoppingList({ breakfast, lunch, dinner }: ShoppingListProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const allRecipes = [breakfast, lunch, dinner].filter(Boolean) as Recipe[]
  
  if (allRecipes.length === 0) return null

  // 合并并去重所有食材
  const getAllIngredients = () => {
    const ingredientMap = new Map<string, { count: number, recipes: string[] }>()
    
    allRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        // 提取食材名称（去掉重量信息）
        const cleanIngredient = ingredient.replace(/\d+[克|毫升|勺|个|条|片|根]/g, '').trim()
        
        if (ingredientMap.has(cleanIngredient)) {
          const existing = ingredientMap.get(cleanIngredient)!
          existing.count += 1
          existing.recipes.push(recipe.name)
        } else {
          ingredientMap.set(cleanIngredient, {
            count: 1,
            recipes: [recipe.name]
          })
        }
      })
    })
    
    return Array.from(ingredientMap.entries()).map(([ingredient, data]) => ({
      name: ingredient,
      count: data.count,
      recipes: data.recipes,
      original: allRecipes.flatMap(r => r.ingredients).filter(ing => 
        ing.replace(/\d+[克|毫升|勺|个|条|片|根]/g, '').trim() === ingredient
      )
    }))
  }

  const ingredients = getAllIngredients()

  const toggleCheck = (ingredient: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(ingredient)) {
      newChecked.delete(ingredient)
    } else {
      newChecked.add(ingredient)
    }
    setCheckedItems(newChecked)
  }

  const exportList = () => {
    const listText = ingredients
      .map(ing => `□ ${ing.original[0]} ${ing.count > 1 ? `(用于${ing.count}道菜)` : ''}`)
      .join('\n')
    
    navigator.clipboard.writeText(`🛒 购物清单\n\n${listText}\n\n生成时间：${new Date().toLocaleString()}`)
    alert('购物清单已复制到剪贴板！')
  }

  const getIngredientIcon = (ingredient: string) => {
    const lowerName = ingredient.toLowerCase()
    if (lowerName.includes('肉') || lowerName.includes('鸡') || lowerName.includes('牛') || lowerName.includes('猪')) {
      return <Beef className="w-4 h-4 text-red-500" />
    }
    if (lowerName.includes('鱼') || lowerName.includes('虾') || lowerName.includes('蟹')) {
      return <Fish className="w-4 h-4 text-blue-500" />
    }
    if (lowerName.includes('萝卜') || lowerName.includes('胡萝卜')) {
      return <Carrot className="w-4 h-4 text-orange-500" />
    }
    if (lowerName.includes('苹果') || lowerName.includes('水果')) {
      return <Apple className="w-4 h-4 text-red-500" />
    }
    if (lowerName.includes('奶') || lowerName.includes('牛奶') || lowerName.includes('酸奶')) {
      return <Milk className="w-4 h-4 text-blue-400" />
    }
    if (lowerName.includes('面') || lowerName.includes('米') || lowerName.includes('粉')) {
      return <Wheat className="w-4 h-4 text-yellow-600" />
    }
    return <div className="w-4 h-4 bg-green-400 rounded-full"></div>
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
      >
        <ShoppingCart className="w-5 h-5" />
        生成购物清单
      </button>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-bold text-gray-800">购物清单</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportList}
            className="flex items-center gap-1 text-orange-500 hover:text-orange-700 text-sm font-medium hover:bg-orange-50 px-2 py-1 rounded-md transition-colors"
          >
            <Copy className="w-4 h-4" />
            复制清单
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm font-medium hover:bg-gray-50 px-2 py-1 rounded-md transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
            收起
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              checkedItems.has(ingredient.name) 
                ? 'bg-green-50 text-green-700 line-through' 
                : 'bg-gray-50 hover:bg-gray-100 hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleCheck(ingredient.name)}
              className="flex-shrink-0"
            >
              {checkedItems.has(ingredient.name) ? (
                <CheckSquare className="w-5 h-5 text-green-600" />
              ) : (
                <Square className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              )}
            </button>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              {getIngredientIcon(ingredient.name)}
            </div>
            
            <div className="flex-1">
              <div className="font-medium">
                {ingredient.original[0]}
                {ingredient.count > 1 && (
                  <span className="text-orange-500 text-sm ml-2 font-normal">
                    (用于{ingredient.count}道菜)
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500">
                用于：{ingredient.recipes.join('、')}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-100">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-orange-700">
              <strong>购物提示：</strong> 建议选择新鲜食材，检查保质期。可以一次性采购，合理安排制作顺序。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <Check className="w-3 h-3" />
          <p>已选中 {checkedItems.size} / {ingredients.length} 项</p>
        </div>
      </div>
    </div>
  )
} 