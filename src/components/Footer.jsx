import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Users } from 'lucide-react'

export function Footer() {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="size-4 text-primary" />,
      text: "邮箱: support@evercall.ai"
    },
    {
      id: 2,
      icon: <MessageCircle className="size-4 text-primary" />,
      text: "微信: EvercallAI"
    },
    {
      id: 3,
      icon: <Users className="size-4 text-primary" />,
      text: "QQ群: 123456789"
    }
  ]

  const links = [
    { id: 1, text: "隐私政策", href: "#" },
    { id: 2, text: "服务条款", href: "#" },
    { id: 3, text: "帮助中心", href: "#" },
    { id: 4, text: "开发者API", href: "#" }
  ]

  return (
    <footer className="py-12 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* 联系信息 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            {contactInfo.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="bg-primary/10 p-1.5 rounded-full">
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* 链接 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </motion.div>

          {/* 版权信息 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-2">
              <span
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                <img src="/logo.png" alt="Evercall" className="w-28"/>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Evercall. All rights reserved. 让AI陪伴更有温度
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
