import React from 'react';

const SmarterCard = () => {
  return (
    <div className=" w-72 h-96 relative">
      <div className="image relative w-72 h-96  overflow-hidden rounded-2xl">
        <img src="/src/assets/images/smarter1.jpg" alt="smarter" />
        <h4 className="text-[#95CD04] z-20 text-xl font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">
          Barbel Basic
        </h4>
      </div>
      <div className="clipt-path absolute bottom-0 left-0 w-24 h-24 bg-green-600"></div>
    </div>
  );
};

export default SmarterCard;
