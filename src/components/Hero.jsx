import React, { Suspense, lazy, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

// 加载组件
const SplineLoader = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black flex items-center justify-center">
    <motion.div
      className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
)

// 检测是否为移动设备
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function Hero() {
  const isMobile = useIsMobile()
  const [splineError, setSplineError] = useState(false)

  const handleSplineError = () => {
    setSplineError(true)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* 背景 - 桌面端使用Spline，移动端使用简化背景 */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile && !splineError ? (
          <Suspense fallback={<SplineLoader />}>
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover"
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent'
              }}
              onError={handleSplineError}
            />
          </Suspense>
        ) : (
          // 移动端或Spline加载失败时的简化背景
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            {/* 添加一些动态效果 */}
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        )}
      </div>

      {/* 渐变遮罩层，确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-5"></div>

      {/* 内容区域 */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* 主标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 15%, #e2e8f0 30%, #cbd5e1 45%, #94a3b8 60%, #64748b 75%, #475569 90%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.2)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Evercall，连接平行世界
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-ml md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)'
          }}
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
          <Button
            size="lg"
            className="min-w-[140px] bg-white/95 text-black hover:bg-white backdrop-blur-sm shadow-2xl border border-white/20"
          >
            立即体验
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[140px] border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white/10 text-white shadow-2xl"
          >
            了解更多
          </Button>
        </motion.div>

      </div>
    </div>
  )
}
