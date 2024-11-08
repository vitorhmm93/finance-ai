import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>subscription page</h1>
      </div>
    </>
  );
};

export default SubscriptionPage;
