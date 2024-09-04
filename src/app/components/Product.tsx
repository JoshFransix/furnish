/* eslint-disable @next/next/no-img-element */

// import Image from "next/Image";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";

interface ProductProps {
  title: string;
  image: string;
  description: string;
  price: number;
  color?: string; // Optional prop to set custom color for product background. Default is #CAF3E5.
}

const Product = ({
  title,
  image,
  description,
  price,
  color = "#CAF3E5",
}: ProductProps) => {
  return (
    <div
      style={{ background: `${color}` }}
      className={`rounded-xl flex flex-col w-max px-12 py-9`}
    >
      <div
        className="size-[200px]"
        style={{
          background: `url('products/${image}') no-repeat center center/cover`,
        }}
      ></div>
      <div className="text-primary-200 mt-6">
        <h2 className=" font-semibold ">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
        <h3 className="mt-2 font-semibold ">${price}</h3>
      </div>

      <div className="flex justify-around mt-6 border-black py-2 border-y-[1px]">
        <Button size="small" color="primary" startIcon={<PreviewIcon />}>
          View
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          type="submit"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Product;
