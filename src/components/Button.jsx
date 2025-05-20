import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="dt:w-[97px] ph:w-[80.5px] bg-[#4F46E5] text-white
h-[28px] border rounded-[6px] flex justify-center items-center cursor-pointer text-[11.9px]  "
    >
      {text}
    </button>
  );
};

export default Button;
