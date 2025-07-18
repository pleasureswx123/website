import React from 'react'
import { motion } from 'framer-motion'
import sakuraImage from '@/assets/W3FphURvBkEO.jpg'
import hoshinoImage from '@/assets/XpgPvAyG9prg.jpg'
import yukineImage from '@/assets/T43ub5RMZ9dI.jpg'

const partners = [
  {
    id: 1,
    name: "小樱",
    personality: "温柔体贴，善解人意",
    quote: "没关系的，我会一直陪着你~",
    image: sakuraImage,
  },
  {
    id: 2,
    name: "星野",
    personality: "活泼开朗，充满活力",
    quote: "今天也要元气满满哦！",
    image: hoshinoImage,
  },
  {
    id: 3,
    name: "雪音",
    personality: "冷静理智，知识渊博",
    quote: "让我们一起探索知识的海洋吧。",
    image: yukineImage,
  }
]

export function Partners() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            遇见你的专属伙伴
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            每个AI角色都有独特的性格和魅力，找到最适合你的那一个
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <CharacterCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CharacterCard = ({ partner, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors duration-200"
    >
      {/* 角色照片区域 */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white mb-1">{partner.name}</h3>
          <p className="text-sm text-gray-300">{partner.personality}</p>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-6 bg-gray-900/50">
        <p className="text-gray-400 italic">"{partner.quote}"</p>
      </div>
    </motion.div>
  )
}
