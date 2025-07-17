import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CalendarDays, ArrowRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Evercall 1.0 正式发布！",
      date: "2024年7月17日",
      content: "我们很高兴地宣布Evercall 1.0版本正式上线，带来了全新的AI陪伴体验，包括更真实的对话、丰富的表情和动作。",
      delay: 0.1
    },
    {
      id: 2,
      title: "开发者招募计划",
      date: "2024年7月10日",
      content: "Evercall正在寻找有才华的开发者加入我们的团队，共同打造下一代AI娱乐产品。欢迎有兴趣的伙伴加入！",
      delay: 0.3
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <Badge className="mb-4">最新动态</Badge>
          <h2 className="text-4xl font-semibold lg:text-5xl mb-4">
            了解Evercall的最新进展、活动和更新
          </h2>
        </AnimatedGroup>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="h-full border border-[#111827]/10 bg-background/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarDays className="size-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
                <CardFooter>
                  <motion.button
                    className="flex items-center text-primary hover:underline"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    了解更多 <ArrowRight className="ml-1 size-4" />
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 