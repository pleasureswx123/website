import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: "Evercall 2.0 正式发布：全新AI情感引擎上线",
      summary: "我们很高兴地宣布 Evercall 2.0 正式发布，全新的情感引擎让AI角色的情感表达更加真实自然。",
      content: "经过6个月的研发，我们的团队成功开发出了全新的情感引擎，能够让AI角色展现出更加细腻和真实的情感反应...",
      category: "产品更新",
      date: "2024-01-15",
      readTime: "3分钟",
      featured: true
    },
    {
      id: 2,
      title: "新增5个全新AI角色，个性更加丰富多样",
      summary: "本次更新新增了5个独特的AI角色，每个都有着不同的性格特征和专业背景。",
      content: "为了满足用户对多样化AI伙伴的需求，我们精心设计了5个全新角色...",
      category: "角色更新",
      date: "2024-01-10",
      readTime: "2分钟",
      featured: false
    },
    {
      id: 3,
      title: "技术突破：实现毫秒级情感响应",
      summary: "通过优化算法架构，我们成功将AI情感响应时间缩短至毫秒级，带来更流畅的对话体验。",
      content: "在最新的技术更新中，我们对底层算法进行了全面优化...",
      category: "技术创新",
      date: "2024-01-05",
      readTime: "4分钟",
      featured: false
    },
    {
      id: 4,
      title: "用户突破100万：感谢每一位伙伴的支持",
      summary: "Evercall 用户数量正式突破100万大关，感谢所有用户的信任与支持。",
      content: "自Evercall上线以来，我们一直致力于为用户提供最优质的AI陪伴体验...",
      category: "里程碑",
      date: "2024-01-01",
      readTime: "2分钟",
      featured: false
    },
    {
      id: 5,
      title: "AI安全与隐私保护：我们的承诺",
      summary: "详细介绍Evercall在用户隐私保护和AI安全方面采取的措施和技术标准。",
      content: "用户的隐私和数据安全是我们最重视的问题之一...",
      category: "安全隐私",
      date: "2023-12-28",
      readTime: "5分钟",
      featured: false
    },
    {
      id: 6,
      title: "开发者日志：打造真实的AI情感体验",
      summary: "来自技术团队的分享：如何通过先进的机器学习技术让AI拥有真实的情感。",
      content: "在这篇开发者日志中，我们将深入探讨Evercall背后的技术原理...",
      category: "技术分享",
      date: "2023-12-25",
      readTime: "6分钟",
      featured: false
    }
  ]

  const categories = ["全部", "产品更新", "角色更新", "技术创新", "里程碑", "安全隐私", "技术分享"]
  const [selectedCategory, setSelectedCategory] = React.useState("全部")

  const filteredNews = selectedCategory === "全部" 
    ? news 
    : news.filter(item => item.category === selectedCategory)

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

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
            最新动态
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            了解Evercall的最新发展，产品更新，技术突破和重要里程碑
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* 特色新闻 */}
        {featuredNews && selectedCategory === "全部" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="overflow-hidden border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-slate-800/50 to-slate-700/30 flex items-center justify-center p-8">
                  <Sparkles className="size-24 text-slate-400" />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      特色新闻
                    </Badge>
                    <Badge variant="outline">{featuredNews.category}</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredNews.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="group">
                      阅读全文
                      <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.filter(item => !item.featured || selectedCategory !== "全部").map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20">
                <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-700/30 flex items-center justify-center">
                  <Sparkles className="size-12 text-slate-400" />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full group">
                    阅读更多
                    <ArrowRight className="size-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
