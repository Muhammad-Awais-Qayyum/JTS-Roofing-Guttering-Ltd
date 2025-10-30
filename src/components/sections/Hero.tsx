import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageSquare, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-roofing.jpg';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const lenis = (window as any).lenis;

    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.5,
      });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6"
          >
            Your Local Roofing & Guttering Experts in St Albans
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8"
          >
            Fast, reliable, and fully insured. From minor repairs to full installations — we've got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              onClick={() => window.location.href = 'tel:+441234567890'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              asChild
            >
              <a href="/quote">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get a Free Quote
              </a>
            </Button>
          </motion.div>

          {/* Trust badges removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
