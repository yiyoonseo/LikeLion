import cartImg from "../../assets/cart.svg";
import signinImg from "../../assets/signin.svg";
import hmbImg from "../../assets/hmb.svg";
import exitImg from "../../assets/exit.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="ph:hidden dt:flex w-full h-[64px] flex-row fixed top-0 left-0 justify-between items-center shadow-lg">
        <div
          className="pl-[96px] cursor-pointer font-bold text-[#4F46E5]"
          onClick={() => nav("/")}
        >
          ShopMall
        </div>

        <div className="flex flex-row pr-[96px] gap-[16px]">
          <div
            className="flex flex-row gap-[4px] cursor-pointer"
            onClick={() => nav("/signin")}
          >
            <img className="w-[20px] h-[20px]" src={signinImg} alt="signin" />
            <div className="items-center font-Inter text-sm">Sign-In</div>
          </div>

          <div className="cursor-pointer">
            <img src={cartImg} alt="" />
          </div>
        </div>
      </nav>

      <nav className="dt:hidden ph:flex w-full h-[64px] flex-row fixed top-0 left-0 justify-between items-center shadow-lg">
        <div
          className="pl-[16px] cursor-pointer font-bold text-[#4F46E5]"
          onClick={() => nav("/")}
        >
          ShopMall
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <img src={hmbImg} alt="hmb" className="pr-[16px]" />
          ) : (
            <img src={exitImg} alt="exit" className="pr-[16px]" />
          )}
        </button>
      </nav>

      <div
        className={`dt:hidden ph:fixed top-[64px] w-full h-[96px] px-[16px] py-[8px] flex flex-col justify-between bg-[#FFF] transition-transform duration-100
        ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 shadow-lg`}
      >
        <div className="h-[40px] items-center">
          <Link to="/signin" className="text-lg text-[#374151] cursor-pointer">
            Sign In
          </Link>
        </div>

        <div className="h-[40px] items-center">
          <Link className="text-lg text-[#374151] cursor-pointer">
            Shopping Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
