import { useContext, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import FormatCurrency from "../../Utils/FormatCurrency";
import AppContext from "../../context/AppContext";

interface Data {
  thumbnail: string;
  price: number;
  title: string;
}

function ProductCard({ title, thumbnail, price }: Data) {
  const data = { title: title, thumbnail: thumbnail, price: price };

  const { cartItems, setCartItems }: any = useContext(AppContext);

  const [visible, setVisible] = useState(false);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section
      className="w-full bg-white relative hover:shadow-2xl duration-300 flex flex-col"
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img
        className="aspect-square border-b-[1px] hover:cursor-pointer border-[#ddd]"
        src={`${thumbnail.replace(/\w\.jpg/gi, "W.jpg")}`}
        alt="product"
      />
      <div className="flex flex-col p-5 gap-2">
        <h2 className="font-semibold text-3xl">{FormatCurrency(price)}</h2>
        <h2 className="font-semibold text-[rgba(0,0,0,0.5)]">{title}</h2>
      </div>

      <button
        onClick={handleAddCart}
        className={`absolute right-4 top-4 text-[#0c5dd6] ${
          visible ? "flex" : "hidden"
        }`}
        type="button"
      >
        <BsFillCartPlusFill
          className="bg-slate-200 bg-opacity-40 p-2 rounded-full aspect-square"
          size={35}
        />
      </button>
    </section>
  );
}

export default ProductCard;
