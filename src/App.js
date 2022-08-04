import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import Project from './components/Projects';
import Aos from 'aos';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <AboutMe/>
      <MySkills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
