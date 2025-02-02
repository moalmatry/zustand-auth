"use client";
import { useStore } from "@/store/store";
import { redirect } from "next/navigation";
import React from "react";

interface WithAuthorizationProps {
  name?: string;
  // Define any additional props if needed
}
const AuthorizationProvider = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC: React.FC<P & WithAuthorizationProps> = (props) => {
    const { authenticated, isLoading } = useStore();
    console.log(authenticated);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!authenticated) {
      return redirect("/login");
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return HOC;
};

export default AuthorizationProvider;
