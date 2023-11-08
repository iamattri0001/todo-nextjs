"use client";
import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import React from "react";

const Home = () => {
  const { user } = useAuth();
  if (!user) redirect("/sign-in");

  <div>Home</div>;
};

export default Home;
