
import Navbar from "./Components/Navbar/Navbar";
import BodyBG from "./Components/Body/BodyBG";
import Services from "./Components/Services/Services";
import Companys from "./Components/Companys/Companys";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

export default function Home() {
  return (
    <div className="nameArt">
      <Navbar/>
      <BodyBG/>
      <Services/>
      <Companys/>
      <Contact/>
      <Footer/>
    </div>
  );
}
