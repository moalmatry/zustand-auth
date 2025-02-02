"use client";

import AuthorizationProvider from "@/providers/authorization-provider";
import { useStore } from "@/store/store";

function Home() {
  const { isLoading, setIsLoading, login, name, logout } = useStore();
  console.log(isLoading);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello world my name is : {name}</h1>
      <h1>isLoading: {isLoading ? "yes" : "no"}</h1>
      <button
        onClick={async () => {
          login("kasandra.petra@example.com", "123456789");
        }}
        className="bg-red-600 p-4"
      >
        Test auth
      </button>
      <button onClick={async () => logout()} className="bg-red-600 p-4">
        Logout
      </button>
      <button
        onClick={async () => setIsLoading(true)}
        className="bg-red-600 p-4"
      >
        Make it Loading
      </button>
    </div>
  );
}
export default AuthorizationProvider(Home);
// export default Home;
