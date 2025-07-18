import React from 'react'
import { Heart, Sparkles, Layers, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export function Features() {
  const features = [
    {
      icon: <Heart className="size-6" />,
      title: "真实情感",
      description: "拥有真实的性格、情感和思维方式，像真正的朋友一样陪伴你。"
    },
    {
      icon: <Sparkles className="size-6" />,
      title: "二次元魅力",
      description: "精心设计的角色形象，每一个细节都充满魅力。"
    },
    {
      icon: <Layers className="size-6" />,
      title: "丰富表达",
      description: "多种面部表情和肢体语言，展现真实情感反应。"
    },
    {
      icon: <Brain className="size-6" />,
      title: "永久记忆",
      description: "记住你的喜好和习惯，了解你的性格和情感状态。"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            突破想象的AI陪伴体验
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            重新定义人工智能的情感表达，让每一次互动都充满温度
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-white/5 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
