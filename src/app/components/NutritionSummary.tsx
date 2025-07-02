'use client'

import { 
  BarChart3, 
  Activity, 
  Heart, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb,
  Droplets,
  Dumbbell,
  Clock,
  Flame
} from 'lucide-react'
import { Recipe } from '../types/recipe'

interface NutritionSummaryProps {
  breakfast: Recipe | null
  lunch: Recipe | null
  dinner: Recipe | null
}

export default function NutritionSummary({ breakfast, lunch, dinner }: NutritionSummaryProps) {
  const allRecipes = [breakfast, lunch, dinner].filter(Boolean) as Recipe[]
  
  if (allRecipes.length === 0) return null

  const getNutritionTips = () => {
    const tips = []
    
    // 检查蛋白质来源
    const proteinSources = allRecipes.filter(recipe => 
      recipe.nutrition?.includes('蛋白') || 
      recipe.ingredients.some(ingredient => 
        ingredient.includes('鸡') || ingredient.includes('鱼') || 
        ingredient.includes('虾') || ingredient.includes('牛肉') || 
        ingredient.includes('豆腐') || ingredient.includes('鸡蛋')
      )
    )
    
    if (proteinSources.length >= 2) {
      tips.push({ text: '蛋白质摄入充足', icon: <CheckCircle className="w-4 h-4 text-green-500" />, type: 'good' })
    } else {
      tips.push({ text: '建议增加蛋白质来源', icon: <AlertTriangle className="w-4 h-4 text-orange-500" />, type: 'warning' })
    }
    
    // 检查蔬菜摄入
    const veggieRecipes = allRecipes.filter(recipe => 
      recipe.ingredients.some(ingredient => 
        ingredient.includes('西兰花') || ingredient.includes('芦笋') || 
        ingredient.includes('菠菜') || ingredient.includes('菜心') || 
        ingredient.includes('空心菜') || ingredient.includes('彩椒') ||
        ingredient.includes('黄瓜') || ingredient.includes('萝卜')
      )
    )
    
    if (veggieRecipes.length >= 2) {
      tips.push({ text: '蔬菜搭配均衡', icon: <CheckCircle className="w-4 h-4 text-green-500" />, type: 'good' })
    } else {
      tips.push({ text: '建议增加蔬菜摄入', icon: <AlertTriangle className="w-4 h-4 text-orange-500" />, type: 'warning' })
    }
    
    // 检查碳水化合物
    const carbRecipes = allRecipes.filter(recipe => 
      recipe.ingredients.some(ingredient => 
        ingredient.includes('米饭') || ingredient.includes('燕麦') || 
        ingredient.includes('红薯') || ingredient.includes('南瓜') ||
        ingredient.includes('面包') || ingredient.includes('面条')
      )
    )
    
    if (carbRecipes.length >= 1) {
      tips.push({ text: '碳水化合物适量', icon: <CheckCircle className="w-4 h-4 text-green-500" />, type: 'good' })
    } else {
      tips.push({ text: '建议适量补充碳水化合物', icon: <AlertTriangle className="w-4 h-4 text-orange-500" />, type: 'warning' })
    }
    
    return tips
  }

  const getCalorieEstimate = () => {
    // 简单的卡路里估算
    let totalCalories = 0
    
    allRecipes.forEach(recipe => {
      if (recipe.mealType === 'breakfast') {
        totalCalories += 300 // 早餐平均卡路里
      } else if (recipe.mealType === 'lunch') {
        totalCalories += 450 // 午餐平均卡路里
      } else {
        totalCalories += 350 // 晚餐平均卡路里
      }
    })
    
    return totalCalories
  }

  const tips = getNutritionTips()
  const estimatedCalories = getCalorieEstimate()
  const goodTips = tips.filter(tip => tip.type === 'good').length
  const totalTips = tips.length

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <BarChart3 className="w-6 h-6 text-green-600" />
        <h3 className="text-lg font-bold text-gray-800">今日营养搭配分析</h3>
        <div className="flex items-center gap-1 ml-auto">
          <Activity className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-gray-600">健康评分: {Math.round((goodTips / totalTips) * 100)}%</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-700">营养建议：</h4>
          </div>
          <div className="space-y-2">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                {tip.icon}
                <span className={`${tip.type === 'good' ? 'text-green-700' : 'text-orange-700'}`}>
                  {tip.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-red-500" />
            <h4 className="font-semibold text-gray-700">能量摄入：</h4>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              <div className="text-3xl font-bold text-green-600">
                {estimatedCalories}
              </div>
              <span className="text-lg text-gray-500">kcal</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3 text-blue-400" />
              <p className="text-xs text-gray-500">
                占成人一日所需的 {Math.round((estimatedCalories / 2000) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h5 className="font-semibold text-gray-700 mb-2">健康提示：</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span>每日饮水8杯</span>
              </div>
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-purple-500" />
                <span>适量运动锻炼</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>保持规律作息</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              搭配新鲜水果和坚果作为加餐更佳！
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 