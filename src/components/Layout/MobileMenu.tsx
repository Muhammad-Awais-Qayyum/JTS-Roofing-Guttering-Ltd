import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Prevent page scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const previousBodyOverflow = document.body.style.overflow;
      const previousHtmlOverflow = document.documentElement.style.overflow;
      const previousOverscroll = document.documentElement.style.overscrollBehavior as string;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';

      // If Lenis is used for smooth scrolling, pause it
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.stop === 'function') {
        try { lenis.stop(); } catch (e) { console.log(e); }
      }
      
      // Focus close button
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      
      return () => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
        document.documentElement.style.overscrollBehavior = previousOverscroll || '';
        
        if (lenis && typeof lenis.start === 'function') {
          try { lenis.start(); } catch (e) { console.log(e); }
        }
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Don't render anything if not open (for AnimatePresence)
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-secondary z-[1000] shadow-2xl border-l border-primary-foreground/10"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col h-full overflow-y-auto">
              {/* Top gradient accent */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 to-transparent z-0" />

              {/* Handle */}
              <div className="flex items-center justify-center pt-3 relative z-10">
                <div className="h-1.5 w-12 rounded-full bg-primary-foreground/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between p-6 relative z-10">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-primary-foreground">Menu</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-primary-foreground hover:bg-primary/20"
                  ref={closeButtonRef}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 pb-6 relative z-10">
                <ul className="space-y-1">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About' },
                    { to: '/services', label: 'Services' },
                    { to: '/gallery', label: 'Gallery' },
                    { to: '/reviews', label: 'Reviews' },
                    { to: '/contact', label: 'Contact' },
                  ].map((item, index) => (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04 }}
                    >
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="flex items-center justify-between rounded-lg px-4 py-3 text-primary-foreground hover:text-primary bg-transparent hover:bg-primary/10 transition-colors"
                      >
                        <span className="text-base">{item.label}</span>
                        <span className="text-sm text-primary/80">→</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider and CTA */}
                <div className="mt-6 border-t border-primary-foreground/10 pt-6">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/quote" onClick={onClose} className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>

                {/* Quick info */}
                <div className="mt-4 text-xs text-primary-foreground/70">
                  <p>Mon–Fri, 8:00–18:00</p>
                  <p>Responsive within 24 hours</p>
                </div>
              </nav>

              {/* Subtle bottom shadow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent z-0" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;