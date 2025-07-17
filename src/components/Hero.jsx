import React, { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Heart, Brain, User, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import heroImage from '@/assets/HYIYR6IwBw7j.jpg'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // 视差滚动效果
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 特性数据
  const features = [
    {
      icon: <User className="size-4" />,
      label: "真实性格",
      color: "from-pink-500 to-rose-500",
      delay: 1.1
    },
    {
      icon: <Brain className="size-4" />,
      label: "永久记忆",
      color: "from-violet-500 to-purple-500",
      delay: 1.2
    },
    {
      icon: <Sparkles className="size-4" />,
      label: "二次元形象",
      color: "from-cyan-500 to-blue-500",
      delay: 1.3
    },
    {
      icon: <Heart className="size-4" />,
      label: "情感互动",
      color: "from-amber-500 to-orange-500",
      delay: 1.4
    }
  ];

  return (
    <div className="overflow-hidden relative min-h-screen flex items-center justify-center">
      {/* 背景图片 - 使用HYIYR6IwBw7j.jpg */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          ref={heroRef}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Evercall Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* 图片叠加渐变效果 */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
          
          {/* 动态光效 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* 动态粒子效果 */}
          <ParticleEffect />
        </motion.div>
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-0">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
          {/* 顶部标签 */}
          <AnimatedGroup variants={transitionVariants}>
            <motion.a
              href="#"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hover:bg-background/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-primary/30 p-1 pl-4 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all duration-300">
              <span className="text-foreground text-sm flex items-center gap-2">
                <Sparkles className="size-4 text-primary animate-pulse" />
                AI陪伴新时代
              </span>
              <span className="block h-4 w-0.5 border-l bg-primary/50"></span>

              <div className="bg-primary/10 group-hover:bg-primary/20 size-6 overflow-hidden rounded-full duration-500">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3 text-primary" />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3 text-primary" />
                  </span>
                </div>
              </div>
            </motion.a>
      
            {/* 主标题 */}
            <motion.h1 
              className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-white drop-shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Evercall</span>，连接平行世界
            </motion.h1>
            {/* 副标题 */}
            <motion.p 
              className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white/80 drop-shadow"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
            </motion.p>
          </AnimatedGroup>

          {/* 按钮组 */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div
              className="bg-primary/20 rounded-[14px] border border-primary/30 p-0.5 backdrop-blur-sm">
              <Button
                size="lg"
                className="rounded-xl px-6 text-base bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-600 text-white shadow-lg shadow-primary/20">
                <a href="#">
                  <span className="text-nowrap">立即体验</span>
                </a>
              </Button>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="h-10.5 rounded-xl px-6 border-primary/30 bg-background/30 backdrop-blur-sm hover:bg-background/50 text-white">
              <a href="#">
                <span className="text-nowrap">了解更多</span>
              </a>
            </Button>
          </motion.div>
          
          {/* 特性标签 - 真实性格 永久记忆 二次元形象 情感互动 */}
          <div className="mt-16 md:mt-24">
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay, duration: 0.5 }}
                  className="relative group"
                >
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-background/10 backdrop-blur-sm border border-primary/20 
                    hover:bg-background/20 transition-all duration-300
                    shadow-lg`}
                  >
                    <div className={`size-6 rounded-full flex items-center justify-center 
                      bg-gradient-to-r ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-white font-medium">{feature.label}</span>
                  </div>
                  
                  {/* 悬停时的光晕效果 */}
                  <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-40 
                    rounded-full blur-xl bg-gradient-to-r ${feature.color} 
                    transition-opacity duration-300`}
                  ></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 粒子效果组件
const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 100 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          initial={{
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 0.6 + 0.4,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
}; 