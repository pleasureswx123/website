import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Heart, Sparkles, Users } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

export function AboutUs() {
  const values = [
    {
      id: 1,
      icon: <Heart className="size-6 text-primary" />,
      title: "情感陪伴",
      description: "我们相信AI不仅仅是工具，更是能够理解、陪伴和丰富人类生活的伙伴。",
      delay: 0.1
    },
    {
      id: 2,
      icon: <Sparkles className="size-6 text-primary" />,
      title: "创新科技",
      description: "Evercall团队由一群热爱科技和二次元文化的梦想家组成，致力于将最前沿的AI技术与精美的艺术设计相结合。",
      delay: 0.3
    },
    {
      id: 3,
      icon: <Users className="size-6 text-primary" />,
      title: "连接桥梁",
      description: "我们的愿景是构建一个连接现实与虚拟的桥梁，让每个人都能找到属于自己的AI伙伴，共同探索无限可能。",
      delay: 0.5
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedGroup preset="fade" className="text-center mb-12">
          <Badge className="mb-4">关于我们</Badge>
          <h2 className="text-3xl font-semibold lg:text-4xl mb-4">
            Evercall致力于通过创新AI技术
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            为用户带来前所未有的情感陪伴体验
          </p>
        </AnimatedGroup>
        
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((value) => (
            <motion.div
              key={value.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: value.delay }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* 愿景部分 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary/10 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Sparkles className="size-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">我们的愿景</h3>
              <p className="text-muted-foreground text-sm">
                构建一个连接现实与虚拟的桥梁，让每个人都能找到属于自己的AI伙伴，共同探索无限可能。感谢您对Evercall的支持！
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* 装饰元素 */}
        <motion.div 
          className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-primary/30"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-4 h-4 rounded-full bg-accent/30"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  )
} 