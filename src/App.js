import Abbout from "./components/Abbout";
import AccCreate from "./components/AccCreate";
import Bestwy from "./components/Bestwy";
import FlexibleMny from "./components/FlexibleMny";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import LatestNws from "./components/LatestNws";
import Partners from "./components/Partners";
import SendMonyDet from "./components/SendMonyDet";
import Service from "./components/Service";
import SetUp from "./components/SetUp";
import Navbar from "./header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Landing />
      <Abbout />
      <Service />
      <SetUp />
      <AccCreate />
      <SendMonyDet />
      <FlexibleMny />
      <LatestNws />
      <Partners />
      <Bestwy />
      <Footer />
    </div>
  );
}

export default App;
