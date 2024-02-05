import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Hello, world!
      </h1>
      {/* <a href="/users">users</a> */}
      <Link href ="/users">USERS</Link>
    </main>
  );
}
