import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export function AlertDeleteUser({
  title,
  body,
  open,
  handleClick,
  handleClose,
  loading,
}: {
  title: string;
  body: string;
  open: boolean;
  loading: boolean;
  handleClick: () => void;
  handleClose: () => void;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{body}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading} onClick={handleClose}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleClick} disabled={loading}>
            {loading ? (
              <span className="inline-block mr-2 h-3 w-3 shrink-0 animate-ping rounded-full bg-white "></span>
            ) : (
              <></>
            )}
            {loading ? "Deleting.." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
