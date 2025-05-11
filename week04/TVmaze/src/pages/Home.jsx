import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-row bg-stone-300">
      <SearchBar onSearch={(value) => console.log("검색어:", value)} />
    </div>
  );
};

export default Home;
