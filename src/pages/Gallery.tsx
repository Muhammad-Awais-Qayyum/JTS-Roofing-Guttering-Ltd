import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Gallery from '@/components/sections/Gallery';

const GalleryPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });

  return (
    <div className="min-h-screen bg-background">
      <Header />
    
      <main  className='pt-20'>
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;


