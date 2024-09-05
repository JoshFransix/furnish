import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [products, setProducts] = useLocalStorage("allProducts", "");

  const [allProducts, setAllProducts] = useState(() => {
    if (products) {
      return products;
    } else {
      const gottenProducts = [
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
      ];
      setProducts(gottenProducts);
      return gottenProducts;
    }
  });

  useEffect(() => {
    setAllProducts(products);
  }, [products]);
  return [allProducts, setProducts, setAllProducts];
};

export default Products;
