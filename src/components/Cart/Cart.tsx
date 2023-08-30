import { useContext } from "react";
import CartItem from "./CartItem";
import AppContext from "../../context/AppContext";
import FormatCurrency from "../../Utils/FormatCurrency";

function Cart() {
  const { cartItems, isCartVisible }: any = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc:number, item:any)=>  item.price + acc, 0);
  return (
    <section className={`w-full max-w-[330px] ${isCartVisible ? '' : 'translate-x-[110%]'} transition-all duration-300 ease-in fixed top-0 right-0 pt-24 pb-5 px-5 bg-white h-screen flex flex-col justify-between  flex-grow overflow-scroll`}>
      <div className="">
        {cartItems.map((cartItem: any) => (
          <CartItem
            id={cartItem.id}
            key={cartItem.id}
            thumbnail={cartItem.thumbnail}
            price={cartItem.price}
            title={cartItem.title}
          />
        ))}
      </div>
      <div className="text-2xl font-medium pt-8 pb-4">
        {FormatCurrency(totalPrice)}
      </div>
    </section>
  );
}

export default Cart;
