import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import QuoteForm from '@/components/sections/QuoteForm';

const QuotePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;


