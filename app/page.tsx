import Portfolio from '@/components/portfolio';
import Testimonial from '@/components/testimonial';
import ContactForm from '@/components/contactForm';
import AnimatedContent from '@/components/animatedContent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedContent />
      
      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}