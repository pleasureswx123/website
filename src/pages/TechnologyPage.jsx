import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Brain, Cpu, Database, Shield, Zap, Network, Code, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const TechnologyPage = () => {
  const technologies = [
    {
      icon: <Brain className="size-8" />,
      title: "深度学习引擎",
      description: "基于最新的Transformer架构，结合情感计算和自然语言处理技术，让AI拥有真实的情感理解能力。",
      features: ["情感识别", "语义理解", "上下文记忆", "个性化学习"],
      color: "text-blue-400"
    },
    {
      icon: <Sparkles className="size-8" />,
      title: "实时渲染系统",
      description: "采用先进的3D渲染技术和动作捕捉算法，实现角色的实时表情和动作生成，带来沉浸式的视觉体验。",
      features: ["实时表情", "动作同步", "光影效果", "高清渲染"],
      color: "text-purple-400"
    },
    {
      icon: <Database className="size-8" />,
      title: "记忆存储架构",
      description: '创新的分层记忆系统，能够长期保存对话历史和用户偏好，让AI角色真正"记住"你。',
      features: ["长期记忆", "情感关联", "偏好学习", "智能检索"],
      color: "text-green-400"
    },
    {
      icon: <Shield className="size-8" />,
      title: "隐私保护技术",
      description: "采用端到端加密和联邦学习技术，确保用户数据安全，所有敏感信息都在本地处理。",
      features: ["端到端加密", "本地处理", "匿名化", "安全审计"],
      color: "text-red-400"
    },
    {
      icon: <Zap className="size-8" />,
      title: "低延迟优化",
      description: "通过模型压缩和边缘计算技术，实现毫秒级响应，让对话更加自然流畅。",
      features: ["模型压缩", "边缘计算", "智能缓存", "负载均衡"],
      color: "text-yellow-400"
    },
    {
      icon: <Network className="size-8" />,
      title: "分布式架构",
      description: "基于微服务和容器化技术构建的可扩展架构，支持海量用户同时在线使用。",
      features: ["微服务", "容器化", "自动扩容", "故障恢复"],
      color: "text-cyan-400"
    }
  ]

  const techStack = [
    { name: "PyTorch", category: "深度学习" },
    { name: "TensorFlow", category: "机器学习" },
    { name: "CUDA", category: "GPU计算" },
    { name: "React", category: "前端框架" },
    { name: "Node.js", category: "后端服务" },
    { name: "WebRTC", category: "实时通信" },
    { name: "Docker", category: "容器化" },
    { name: "Kubernetes", category: "容器编排" },
    { name: "Redis", category: "缓存系统" },
    { name: "PostgreSQL", category: "数据库" },
    { name: "WebGL", category: "3D渲染" },
    { name: "WebAssembly", category: "性能优化" }
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
            技术架构
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            探索Evercall背后的先进技术，了解我们如何通过创新的AI技术栈打造真实的情感陪伴体验
          </p>
        </motion.div>

        {/* 核心技术 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">核心技术</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-700/30 hover:border-slate-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${tech.color} bg-slate-900/50 p-3 rounded-lg`}>
                        {tech.icon}
                      </div>
                      <CardTitle className="text-xl">{tech.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">核心特性：</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 技术栈 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">技术栈</h2>
          <div className="bg-slate-800/50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-900/50 rounded-lg p-4 text-center hover:bg-slate-900/70 transition-colors"
                >
                  <div className="font-semibold text-sm mb-1">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 性能指标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">性能指标</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "响应延迟", value: "<50ms", description: "毫秒级响应速度" },
              { metric: "并发用户", value: "100万+", description: "同时在线支持" },
              { metric: "准确率", value: "99.5%", description: "情感识别准确率" },
              { metric: "可用性", value: "99.9%", description: "系统稳定性" }
            ].map((stat, index) => (
              <motion.div
                key={stat.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-slate-700/30">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold mb-1">{stat.metric}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 开发者资源 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <Code className="size-16 text-slate-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">开发者资源</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              我们提供完整的API文档、SDK和开发工具，帮助开发者快速集成Evercall的AI能力到自己的应用中。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                查看API文档
              </Button>
              <Button variant="outline">
                下载SDK
              </Button>
              <Button variant="outline">
                开发者社区
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechnologyPage
