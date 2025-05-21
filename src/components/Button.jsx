const Button = ({ onClick, text, className = '', disabled = false, variant = "main" }) => {

  const baseStyle = "flex items-center justify-center font-Inter bg-[#4F46E5] text-white border rounded-[6px] cursor-pointer w-full h-full whitespace-normal"
  
  const variantStyles = {
    main: "bg-[#4F46E5] w-[120px] h-[40px]",
    signIn: `${disabled ? 'bg-[#4e46e576]' : 'bg-[#4F46E5]'} w-full h-[40px]`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
};


export default Button;
