import Home from './pages/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto p-4">
      <Navbar />
      <main className="flex-grow py-8">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;