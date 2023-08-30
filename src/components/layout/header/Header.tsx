
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";

function Header() {


  return (
    <header className="w-full bg-[#fff159] fixed z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <SearchBar/>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
