"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Users, Lightbulb, Target } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedContent = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={ref}
        className="relative w-full min-h-screen flex items-center justify-center gradient-bg-text bg-gradient-to-r from-deep-blue to-light-blue text-white overflow-hidden px-4"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              "radial-gradient(circle, #ffffff 2px, transparent 2px)",
            ],
            backgroundSize: ["20px 20px", "30px 30px"],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Where Creativity Meets Technology
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            Transform your ideas into digital reality with Laas Innovation Studio&apos;s
            innovative design, cutting-edge technology, and strategic marketing
            solutions.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button className="bg-vibrant-orange text-white hover:bg-light-blue text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full py-20 bg-light-gray section-padding relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-deep-blue relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>

          {/* Overlapping text */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-[20vw] font-bold text-deep-blue opacity-5 whitespace-nowrap">
              SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              {
                name: "Logo Design",
                image:
                  "https://img.freepik.com/free-vector/gradient-golden-luxury-logo-template_23-2149083629.jpg",
                description:
                  "Create a unique and memorable brand identity with our expert logo design services.",
              },
              {
                name: "Brand Design",
                image:
                  "https://img.freepik.com/free-vector/flat-design-ui-ux-background-illustrated_23-2149052117.jpg",
                description:
                  "Develop a cohesive brand strategy and visual language that resonates with your audience.",
              },
              {
                name: "Web Development",
                image:
                  "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
                description:
                  "Build responsive, user-friendly websites that drive engagement and conversions.",
              },
              {
                name: "Social Media Marketing",
                image:
                  "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148423282.jpg",
                description:
                  "Boost your online presence and engage with your audience through strategic social media campaigns.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-deep-blue group-hover:text-vibrant-orange transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-dark-gray mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-vibrant-orange group-hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="w-full py-20 bg-light-gray relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-deep-blue relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>

          {/* Overlapping image */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="https://img.freepik.com/free-photo/abstract-blue-extruded-cubes-background-3d-render_33739-396.jpg"
              alt="Abstract background"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg"
                  alt="About Laas Innovation Studio"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-deep-blue">
                Our Story
              </h3>
              <p className="text-lg mb-6 text-dark-gray">
                Laas Innovation Studio is a forward-thinking creative agency that combines
                artistic flair with technical expertise. Founded on the
                principle of continuous innovation, we strive to stay ahead of
                the curve in design trends and technological advancements.
              </p>
              <p className="text-lg mb-6 text-dark-gray">
                Our mission is to empower businesses and individuals with
                cutting-edge digital solutions that drive growth and success in
                the modern marketplace.
              </p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  { icon: Users, label: "Expert Team" },
                  { icon: Lightbulb, label: "Innovative Solutions" },
                  { icon: Target, label: "Client-Focused" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-vibrant-orange text-white p-3 rounded-full mb-2">
                      <item.icon size={24} />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-deep-blue text-white hover:bg-light-blue transition-colors duration-300">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedContent;
