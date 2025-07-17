import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sparkles, Heart, Brain, Zap, Star, MessageCircle, Users, Cpu } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Partners } from '@/components/Partners'
import { TechArchitecture } from '@/components/TechArchitecture'
import { CTASection } from '@/components/CTASection'
import { NewsSection } from '@/components/NewsSection'
import { AboutUs } from '@/components/AboutUs'
import { Footer } from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'
import './App.css'

// 主应用组件
function App() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* 动态背景组件 */}
      <DynamicBackground />
      
      {/* 导航组件 */}
      <Navbar />
      {/* Hero组件 */}
      <Hero />
      {/* Features组件 */}
      <Features />
      {/* 专属伙伴组件 */}
      <Partners />
      {/* 介绍技术架构组件 */}
      <TechArchitecture />
      {/* 开始你的AI陪伴之旅 */}
      <CTASection />
      {/* 最新动态组件 */}
      <NewsSection />
      {/* 关于我们组件 */}
      <AboutUs />
      {/* 底部组件 */}
      <Footer />
    </div>
  )
}

export default App


