import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Home, Droplets, Square, AlertCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const serviceCards = [
  { 
    image: gallery3, 
    icon: Wrench,
    label: 'Roof Repairs', 
    description: 'Expert repairs for leaks, damaged tiles, and storm damage',
    chips: ['Leaks', 'Tiles', 'Repairs'] 
  },
  { 
    image: gallery4, 
    icon: Home,
    label: 'New Roof Installations', 
    description: 'Complete roof installations for pitched and flat roofs',
    chips: ['Pitched', 'Flat', 'New Build'] 
  },
  { 
    image: gallery5, 
    icon: Droplets,
    label: 'Guttering & Drainage', 
    description: 'Professional guttering installation and maintenance',
    chips: ['PVC', 'Seamless', 'Maintenance'] 
  },
  { 
    image: gallery2, 
    icon: Square,
    label: 'Fascias & Soffits', 
    description: 'Quality uPVC fascias and soffit installations',
    chips: ['uPVC', 'Cladding', 'Replacement'] 
  },
  { 
    image: gallery6, 
    icon: AlertCircle,
    label: 'Emergency Callouts', 
    description: 'Rapid response for urgent roofing emergencies',
    chips: ['24/7', 'Storm Damage', 'Fast'] 
  },
];

const features = [
  'Free quotes and assessments',
  'Competitive pricing',
  'Quality materials',
  'Experienced team',
  'Clean work sites',
  'Guaranteed workmanship',
];

const Services = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            From minor repairs to complete installations, we offer comprehensive roofing solutions
          </p>
        </motion.div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {serviceCards.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      loading="lazy" 
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                    </div>

                    {/* Chips */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {item.chips.map((c) => (
                        <span 
                          key={c} 
                          className="px-2.5 py-1 text-xs rounded-full bg-white/90 text-foreground backdrop-blur-sm font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      {item.description}
                    </p>
                
                  </div>
                </CardContent>
              </Card>
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
            Need a Roofing Service?
          </h3>
          <p className="text-sm md:text-base text-primary-foreground/90 mb-5 md:mb-6 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote. Our friendly team is ready to help.
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

export default Services;