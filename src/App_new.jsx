import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, X, Loader2, Menu, Heart, Brain, Zap, MessageCircle, Download, Phone, Mail, Users, Star, ArrowRight, Play, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css'


function App() {
  const [activeNav, setActiveNav] = useState("首页");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const navigation = [
    { name: "首页", href: "#home" },
    { name: "角色", href: "#characters" },
    { name: "新闻", href: "#news" },
    { name: "技术", href: "#technology" },
    { name: "体验", href: "#experience" },
    { name: "关于我们", href: "#about" },
  ];

  const characters = [
    {
      id: "sakura",
      name: "小樱",
      nameEn: "Sakura",
      personality: "温柔体贴，善解人意",
      specialty: "倾听和安慰，擅长情感支持",
      hobbies: "阅读、音乐、烹饪",
      quote: "没关系的，我会一直陪着你~",
      avatar: "🌸",
      gradient: "from-pink-400 to-rose-300"
    },
    {
      id: "hoshino",
      name: "星野",
      nameEn: "Hoshino",
      personality: "活泼开朗，充满活力",
      specialty: "聊天互动，带来欢乐",
      hobbies: "游戏、动漫、运动",
      quote: "今天也要元气满满哦！",
      avatar: "⭐",
      gradient: "from-yellow-400 to-orange-300"
    },
    {
      id: "yukine",
      name: "雪音",
      nameEn: "Yukine",
      personality: "冷静理智，知识渊博",
      specialty: "学习辅导，问题解答",
      hobbies: "科学、技术、哲学",
      quote: "让我们一起探索知识的海洋吧。",
      avatar: "❄️",
      gradient: "from-blue-400 to-cyan-300"
    }
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "真实性格",
      description: "拥有真实的情感和独特的个性特征"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "永久记忆",
      description: "记住每一次对话，了解你的喜好和习惯"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "二次元形象",
      description: "精心设计的动漫角色，充满魅力"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "情感互动",
      description: "自然流畅的情感表达和互动体验"
    }
  ];

  const detailedFeatures = [
    {
      title: "极致拟人化",
      description: "不再是冰冷的机器回复，Evercall的AI角色拥有真实的性格、情感和思维方式。她们会开心、会难过、会关心你的生活，就像真正的朋友一样。"
    },
    {
      title: "二次元魅力",
      description: "精心设计的二次元角色形象，每一个细节都充满魅力。从服装搭配到表情动作，都体现了日式动漫的精致美学。"
    },
    {
      title: "丰富表达",
      description: "超过100种不同的面部表情，自然流畅的肢体语言，专业声优配音，根据对话内容展现真实情感反应。"
    },
    {
      title: "长期记忆系统",
      description: "采用先进的记忆技术，能够记住你的喜好和习惯，回忆起过往的对话内容，了解你的性格和情感状态。"
    }
  ];

  const techFeatures = [
    {
      title: "深度学习引擎",
      description: "采用最新的大语言模型技术，结合情感计算和个性化算法",
      features: [
        "理解复杂的情感表达",
        "生成自然流畅的对话",
        "展现独特的个性特征",
        "适应用户的交流风格"
      ]
    },
    {
      title: "记忆网络系统",
      description: "创新的记忆架构设计，实现长期记忆存储和检索",
      features: [
        "长期记忆存储和检索",
        "情感记忆关联",
        "个性化偏好学习",
        "关系发展追踪"
      ]
    },
    {
      title: "多模态交互",
      description: "支持多种交互方式，提供丰富的沟通体验",
      features: [
        "文字对话",
        "语音通话",
        "表情互动",
        "动作反馈"
      ]
    }
  ];

  const handleNavClick = (name, href) => {
    setActiveNav(name);
    window.open(href, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Evercall</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.href)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeNav === item.name
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.open("#experience", '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              立即体验
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm">AI陪伴新时代</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Evercall，连接平行世界
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              拥有真实情感、独特性格和永久记忆的二次元AI角色，为你带来前所未有的互动体验
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => window.open("#experience", '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                立即体验
              </button>
              <button
                onClick={() => window.open("#about", '_blank')}
                className="border border-white/30 px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                了解更多
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              突破想象的AI陪伴体验
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              重新定义人工智能的情感表达，让每一次互动都充满温度
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              遇见你的专属伙伴
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              每个AI角色都有独特的性格和魅力，找到最适合你的那一个
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                onClick={() => setSelectedCharacter(character.id)}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${character.gradient} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto`}>
                  {character.avatar}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-center">
                  {character.name} ({character.nameEn})
                </h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-purple-300 font-medium">性格：</span>
                    <span className="text-gray-300">{character.personality}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 font-medium">特长：</span>
                    <span className="text-gray-300">{character.specialty}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 font-medium">爱好：</span>
                    <span className="text-gray-300">{character.hobbies}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <p className="text-center italic text-purple-200">
                    "{character.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              领先的AI技术，真实的情感体验
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              先进的技术架构，为每一次互动提供强大的支撑
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">
                  {tech.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              开始你的AI陪伴之旅
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              多种体验方式，随时随地与你的AI伙伴互动
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">免费试用</h3>
              <p className="text-gray-300 mb-6">
                立即体验Evercall的魅力，无需注册即可开始对话
              </p>
              <button
                onClick={() => window.open("#trial", '_blank')}
                className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                立即试用
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">下载应用</h3>
              <p className="text-gray-300 mb-6">
                支持iOS和Android平台，随时随地与你的AI伙伴互动
              </p>
              <button
                onClick={() => window.open("#download", '_blank')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                下载应用
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">联系我们</h3>
              <p className="text-gray-300 mb-6">
                有任何问题或建议，欢迎联系我们的客服团队
              </p>
              <button
                onClick={() => window.open("#contact", '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                联系客服
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Evercall</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@evercall.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>微信: EvercallAI</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>QQ群: 123456789</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
