import { useEffect, useState } from "react";
import axios from "axios";
import TVcard from "../components/TVcard";

const TVcardList = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );
        const showList = res.data.map((item) => item.show);
        setResults(showList);
      } catch (error) {
        console.error("검색 실패:", error);
      }
    };

    if (query) fetchResults();
  }, [query]);

  if (!query) return null;
  if (!results.length) return <p className="text-white">결과 없음</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {results.map((show) => (
        <TVcard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default TVcardList;
