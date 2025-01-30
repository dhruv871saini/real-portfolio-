import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Education from './components/education/Education';
import Nav from './components/nav/Nav';
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';


function App() {
  return (
  <>
<div class="bg-grey font-style">
{/* <div class="sticky-top">
  <Nav/>
</div> */}
<Intro/>
<About />
      <Education />
      <Skill />
      <Project />
      <Contact/>
{/* <About/>
<Education/>
<Skill/> */}

</div>  </>
  );
}

export default App;
