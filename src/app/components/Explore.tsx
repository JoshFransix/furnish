"use client";

import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Skeleton from "@mui/material/Skeleton";
import Product from "./Product";

interface ExploreProps {
  products: Array<IProduct>;
  loading: boolean;
  deleteItem: (id: string) => void;
}

const Explore = ({ products, loading, deleteItem }: ExploreProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("category");
  const [catValue, setCatValue] = useState<string>("all");
  const [priceValue, setPriceValue] = useState<string>("low-high");
  const [categoryOptions] = useState<Array<Object>>([
    {
      label: "All",
      value: "all",
    },
    {
      label: "Bedroom",
      value: "bed",
    },
    {
      label: "Dining Room",
      value: "dining",
    },
    {
      label: "Sitting Room",
      value: "sitting",
    },
    {
      label: "Living Room",
      value: "living",
    },
  ]);
  const [priceOptions] = useState<Array<Object>>([
    {
      label: "Low to High",
      value: "low-high",
    },
    {
      label: "High to Low",
      value: "high-low",
    },
  ]);

  const [activeProducts, setActiveProducts] =
    useState<Array<IProduct>>(products);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFilter(event.target.value as string);
  };

  const handleCat = (event: React.SyntheticEvent, newValue: string) => {
    setCatValue(newValue as string);
  };
  const handlePrice = (event: React.SyntheticEvent, newValue: string) => {
    setPriceValue(newValue as string);
  };

  useEffect(() => {
    if (selectedFilter === "price") {
      const filteredProducts = products;
      priceValue === "low-high"
        ? filteredProducts.sort(
            (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
          )
        : filteredProducts.sort(
            (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
          );
      setActiveProducts(filteredProducts as Array<IProduct>);
    }
  }, [selectedFilter, priceValue]);

  useEffect(() => {
    if (selectedFilter === "category") {
      if (catValue === "all") {
        setActiveProducts(products as Array<IProduct>);
      } else {
        let filteredProducts = products.filter(
          (product) => product.category === catValue
        );
        setActiveProducts(filteredProducts as Array<IProduct>);
      }
    }
  }, [selectedFilter, catValue]);

  return (
    <div className="w-[94%] mx-auto py-9 lg:w-10/12">
      {/* Explore Section */}

      <div className="flex justify-between items-center">
        <h1 className="text-primary-100 font-semibold text-lg transition-element xl:text-3xl lg:text-2xl md:text-xl">
          Explore By {selectedFilter}
        </h1>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFilter}
            placeholder="Select..."
            onChange={handleChange}
          >
            <MenuItem value="category">Category</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Tab Filters */}
      <div className="py-4">
        {selectedFilter === "category" ? (
          <Tabs
            scrollButtons
            value={catValue}
            onChange={handleCat}
            variant="scrollable"
          >
            {categoryOptions.map((option: any) => (
              <Tab
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Tabs>
        ) : (
          <Tabs
            scrollButtons
            value={priceValue}
            onChange={handlePrice}
            variant="scrollable"
          >
            {priceOptions.map((option: any) => (
              <Tab
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Tabs>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                animation="wave"
                key={index}
                variant="rectangular"
                height={450}
                sx={{ borderRadius: "20px" }}
              />
            ))
          : !loading &&
            activeProducts?.map((product: any) => (
              <Product
                id={product.id}
                key={product.id}
                title={product.name}
                description={product.description}
                color={product.color}
                price={product.price}
                image={product.image}
                deleteItem={(value: string) => deleteItem(value)}
              />
            ))}
      </div>
    </div>
  );
};

export default Explore;
