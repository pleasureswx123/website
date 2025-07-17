import React, { useEffect, useRef, useState } from 'react';
import './DynamicBackground.css';

const DynamicBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 添加鼠标移动监听
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({
  //       x: event.clientX,
  //       y: event.clientY
  //     });
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);
    
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  
  // 初始化发光轨迹
  useEffect(() => {
    const trailsContainer = document.querySelector('.trails-container');
    if (!trailsContainer) return;
    
    // 创建多条轨迹
    for (let i = 0; i < 3; i++) {
      const trail = document.createElement('div');
      trail.classList.add('glow-trail');
      trail.style.left = `${Math.random() * 100}%`;
      trail.style.animationDelay = `${Math.random() * 5}s`;
      trail.style.height = `${100 + Math.random() * 50}px`;
      trail.style.opacity = `${Math.random() * 0.1}`;
      trailsContainer.appendChild(trail);
    }
    
    // 创建呼吸光晕
    for (let i = 0; i < 6; i++) {
      const glow = document.createElement('div');
      glow.classList.add('breathing-glow');
      glow.style.width = `${150 + Math.random() * 200}px`;
      glow.style.height = `${150 + Math.random() * 200}px`;
      glow.style.left = `${Math.random() * 100}%`;
      glow.style.top = `${Math.random() * 100}%`;
      glow.style.animationDelay = `${Math.random() * 5}s`;
      trailsContainer.appendChild(glow);
    }
  }, []);
  
  // 处理Canvas动画
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // 设置canvas尺寸为窗口大小
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // 粒子设置
    const particlesArray = [];
    const numberOfParticles = 80;
    
    // 粒子类
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#8b5cf6';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // 受鼠标位置影响
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.speedX += dx * force * 0.02;
          this.speedY += dy * force * 0.02;
        }
        
        // 限制最大速度
        const maxSpeed = 2;
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (currentSpeed > maxSpeed) {
          this.speedX = (this.speedX / currentSpeed) * maxSpeed;
          this.speedY = (this.speedY / currentSpeed) * maxSpeed;
        }
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // 边界检查
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    // 初始化粒子
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    // 动画函数
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制半透明背景，而不是完全清除，这样会产生拖尾效果
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 更新和绘制粒子
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // 绘制连线
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // 粒子连线函数
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x, 
              particlesArray[a].y, 
              particlesArray[b].x, 
              particlesArray[b].y
            );
            
            gradient.addColorStop(0, particlesArray[a].color);
            gradient.addColorStop(1, particlesArray[b].color);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity * 0.2;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };
    
    animate();
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);
  
  return (
    <div className="dynamic-background-container">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ opacity: 0.8 }}
      />
      <div className="trails-container"></div>
      <div className="gradient-overlay"></div>
      <div className="noise-texture"></div>
      {/* <div className="light-beam"></div> */}
    </div>
  );
};

export default DynamicBackground; 