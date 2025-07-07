import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dt:w-[593px] ph:w-[100px] h-[41px]  px-[11px] py-[9px] justify-between items-center rounded-[6px] border-[#D1D5DB] border-[1px] flex"
    >
      <input
        id="search"
        type="text"
        value={query}
        // placeholder="상품명을 입력하세요."
        onChange={(e) => setQuery(e.target.value)}
        className="flex w-full"
      />
      <button type="submit">
        <img src="/search.svg" className="flex content-end cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchBar;
