import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";

type DeleteProps = {
  productId: string;
  open: boolean;
  handleClose: () => void;
  deleteItem: (data: string) => void;
};

const DeleteProduct = ({
  productId,
  open,
  handleClose,
  deleteItem,
}: DeleteProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = (productId: string) => {
    // Implement the deletion logic here
    setLoading(true);
    deleteItem(productId);

    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Delete Product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this product? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleClose}>Cancel</LoadingButton>
        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          onClick={() => handleDelete(productId)}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProduct;
