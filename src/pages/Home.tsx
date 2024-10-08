import AboutMe from '../containers/AboutMe';
import Skills from '../containers/Skills';
import Experience from '../containers/Experience';
import MyStudies from '../containers/MyStudies';


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <AboutMe />
      <Skills />
      <Experience />
      <MyStudies />
    </div>
  );
};

export default Home;