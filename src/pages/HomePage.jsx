import React from 'react'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Partners } from '@/components/Partners'
import { TechArchitecture } from '@/components/TechArchitecture'
import { CTASection } from '@/components/CTASection'
import { NewsSection } from '@/components/NewsSection'
import { AboutUs } from '@/components/AboutUs'

const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage
