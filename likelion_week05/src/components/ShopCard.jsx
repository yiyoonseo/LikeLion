import DelImg from "../assets/exit.svg";
import cartMockData from "../mocks/CartItems";
import shopImg from "../assets/shopImg.svg";
import CartImg from "../assets/cart.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ShopCard = ({onTotalPriceChange}) => {
    const nav = useNavigate();
    //console.log(cartMockData);
    const [checkItems, setCheckItems] = useState([]);

    const handleSingleCheck = (checked, id) => {
        if(checked) {
            setCheckItems(prev => [...prev, id]);
        }
        else {
            setCheckItems(prev => prev.filter((el) => el !== id));
        }
    }

    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            cartMockData.cartItems.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            setCheckItems([]);
        }
    }

    const isAllChecked = checkItems.length === cartMockData.cartItems.length && 
    cartMockData.cartItems.length > 0;

    useEffect(() => {
        const selectedItems = cartMockData.cartItems.filter(item =>
            checkItems.includes(item.id)
        );
        const totalPrice = selectedItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        onTotalPriceChange(totalPrice); // 부모에게 전달
    }, [checkItems, onTotalPriceChange]);
    

    return (
        <div className="w-[90%] flex flex-col items-center mx-auto ph:justify-between pt-[10px]">
            {cartMockData.cartTotalItems === 0 ? (
                <div className="flex flex-col items-center">
                    <div className="relative mt-[20px] flex flex-col items-center">
                        <img 
                            src={CartImg} 
                            alt="cart" 
                            className="w-[100px]"
                        />
                        <div className="my-[10px] text-cente">장바구니가 비어있습니다.</div>
                    </div>
                    <div className="mt-[20px]">
                        <button 
                            onClick={()=>nav("/")}
                            className="text-[20px] text-[#6B21A8] cursor-pointer"
                        >
                            쇼핑하러 가기
                        </button>
                    </div>
                </div>
            ) : (<>
            {cartMockData.cartItems.map((item) => (
                <div key={item.id} className="w-[100%] h-[128px] border border-black rounded-2xl flex flex-row items-center m-[5px] p-[5px] font-Inter font-bold ph:justify-between dt:justify-normal">
                    <div className="ml-[10px]">
                        <input 
                            type="checkbox" 
                            onChange={(e) => handleSingleCheck(e.target.checked, item.id, item.price, item.quantity)}
                            checked={checkItems.includes(item.id)}
                        />
                    </div>

                    <div className="ph:w-15 dt:ml-[60px] dt:w-[74px]">
                        <img src={shopImg} alt="img" />
                    </div>

                    <div className="dt:ml-[50px] dt:w-[170px]">
                        {item.name}
                    </div>

                    <div className="dt:ml-[450px] dt:w-[95px]">
                        {item.quantity}
                    </div>

                    <div className="dt:ml-[30px] dt:w-[95px]">
                        {item.price}원
                    </div>
                    
                    <div className="dt:ml-[30px] mr-[10px]">
                        <img src={DelImg} alt="delete" />
                    </div>
                </div>
            ))} 

            <div className="w-[100%] h-[60px] flex flex-row items-center p-[5px] font-Inter font-bold">
                <div className="ml-[10px]">
                    <input 
                        type="checkbox" 
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        checked={isAllChecked}
                    />
                </div>

                <div className="ml-[20px] text-gray-700 text-sm">
                    전체 선택
                </div>
            </div>
</>)}
        </div>
    )
}

export default ShopCard;


