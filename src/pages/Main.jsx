import container from "../assets/container";
import Navbar from "../components/Navbar";
import "./Main.css";
import Button from "../components/Button";



const Main = () => {
  const handleClickCart = () => {
    alert("장바구니에 추가되었습니다!");
  };

  return (
    <div className="pt-[32px] pb-[80px] pr-[16px] pl-[16px] mr-[80px] ml-[80px] bg-[##F9FAFB]">

      <p className="text-[25.5px] font-bold">Welcome to ShopMall</p>
      <p>Discover our latest products and deals</p>

      <div>
        <div className="flex justify-row justify-between mt-[32px] mb-[16px]">
          <p>Featured Products</p>
          <p className="text-[#4F46E5] col-end-1">View All</p>
        </div>
        <div className="grid grid-cols-4 ph:grid-cols-2 gap-[24px] py-[24px] ">
          {container.map((item) => (
            <div key={item.id} className="icard">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[192px] object-cover"
              />
              <div className="p-[16px] items-center">
                <div>{item.category}</div>
                <div>{item.name}</div>
                <div className="flex justify-between">
                  <p className="font-bold">{item.price}</p>
                  <Button onClick={handleClickCart} text="Add to Cart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
