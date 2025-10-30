import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Header from '@/components/Layout/Header';
import ScrollProgress from '@/components/Layout/ScrollProgress';
// BackToTop removed per request
import Hero from '@/components/sections/Hero';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import { Star, CheckCircle, Shield, BadgeCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  useSmoothScroll();
  const [reviewsApi, setReviewsApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!reviewsApi) return;
    const interval = setInterval(() => {
      reviewsApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [reviewsApi]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        {/* About us - refined layout */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">Who we are</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About us</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Copy + features */}
              <div className="flex flex-col justify-center">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  We are a local, fully insured roofing and guttering company serving St Albans
                  and nearby areas. Our reputation is built on clean workmanship, honest advice,
                  and finishes that last. From emergency leak repairs to complete roof
                  replacements, we deliver dependable results at fair prices.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Qualified tradespeople</p>
                      <p className="text-sm text-muted-foreground">Experienced team with tidy, respectful site work.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Fully insured</p>
                      <p className="text-sm text-muted-foreground">Public liability cover and written workmanship guarantees.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">5‑star rated</p>
                      <p className="text-sm text-muted-foreground">Trusted by homeowners across Hertfordshire.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/about">Learn more</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link to="/quote">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Image card matching About page image heights */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-black/10">
                <img
                  src="https://images.unsplash.com/photo-1594560225349-7d4541d32e87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcm9vZmluZyUyMHdvcmt8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&w=1920&q=90"
                  alt="Team member portrait"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">Family‑run</span>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">Insured</span>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">St Albans</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-white">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-semibold">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Work preview with two images and see more */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">Craftsmanship</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Our Work</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-black/10">
                <img
                  src={gallery1}
                  alt="New tiled roof installation"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-[320px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">Roof</span>
                      <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">Tiles</span>
                    </div>
                    <h3 className="mt-2 text-white text-xl font-semibold">New Roof Installation</h3>
                  </div>
                  <Button asChild size="sm" variant="outline" className="bg-white/90 hover:bg-white text-foreground">
                    <Link to="/gallery">View</Link>
                  </Button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-black/10">
                <img
                  src={gallery2}
                  alt="Seamless guttering replacement"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-[320px] lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">Guttering</span>
                      <span className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">PVC</span>
                    </div>
                    <h3 className="mt-2 text-white text-xl font-semibold">Guttering Replacement</h3>
                  </div>
                  <Button asChild size="sm" variant="outline" className="bg-white/90 hover:bg-white text-foreground">
                    <Link to="/gallery">View</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8">
                <Link to="/gallery">See more projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services preview - image background cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">What we do</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { image: gallery3, label: 'Roof Repairs', chips: ['Leaks', 'Tiles'] },
                { image: gallery4, label: 'New Roof Installations', chips: ['Pitched', 'Flat'] },
                { image: gallery5, label: 'Guttering & Drainage', chips: ['PVC', 'Seamless'] },
              ].map((item) => (
                <div key={item.label} className="group relative overflow-hidden rounded-2xl shadow-xl bg-black/10">
                  <img src={item.image} alt={item.label} loading="lazy" className="w-full h-56 sm:h-64 md:h-[300px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2">
                        {item.chips.map((c) => (
                          <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">{c}</span>
                        ))}
                      </div>
                      <h3 className="mt-2 text-white text-lg sm:text-xl font-semibold">{item.label}</h3>
                    </div>
                    <Button asChild size="sm" variant="outline" className="bg-white/90 hover:bg-white text-foreground px-3 sm:px-4">
                      <Link to="/services">View</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Reviews slider (3 items) */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">Reviews</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">What clients say</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Carousel className="relative overflow-hidden" opts={{ loop: true }} setApi={setReviewsApi}>
                <CarouselContent>
                  {[
                    { name: 'Sarah W.', text: "JTS fixed our leak quickly and left everything spotless.", rating: 5 },
                    { name: 'Michael T.', text: 'Same‑day repair, fair price, highly recommend!', rating: 5 },
                    { name: 'Emma D.', text: 'Professional, tidy, and brilliant communication throughout.', rating: 5 },
                  ].map((t, idx) => (
                    <CarouselItem key={idx}>
                      <Card className="bg-card border-border">
                        <CardContent className="pt-8 pb-6 px-6">
                          <div className="flex justify-center gap-1 mb-4">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-center text-lg text-muted-foreground mb-3">“{t.text}”</p>
                          <p className="text-center font-semibold">— {t.name}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-8" />
                <CarouselNext className="-right-8" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact + map */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">Get in touch</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Contact us</h2>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Your name" required className="bg-background border-border" />
                      <Input name="email" type="email" placeholder="Email" required className="bg-background border-border" />
                    </div>
                    <Input name="phone" placeholder="Phone (optional)" className="bg-background border-border" />
                    <Textarea name="message" placeholder="How can we help?" required className="min-h-[140px] bg-background border-border" />
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Send message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="h-64 sm:h-80 md:h-[340px] lg:h-[380px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=White+Beams,+Saint+Albans,+United+Kingdom,+AL2+2RT&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JTS Roofing & Guttering Ltd Location"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Gradient CTA band */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-primary to-primary/80">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Need roofing or guttering help?</h3>
                <p className="text-primary-foreground/90 mb-6">Get a fast, no‑obligation quote from our friendly local team.</p>
                <Button asChild className="bg-primary-foreground text-primary hover:bg-white/90">
                  <Link to="/quote">Get a Free Quote</Link>
                </Button>
              </div>
              <div className="absolute -right-10 -top-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

