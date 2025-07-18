import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里处理表单提交逻辑
    console.log('Form submitted:', formData)
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="size-6" />,
      title: "邮箱地址",
      content: "contact@evercall.ai",
      description: "我们会在24小时内回复您的邮件"
    },
    {
      icon: <Phone className="size-6" />,
      title: "客服热线",
      content: "400-123-4567",
      description: "工作日 9:00-18:00 为您服务"
    },
    {
      icon: <MapPin className="size-6" />,
      title: "公司地址",
      content: "北京市朝阳区科技园区",
      description: "欢迎预约参观我们的办公室"
    },
    {
      icon: <Clock className="size-6" />,
      title: "工作时间",
      content: "周一至周五 9:00-18:00",
      description: "节假日我们也会及时回复消息"
    }
  ]

  const supportOptions = [
    {
      icon: <MessageCircle className="size-8" />,
      title: "在线客服",
      description: "实时聊天，快速解决问题",
      action: "开始聊天",
      color: "text-blue-400"
    },
    {
      icon: <Headphones className="size-8" />,
      title: "技术支持",
      description: "专业技术团队为您解答",
      action: "联系技术",
      color: "text-green-400"
    },
    {
      icon: <FileText className="size-8" />,
      title: "帮助文档",
      description: "详细的使用指南和FAQ",
      action: "查看文档",
      color: "text-purple-400"
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
            联系我们
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            有任何问题或建议？我们很乐意听到您的声音，并为您提供最好的服务
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-slate-700/30">
              <CardHeader>
                <CardTitle className="text-2xl">发送消息</CardTitle>
                <p className="text-muted-foreground">
                  填写下面的表单，我们会尽快回复您
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱 *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="请输入您的邮箱"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">主题 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="请输入消息主题"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">消息内容 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="请详细描述您的问题或建议..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="size-4 mr-2" />
                    发送消息
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* 联系方式 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">联系方式</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-primary bg-primary/20 p-3 rounded-lg">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-lg mb-1">{info.content}</p>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 其他支持选项 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">其他支持方式</h2>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-slate-700/30 hover:border-slate-600/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`${option.color}`}>
                              {option.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">{option.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {option.description}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            {option.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 地图区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="border-slate-700/30">
            <CardHeader>
              <CardTitle>找到我们</CardTitle>
              <p className="text-muted-foreground">
                我们的办公室位于北京市朝阳区，欢迎预约参观
              </p>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-muted-foreground">地图加载中...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    北京市朝阳区科技园区
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 常见问题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">常见问题</h3>
            <p className="text-muted-foreground mb-6">
              在联系我们之前，您可以先查看我们的常见问题解答，
              也许能够快速找到您需要的答案。
            </p>
            <Button variant="outline">
              <FileText className="size-4 mr-2" />
              查看FAQ
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
