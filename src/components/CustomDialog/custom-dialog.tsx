import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { ReactNode } from "react";
import CustomButton from "../CustomButton/custom-button";

interface CustomDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onConfirm?: any;
  onCancel?: any;
  dialogBody?: ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showActionButtons?: boolean;
}

function CustomDialog({
  isOpen,
  setIsOpen,
  onConfirm,
  onCancel = undefined,
  dialogBody = undefined,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  showActionButtons = true,
}: CustomDialogProps) {
  const closeDialog = () => {
    if (onCancel) {
      onCancel();
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`bg-primary dark:bg-secondary text-secondary dark:text-primary`}
    >
      <Dialog
        open={isOpen}
        onClose={closeDialog}
      >
        <DialogContent className={`w-11/12 m-auto pt-8 `}>
          {dialogBody}
        </DialogContent>
        {showActionButtons && (
          <DialogActions className="">
            <CustomButton onClick={onConfirm}>
              {confirmButtonText}{" "}
            </CustomButton>
            <CustomButton onClick={closeDialog}>
              {cancelButtonText}
            </CustomButton>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}

export default CustomDialog;
