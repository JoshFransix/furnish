"use client";

import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

interface AddProductProps {
  open: boolean;
  handleClose: () => void;
  uploadProduct: (data: any) => void;
  isLoading: boolean;
}

const AddProduct = ({
  open,
  handleClose,
  uploadProduct,
  isLoading,
}: AddProductProps) => {
  const [categoryOptions] = useState<Array<Object>>([
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

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("#CAF3E5");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const createProduct = () => {
    const data = {
      name,
      description,
      color,
      price: Number(price || 0),
      category,
    };
    uploadProduct(data);
  };

  //   useEffect(() => {
  //     isLoading === false && setName(""),
  //       setDescription(""),
  //       setPrice(0),
  //       setCategory("");
  //   }, [isLoading]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
            placeholder="Enter name of product..."
            label="Name"
            fullWidth
            margin="normal"
          />
          <TextareaAutosize
            minRows={3}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            className="w-full border mt-3 border-primary-200 text-sm leading-normal p-3 rounded-lg shadow-slate-100 outline-none"
            aria-label="empty textarea"
            placeholder="Description"
          />
          <TextField
            value={price}
            onChange={(event: any) => {
              setPrice(event.target.value);
            }}
            placeholder="Enter price of product..."
            label="Price"
            type="number"
            fullWidth
            margin="normal"
          />

          <FormControl sx={{ mt: 1 }} fullWidth>
            <InputLabel id="product-category">Category</InputLabel>
            <Select
              labelId="product-category"
              value={category}
              placeholder="Select a category"
              onChange={handleChange}
            >
              {categoryOptions.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="my-4 text-sm">
            <p>Select background color for product</p>
            <input
              value={color}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setColor(event.target.value);
              }}
              type="color"
              name="color"
              id=""
              className="w-full"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <LoadingButton onClick={handleClose}>Cancel</LoadingButton>
          <LoadingButton
            disabled={!name || !description || !price || !category}
            loading={isLoading}
            onClick={createProduct}
            variant="contained"
            color="primary"
            type="submit"
          >
            Proceed
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProduct;
