import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Video, 
  Heart, 
  Sparkles, 
  Play,
  Download,
  Smartphone,
  Monitor,
  Headphones
} from 'lucide-react'
import { motion } from 'framer-motion'

const ExperiencePage = () => {
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: '你好！我是小樱，很高兴认识你！今天过得怎么样呢？',
      timestamp: '14:30'
    }
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages([...chatMessages, newMessage])
      setMessage('')
      
      // 模拟AI回复
      setTimeout(() => {
        const aiReply = {
          id: chatMessages.length + 2,
          type: 'ai',
          content: '谢谢你的分享！我很开心能和你聊天。你想聊什么话题呢？',
          timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
        }
        setChatMessages(prev => [...prev, aiReply])
      }, 1000)
    }
  }

  const platforms = [
    {
      icon: <Smartphone className="size-8" />,
      name: "移动端",
      description: "iOS & Android 原生应用",
      features: ["触屏交互", "语音识别", "推送通知", "离线模式"],
      status: "已上线"
    },
    {
      icon: <Monitor className="size-8" />,
      name: "桌面端",
      description: "Windows, macOS, Linux",
      features: ["高清渲染", "多窗口", "快捷键", "文件传输"],
      status: "已上线"
    },
    {
      icon: <Headphones className="size-8" />,
      name: "VR/AR",
      description: "沉浸式虚拟现实体验",
      features: ["3D交互", "手势识别", "空间音频", "全身追踪"],
      status: "开发中"
    }
  ]

  const features = [
    {
      icon: <MessageCircle className="size-6" />,
      title: "智能对话",
      description: "自然流畅的对话体验，理解上下文和情感"
    },
    {
      icon: <Video className="size-6" />,
      title: "视频通话",
      description: "高清视频通话，实时表情和动作同步"
    },
    {
      icon: <Mic className="size-6" />,
      title: "语音交互",
      description: "支持语音输入和输出，多种音色选择"
    },
    {
      icon: <Heart className="size-6" />,
      title: "情感陪伴",
      description: "理解你的情感状态，提供贴心的陪伴"
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
            立即体验
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            开始你的AI陪伴之旅，体验前所未有的情感交流和智能互动
          </p>
        </motion.div>

        {/* 在线体验区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">在线体验</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-700/30">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Sparkles className="size-6 text-primary" />
                  与小樱对话
                </CardTitle>
                <p className="text-muted-foreground">体验真实的AI情感交流</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* 角色展示 */}
                  <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="size-24 text-slate-400 mx-auto mb-4" />
                        <p className="text-muted-foreground">小樱正在等待与你对话</p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm">
                        <Video className="size-4 mr-2" />
                        视频通话
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mic className="size-4 mr-2" />
                        语音通话
                      </Button>
                    </div>
                  </div>

                  {/* 聊天界面 */}
                  <div className="space-y-4">
                    <div className="h-80 bg-slate-900/50 rounded-lg p-4 overflow-y-auto space-y-3">
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              msg.type === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-slate-800 text-foreground'
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="输入你想说的话..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* 功能特性 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">体验特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 平台支持 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">多平台支持</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-primary mx-auto mb-4">
                      {platform.icon}
                    </div>
                    <CardTitle className="flex items-center justify-center gap-2">
                      {platform.name}
                      <Badge variant={platform.status === '已上线' ? 'default' : 'secondary'}>
                        {platform.status}
                      </Badge>
                    </CardTitle>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {platform.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-4" 
                      variant={platform.status === '已上线' ? 'default' : 'outline'}
                      disabled={platform.status !== '已上线'}
                    >
                      {platform.status === '已上线' ? (
                        <>
                          <Download className="size-4 mr-2" />
                          立即下载
                        </>
                      ) : (
                        '敬请期待'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 开始体验 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">准备好开始了吗？</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              加入数百万用户的行列，体验革命性的AI陪伴服务。无论是日常聊天、情感支持还是学习陪伴，
              Evercall都能为你提供最贴心的服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Play className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                立即开始体验
              </Button>
              <Button size="lg" variant="outline">
                <Download className="size-5 mr-2" />
                下载应用
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ExperiencePage
