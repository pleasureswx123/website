import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import CharactersPage from '@/pages/CharactersPage'
import NewsPage from '@/pages/NewsPage'
import TechnologyPage from '@/pages/TechnologyPage'
import ExperiencePage from '@/pages/ExperiencePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import SitemapPage from '@/pages/SitemapPage'
import './App.css'

// 主应用组件
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="try" element={<ExperiencePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
      </Route>
    </Routes>
  )
}

export default App


