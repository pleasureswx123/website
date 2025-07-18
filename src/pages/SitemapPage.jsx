import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  Users, 
  Newspaper, 
  Cpu, 
  Play, 
  Info,
  Mail,
  Map,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SitemapPage = () => {
  const siteStructure = [
    {
      category: "主要页面",
      icon: <Home className="size-6" />,
      pages: [
        {
          title: "首页",
          path: "/",
          description: "了解Evercall的核心功能和特色",
          icon: <Home className="size-4" />
        },
        {
          title: "AI角色",
          path: "/characters",
          description: "探索各种个性化的AI角色",
          icon: <Users className="size-4" />
        },
        {
          title: "最新动态",
          path: "/news",
          description: "获取产品更新和公司新闻",
          icon: <Newspaper className="size-4" />
        },
        {
          title: "技术架构",
          path: "/technology",
          description: "深入了解我们的技术实现",
          icon: <Cpu className="size-4" />
        },
        {
          title: "立即体验",
          path: "/experience",
          description: "在线体验AI陪伴服务",
          icon: <Play className="size-4" />
        }
      ]
    },
    {
      category: "公司信息",
      icon: <Info className="size-6" />,
      pages: [
        {
          title: "关于我们",
          path: "/about",
          description: "了解我们的团队、使命和价值观",
          icon: <Info className="size-4" />
        },
        {
          title: "联系我们",
          path: "/contact",
          description: "获取联系方式和技术支持",
          icon: <Mail className="size-4" />
        },
        {
          title: "网站地图",
          path: "/sitemap",
          description: "浏览网站的完整结构",
          icon: <Map className="size-4" />
        }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "产品下载",
      description: "下载移动端和桌面端应用",
      external: true,
      url: "#download"
    },
    {
      title: "开发者文档",
      description: "API文档和SDK资源",
      external: true,
      url: "#docs"
    },
    {
      title: "帮助中心",
      description: "常见问题和使用指南",
      external: true,
      url: "#help"
    },
    {
      title: "社区论坛",
      description: "用户交流和反馈平台",
      external: true,
      url: "#community"
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            网站地图
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            快速浏览和访问Evercall网站的所有页面和功能
          </p>
        </motion.div>

        {/* 网站结构 */}
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="text-primary bg-primary/20 p-3 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold">{section.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.pages.map((page, pageIndex) => (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: pageIndex * 0.1 }}
                  >
                    <Card className="h-full border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-primary bg-primary/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                            {page.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                              {page.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                              {page.description}
                            </p>
                            <Link to={page.path}>
                              <Button variant="outline" size="sm" className="group/btn">
                                访问页面
                                <ArrowRight className="size-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 快速链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="text-primary bg-primary/20 p-3 rounded-lg">
              <ExternalLink className="size-6" />
            </div>
            <h2 className="text-2xl font-bold">快速链接</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 group">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {link.description}
                    </p>
                    <Button variant="outline" size="sm" className="group/btn">
                      访问
                      <ExternalLink className="size-3 ml-2 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 搜索提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="border-slate-700/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">找不到您需要的内容？</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                如果您在网站地图中没有找到所需的页面或功能，
                请尝试使用搜索功能或直接联系我们的客服团队。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Mail className="size-4 mr-2" />
                  联系客服
                </Button>
                <Button variant="outline">
                  <Info className="size-4 mr-2" />
                  帮助中心
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 页面统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-slate-800/50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">主要页面</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {quickLinks.length}
                </div>
                <div className="text-sm text-muted-foreground">快速链接</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {siteStructure.length}
                </div>
                <div className="text-sm text-muted-foreground">功能分类</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">在线服务</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SitemapPage
