import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, PhoneCall, Sparkles } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

export function CTASection() {
  const options = [
    {
      id: 1,
      title: "免费试用",
      description: "立即体验Evercall的魅力，无需注册即可开始对话",
      icon: <Sparkles className="size-5 text-primary" />,
      buttonText: "立即试用",
      delay: 0.1
    },
    {
      id: 2,
      title: "下载应用",
      description: "支持iOS和Android平台，随时随地与你的AI伙伴互动",
      icon: <Download className="size-5 text-primary" />,
      buttonText: "下载应用",
      delay: 0.3
    },
    {
      id: 3,
      title: "联系我们",
      description: "有任何问题或建议，欢迎联系我们的客服团队",
      icon: <PhoneCall className="size-5 text-primary" />,
      buttonText: "联系客服",
      delay: 0.5
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            开始你的AI陪伴之旅
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            多种体验方式，随时随地与你的AI伙伴互动
          </p>
        </AnimatedGroup>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {options.map((option) => (
            <motion.div
              key={option.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: option.delay }}
            >
              <Card className="h-full border border-[#111827]/10 bg-background/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {option.icon}
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">{option.buttonText}</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 