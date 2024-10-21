import AboutMe from '../containers/AboutMe';
import Skills from '../containers/Skills';
import Experience from '../containers/Experience';
import MyStudies from '../containers/MyStudies';
import Additional from '../containers/Additional';
import Portfolio from "../containers/Portfolio.tsx";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="mx-auto grid grid-cols-1 items-center gap-4 lg:gap-x-8 lg:gap-y-16 lg:grid-cols-2">
        <AboutMe />
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-4 sm:gap-6 lg:gap-8">
          <Skills />
          <MyStudies />
        </div>
      </div>
      <Portfolio/>
      <div className="w-full grid grid-cols-1 items-center gap-4 lg:gap-x-8 lg:gap-y-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Experience />
        </div>
        <Additional />
      </div>
    </div>
  );
};

export default Home;