import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Award, Shield, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Proven track record of excellence',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete peace of mind',
  },
  {
    icon: Users,
    title: 'Family-Run Business',
    description: 'Personal care and attention',
  },
];

const values = [
  'Honest advice, no pressure',
  'Clean and tidy workmanship',
  'Fair pricing, no hidden costs',
  'Guaranteed quality work',
];

const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, margin: '-50px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">About Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted Family-Run Roofers
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
              At JTS Roofing & Guttering Ltd, we bring over a decade of roofing experience to every job. Our small family-run team prides itself on honest advice, tidy work, and consistent quality — no shortcuts, ever.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Based in St Albans, we serve homeowners and businesses throughout the area. Whether it's a small repair or a complete roof installation, we treat every project with the same dedication and attention to detail.
            </p>

            {/* Values List */}
            <div className="mb-6 md:mb-8 space-y-3">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  </div>
                  <p className="text-sm md:text-base">{value}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 md:h-12 text-sm md:text-base px-6 md:px-8"
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
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-black/10"
          >
            <img
              src="https://images.unsplash.com/photo-1594560225349-7d4541d32e87?auto=format&fit=crop&w=1920&q=90"
              alt="Professional roofing team at work"
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-card/95 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Serving St Albans Since</p>
              <p className="text-xl md:text-2xl font-bold text-primary">2010</p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;