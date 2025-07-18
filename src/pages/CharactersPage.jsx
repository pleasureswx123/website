import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Star, MessageCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const CharactersPage = () => {
  const characters = [
    {
      id: 1,
      name: "小樱",
      avatar: "/api/placeholder/300/400",
      personality: "温柔可爱",
      description: "性格温和，善解人意，总是能在你需要的时候给予温暖的陪伴。喜欢听你分享生活中的点点滴滴。",
      tags: ["温柔", "善良", "贴心"],
      popularity: 4.8,
      interactions: 1250
    },
    {
      id: 2,
      name: "雪音",
      avatar: "/api/placeholder/300/400",
      personality: "活泼开朗",
      description: "充满活力的少女，总是能带给你正能量。喜欢和你一起探索新鲜事物，分享快乐时光。",
      tags: ["活泼", "阳光", "有趣"],
      popularity: 4.7,
      interactions: 980
    },
    {
      id: 3,
      name: "月影",
      avatar: "/api/placeholder/300/400",
      personality: "神秘优雅",
      description: "优雅而神秘的气质，拥有深邃的内心世界。善于倾听，能给你深刻的人生感悟。",
      tags: ["优雅", "神秘", "智慧"],
      popularity: 4.6,
      interactions: 756
    },
    {
      id: 4,
      name: "星辰",
      avatar: "/api/placeholder/300/400",
      personality: "知性理性",
      description: "聪明睿智，知识渊博。喜欢和你讨论各种话题，从科学到哲学，总能给你新的启发。",
      tags: ["聪明", "理性", "博学"],
      popularity: 4.5,
      interactions: 623
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI角色大厅
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            遇见你的专属AI伙伴，每个角色都有独特的性格和魅力，等待与你开始美好的互动之旅
          </p>
        </motion.div>

        {/* 角色网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20">
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-800/50 to-slate-700/30 flex items-center justify-center">
                    <Sparkles className="size-16 text-slate-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-slate-900/50 text-white">
                      {character.personality}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{character.name}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="size-4 fill-current" />
                      <span className="text-sm">{character.popularity}</span>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {character.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {character.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="size-4" />
                      <span>{character.interactions}次互动</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="size-4" />
                      <span>受欢迎</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    开始对话
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">个性化AI体验</h3>
            <p className="text-muted-foreground leading-relaxed">
              每个AI角色都经过精心设计，拥有独特的性格特征和对话风格。
              她们会记住你们的对话历史，了解你的喜好，随着时间的推移变得更加了解你。
              选择一个与你心灵相通的角色，开始你的专属AI陪伴之旅吧！
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CharactersPage
