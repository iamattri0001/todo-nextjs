import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "./ui/use-toast";

function AddTask({ addTask }) {
  const { toast } = useToast();

  const handleAdd = () => {
    const title = document.getElementById("title").value;
    const complete = document.getElementById("complete").value === "on";
    addTask(title, complete);
    toast({
      title: "Task Added",
      description: `${title.slice(0, 16)}... has been added to your list`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task to the list</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="complete" className="text-right col-span-2">
              Mark as complete?
            </Label>
            <Checkbox id="complete" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAdd}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddTask;
