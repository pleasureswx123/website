import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Database, MessageSquare, BrainCog, Fingerprint, Sparkles, Network, Layers, Zap, Code, FileText, Mic } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

export function TechArchitecture() {
  const technologies = [
    {
      id: 1,
      title: "深度学习引擎",
      description: "采用最新的大语言模型技术，结合情感计算和个性化算法",
      icon: <BrainCog className="size-10 text-cyan-400" />,
      features: [
        { text: "理解复杂的情感表达", icon: <Fingerprint className="size-4" /> },
        { text: "生成自然流畅的对话", icon: <MessageSquare className="size-4" /> },
        { text: "展现独特的个性特征", icon: <Sparkles className="size-4" /> },
        { text: "适应用户的交流风格", icon: <Layers className="size-4" /> }
      ],
      color: "from-cyan-500/40 to-blue-600/30",
      delay: 0.1
    },
    {
      id: 2,
      title: "记忆网络系统",
      description: "创新的记忆架构设计，实现长期记忆存储和检索",
      icon: <Database className="size-10 text-purple-400" />,
      features: [
        { text: "长期记忆存储和检索", icon: <Database className="size-4" /> },
        { text: "情感记忆关联", icon: <Network className="size-4" /> },
        { text: "个性化偏好学习", icon: <BrainCog className="size-4" /> },
        { text: "关系发展追踪", icon: <Cpu className="size-4" /> }
      ],
      color: "from-purple-500/40 to-pink-600/30",
      delay: 0.3
    },
    {
      id: 3,
      title: "多模态交互",
      description: "支持多种交互方式，提供丰富的沟通体验",
      icon: <Zap className="size-10 text-amber-400" />,
      features: [
        { text: "文字对话", icon: <FileText className="size-4" /> },
        { text: "语音通话", icon: <Mic className="size-4" /> },
        { text: "表情互动", icon: <Sparkles className="size-4" /> },
        { text: "动作反馈", icon: <Layers className="size-4" /> }
      ],
      color: "from-amber-500/40 to-orange-600/30",
      delay: 0.5
    }
  ]

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup preset="slide" className="text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            领先的AI技术，真实的情感体验
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            先进的技术架构，为每一次互动提供强大的支撑
          </p>
        </AnimatedGroup>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <AnimatedTechCard key={tech.id} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedTechCard({ tech }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: tech.delay }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative h-full border border-[#111827]/10 rounded-2xl overflow-hidden bg-background/30 backdrop-blur-sm shadow-lg"
      >
        {/* 动画背景 */}
        <div className={`absolute inset-0 bg-gradient-to-b ${tech.color} opacity-30`}></div>
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-10"
          initial={{ opacity: 0.05 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        
        {/* 顶部图标区 */}
        <div className="relative p-6">
          <div className="flex flex-col items-center mb-4">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0c0933] size-20 rounded-full flex items-center justify-center border border-[#1d1a47] shadow-lg mb-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {tech.icon}
              </motion.div>
            </motion.div>
            <h3 className="text-xl font-bold mb-1">{tech.title}</h3>
            <p className="text-muted-foreground text-sm text-center">{tech.description}</p>
          </div>
          
          {/* 分隔线 */}
          <div className="w-3/4 h-px mx-auto my-4 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
          
          {/* 特性列表 */}
          <ul className="space-y-3">
            {tech.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex items-center space-x-2"
              >
                <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                  {feature.icon}
                </div>
                <span className="text-sm">{feature.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* 底部发光效果 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
        
        {/* 悬停时的粒子效果 */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Particles count={8} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function Particles({ count = 8 }) {
  return (
    <div className="relative h-full w-full">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 3 + 1
        const duration = Math.random() * 5 + 6
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100
        const delay = Math.random() * 2
        
        return (
          <motion.span
            key={i}
            className="absolute bg-primary/40 rounded-full"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
} 