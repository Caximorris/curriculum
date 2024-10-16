import AboutMe from '../containers/AboutMe';
import Skills from '../containers/Skills';
import Experience from '../containers/Experience';
import MyStudies from '../containers/MyStudies';


const Home: React.FC = () => {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <AboutMe />
          <Experience />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Skills />
          <MyStudies />
        </div>
      </div>
    </div>
  );
};

export default Home;