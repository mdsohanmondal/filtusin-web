import ActionBtn from '../components/ui/Buttons/ActionBtn';

const Navbar = () => {
  return (
    <div className="w-full bg-zinc-900 fixed top-0 left-0 flex items-center justify-between px-10 py-4 z-99">
      <div className="logo w-44">
        <img src="/images/logo.svg" alt="logo" className="w-full h-full" />
      </div>
      <div className="links">
        <ul className="flex items-center justify-center gap-5">
          <li className="text-white font-light hover:text-white transition-all duration-150">
            <a href="#">Home</a>
          </li>
          <li className="text-zinc-400 font-light hover:text-white transition-all duration-150">
            <a href="#">About</a>
          </li>
          <li className="text-zinc-400 font-light hover:text-white transition-all duration-150">
            <a href="#">Features</a>
          </li>
          <li className="text-zinc-400 font-light hover:text-white transition-all duration-150">
            <a href="#">Services</a>
          </li>
          <li className="text-zinc-400 font-light hover:text-white transition-all duration-150">
            <a href="#">Exercise</a>
          </li>
        </ul>
      </div>
      <div className="actions flex items-center justify-center gap-5">
        <ActionBtn typo={'fill'} />
        <ActionBtn typo={'dark'} />
      </div>
    </div>
  );
};

export default Navbar;
