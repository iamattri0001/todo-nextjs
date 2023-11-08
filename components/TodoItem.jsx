import React from "react";
import { Checkbox } from "./ui/checkbox";
function TodoItem({ title, complete, id, markTask }) {
  return (
    <div className="flex relative items-center gap-x-5 hover:bg-secondary w-full p-4 rounded">
      <Checkbox
        checked={complete}
        onClick={() => {
          markTask(id);
        }}
      />
      <span className="select-none max-w-[75%]">{title}</span>
    </div>
  );
}

export default TodoItem;
