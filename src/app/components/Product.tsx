/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteProduct from "./Modals/DeleteProduct";

interface ProductProps {
  id: String;
  title: String;
  image: String;
  description: String;
  price: Number;
  color?: String; // Optional prop to set custom color for product background. Default is #CAF3E5.
  deleteItem: () => void;
}

const Product = ({
  id,
  title,
  image,
  description,
  price,
  color = "#CAF3E5",
  deleteItem,
}: ProductProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  const trimText = (text: String) => {
    if (text.length > 18) {
      return text.substring(0, 18) + "...";
    }
    return text as String;
  };

  return (
    <div
      style={{ background: `${color}` }}
      className={`rounded-xl flex flex-col w-full px-7 py-9 lg:px-12`}
    >
      <div
        className="size-[200px] "
        style={{
          background: `url('products/${image}') no-repeat center center/cover`,
        }}
      ></div>
      <div className="text-primary-200 mt-6">
        <h2 className=" font-semibold ">{trimText(title)}</h2>
        <p className="mt-2 text-sm">{trimText(description)}</p>
        <h3 className="mt-2 font-semibold ">${price}</h3>
      </div>

      <div className="flex justify-around mt-6 border-black py-2 border-y-[1px]">
        <Link href={`/product/${id}`}>
          <Button size="small" color="primary" startIcon={<PreviewIcon />}>
            View
          </Button>
        </Link>
        <Button
          onClick={() => setOpen(true)}
          size="small"
          variant="outlined"
          color="error"
          type="submit"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>

      <DeleteProduct
        deleteItem={deleteItem}
        productId={id}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Product;
