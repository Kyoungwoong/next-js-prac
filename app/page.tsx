import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import {authOptions} from "./api/auth/[...nextauth]/route";
import coffee from "@/public/images/coffee.jpg";

export default async function Home() {
  
  const session = await getServerSession(authOptions);

  return (
    <main>
      {/* 내부 이미지는 아래와 같이 가능 */}
      {/* <Image src={coffee} alt="coffee"/>  */}
      {/* 외부 이미지는 아래와 같이 작성 및 next.config 파일에 신뢰성 설정 */}
      <Image
        src="https://bit.ly/react-cover"
        alt="coffee"
        width={500}
        height={500}
      />
    </main>
  );
}
