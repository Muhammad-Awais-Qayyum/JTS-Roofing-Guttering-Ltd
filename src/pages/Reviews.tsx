import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Testimonials from '@/components/sections/Testimonials';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;


