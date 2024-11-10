import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../Components/ui/dialog";
  import FormPage from "./form";
  
  export default function DialogBox() {
    return (
      <Dialog>
        <DialogTrigger className="bg-blue-600 text-white p-2 px-4 rounded">
          Add Students
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
              <FormPage />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  