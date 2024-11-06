import { UserButton } from "@clerk/nextjs";
//import { auth } from "@clerk/nextjs/server";
//import { redirect } from "next/navigation";
//import { Button } from "./_components/ui/button";

const HomePage = async () => {
  /*const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }*/
  return (
    <div className="h-full flex items-center justify-center">
      <UserButton showName />
    </div>
  );

  //<Button>Hello World</Button>
};

export default HomePage;
