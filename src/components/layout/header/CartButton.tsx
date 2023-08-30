import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../../../context/AppContext";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible }: any = useContext(AppContext);

  return (
    <button onClick={()=> setIsCartVisible(!isCartVisible)} type="button" className="cursor-pointer ml-5 text-[#333] relative">
      <AiOutlineShoppingCart size={35} />
      {cartItems.length > 0 && (
        <span className="bg-red-500 w-[15px] aspect-square absolute top-0 left-0 text-white text-xs rounded-full items-center justify-center flex">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
