import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const FORMSPREE_ACTION = 'https://formspree.io/f/your_form_id';

const ContactPage = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const mapInView = useInView(mapRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 md:pt-32 pb-12 md:pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your roof? We're here to help with expert advice and free quotes.
          </motion.p>
        </div>
      </section>

      <main className="py-12 md:py-16 container mx-auto px-4">
        {/* Contact Info Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            {
              icon: Phone,
              title: 'Phone',
              subtitle: 'Call us directly',
              link: 'tel:+441234567890',
              linkText: '+44 1234 567890',
            },
            {
              icon: Mail,
              title: 'Email',
              subtitle: 'Send us a message',
              link: 'mailto:info@jtsroofing.co.uk',
              linkText: 'info@jtsroofing.co.uk',
            },
            {
              icon: Clock,
              title: 'Hours',
              subtitle: 'Mon - Fri',
              linkText: '8:00 AM - 6:00 PM',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">{item.subtitle}</p>
                  {item.link ? (
                    <a href={item.link} className="text-primary hover:underline font-medium text-sm md:text-base break-all">
                      {item.linkText}
                    </a>
                  ) : (
                    <p className="text-primary font-medium text-sm md:text-base">{item.linkText}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Send Us a Message</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="pt-5 md:pt-6">
                <form action={FORMSPREE_ACTION} method="POST" className="space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">Full Name *</label>
                    <Input 
                      name="name" 
                      type="text" 
                      placeholder="John Smith" 
                      required 
                      className="bg-background border-border h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">Email Address *</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="bg-background border-border h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      name="phone" 
                      type="tel" 
                      placeholder="+44 1234 567890" 
                      className="bg-background border-border h-10 md:h-11 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      name="message" 
                      placeholder="Tell us about your roofing needs..." 
                      required 
                      className="min-h-[140px] md:min-h-[160px] bg-background border-border resize-none text-sm md:text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-5 md:py-6 text-base md:text-lg font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map and Location */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Visit Our Office</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                We're located in St Albans, serving Watford, Hemel Hempstead, Harpenden, and the surrounding areas.
              </p>
            </div>

            <Card className="bg-card border-border shadow-lg mb-4 md:mb-6">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps?q=White+Beams,+Saint+Albans,+United+Kingdom,+AL2+2RT&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JTS Roofing & Guttering Ltd Location"
                  className="rounded-lg md:h-[400px]"
                />
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="pt-5 md:pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Address</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      White Beams, Saint Albans<br />
                      United Kingdom, AL2 2RT
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-3 text-sm md:text-base">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Watford', 'Hemel Hempstead', 'Harpenden', 'Saint Albans'].map((area) => (
                      <span 
                        key={area}
                        className="px-2.5 md:px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 bg-primary rounded-xl md:rounded-2xl p-6 md:p-12 text-center shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
            Need Urgent Assistance?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/90 mb-5 md:mb-6 max-w-2xl mx-auto">
            For emergency roofing services, call us directly. We're available 24/7 for urgent repairs.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-card hover:bg-card/90 text-primary font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base"
          >
            <a href="tel:+441234567890" className="flex items-center gap-2">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call Now: +44 1234 567890
            </a>
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;