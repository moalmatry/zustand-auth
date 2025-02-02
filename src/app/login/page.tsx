"use client";
import { useStore } from "@/store/store";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const { isLoading, authenticated, login } = useStore();

  if (isLoading) return <div>Loading...</div>;

  if (authenticated) return redirect("/");
  return (
    <div>
      <h1>Login Page</h1>

      <button
        onClick={async () => {
          login("kasandra.petra@example.com", "123456789");
          redirect("/");
        }}
        className="bg-red-600 p-4"
      >
        Test auth
      </button>
    </div>
  );
}
