import React from "react";
import { Link } from "react-router-dom";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const logo = {
    url: "/",
    alt: "Evercall",
    title: "Evercall",
  };

  const menu = [
    { title: "首页", url: "/" },
    { title: "角色", url: "/characters" },
    { title: "新闻", url: "/news" },
    { title: "技术", url: "/technology" },
    { title: "体验", url: "/experience" },
    { title: "关于我们", url: "/about" },
    // {
    //   title: "产品",
    //   url: "#",
    //   items: [
    //     {
    //       title: "产品介绍",
    //       description: "了解我们的产品特点和优势",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "/products",
    //     },
    //     {
    //       title: "解决方案",
    //       description: "针对不同行业的专业解决方案",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "/solutions",
    //     },
    //     {
    //       title: "客户案例",
    //       description: "查看我们的成功案例",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "/cases",
    //     },
    //     {
    //       title: "技术支持",
    //       description: "获取专业的技术支持和服务",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "/support",
    //     },
    //   ],
    // },
    // {
    //   title: "资源",
    //   url: "#",
    //   items: [
    //     {
    //       title: "帮助中心",
    //       description: "获取您需要的所有帮助",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "/help",
    //     },
    //     {
    //       title: "联系我们",
    //       description: "我们随时为您解答任何问题",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "/contact",
    //     },
    //     {
    //       title: "服务状态",
    //       description: "检查我们的服务和API的当前状态",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "/status",
    //     },
    //     {
    //       title: "服务条款",
    //       description: "我们的服务条款和使用条件",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "/terms",
    //     },
    //   ],
    // },
    // {
    //   title: "价格",
    //   url: "/pricing",
    // },
    // {
    //   title: "博客",
    //   url: "/blog",
    // },
  ];

  const mobileExtraLinks = [
    { name: "新闻", url: "/news" },
    { name: "联系", url: "/contact" },
    { name: "关于我们", url: "/about" },
    { name: "网站地图", url: "/sitemap" },
  ];

  const tryBtn = {
    btn: { text: "立即体验", url: "/experience" },
  };
  const auth = {
    // login: { text: "登录", url: "/login" },
    // signup: { text: "注册", url: "/signup" },
  };

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container max-w-7xl mx-auto px-4">
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-6">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src="/logo.png" alt="Evercall" className="w-42" />
              {/*<span className="text-lg font-semibold">{logo.title}</span>*/}
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

          <div className="flex gap-2">
            {tryBtn && (
              <Button asChild variant="outline" size="sm">
                <Link to={tryBtn.btn.url}>{tryBtn.btn.text}</Link>
              </Button>
            )}
            {auth && auth.login && (
              <Button asChild variant="outline" size="sm">
                <a href={auth.login.url}>{auth.login.text}</a>
              </Button>
            )}
            {auth && auth.signup && (
              <Button asChild size="sm">
                <a href={auth.signup.url}>{auth.signup.text}</a>
              </Button>
            )}
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src="/logo.png" alt="Evercall" className="w-8 h-8" />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src="/logo.png" alt="Evercall" className="w-8 h-8" />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          to={link.url}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {tryBtn && (
                      <Button asChild>
                        <Link to={tryBtn.btn.url}>{tryBtn.btn.text}</Link>
                      </Button>
                    )}
                    {auth && auth.login && (
                      <Button asChild variant="outline">
                        <a href={auth.login.url}>{auth.login.text}</a>
                      </Button>
                    )}
                    {auth && auth.signup && (
                      <Button asChild>
                        <a href={auth.signup.url}>{auth.signup.text}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      to={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="font-semibold">
      {item.title}
    </Link>
  );
};

export default Navbar;
