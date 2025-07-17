import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { Sparkles, Book, Music, Gamepad, Heart, Microscope } from 'lucide-react'
import sakuraImage from '@/assets/W3FphURvBkEO.jpg'
import hoshinoImage from '@/assets/XpgPvAyG9prg.jpg'
import yukineImage from '@/assets/T43ub5RMZ9dI.jpg'


const partners = [
  {
    id: 1,
    name: "小樱",
    nameEn: "Sakura",
    personality: "温柔体贴，善解人意",
    specialty: "倾听和安慰，擅长情感支持",
    hobbies: "阅读、音乐、烹饪",
    quote: "没关系的，我会一直陪着你~",
    image: sakuraImage,
    color: "from-pink-300 to-rose-400",
    icons: [<Book key="book" className="size-4" />, <Music key="music" className="size-4" />, <Heart key="heart" className="size-4" />]
  },
  {
    id: 2,
    name: "星野",
    nameEn: "Hoshino",
    personality: "活泼开朗，充满活力",
    specialty: "聊天互动，带来欢乐",
    hobbies: "游戏、动漫、运动",
    quote: "今天也要元气满满哦！",
    image: hoshinoImage,
    color: "from-blue-300 to-indigo-400",
    icons: [<Gamepad key="game" className="size-4" />, <Sparkles key="anime" className="size-4" />, <Heart key="sport" className="size-4" />]
  },
  {
    id: 3,
    name: "雪音",
    nameEn: "Yukine",
    personality: "冷静理智，知识渊博",
    specialty: "学习辅导，问题解答",
    hobbies: "科学、技术、哲学",
    quote: "让我们一起探索知识的海洋吧。",
    image: yukineImage,
    color: "from-sky-300 to-cyan-400",
    icons: [<Microscope key="science" className="size-4" />, <Book key="tech" className="size-4" />, <Sparkles key="philosophy" className="size-4" />]
  }
]

export function Partners() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup preset="slide" className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            遇见你的专属伙伴
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            每个AI角色都有独特的性格和魅力，找到最适合你的那一个
          </p>
        </AnimatedGroup>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <AnimatedGroup key={partner.id} preset="slide" className="h-full">
              <CharacterCard partner={partner} index={index} />
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  )
}

const CharacterCard = ({ partner, index }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-background/30 backdrop-blur-sm border border-[#111827]/10 rounded-3xl overflow-hidden h-full"
    >
      {/* 角色照片区域 */}
      <div className="relative aspect-[1/1] overflow-hidden">
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-b ${partner.color} opacity-20 z-0`}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <img 
          src={partner.image} 
          alt={partner.name} 
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent z-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-30"
        >
          <div>
            <h3 className="text-xl font-semibold">{partner.name}</h3>
            <p className="text-sm text-muted-foreground">{partner.nameEn}</p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm p-1.5 rounded-full">
            <motion.div
              whileHover={{ rotate: 20 }}
              className="text-cyan-400"
            >
              <Sparkles className="size-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* 角色信息区域 */}
      <div className="p-5 space-y-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 * index }}
          className="flex flex-col space-y-3"
        >
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">性格</span>
              <div className="h-px flex-1 mx-2 mt-2 border-b border-dashed border-muted" />
            </div>
            <p className="text-sm">{partner.personality}</p>
          </div>
          
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">特长</span>
              <div className="h-px flex-1 mx-2 mt-2 border-b border-dashed border-muted" />
            </div>
            <p className="text-sm">{partner.specialty}</p>
          </div>
          
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">爱好</span>
              <div className="h-px flex-1 mx-2 mt-2 border-b border-dashed border-muted" />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-sm flex-1">{partner.hobbies}</p>
              <div className="flex space-x-1.5">
                {partner.icons.map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="bg-muted/50 p-1.5 rounded-full text-muted-foreground"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 引用语 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 * index }}
          className="relative mt-4 pt-4 border-t border-border/40"
        >
          <div className="absolute top-4 left-0 text-muted-foreground opacity-20 transform -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7M18 14H14C13.4696 14 12.9609 14.2107 12.5858 14.5858C12.2107 14.9609 12 15.4696 12 16V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V14.5M10 7V14.5C10 15.163 9.73661 15.7989 9.26777 16.2678C8.79893 16.7366 8.16304 17 7.5 17H6C5.33696 17 4.70107 16.7366 4.23223 16.2678C3.76339 15.7989 3.5 15.163 3.5 14.5V9.5C3.5 8.83696 3.76339 8.20107 4.23223 7.73223C4.70107 7.26339 5.33696 7 6 7H10ZM18 14V18.5C18 19.163 17.7366 19.7989 17.2678 20.2678C16.7989 20.7366 16.163 21 15.5 21H14C13.337 21 12.7011 20.7366 12.2322 20.2678C11.7634 19.7989 11.5 19.163 11.5 18.5V13.5C11.5 12.837 11.7634 12.2011 12.2322 11.7322C12.7011 11.2634 13.337 11 14 11H18C18.663 11 19.2989 11.2634 19.7678 11.7322C20.2366 12.2011 20.5 12.837 20.5 13.5V14H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm pl-7 italic">"{partner.quote}"</p>
        </motion.div>
      </div>
    </motion.div>
  )
} 