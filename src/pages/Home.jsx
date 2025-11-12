import { ChevronRight, Flame, Plug, Watch } from 'lucide-react';
import BodyCards from '../components/ui/Cards/BodyCards';

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden px-2">
      <div>
        <div className="hero relative flex items-baseline justify-center w-screen md:w-[90vw] h-[75vh] md:h-[90vh]">
          <div className="w-full h-full absolute -top-3 md:-top-5 flex items-center justify-center">
            <div className="relative">
              <img
                src="/images/hero.png"
                alt="images"
                className="object-cover object-center grayscale-100 w-full h-full z-50 select-none"
              />

              {/* === Cards === */}
              <BodyCards
                className="rotate-45 top-[10%] md:top-1/4 right-[25%] md:right-1/4"
                icon={<Watch size={32} md:size={40} color="#CCF244" />}
                number={1.5}
                title="Hours"
              />
              <BodyCards
                className="-rotate-45 top-[10%] md:top-1/4 left-[25%] md:left-1/4"
                icon={<Watch size={32} md:size={40} color="#CCF244" />}
                number={1.5}
                title="Hours"
              />
              <BodyCards
                className="rotate-45 bottom-[10%] md:bottom-1/12 right-[50%] md:right-1/4"
                icon={<Plug size={32} md:size={40} color="#CCF244" />}
                number={1.5}
                title="Hours"
              />
              <BodyCards
                className="-rotate-45 bottom-[20%] md:bottom-1/12 left-[50%] md:left-1/4"
                icon={<Flame size={32} md:size={40} color="#CCF244" />}
                number={1.5}
                title="Hours"
              />
            </div>
          </div>

          {/* === Hero Text === */}
          <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f2ffc6] mt-4 leading-tight">
            Sculpt <span className="text-[#7a815d]">Your</span> Body, <br />
            Elevate <span className="text-[#7a815d]">Your</span> Spirit
          </h2>
          <div className="happiest absolute top-[70%] left-0 w-44">
            <div className="users flex items-center justify-center -space-x-4">
              <img
                src="/images/user1.jpg"
                alt="user1"
                className="w-11 h-11 rounded-full overflow-hidden  border-3 border-zinc-900"
              />
              <img
                src="/images/user2.jpg"
                alt="user2"
                className="w-11 h-11 rounded-full overflow-hidden  border-3 border-zinc-900"
              />
              <img
                src="/images/user3.jpg"
                alt="user3"
                className="w-11 h-11 rounded-full overflow-hidden  border-3 border-zinc-900"
              />
            </div>
            <h3 className="text-3xl font-bold">
              12K+ <span className="text-sm font-light">Happy Spires</span>
            </h3>
          </div>
          <div className="button w-40 h-20 absolute top-[80%] right-0">
            <button className="w-48 px-4 py-3 cursor-pointer bg-[#95CD04] rounded-full text-black font-bold flex items-center justify-center">
              Let's Start
              <ChevronRight size={16} />
              <ChevronRight size={16} />
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* === Left Side === */}
      <div className="left-sound hidden sm:flex flex-col absolute font-light top-1/2 left-4 -translate-y-1/2 text-2xl md:text-4xl text-zinc-400">
        <span>P</span>
        <span>R</span>
        <span>E</span>
        <span>V</span>
      </div>

      {/* === Right Side === */}
      <div className="right-sound hidden sm:flex flex-col absolute font-light top-1/2 right-4 -translate-y-1/2 text-2xl md:text-4xl text-zinc-400">
        <span>N</span>
        <span>E</span>
        <span>X</span>
        <span>T</span>
      </div>
    </div>
  );
};

export default Home;
