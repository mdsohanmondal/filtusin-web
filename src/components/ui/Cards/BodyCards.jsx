const BodyCards = ({ className, icon, title, number }) => {
  return (
    <div
      className={`absolute w-24 h-36 rounded-3xl border border-zinc-400/70 py-4 flex flex-col items-center justify-evenly 
      bg-linear-to-b from-[#888d69] to-[#292928]  text-white ${className}`}
    >
      <div className="icon w-full flex items-center justify-center">{icon}</div>
      <div className="title">
        <span className="font-light text-white">{title}</span>
      </div>
      <div className="number">
        <h4 className="font-bold text-xl text-white">{number}</h4>
      </div>
    </div>
  );
};

export default BodyCards;
