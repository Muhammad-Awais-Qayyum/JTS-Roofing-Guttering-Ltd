import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const works = [
  { src: gallery1, label: 'New Roof Installation', chips: ['Roof', 'Tiles'] },
  { src: gallery2, label: 'Fascias & Soffits', chips: ['Fascias', 'Soffits'] },
  { src: gallery3, label: 'Guttering Work', chips: ['Guttering', 'PVC'] },
  { src: gallery4, label: 'Roof Repair', chips: ['Repair', 'Before/After'] },
  { src: gallery5, label: 'Aerial Roof Install', chips: ['Roof', 'Install'] },
  { src: gallery6, label: 'Gutter Cleaning', chips: ['Gutter', 'Cleaning'] },
];

const Gallery = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">Our Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Our Recent Work
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our completed projects showcasing quality craftsmanship and attention to detail
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {works.map((work, index) => (
            <motion.div
              key={work.label}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-black/10"
            >
              <img
                src={work.src}
                alt={work.label}
                loading="lazy"
                className="w-full h-56 sm:h-64 md:h-[300px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 md:left-5 md:right-5 md:bottom-5">
                <div className="inline-flex items-center gap-2 flex-wrap">
                  {work.chips.map((c) => (
                    <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-white/90 text-foreground backdrop-blur-sm font-medium">{c}</span>
                  ))}
                </div>
                <h3 className="mt-2 md:mt-3 text-white text-base sm:text-lg md:text-xl font-semibold">{work.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-xl md:rounded-2xl p-6 md:p-10 lg:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-sm md:text-base text-primary-foreground/90 mb-5 md:mb-6 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote. Our friendly team is ready to help bring your vision to life.
          </p>
          <Button
            size="lg"
            className="bg-card hover:bg-card/90 text-primary font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base"
            onClick={() => {
              const element = document.getElementById('contact');
              const lenis = (window as any).lenis;
              if (element && lenis) {
                lenis.scrollTo(element, { offset: -80, duration: 1.5 });
              } else if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
