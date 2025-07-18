import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'

const Layout = () => {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* 动态背景组件 */}
      <DynamicBackground />
      
      {/* 导航组件 */}
      <Navbar />
      
      {/* 页面内容 */}
      <main className="relative z-10">
        <Outlet />
      </main>
      
      {/* 底部组件 */}
      <Footer />
    </div>
  )
}

export default Layout
