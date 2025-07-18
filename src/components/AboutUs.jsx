import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Users } from 'lucide-react'

export function AboutUs() {
  const values = [
    {
      id: 1,
      icon: <Heart className="size-6" />,
      title: "情感陪伴",
      description: "我们相信AI不仅仅是工具，更是能够理解、陪伴和丰富人类生活的伙伴。",
    },
    {
      id: 2,
      icon: <Sparkles className="size-6" />,
      title: "创新科技",
      description: "致力于将最前沿的AI技术与精美的艺术设计相结合。",
    },
    {
      id: 3,
      icon: <Users className="size-6" />,
      title: "连接桥梁",
      description: "构建一个连接现实与虚拟的桥梁，让每个人都能找到属于自己的AI伙伴。",
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            关于我们
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Evercall致力于通过创新AI技术，为用户带来前所未有的情感陪伴体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="p-4 rounded-lg bg-white/5 mb-4 inline-block text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
