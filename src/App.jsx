import About from "./Components/About/About";
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
      </div>
    </div>
  );
};

export default App;
