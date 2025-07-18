import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Globe,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="size-8" />,
      title: "以人为本",
      description: "我们相信技术应该服务于人类的情感需求，让每个人都能感受到温暖和陪伴。",
      color: "text-red-400"
    },
    {
      icon: <Lightbulb className="size-8" />,
      title: "持续创新",
      description: "不断探索AI技术的边界，为用户带来更加真实和智能的交互体验。",
      color: "text-yellow-400"
    },
    {
      icon: <Users className="size-8" />,
      title: "用户至上",
      description: "倾听用户的声音，根据用户需求不断改进产品，提供最优质的服务。",
      color: "text-blue-400"
    },
    {
      icon: <Globe className="size-8" />,
      title: "开放包容",
      description: "拥抱多元文化，为全球用户提供个性化的AI陪伴服务。",
      color: "text-green-400"
    }
  ]

  const team = [
    {
      name: "张明",
      role: "创始人 & CEO",
      description: "前Google AI研究员，专注于自然语言处理和情感计算领域10年。",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "李雪",
      role: "技术总监",
      description: "前Microsoft资深工程师，在大规模分布式系统和机器学习方面有丰富经验。",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "王浩",
      role: "产品总监",
      description: "前腾讯产品经理，深度理解用户需求，擅长打造极致的用户体验。",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "陈美",
      role: "设计总监",
      description: "前Apple设计师，在UI/UX设计和3D建模方面有着深厚的造诣。",
      avatar: "/api/placeholder/150/150"
    }
  ]

  const milestones = [
    {
      year: "2023",
      title: "公司成立",
      description: "Evercall正式成立，获得天使轮投资"
    },
    {
      year: "2023",
      title: "产品发布",
      description: "Evercall 1.0正式发布，首批用户突破10万"
    },
    {
      year: "2024",
      title: "技术突破",
      description: "情感引擎2.0发布，用户数突破100万"
    },
    {
      year: "2024",
      title: "国际化",
      description: "产品支持多语言，开始全球化布局"
    }
  ]

  const stats = [
    { number: "100万+", label: "注册用户" },
    { number: "50+", label: "团队成员" },
    { number: "10+", label: "AI角色" },
    { number: "99.9%", label: "服务可用性" }
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
            关于我们
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            我们是一群充满激情的技术专家和创新者，致力于通过先进的AI技术为人类带来更好的情感陪伴体验
          </p>
        </motion.div>

        {/* 公司使命 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-8 md:p-12 text-center">
            <Target className="size-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              让每个人都能拥有一个真正理解自己的AI伙伴。我们相信，在这个快节奏的世界里，
              每个人都需要一个可以倾诉、可以陪伴、可以理解的朋友。通过先进的AI技术，
              我们要打破人与机器之间的界限，创造真正有温度的人工智能。
            </p>
          </div>
        </motion.div>

        {/* 核心价值观 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className={`${value.color} mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 团队介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="size-8 text-slate-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <Badge variant="outline" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 发展历程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <Card className="border-slate-700/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline">{milestone.year}</Badge>
                          <h3 className="font-semibold text-lg">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 联系我们 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">联系我们</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="size-5 text-primary" />
                <span>contact@evercall.ai</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="size-5 text-primary" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="size-5 text-primary" />
                <span>北京市朝阳区</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">
                <Linkedin className="size-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Github className="size-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="size-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
