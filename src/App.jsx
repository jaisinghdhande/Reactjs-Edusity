import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title title="Our Program" subtitle="What we Offer"></Title>
        <Programs></Programs>
        <About></About>
        <Title title="Gallery" subtitle="Campus Photos"></Title>
        <Campus></Campus>
        <Title title="Testimonials" subtitle="What Student Says"></Title>

      </div>
    </div>
  );
};

export default App;
