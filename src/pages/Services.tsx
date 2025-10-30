import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Services from '@/components/sections/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;


