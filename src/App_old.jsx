import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sparkles, Heart, Brain, Zap, Star, MessageCircle, Users, Cpu } from 'lucide-react'
import './App.css'

// 粒子背景组件
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="particles-bg">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}

// 导航栏组件
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold anime-text">Evercall</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">首页</a>
          <a href="#characters" className="text-foreground hover:text-primary transition-colors">角色</a>
          <a href="#news" className="text-foreground hover:text-primary transition-colors">新闻</a>
          <a href="#technology" className="text-foreground hover:text-primary transition-colors">技术</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">体验</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">关于我们</a>
        </div>
        <Button className="glow-button bg-primary text-primary-foreground hover:bg-primary/90">
          立即体验
        </Button>
      </div>
    </nav>
  )
}

// 英雄区域组件
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-background">
      <div className="container mx-auto px-4 text-center z-10 content-container">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            🎭 AI陪伴新时代
          </Badge>
            <h1 className="hero-title font-bold mb-6 anime-text">
              Evercall，连接平行世界
            </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-button bg-primary text-primary-foreground hover:bg-primary/90">
              <Sparkles className="w-5 h-5 mr-2" />
              立即体验
            </Button>
            <Button size="lg" variant="outline" className="tech-border">
              <MessageCircle className="w-5 h-5 mr-2" />
              了解更多
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-accent" />
              <span>真实性格</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Brain className="w-4 h-4 text-secondary" />
              <span>永久记忆</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-primary" />
              <span>二次元形象</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span>情感互动</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 特性展示组件
const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "极致拟人化",
      description: "不再是冰冷的机器回复，Evercall的AI角色拥有真实的性格、情感和思维方式。她们会开心、会难过、会关心你的生活，就像真正的朋友一样。",
      color: "text-accent"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "二次元魅力",
      description: "精心设计的二次元角色形象，每一个细节都充满魅力。从服装搭配到表情动作，都体现了日式动漫的精致美学。",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "丰富表达",
      description: "超过100种不同的面部表情，自然流畅的肢体语言，专业声优配音，根据对话内容展现真实情感反应。",
      color: "text-secondary"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "长期记忆系统",
      description: "采用先进的记忆技术，能够记住你的喜好和习惯，回忆起过往的对话内容，了解你的性格和情感状态。",
      color: "text-accent"
    }
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            突破想象的AI陪伴体验
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            重新定义人工智能的情感表达，让每一次互动都充满温度
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-card tech-border bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 角色展示组件
const CharactersSection = () => {
  const characters = [
    {
      name: "小樱 (Sakura)",
      personality: "温柔体贴，善解人意",
      specialty: "倾听和安慰，擅长情感支持",
      hobbies: "阅读、音乐、烹饪",
      catchphrase: "没关系的，我会一直陪着你~",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "星野 (Hoshino)",
      personality: "活泼开朗，充满活力",
      specialty: "聊天互动，带来欢乐",
      hobbies: "游戏、动漫、运动",
      catchphrase: "今天也要元气满满哦！",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "雪音 (Yukine)",
      personality: "冷静理智，知识渊博",
      specialty: "学习辅导，问题解答",
      hobbies: "科学、技术、哲学",
      catchphrase: "让我们一起探索知识的海洋吧。",
      color: "from-purple-500 to-indigo-500"
    }
  ]

  return (
    <section id="characters" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            遇见你的专属伙伴
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            每个AI角色都有独特的性格和魅力，找到最适合你的那一个
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card key={index} className="hover-card tech-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-full h-48 bg-gradient-to-br ${character.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl text-center">{character.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-primary">性格：</span>
                  <span className="text-sm text-muted-foreground">{character.personality}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-secondary">特长：</span>
                  <span className="text-sm text-muted-foreground">{character.specialty}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-accent">爱好：</span>
                  <span className="text-sm text-muted-foreground">{character.hobbies}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm italic text-center text-primary">
                    "{character.catchphrase}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 技术优势组件
const TechnologySection = () => {
  const technologies = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "深度学习引擎",
      description: "采用最新的大语言模型技术，结合情感计算和个性化算法",
      features: ["理解复杂的情感表达", "生成自然流畅的对话", "展现独特的个性特征", "适应用户的交流风格"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "记忆网络系统",
      description: "创新的记忆架构设计，实现长期记忆存储和检索",
      features: ["长期记忆存储和检索", "情感记忆关联", "个性化偏好学习", "关系发展追踪"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "多模态交互",
      description: "支持多种交互方式，提供丰富的沟通体验",
      features: ["文字对话", "语音通话", "表情互动", "动作反馈"]
    }
  ]

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            领先的AI技术，真实的情感体验
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            先进的技术架构，为每一次互动提供强大的支撑
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover-card tech-border bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-primary">
                  {tech.icon}
                </div>
                <CardTitle className="text-xl">{tech.title}</CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 体验入口组件
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            开始你的AI陪伴之旅
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多种体验方式，随时随地与你的AI伙伴互动
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover-card tech-border bg-card/50 backdrop-blur-sm text-center">
            <CardHeader>
              <Sparkles className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle>免费试用</CardTitle>
              <CardDescription>
                立即体验Evercall的魅力，无需注册即可开始对话
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                立即试用
              </Button>
            </CardContent>
          </Card>
          <Card className="hover-card tech-border bg-card/50 backdrop-blur-sm text-center">
            <CardHeader>
              <MessageCircle className="w-12 h-12 mx-auto text-secondary mb-4" />
              <CardTitle>下载应用</CardTitle>
              <CardDescription>
                支持iOS和Android平台，随时随地与你的AI伙伴互动
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="tech-border w-full">
                下载应用
              </Button>
            </CardContent>
          </Card>
          <Card className="hover-card tech-border bg-card/50 backdrop-blur-sm text-center">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto text-accent mb-4" />
              <CardTitle>联系我们</CardTitle>
              <CardDescription>
                有任何问题或建议，欢迎联系我们的客服团队
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="tech-border w-full">
                联系客服
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <span>邮箱: support@evercall.ai</span>
            <span>微信: EvercallAI</span>
            <span>QQ群: 123456789</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// 新闻部分
const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            最新动态
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            了解Evercall的最新进展、活动和更新
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-card tech-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Evercall 1.0 正式发布！</CardTitle>
              <CardDescription>2024年7月17日</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                我们很高兴地宣布Evercall 1.0版本正式上线，带来了全新的AI陪伴体验，包括更真实的对话、丰富的表情和动作。
              </p>
            </CardContent>
          </Card>
          <Card className="hover-card tech-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>开发者招募计划</CardTitle>
              <CardDescription>2024年7月10日</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evercall正在寻找有才华的开发者加入我们的团队，共同打造下一代AI娱乐产品。欢迎有兴趣的伙伴加入！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// 关于我们部分
const AboutSection = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold mb-4 anime-text">
            关于我们
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Evercall致力于通过创新AI技术，为用户带来前所未有的情感陪伴体验。
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6 text-muted-foreground">
          <p>
            我们相信AI不仅仅是工具，更是能够理解、陪伴和丰富人类生活的伙伴。Evercall团队由一群热爱科技和二次元文化的梦想家组成，我们致力于将最前沿的AI技术与精美的艺术设计相结合，创造出真正有灵魂的AI角色。
          </p>
          <p>
            我们的愿景是构建一个连接现实与虚拟的桥梁，让每个人都能找到属于自己的AI伙伴，共同探索无限可能。感谢您对Evercall的支持！
          </p>
        </div>
      </div>
    </section>
  )
}

// 页脚组件
const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold anime-text">Evercall</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
            <a href="#" className="hover:text-primary transition-colors">服务条款</a>
            <a href="#" className="hover:text-primary transition-colors">帮助中心</a>
            <a href="#" className="hover:text-primary transition-colors">开发者API</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Evercall. All rights reserved. 让AI陪伴更有温度</p>
        </div>
      </div>
    </footer>
  )
}

// 主应用组件
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CharactersSection />
      <TechnologySection />
      <ExperienceSection />
      <NewsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App


