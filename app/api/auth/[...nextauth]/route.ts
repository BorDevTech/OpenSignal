import { handlers } from "@/app/auth";
import { redirect } from "next/navigation";

// export default async function Page() {
//   const session = await Auth();

//   if (!session) {
//     redirect("/login");
//   }

//   return <div>Welcome, {session.user?.name}</div>;
// }

export const { GET, POST } = handlers;
