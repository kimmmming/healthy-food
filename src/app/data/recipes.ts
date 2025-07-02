import { Recipe } from '../types/recipe'

export const recipes: Recipe[] = [
  // 早餐食谱
  {
    id: 'breakfast-1',
    name: '蒸南瓜',
    mealType: 'breakfast',
    ingredients: ['南瓜150克'],
    instructions: '南瓜切块，冷水下锅蒸熟即可',
    nutrition: '低卡路里，富含维生素A',
    cookingTime: '15分钟',
    difficulty: 'easy'
  },
  {
    id: 'breakfast-2',
    name: '燕麦酸奶杯',
    mealType: 'breakfast',
    ingredients: ['即食燕麦片40克', '无糖酸奶150克', '蓝莓50克', '核桃25克'],
    instructions: '蓝莓洗净沥干备用，准备小碗，放入燕麦片，倒入酸奶，加入蓝莓和核桃仁拌匀即可',
    nutrition: '高蛋白，富含纤维',
    cookingTime: '5分钟',
    difficulty: 'easy'
  },
  {
    id: 'breakfast-3',
    name: '燕麦粥',
    mealType: 'breakfast',
    ingredients: ['燕麦片40克', '水300毫升'],
    instructions: '电饭锅里加燕麦片40克，水300毫升，煮20分钟',
    nutrition: '富含膳食纤维',
    cookingTime: '20分钟',
    difficulty: 'easy'
  },
  {
    id: 'breakfast-4',
    name: '全麦吐司配水煮蛋',
    mealType: 'breakfast',
    ingredients: ['全麦吐司50克', '鸡蛋2个', '脱脂牛奶200毫升'],
    instructions: '鸡蛋冷水下锅煮8分钟，全麦吐司烤制微黄，配牛奶食用',
    nutrition: '高蛋白，复合碳水化合物',
    cookingTime: '10分钟',
    difficulty: 'easy'
  },
  {
    id: 'breakfast-5',
    name: '蒸红薯',
    mealType: 'breakfast',
    ingredients: ['红薯100克'],
    instructions: '红薯洗净蒸熟即可',
    nutrition: '富含膳食纤维和维生素',
    cookingTime: '20分钟',
    difficulty: 'easy'
  },
  {
    id: 'breakfast-6',
    name: '鸡蛋煎饼',
    mealType: 'breakfast',
    ingredients: ['鸡蛋1个', '面粉25克', '花椒粉少许', '盐2克'],
    instructions: '面粉加4勺清水搅拌均匀无疙瘩，加花椒粉和盐，打入鸡蛋搅匀，锅里喷油，倒入面糊摊平，中小火每面煎1分钟',
    nutrition: '蛋白质丰富',
    cookingTime: '5分钟',
    difficulty: 'easy'
  },

  // 午餐食谱
  {
    id: 'lunch-1',
    name: '芦笋炒虾仁',
    mealType: 'lunch',
    ingredients: ['虾仁100克', '芦笋80克', '海盐适量', '黑胡椒适量', '食用油5克'],
    instructions: '芦笋切段冷水下锅焯水，水开捞出；虾仁开背去虾线；锅烧热放5克油，放入虾仁小火煎至两面发红，转中火倒入芦笋翻炒1分钟，撒入海盐黑胡椒即可',
    nutrition: '高蛋白低脂肪',
    cookingTime: '10分钟',
    difficulty: 'medium'
  },
  {
    id: 'lunch-2',
    name: '蒜蓉西兰花',
    mealType: 'lunch',
    ingredients: ['西兰花200克', '大蒜3瓣', '生抽1勺', '盐适量'],
    instructions: '西兰花水开下锅焯水30秒捞出，锅中放少量油爆香蒜末，倒入西兰花，加生抽和盐快速翻炒',
    nutrition: '富含维生素C',
    cookingTime: '8分钟',
    difficulty: 'easy'
  },
  {
    id: 'lunch-3',
    name: '牛肉炒豆芽',
    mealType: 'lunch',
    ingredients: ['牛肉100克', '豆芽150克', '淀粉1勺', '糖1勺', '生抽2勺', '蚝油1勺'],
    instructions: '牛肉横切薄片，用淀粉、糖、生抽、蚝油腌制15分钟；热锅烧油倒入牛肉大火炒变色，倒入豆芽快速翻炒断生出锅',
    nutrition: '高蛋白，富含维生素',
    cookingTime: '15分钟',
    difficulty: 'medium'
  },
  {
    id: 'lunch-4',
    name: '西葫芦炒肉片',
    mealType: 'lunch',
    ingredients: ['猪瘦肉80克', '西葫芦100克', '老抽半勺', '生抽1勺', '食用油5克'],
    instructions: '西葫芦切片，锅中加5克油，油热将肉片炒熟，加入西葫芦，加老抽、生抽，50毫升水，焖2分钟出锅',
    nutrition: '蛋白质丰富',
    cookingTime: '12分钟',
    difficulty: 'easy'
  },
  {
    id: 'lunch-5',
    name: '鲜虾豆腐汤',
    mealType: 'lunch',
    ingredients: ['虾仁100克', '内酯豆腐100克', '白糖少许', '盐适量', '白胡椒粉适量'],
    instructions: '豆腐切2厘米方块，虾仁开背；锅里加500毫升水大火烧开，加豆腐虾仁，加白糖、盐、白胡椒粉，中火10分钟关火',
    nutrition: '高蛋白低脂肪',
    cookingTime: '15分钟',
    difficulty: 'easy'
  },
  {
    id: 'lunch-6',
    name: '羊肉白萝卜汤',
    mealType: 'lunch',
    ingredients: ['羊肉100克', '白萝卜100克', '料酒1勺', '白胡椒粉适量'],
    instructions: '羊肉、白萝卜洗净切块，羊肉下锅加料酒煮开打去浮沫，炖30分钟，加入白萝卜块和白胡椒粉，炖20分钟出锅',
    nutrition: '温补，富含蛋白质',
    cookingTime: '60分钟',
    difficulty: 'medium'
  },
  {
    id: 'lunch-7',
    name: '彩椒炒牛肉',
    mealType: 'lunch',
    ingredients: ['牛肉150克', '三色彩椒200克', '洋葱半个', '大蒜3瓣', '鸡蛋清1个', '生抽适量', '黑胡椒粉1勺'],
    instructions: '牛肉切条，用蛋清、生抽腌制；锅中放10克油，牛肉变色后盛出；锅中留底油放彩椒洋葱蒜片翻炒，加黑胡椒粉，倒入牛肉翻炒出锅',
    nutrition: '高蛋白，维生素丰富',
    cookingTime: '20分钟',
    difficulty: 'medium'
  },
  {
    id: 'lunch-8',
    name: '肉末豆腐',
    mealType: 'lunch',
    ingredients: ['猪肉馅100克', '北豆腐120克', '葱花适量', '生抽1勺', '糖半勺', '淀粉1勺'],
    instructions: '豆腐切小块，锅中油热放肉末炒熟，下豆腐轻轻晃动至定型，放葱花炒香，倒入调好的酱汁煮至浓稠',
    nutrition: '蛋白质丰富',
    cookingTime: '15分钟',
    difficulty: 'medium'
  },

  // 晚餐食谱
  {
    id: 'dinner-1',
    name: '清蒸鲈鱼',
    mealType: 'dinner',
    ingredients: ['海鲈鱼1条400克', '大葱适量', '姜片适量', '料酒1勺', '蒸鱼豉油适量'],
    instructions: '鲈鱼去内脏洗净，淋适量料酒，盘底铺葱段姜片，鱼肚也塞上，水开上锅10分钟，出锅淋蒸鱼豉油',
    nutrition: '高蛋白低脂肪',
    cookingTime: '15分钟',
    difficulty: 'medium'
  },
  {
    id: 'dinner-2',
    name: '小葱拌豆腐',
    mealType: 'dinner',
    ingredients: ['小葱适量', '老豆腐50克', '十三香1勺', '香油1勺', '盐适量'],
    instructions: '豆腐切块水中加盐焯水2分钟，捞出放凉手抓碎，放上小葱，加十三香和香油拌匀',
    nutrition: '清淡爽口',
    cookingTime: '8分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-3',
    name: '蒸鳕鱼',
    mealType: 'dinner',
    ingredients: ['鳕鱼200克', '葱姜丝适量', '蒸鱼豉油适量'],
    instructions: '盘中放葱姜丝，放上鳕鱼送入蒸锅，水开7分钟，倒入蒸鱼豉油',
    nutrition: '高蛋白，omega-3丰富',
    cookingTime: '10分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-4',
    name: '黄瓜彩椒沙拉',
    mealType: 'dinner',
    ingredients: ['彩椒100克', '黄瓜100克', '橄榄油5克', '生抽适量'],
    instructions: '黄瓜切片，彩椒切丝，放入碗中，加橄榄油和生抽拌匀',
    nutrition: '维生素丰富，低热量',
    cookingTime: '5分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-5',
    name: '凉拌菠菜',
    mealType: 'dinner',
    ingredients: ['菠菜200克', '生抽适量', '醋适量', '香油少许'],
    instructions: '菠菜放入微波碗，加水持平，5克油，盖盖高火4分钟，取出倒掉水，加生抽、醋、香油拌匀',
    nutrition: '富含铁质和维生素',
    cookingTime: '8分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-6',
    name: '鸡蛋羹',
    mealType: 'dinner',
    ingredients: ['鸡蛋2个', '盐3克', '凉白开150毫升', '酱油适量'],
    instructions: '碗里打入2个鸡蛋，加盐和凉白开打散，套上保鲜膜，水开上锅10分钟，倒适量酱油',
    nutrition: '蛋白质丰富，易消化',
    cookingTime: '15分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-7',
    name: '腐竹蒸鸡',
    mealType: 'dinner',
    ingredients: ['腐竹30克', '鸡腿肉60克', '生抽2勺', '食用油5克'],
    instructions: '腐竹泡发，盘底铺腐竹，倒5克油；鸡腿肉去皮洗净用生抽腌制15分钟，铺在腐竹上，冷水上锅蒸25分钟',
    nutrition: '高蛋白',
    cookingTime: '30分钟',
    difficulty: 'medium'
  },
  {
    id: 'dinner-8',
    name: '白灼菜心',
    mealType: 'dinner',
    ingredients: ['菜心100克', '蒜末适量', '生抽1勺', '老抽半勺'],
    instructions: '水开菜心烫30秒捞出，蒜末爆香，倒入菜心，加生抽老抽，2勺清水快速翻炒出锅',
    nutrition: '维生素丰富',
    cookingTime: '5分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-9',
    name: '西红柿炒鸡蛋',
    mealType: 'dinner',
    ingredients: ['西红柿1个', '鸡蛋2个', '盐半勺'],
    instructions: '少油鸡蛋炒嫩盛出，不用洗锅，下番茄丁小火熬出汁，倒入鸡蛋翻炒融合，加盐调味',
    nutrition: '营养均衡',
    cookingTime: '10分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-10',
    name: '番茄豆腐汤',
    mealType: 'dinner',
    ingredients: ['嫩豆腐200克', '番茄300克', '生抽2勺', '番茄酱1勺'],
    instructions: '锅里放5克油，下番茄炒出茄汁，加两小碗清水，水开后放豆腐小火慢煮5分钟，加生抽和番茄酱煮2分钟出锅',
    nutrition: '维生素和蛋白质丰富',
    cookingTime: '15分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-11',
    name: '白灼虾',
    mealType: 'dinner',
    ingredients: ['鲜虾300克', '料酒1勺', '花椒粒适量'],
    instructions: '洗净的鲜虾放锅里，倒入料酒和花椒粒，盖盖开火后计时2分钟，虾变红即可出锅',
    nutrition: '高蛋白低脂肪',
    cookingTime: '5分钟',
    difficulty: 'easy'
  },
  {
    id: 'dinner-12',
    name: '炒空心菜',
    mealType: 'dinner',
    ingredients: ['空心菜200克', '大蒜3瓣', '盐适量', '食用油5克'],
    instructions: '锅里放5克油，下蒜爆香，放空心菜大火炒至软身，加盐调味',
    nutrition: '富含维生素和纤维',
    cookingTime: '5分钟',
    difficulty: 'easy'
  }
] 