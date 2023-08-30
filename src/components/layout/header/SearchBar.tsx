import { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import fetchProducts from "../../../api/fetchProducts";
import AppContext from "../../../context/AppContext";

function SearchBar() {
  const { setProducts, setLoading }: any = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false)
    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex max-w-[500px] h-12 w-full bg-white justify-between"
    >
      <input
        value={searchValue}
        className="w-full outline-none  px-4 border-r-[1px] border-[#ddd]"
        type="search"
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="flex items-center justify-center p-4 text-[#333]"
        type="submit"
      >
        <BsSearch size={20} />
      </button>
    </form>
  );
}

export default SearchBar;
