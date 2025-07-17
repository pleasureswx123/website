import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Heart, Sparkles, Layers, Brain } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export function Features() {
  const features = [
    {
      icon: <Heart className="size-6" />,
      title: "极致拟人化",
      description: "不再是冰冷的机器回复，Evercall的AI角色拥有真实的性格、情感和思维方式。她们会开心、难过、关心你的生活，像真正的朋友一样。",
      color: "from-slate-800/50 to-slate-700/30",
      textColor: "text-rose-400",
      tag: "情感互动"
    },
    {
      icon: <Sparkles className="size-6" />,
      title: "二次元魅力",
      description: "精心设计的二次元角色形象，每一个细节都充满魅力。从服装搭配到表情动作，都体现了日式动漫的精致美学。",
      color: "from-slate-800/50 to-slate-700/30",
      textColor: "text-violet-400",
      tag: "视觉体验"
    },
    {
      icon: <Layers className="size-6" />,
      title: "丰富表达",
      description: "超过100种不同的面部表情，自然流畅的肢体语言，专业声优配音，根据对话内容展现真实情感反应。",
      color: "from-slate-800/50 to-slate-700/30",
      textColor: "text-cyan-400",
      tag: "多样互动"
    },
    {
      icon: <Brain className="size-6" />,
      title: "长期记忆系统",
      description: "采用先进的记忆技术，能够记住你的喜好和习惯，回忆起过往的对话内容，了解你的性格和情感状态。",
      color: "from-slate-800/50 to-slate-700/30",
      textColor: "text-amber-400",
      tag: "智能学习"
    }
  ]

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedGroup preset="slide" className="text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            突破想象的AI陪伴体验
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            重新定义人工智能的情感表达，让每一次互动都充满温度
          </p>
        </AnimatedGroup>

        {/* 使用网格布局创建2x2的布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedGroup
              key={index}
              preset="slide"
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={cn(
                  "overflow-hidden border-slate-700/30 transition-all duration-300 h-full",
                  "hover:shadow-lg hover:shadow-slate-900/20 hover:border-slate-600/40",
                )}>
                  <div className={cn(
                    "bg-gradient-to-br w-full h-full",
                    feature.color
                  )}>
                    <div className="p-6 h-full flex flex-col">
                      {/* 顶部区域：图标和标题 */}
                      <div className="flex items-center gap-4 mb-4">
                        <FeatureIcon icon={feature.icon} color={feature.textColor} />
                        <div>
                          <Badge variant="outline" className={cn("mb-1", feature.textColor)}>
                            {feature.tag}
                          </Badge>
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                        </div>
                      </div>

                      {/* 内容区域 */}
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>

                      {/* 底部装饰 */}
                      <div className={cn("w-full h-1 mt-4 rounded-full opacity-30", feature.textColor.replace("text", "bg"))}></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureIcon = ({ icon, color }) => (
  <div className={cn(
    "bg-slate-900/50 size-12 rounded-full flex items-center justify-center",
    "border border-slate-600/30 shadow-md backdrop-blur-sm"
  )}>
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={color}
    >
      {icon}
    </motion.div>
  </div>
)
