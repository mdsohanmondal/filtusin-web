import SmarterCard from '../components/ui/Cards/SmarterCard';

const Smarter = () => {
  return (
    <div className="mt-10">
      <div className="heading w-full text-center">
        <h1 className=" text-5xl text-[#F9FFE6] font-semibold">
          Train Smarter
          <br />
          <span className="text-[#EAFF96]">Unless You Potential</span>
        </h1>
        <span className="font-light text-sm block mt-2 text-zinc-300">
          we’re your partner in achieving a healthier, stronger, and more
          confident you.
        </span>
      </div>

      {/* === images card ===  */}
      <div className="grid grid-cols-3 gap-10 px-10">
        <SmarterCard />
        <SmarterCard />
        <SmarterCard />
        <SmarterCard />
      </div>
    </div>
  );
};

export default Smarter;
