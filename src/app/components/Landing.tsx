import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Landing = ({ setOpen }) => {
  return (
    <div className="relative landing-image h-[70vh] rounded-b-3xl text-white">
      {/* Landing Image Overlay */}
      <div className="overlay rounded-b-3xl"></div>

      {/* Header */}
      <div className="relative w-10/12 mx-auto z-10">
        <div className=" flex justify-between items-center py-4">
          <h1 className="text-2xl">Furnish</h1>
          <p className="">Home</p>
          <ShoppingCartIcon className="h-6 w-6 ml-4" />
          {/* <button className="transition-element text-sm px-4 py-2 text-white bg-primary-200 rounded-md hover:bg-primary-100">
            View Products
          </button> */}
        </div>

        {/* Header(Subtext) */}
        <div className="pt-[6rem] my-auto leading-[3rem] flex flex-col justify-center items-center ">
          <h1 className="text-3xl">
            Exclusive Deals of <br />
            Furniture Collection
          </h1>
          <p className="py-6">
            Explore different categories. Find the best deals.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="transition-element text-sm px-4 py-2 text-white bg-primary-200 rounded-md hover:bg-primary-100"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
