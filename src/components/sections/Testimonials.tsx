import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, TrendingUp, Award, Users, ThumbsUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Sarah Williams',
    text: "Wouldn't use anyone else — always clean and professional. They repaired our roof last year and it's been perfect ever since.",
    rating: 5,
    service: 'Roof Repair',
  },
  {
    name: 'Michael Thompson',
    text: 'Repaired our roof the same day we called. Excellent service and fair pricing. Highly recommend!',
    rating: 5,
    service: 'Emergency Repair',
  },
  {
    name: 'Emma Davies',
    text: 'Fair pricing and honest communication throughout. The team was respectful, tidy, and did an outstanding job.',
    rating: 5,
    service: 'New Roof Installation',
  },
  {
    name: 'James Roberts',
    text: 'Professional from start to finish. Our new roof looks amazing and the work was completed on time.',
    rating: 5,
    service: 'Roof Installation',
  },
  {
    name: 'Lisa Chen',
    text: 'Outstanding workmanship and attention to detail. The team was punctual and left everything spotless.',
    rating: 5,
    service: 'Roof Maintenance',
  },
  {
    name: 'David Wilson',
    text: 'Quick response to our emergency call. Fixed the leak immediately and provided excellent follow-up service.',
    rating: 5,
    service: 'Leak Repair',
  },
  {
    name: 'Rachel Green',
    text: 'Highly professional team. They explained everything clearly and delivered exactly what they promised.',
    rating: 5,
    service: 'Gutter Installation',
  },
  {
    name: 'Mark Taylor',
    text: 'Best roofing company in the area. Fair prices, quality work, and they stand behind their work.',
    rating: 5,
    service: 'Full Roof Replacement',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' },
  { icon: TrendingUp, value: '1000+', label: 'Projects Completed' },
];

const ReviewsPage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const carouselInView = useInView(carouselRef, { once: true, margin: '-100px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 md:pt-32 pb-12 md:pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
          >
            <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
          >
            Client Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. See what our satisfied customers have to say about our roofing services.
          </motion.p>
        </div>
      </section>

      <main className="py-12 md:py-16 container mx-auto px-4">
        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Carousel */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 30 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="relative overflow-hidden" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx}>
                    <Card className="bg-card border-border shadow-lg">
                      <CardContent className="pt-6 md:pt-8 pb-6 px-5 md:px-8">
                        <div className="flex justify-center gap-1 mb-4 md:mb-5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-center text-base md:text-lg lg:text-xl text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                          "{t.text}"
                        </p>
                        <p className="text-center font-semibold text-sm md:text-base mb-1">{t.name}</p>
                        <p className="text-center text-xs md:text-sm text-primary">{t.service}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-8" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-8" />
            </Carousel>

            {/* Mobile Navigation Dots */}
            <div className="flex md:hidden justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors"
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

       

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 bg-primary rounded-xl md:rounded-2xl p-6 md:p-12 text-center shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/90 mb-5 md:mb-6 max-w-2xl mx-auto">
            Experience the same quality service our clients rave about. Get your free quote today!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-card hover:bg-card/90 text-primary font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base"
          >
            <a href="/quote">Get Free Quote</a>
          </Button>
        </motion.div>
      </main>

    </div>
  );
};

export default ReviewsPage;