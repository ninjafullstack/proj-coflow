import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import Home from '@/components/PagesComponents/Home'

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default RootLayout;
