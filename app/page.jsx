"use client";
import AddTask from "@/components/AddTask";
import TodoItem from "@/components/TodoItem";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const { user } = useAuth();
  if (!user) redirect("/sign-in");

  const [todos, setTodos] = useState([
    { title: "Solve DSA problems", complete: false, id: 0 },
    { title: "Finish Assignment", complete: true, id: 1 },
    { title: "Eat dinner", complete: false, id: 2 },
    { title: "Go for a walk", complete: true, id: 3 },
  ]);

  const markTask = (id) => {
    let newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++)
      if (newTodos[i].id === id) {
        newTodos[i].complete = !newTodos[i].complete;
        break;
      }
    setTodos(newTodos);
  };

  const addTask = (title, complete) => {
    let newTodos = [...todos];
    newTodos.push({ id: newTodos.length, title, complete });
    setTodos(newTodos);
  };

  return (
    <div className="border-secondary border-2 sm:max-w-[60vw] mx-auto mt-10 p-5 rounded flex flex-col gap-y-5">
      <h1 className="text-3xl">Your Tasks</h1>
      <ScrollArea className="flex rounded bg-primary-foreground py-2 h-80 flex-col items-start pl-2">
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              title={todo.title}
              complete={todo.complete}
              id={todo.id}
              markTask={markTask}
            />
          );
        })}
      </ScrollArea>
      <div className="flex items-center justify-center gap-x-4">
        <AddTask addTask={addTask} />
        <Button variant="secondary">Delete</Button>
      </div>
    </div>
  );
};

export default Home;
