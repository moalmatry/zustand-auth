"use client";
import { useStore } from "@/store/store";
import React, { useEffect } from "react";

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const { setIsLoading } = useStore();
  useEffect(() => {
    const time = (() => {
      return setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    })();

    return () => clearTimeout(time);
  }, [setIsLoading]);
  return <>{children}</>;
};

export default LoadingProvider;
