"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Innovators",
    content:
      "Laas Media transformed our online presence. Their innovative designs and cutting-edge solutions have significantly boosted our customer engagement.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, Global Brands",
    content:
      "The team at Laas Media is exceptional. Their creative approach to our branding needs exceeded our expectations and set us apart in a crowded market.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Founder, StartUp Success",
    content:
      "Working with Laas Media was a game-changer for our startup. Their expertise in web development and UI/UX design helped us create a product our users love.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full py-20 gradient-bg-text bg-gradient-to-r from-deep-blue to-light-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect p-8 rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0"
              >
                <div className="md:w-1/3">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto md:mx-0 border-4 border-white shadow-lg"
                  />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-xl mb-6 italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                  <p className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-light-blue">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-deep-blue p-2 rounded-full hover:bg-light-blue hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-deep-blue p-2 rounded-full hover:bg-light-blue hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
