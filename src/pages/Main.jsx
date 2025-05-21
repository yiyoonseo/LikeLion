import "./Main.css";
import PurchaseCard from "../components/PurchaseCard";

const Main = () => {
  return (
    <>
      
      <div className="font-Inter pt-[32px] pb-[80px] px-[16px]  dt:mx-[80px] bg-[##F9FAFB] ph:mx-[16px] ph:mb-[0px]">
        <p className="text-[25.5px] font-bold text-[#1F2937]">
          Welcome to ShopMall
        </p>
        <p className="text-[13px] text-[#4B5563] mt-[7px]">
          Discover our latest products and deals
        </p>

        <div>
          <div className="flex justify-between mt-[32px]">
            <p className="font-semibold text-[20px] text-[#1F2937]">
              Featured Products
            </p>
            <p className="text-[#4F46E5] content-center col-end-1 text-[11px]">
              View All
            </p>
          </div>
          <PurchaseCard />
        </div>
      </div>
    </>
  );
};

export default Main;
