import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laas Innovation Studio</h3>
            <p className="mb-4">Where Creativity Meets Technology</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-light-blue"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-light-blue"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-light-blue"><Instagram size={24} /></Link>
              <Link href="#" className="hover:text-light-blue"><Linkedin size={24} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-light-blue">Logo Design</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Brand Design</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Web Development</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Social Media Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-light-blue">About Us</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Blog</Link></li>
              <li><Link href="#" className="hover:text-light-blue">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Hargeisa, Somaliland</p>
            <p className="mb-2">Phone: (+252) 63 621 5080</p>
            <p>Email: info@laasmedia.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2024 Laas Innovation Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;