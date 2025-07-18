import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            开始你的AI陪伴之旅
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            体验前所未有的AI互动，让科技更有温度
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-[160px]">
              立即体验
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px]">
              了解更多
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
