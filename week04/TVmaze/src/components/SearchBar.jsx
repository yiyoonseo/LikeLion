import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import TVcardList from "../pages/TVcardList";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isComposing, setIsComposing] = useState(false); // 한글 조합 중 여부

  const handleSearch = () => {
    console.log("search");
    if (searchTerm.trim()) {
      setSearchQuery(searchTerm.trim());
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (!isComposing && e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-center tracking-wide">
        🎬 영화/프로그램 검색
      </h1>

      <div className="w-full max-w-xl flex items-center bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={handleKeyDown}
          placeholder="제목을 입력하세요..."
          className="flex-grow p-4 bg-transparent text-white placeholder-gray-400 outline-none"
        />
        <button
          onClick={handleSearch}
          className="p-4 hover:bg-neutral-700 transition-all"
        >
          <FiSearch className="text-white text-2xl" />
        </button>
      </div>

      {searchQuery && <TVcardList query={searchQuery} />}
    </div>
  );
};

export default SearchBar;
