
import Navbar from "./Components/Navbar/Navbar";
import BodyBG from "./Components/Body/BodyBG";
import Services from "./Components/Services/Services";
import Companys from "./Components/Companys/Companys";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="nameArt">
      <Navbar/>
      <BodyBG/>
      <Services/>
      <Companys/>
      <Footer/>
    </div>
  );
}
