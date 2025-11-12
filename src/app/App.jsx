import Navbar from '../nav/Navbar';
import About from '../pages/About';
import Discover from '../pages/Discover';
import Home from '../pages/Home';
import Smarter from '../pages/Smarter';

const App = () => {
  return (
    <div className="w-full bg-zinc-900 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20 w-full min-h-screen">
        <Home />
        <About />
        <Discover />
        <Smarter />
      </main>
    </div>
  );
};

export default App;
