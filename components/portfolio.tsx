"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image:
      "https://img.freepik.com/free-vector/gradient-company-logo-collection_23-2148983378.jpg",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Development",
    image:
      "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
  },
  {
    id: 3,
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065782.jpg",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Marketing",
    image:
      "https://img.freepik.com/free-vector/social-media-marketing-concept-marketing-icons-flat-illustration_1284-52697.jpg",
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Branding",
    image:
      "https://img.freepik.com/free-psd/packaging-design-mock-up-arrangement_23-2149134863.jpg",
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Web Development",
    image:
      "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
  },
];

const categories = [
  "All",
  "Branding",
  "Web Development",
  "UI/UX Design",
  "Marketing",
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleScroll = (direction: "left" | "right") => {
    if (navRef.current) {
      const scrollAmount = 100;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              navRef.current.scrollWidth - navRef.current.clientWidth,
              scrollPosition + scrollAmount
            );
      setScrollPosition(newPosition);
      navRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        setScrollPosition(0);
        navRef.current.scrollTo({ left: 0 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="portfolio"
      className="w-full py-20 bg-light-gray relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-deep-blue relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </motion.h2>

        {/* Overlapping text */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-[20vw] font-bold text-deep-blue opacity-5 whitespace-nowrap">
            PORTFOLIO
          </h2>
        </motion.div>

        <div className="relative mb-12">
          <div className="hidden md:flex justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`mx-2 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category
                    ? "bg-vibrant-orange text-white"
                    : "bg-white text-dark-gray hover:bg-light-blue hover:text-white"
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => handleScroll("left")}
              className="p-2 bg-white rounded-full shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div
              ref={navRef}
              className="flex overflow-x-auto scrollbar-hide mx-2 space-x-2"
              style={{ scrollBehavior: "smooth" }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                    filter === category
                      ? "bg-vibrant-orange text-white"
                      : "bg-white text-dark-gray"
                  } transition-colors duration-300`}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={() => handleScroll("right")}
              className="p-2 bg-white rounded-full shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-deep-blue"
                    >
                      View Project <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-deep-blue group-hover:text-vibrant-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-dark-gray">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
