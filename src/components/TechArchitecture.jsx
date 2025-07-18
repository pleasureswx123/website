import React from 'react'
import { motion } from 'framer-motion'
import { BrainCog, Database, Zap } from 'lucide-react'

export function TechArchitecture() {
  const technologies = [
    {
      id: 1,
      title: "深度学习引擎",
      description: "采用最新的大语言模型技术，结合情感计算和个性化算法",
      icon: <BrainCog className="size-8" />,
    },
    {
      id: 2,
      title: "记忆网络系统",
      description: "创新的记忆架构设计，实现长期记忆存储和检索",
      icon: <Database className="size-8" />,
    },
    {
      id: 3,
      title: "多模态交互",
      description: "支持多种交互方式，提供丰富的沟通体验",
      icon: <Zap className="size-8" />,
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            领先的AI技术架构
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            先进的技术架构，为每一次互动提供强大的支撑
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-white/5 mr-4 text-white">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


