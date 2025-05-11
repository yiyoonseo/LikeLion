import { useNavigate } from "react-router-dom";

const TVcard = ({ show }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shows/${show.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition p-4 rounded-xl shadow-md flex flex-col gap-3"
    >
      {show.image && (
        <img
          src={show.image.medium}
          alt={show.name}
          className="w-full h-60 object-cover rounded-md"
        />
      )}
      <h2 className="text-white text-lg font-bold">{show.name}</h2>
      <div className="flex flex-wrap gap-2 text-sm">
        {show.genres.map((genre, idx) => (
          <span
            key={idx}
            className="bg-neutral-600 text-white px-2 py-1 rounded-full text-xs"
          >
            #{genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TVcard;
