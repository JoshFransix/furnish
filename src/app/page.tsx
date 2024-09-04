"use client";

import { useState } from "react";
import Landing from "./components/Landing";
import Explore from "./components/Explore";
import { v4 as uuidv4 } from "uuid";
import AddProduct from "./components/AddProduct";

export default function Home() {
  const [products, setProducts] = useState<array>([
    {
      id: uuidv4(),
      name: "Arm chair",
      description: "Light single chair",
      color: "#CAF3E5",
      price: 250,
      image: "arm-chair.png",
      category: "sitting",
    },
    {
      id: uuidv4(),
      name: "Dining Chair",
      description: "Light single chair",
      color: "#E0EFF6",
      price: 350,
      image: "dining-chair.png",
      category: "dining",
    },
    {
      id: uuidv4(),
      name: "Minimal Sofa",
      description: "Light single chair",
      color: "#EEEBFF",
      price: 400,
      image: "minimal-sofa.png",
      category: "sitting",
    },
    {
      id: uuidv4(),
      name: "Premium Sofa",
      description: "Light single chair",
      color: "#FFF4E7",
      price: 150,
      image: "premium-sofa.png",
      category: "living",
    },
    {
      id: uuidv4(),
      name: "Regular Bed",
      description: "Light single chair",
      color: "#FFF4E7",
      price: 380,
      image: "mattress.png",
      category: "bed",
    },
  ]);

  const [imageOptions] = useState<array>([
    "arm-chair.png",
    "mattress.png",
    "dining-chair.png",
    "minimal-sofa.png",
    "premium-sofa.png",
  ]);

  const selectRandomImage = () => {
    const random = Math.floor(Math.random() * imageOptions.length);
    return imageOptions[random];
  };

  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const uploadProduct = (product: any) => {
    setIsLoading(true);
    const data = {
      id: uuidv4(),
      image: selectRandomImage(),
      ...product,
    };
    setTimeout(() => {
      const currentProducts = products;
      currentProducts.push(data);
      setProducts(currentProducts);
      setIsLoading(false);
      setOpen(false);
    }, 2000);
  };
  return (
    <main>
      <Landing setOpen={setOpen} />
      <Explore products={products} />
      <AddProduct
        open={open}
        handleClose={() => setOpen(false)}
        isLoading={isLoading}
        uploadProduct={uploadProduct}
      />
    </main>
  );
}
