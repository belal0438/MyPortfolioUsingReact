import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
