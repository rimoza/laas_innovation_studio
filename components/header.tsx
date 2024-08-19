"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'About', 'Portfolio', 'Blog', 'Contact'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-deep-blue' : 'text-deep-blue'} transition-colors duration-300`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/logo.png" width={150} height={50} alt="Logo" />
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-full text-sm font-medium ${
                    isScrolled
                      ? 'text-dark-gray hover:text-deep-blue hover:bg-light-blue/10'
                      : 'text-dark-gray hover:text-light-blue hover:bg-white/10'
                  } transition-all duration-300`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
          >
            <Button
              variant="default"
              className={`hidden md:block ${
                isScrolled
                  ? 'bg-vibrant-orange text-white hover:bg-light-blue'
                  : 'bg-vibrant-orange text-white hover:bg-light-blue'
              } rounded-full transition-all duration-300 transform hover:scale-105`}
            >
              Get Started
            </Button>
          </motion.div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
              >
                <Menu className={isScrolled ? 'text-deep-blue' : 'text-deep-blue'} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-medium text-dark-gray hover:text-deep-blue transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    variant="default"
                    className="w-full mt-4 bg-vibrant-orange text-white hover:bg-light-blue rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;