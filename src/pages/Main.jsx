import container from "../assets/container";

const Main = () => {
  return (
    <div>
      <p className="text-[25.5px] font-bold">Welcome to ShopMall</p>
      <p>Discover our latest products and deals</p>
      <div className="flex justify-row justify-between">
        <p>Featured Products</p>
        <p className="text-[#4F46E5]">View All</p>
      </div>

      {container.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            alt={item.name}
            className="w-[294px] h-[192px] object-cover"
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
