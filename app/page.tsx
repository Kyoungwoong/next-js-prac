import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import {authOptions} from "./api/auth/[...nextauth]/route";

export default async function Home() {
  
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>
        안녕하세요 - {session && <span>{session.user!.name}</span>}님! 반갑습니다.
      </h1>
      {/* <a href="/users">users</a> */}
      <Link href ="/users">USERS</Link>
      <ProductCard/>
    </main>
  );
}
