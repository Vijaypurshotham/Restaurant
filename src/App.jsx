import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./container/AboutUs/Aboutus";
import Chef from "./container/Chef/Chef";
import Header from "./container/Header/Header";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Gallery from "./container/Gallery/Gallery";
import Findus from "./container/Findus/Findus";
import Footer from "./container/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
