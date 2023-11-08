"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { user, signIn } = useAuth();

  if (user) {
    redirect("/");
  }
  const handlLogin = () => {
    signIn();
  };

  return (
    <section className="h-[85vh] flex items-center justify-center">
      <div className="bg-primary-foreground p-10 rounded flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-4xl">NextJS Todo</h1>
        <Button
          onClick={handlLogin}
          variant="secondary"
          className="flex items-center justify-center gap-x-2"
        >
          <FcGoogle />
          Sign in
        </Button>
      </div>
    </section>
  );
};

export default SignIn;
