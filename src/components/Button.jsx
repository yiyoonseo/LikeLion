const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-[#4F46E5] text-white
border rounded-[6px] cursor-pointer w-full h-full whitespace-normal ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
