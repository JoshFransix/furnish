import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex justify-between items-center py-4">
      <Link href="/">
        <h1 className="text-xl sm:text-2xl font-bold">
          <span className="text-primary-100 italic">F</span>urni
          <span className="text-primary-100 italic">s</span>h
        </h1>
      </Link>
      <Link href="/">
        <p className="">Home</p>
      </Link>
      <ShoppingCartIcon className="h-6 w-6 ml-4" />
    </div>
  );
};

export default Header;
