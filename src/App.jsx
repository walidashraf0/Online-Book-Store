import { useEffect, useState } from "react";
import AllBooks from "./components/AllBooks/AllBooks";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup/Popup";

function App() {
  const [popupOrder, setPopupOrder] = useState(false);

  const handlePopupOrder = () => {
    setPopupOrder(!popupOrder);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handlePopupOrder={handlePopupOrder} />
        <Hero handlePopupOrder={handlePopupOrder} />
        <BestBooks handlePopupOrder={handlePopupOrder} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonials />
        <Footer />
        <Popup handlePopupOrder={handlePopupOrder} popupOrder={popupOrder} />
      </div>
    </>
  );
}

export default App;
