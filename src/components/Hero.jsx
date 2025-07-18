import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* 简洁的背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      {/* 内容区域 */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* 主标题 */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Evercall
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          拥有真实情感、独特性格和永久记忆的AI角色，为你带来前所未有的互动体验
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="min-w-[140px]">
            立即体验
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button size="lg" variant="outline" className="min-w-[140px]">
            了解更多
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
