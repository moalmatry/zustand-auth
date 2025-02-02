"use client";
import { ID_KEY, NAME_KEY, PROFILE_IMG_KEY, TOKEN_KEY } from "@/constants";
import { getMe } from "@/services/user/getMe";
import { useStore } from "@/store/store";
import React, { useEffect } from "react";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    token,
    setIsLoading,
    addId,
    addName,
    addToken,
    addMessage,
    addProfileImg,
    setAuthenticated,
  } = useStore();
  useEffect(() => {
    setIsLoading(true);
    const userData = async (token: string) => {
      return await getMe(token);
    };

    if (!token) {
      const id = localStorage.getItem(ID_KEY);
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const name = localStorage.getItem(NAME_KEY);
      const profileImg = localStorage.getItem(PROFILE_IMG_KEY);
      if (!storedToken) {
        setIsLoading(false);

        return;
      }
      if (storedToken && (!name || !profileImg || !id)) {
        userData(storedToken).then((user) => {
          if (user.status === "success") {
            addId(user.data.id);
            addToken(storedToken ?? "");
            addName(user.data.name);
            addProfileImg(user.data.profileImg ?? "");
            setAuthenticated(true);
            addMessage("Successfully added from the api");
            localStorage.setItem(ID_KEY, user.data.id);
            localStorage.setItem(NAME_KEY, user.data.name);
            localStorage.setItem(PROFILE_IMG_KEY, user.data.profileImg ?? "");
          } else {
            localStorage.removeItem(TOKEN_KEY);
          }
        });
      } else {
        addToken(storedToken ?? "");
        addId(id ?? "");
        addToken(storedToken ?? "");
        addName(name ?? "");
        addProfileImg(profileImg ?? "");
        setAuthenticated(true);
        addMessage("Successfully added from the api");
      }
    }
  }, [
    addId,
    addMessage,
    addName,
    addProfileImg,
    addToken,
    setAuthenticated,
    setIsLoading,
    token,
  ]);
  return <>{children}</>;
};

export default SessionProvider;
