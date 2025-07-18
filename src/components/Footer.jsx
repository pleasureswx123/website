import React from 'react'

export function Footer() {
  const links = [
    { text: "隐私政策", href: "#" },
    { text: "服务条款", href: "#" },
    { text: "帮助中心", href: "#" },
    { text: "开发者API", href: "#" }
  ]

  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Evercall</h3>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2024 Evercall. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
