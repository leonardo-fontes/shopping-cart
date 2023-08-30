import { BsCartDashFill } from "react-icons/bs";
import FormatCurrency from "../../Utils/FormatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

interface Data {
  thumbnail: string;
  price: number;
  title: string;
  id: number;
}

function CartItem({ id, thumbnail, price, title }: Data) {
  const { cartItems, setCartItems }:any = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item:Data) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="flex relative border-b-[1px] border-[#ddd] mt-3 pb-5 ">
      <img className="w-16 aspect-square" src={thumbnail} alt="" />
      <div className="pr-8 pl-2">
        <h3 className="text-sm font-medium text-[rgb(0,0,0,0.5)] mb-2">
          {title}
        </h3>
        <h3 className="text-2xl font-medium">{FormatCurrency(price)}</h3>
        <button
          onClick={handleRemoveItem}
          type="button"
          className="absolute top-0 right-0 text-[#d83232]"
        >
          <BsCartDashFill size={25} />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
