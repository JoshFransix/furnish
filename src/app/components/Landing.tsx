"use client";

import { useState, useEffect } from "react";

import Explore from "./Explore";
import AddProduct from "./Modals/AddProduct";
import useLocalStorage from "@/utils/useLocalStorage";
import Products from "@/utils/Products";
import Header from "./Header";

const Landing = () => {
  const [products, setProducts] = Products();

  const [fetching, setIsFetching] = useState<Boolean>(true);
  const [loading, setIsLoading] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);

  const [imageOptions] = useState<Array<String>>([
    "arm-chair.png",
    "mattress.png",
    "dining-chair.png",
    "minimal-sofa.png",
    "premium-sofa.png",
  ]);

  const selectRandomImage = () => {
    const random = Math.floor(Math.random() * imageOptions.length);
    return imageOptions[random] as String;
  };

  const uploadProduct = async (product: any) => {
    setIsLoading(true as Boolean);
    const data = {
      image: selectRandomImage(),
      ...product,
    };

    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(data as Object),
    });
    const apiProduct = await response.json();
    if (apiProduct) {
      let newProducts = products;
      newProducts.push(apiProduct as Object);
      setProducts(newProducts as Array);

      setTimeout(() => {
        setIsFetching(true as Boolean);
        setIsLoading(false as Boolean);
        setOpen(false as Boolean);
      }, 2000);

      setTimeout(() => {
        setIsFetching(false as Boolean);
      }, 3000);
    }
  };

  const deleteItem = async (id: String) => {
    let newProducts = await products.filter(
      (product: Object) => product.id !== id
    );
    setProducts(newProducts as Array);

    setTimeout(() => {
      setIsFetching(true as Boolean);
    }, 2000);

    setTimeout(() => {
      setIsFetching(false as Boolean);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false as Boolean);
    }, 3000);
  }, []);

  return (
    <div>
      <div className="relative landing-image h-[70vh] rounded-b-3xl text-white">
        {/* Landing Image Overlay */}
        <div className="overlay rounded-b-3xl"></div>

        {/* Header */}
        <div className="w-[94%] relative  mx-auto z-10 lg:w-10/12">
          <Header />

          {/* Header(Subtext) */}
          <div className="pt-[6rem] my-auto leading-[3rem] flex flex-col justify-center items-center ">
            <h1 className="lg:text-3xl md:text-2xl text-xl">
              Exclusive Deals of <br />
              Furniture Collection
            </h1>
            <p className="py-6 text-sm sm:text-base">
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

      <Explore products={products} loading={fetching} deleteItem={deleteItem} />
      <AddProduct
        open={open}
        handleClose={() => setOpen(false)}
        isLoading={loading}
        uploadProduct={uploadProduct}
      />
    </div>
  );
};

export default Landing;
