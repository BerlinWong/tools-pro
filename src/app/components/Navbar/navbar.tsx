"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Home, Info, PocketKnife, BotMessageSquare } from "lucide-react";
import { DarkModeToggle } from "@/app/components/Navbar/dark-mode-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-screen bg-white bg-opacity-50 backdrop-blur-md text-black dark:bg-gray-800 dark:bg-opacity-50 dark:backdrop-blur-md dark:text-white shadow-md min-h-[64px] flex items-center fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href={"/"}>Tools Pro</Link>
        </h1>
        <button
          className="md:hidden text-black dark:text-white"
          onClick={toggleMenu}
        >
          菜单
        </button>
        <NavigationMenu
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center justify-center`}
        >
          <NavigationMenuList className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center items-center">
            <NavigationMenuItem className="flex items-center justify-center">
              <DarkModeToggle />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-2",
                  "dark:text-white dark:hover:text-gray-300"
                )}
              >
                <Home className="w-5 h-5" />
                <Link href={"/pages/Error404"}>Prompts</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-2",
                  "text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 "
                )}
              >
                <PocketKnife className="w-5 h-5" />
                <Link href={"/pages/XiaoHongShuPage"}>小红书解析</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-2",
                  "text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 "
                )}
              >
                <BotMessageSquare className="w-5 h-5" />
                <button>Chat</button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-2",
                  "text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 "
                )}
              >
                <Info className="w-5 h-5" />
                <button>关于</button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="border-l border-gray-300 h-6 mx-3 hidden md:block"></div>
          <div className="flex items-center space-x-2 min-w-6 w-[64px]">
            <div className="flex items-center space-x-2">
              <SignedIn>
                <UserButton showName />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          </div>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
