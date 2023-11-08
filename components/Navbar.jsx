"use client";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeSwitch } from "./ThemeSwitch";
import { Button } from "./ui/button";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="border-b pb-2 flex px-5 items-center justify-between">
      <span>My TODO</span>
      <div className="flex items-center justify-center gap-x-5">
        {user && (
          <div className="flex items-center justify-center gap-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Image
                  alt="user"
                  src={user.photoURL}
                  height={30}
                  width={30}
                  className="rounded-full cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent className="w-60 flex flex-col items-center justify-center gap-y-4 mt-2">
                <Image
                  alt="user"
                  src={user.photoURL}
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <h1 className="text-center text-lg">
                  Hi, {user.displayName.split(" ")[0]}
                </h1>
                <div className="flex gap-x-3">
                  <Button>Cancel</Button>
                  <Button variant="secondary" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
