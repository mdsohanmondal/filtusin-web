const variants = {
  dark: 'border border-[#d2fa40] text-[#d2fa40]',
  fill: 'bg-linear-to-b from-[#d2fa40] to-[#566624] text-[#000]',
};

const ActionBtn = ({ typo, className }) => {
  return (
    <button
      className={`px-5 py-2 rounded-3xl font-normal cursor-pointer ${variants[typo]} ${className}`}
    >
      Contact Us
    </button>
  );
};

export default ActionBtn;
