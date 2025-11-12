import { Leaf } from 'lucide-react';

const Items = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="icon w-10 h-10 border border-[#95CD04] rounded-full flex items-center justify-center">
        <Leaf color="#95CD04" />
      </div>
      <h3 className="text-2xl font-semibold">Nutrition Guidance</h3>
    </div>
  );
};
const About = () => {
  return (
    <div className="w-full py-10">
      <div className="heading w-full text-center">
        <h1 className=" text-5xl text-[#F9FFE6] font-semibold">
          Inspired to <br />
          <span className="text-[#EAFF96]">Inspire Your Best Self</span>
        </h1>
        <span className="font-light text-sm block mt-2 text-zinc-300">
          we’re your partner in achieving a healthier, stronger, and more
          confident you.
        </span>
      </div>

      <div className="banner w-full flex items-center justify-center mt-10">
        <div className="main-content  about-banner-image bg-[#23231f] w-[80vw] h-[30vh] rounded-2xl grid grid-cols-2">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
        {/* bg-linear-to-b from-[#f3ffcb4d] to-[#7c855944]   */}
      </div>
    </div>
  );
};

export default About;
