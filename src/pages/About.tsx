import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import About from '@/components/sections/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;


