import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-secondary/95 backdrop-blur-sm shadow-lg'
            : 'bg-secondary'
        }`}
      >
        <nav className="container mx-auto px-4  flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/Logo.png" 
              alt="JTS Roofing & Guttering" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link 
              to="/reviews" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/quote" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Get a Free Quote
              </Link>
            </Button>

            <Button
              onClick={() => setMobileMenuOpen(true)}
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary/20"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </header>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;