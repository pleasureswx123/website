import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Evercall 1.0 正式发布！",
      date: "2024年7月17日",
      content: "我们很高兴地宣布Evercall 1.0版本正式上线，带来了全新的AI陪伴体验，包括更真实的对话、丰富的表情和动作。",
    },
    {
      id: 2,
      title: "开发者招募计划",
      date: "2024年7月10日",
      content: "Evercall正在寻找有才华的开发者加入我们的团队，共同打造下一代AI娱乐产品。欢迎有兴趣的伙伴加入！",
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            最新动态
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            了解Evercall的最新进展、活动和更新
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 rounded-lg hover:border-white/20 transition-colors duration-200"
            >
              <div className="flex items-center mb-4 text-gray-400">
                <CalendarDays className="size-4 mr-2" />
                <span className="text-sm">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
